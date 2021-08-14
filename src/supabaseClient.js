const supabaseUrl = "/****";
const supabaseAnonKey =
  "*******";

const spb = supabase.createClient(supabaseUrl, supabaseAnonKey);
export default spb;
