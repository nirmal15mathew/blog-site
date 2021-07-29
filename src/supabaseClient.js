import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "xxxx";
const supabaseAnonKey =
  "xxxxxx";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
