import { supabase } from '../utils/supabase/server';

export function fetchUserData(uid:string){
    
}
export function fetchAllData(){

}

export async function insertUserData(uid: string){
    if(btoa("default_user") == uid){
        // Handle special case
        console.log("Some issue with session.email")
    }
    const {data, error} = await supabase.from("Usertesting").insert([
        {
            id: uid,
            leetcode:"agent_storm@.com",
            codeforces:"21R01A0585",
            codechef:"agent_storm"
        }
    ]);
    if(error){
        console.log(error);
    }
    console.log("Finished inserting data");
}