export const API_URL_SUPABASE = import.meta.env.VITE_API_URL_SUPABASE;
export const API_KEY_SUPABASE = import.meta.env.VITE_API_kEY_SUPABASE;
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(API_URL_SUPABASE, API_KEY_SUPABASE);
