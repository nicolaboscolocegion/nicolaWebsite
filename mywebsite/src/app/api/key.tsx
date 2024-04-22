import { createClient } from '@supabase/supabase-js'
declare var process : {
  env: {
    ANON_KEY: string
  }
}
const key : string = process.env.ANON_KEY
export const supabase =  createClient('https://api.nikbc.tech', key)