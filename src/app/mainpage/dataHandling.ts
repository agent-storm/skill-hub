"use server";
import { supabase } from '../utils/supabase/server';

import getSessionID from '../authSessionExport';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { Json } from '../types/database.types';
import { TbHomeRibbon } from 'react-icons/tb';
import { Console } from 'console';

interface RatingData {
    id: string;
    leetcode: number;
    codechef: number;
    codeforces: number;
  }
/*
Takes uid as input and returns a JSON like object with all ratings data.
Use as: var ratings = await getUserRatings(uid);
*/
export async function getUserRatings(uid: string): Promise<RatingData | null> {
    // Fetch user rating data from Supabase
    const { data, error }: PostgrestSingleResponse<RatingData> = await supabase
        .from('ratings')
        .select('*')
        .eq('id', uid)
        .single(); // .single() will ensure that you get a single object rather than an array

    // Handle errors
    if (error) {
        console.error("Error occurred while fetching user rating data from the DB:", error);
        return null;
    }

    // Handle case where no data is returned
    if (!data) {
        console.warn("No data found for user ID:", uid);
        return null;
    }

    // Return the fetched data
    return data;
}
/*
Takes uid as input, gets username data from database, makes three API calls for three supported platforms, 
then inserts the user Ratings into the new table "ratings"
USE AS: await insertUserRating(uid);
*/
export async function insertUserRating(uid:string) {

    const { data, error }: PostgrestSingleResponse<any[]> = await supabase
    .from("usernames")
    .select("*")
    .eq("id", uid);

    if (error) {
    console.error("Error fetching data from Supabase:", error);
    return;
    }

    const resourceID: { [key: string]: number } = {
    leetcode: 102,
    codechef: 2,
    codeforces: 1,
    };

    const ratingData: { [key: string]: number|string} = {
        leetcode: 0,
        codechef: 0,
        codeforces: 0,
    };

    if (data?.length === 0) {
    console.log("No user data found for the given ID");
    return;
    }

    const fetchPromises = Object.keys(ratingData).map(platform_name => {
    const username = data[0][platform_name];
    if (!username) {
        console.warn(`No username found for platform: ${platform_name}`);
        return Promise.resolve({ platform_name, rating: null });
    }

    const requestURL = `https://clist.by/api/v4/account/?username=skill_hub&api_key=${process.env.CLIST_API_KEY}&resource_id=${resourceID[platform_name]}&handle=${username}`;

    return fetch(requestURL)
        .then((response) => {
            if(response.ok) return response.json();
            else throw alert("Errorr from CLIST");
        })
        .then(rawJsonData=>{
            // return JSON.parse(rawJsonData.contents).objects
            return (rawJsonData.objects[0]);
        })
        
        .catch(error => {
        console.error(`Error fetching data for ${platform_name}:`, error);
        return { platform_name, rating: null };
        });
    });

    const results = await Promise.all(fetchPromises);
    console.log(results)
    results.forEach(result => {
    ratingData[result.resource.split(".")[0]] = result.rating;
    });

    console.log("Final Rating Data:", ratingData);
    ratingData["id"] = uid;
    await supabase.from("ratings").upsert([ratingData])
    .then(()=>{})
}

export async function insertUsernameData(usernames:Record<string,string>){
    try {
        const uid = await getSessionID();
        
        if(btoa("default_user") == uid){
            // Handle special case
            console.log("Some issue with session.email")
        }
        usernames.leetcode = usernames.leetcode + "@.com"; // add this suffix to follow leetocde username format according to CLIST. 
        const filteredUsernames = Object.fromEntries(
            Object.entries(usernames).filter(([key, value]) => value && value.trim() !== '')
          );
        
          // Construct the object to upsert
          const upsertData = {
            id: uid,
            ...filteredUsernames
          };
          
        const {data, error} = await supabase.from("usernames").upsert([upsertData]);
        if(error){
            console.log(error);
        }
        console.log("Finished inserting data");
    } catch(error) {
        alert(error); // need to handle it better.
    }
}