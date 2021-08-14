import {createClient} from "@supabase/supabase-js"
const supabaseUrl = "https://vbdvzbwkruxheszrtins.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzIzMDUxNiwiZXhwIjoxOTQyODA2NTE2fQ.lnzEviyI-tuu1P_c-FsKAtlv0IkPRFkeQXetJ2DnWw0";

const spb = createClient(supabaseUrl, supabaseAnonKey);
export default spb;