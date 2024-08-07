import { supabase } from '../utils/supabase/server';

export default async function Notes() {
    const { data, error } = await supabase.from('notes').insert([
        {
            title:
                'ng with Yoda.',
        },
        {
            title:
                'h Star.',
        },
    ])
    if(error){
        console.error("error is ",error.message);
    }
    console.log("data is ",data)

}




