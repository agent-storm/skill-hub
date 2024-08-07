// src/app/test/page.tsx
import { supabase } from '../utils/supabase/server';

export default async function Notes() {
    const { data, error } = await supabase.from("notes").select();

    if (error) {
        console.error("Error fetching data:", error.message);
        return <div>Error loading data</div>;
    }

    console.log("Fetched notes:", data);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}


// import { supabase } from '../utils/supabase/server';

// export default async function Notes() {
    
//     const { data: notes } = await supabase.from("notes").select();

//     return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }
