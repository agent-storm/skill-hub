"use server";
import { supabase } from '../utils/supabase/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/app/auth';

export async function insertUserRating(uid:string) {
    
}

export async function insertUsernameData(usernames:Record<string,string>){
    try {
        const session = await getServerSession(authConfig);
        const uid = btoa((session?.user?.email)?.split("@")[0] || "default_user");
        
        if(btoa("default_user") == uid){
            // Handle special case
            console.log("Some issue with session.email")
        }
        const {data, error} = await supabase.from("usernames").insert([
            {
                id: uid,
                leetcode:usernames["leetcode"]+"@.com",
                codeforces:usernames["codeforces"],
                codechef:usernames["codechef"]
            }
        ]);
        if(error){
            console.log(error);
        }
        console.log("Finished inserting data");
    } catch(error) {
        alert(error); // need to handle it better.
    }
}