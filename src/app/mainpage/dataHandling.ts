import { supabase } from '../utils/supabase/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '../auth';
export function fetchUserData(uid:string){
    
}
export function fetchAllData(){

}

export async function insertUserData(){
    const session = await getServerSession(authConfig);
    const uid = btoa((session?.user?.email)?.split("@")[0] || "default_user");
    if(btoa("default_user") == uid){
        // Handle special case
        console.log("Some issue with session.email")
    }
    const {data, error} = await supabase.from("usernames").insert([
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