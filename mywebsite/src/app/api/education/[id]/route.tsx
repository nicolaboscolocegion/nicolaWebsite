"use server";

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('http://localhost:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')


export async function GET(req: NextRequest, { params }: { params: { id: bigint } }) {

  const url = new URL(req.url);

  //res.status(200).json({ message: 'Hello from Next.js!' })
  try {
    // Fetch data from Supabase
    const { data: education, error } = await supabase
      .from('education')
      .select('*') // Or select specific columns
      .eq('id', params.id)
    if (error) {
      throw error;
    }

    return NextResponse.json(education, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

}

