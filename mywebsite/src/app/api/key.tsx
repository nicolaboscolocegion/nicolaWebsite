import { createClient } from '@supabase/supabase-js'
declare var process : {
  env: {
    ANON_KEY: string
    URL: string
  }
}
export const key : string = process.env.ANON_KEY
export const supabase =  createClient('http://api.nikbc.tech', key)
export const url = process.env.URL;