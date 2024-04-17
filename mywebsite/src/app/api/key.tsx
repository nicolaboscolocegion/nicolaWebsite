import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://api.nikbc.tech', process.env.ANON_KEY!)