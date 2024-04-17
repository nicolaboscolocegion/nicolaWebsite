"use server";

import { NextRequest, NextResponse } from 'next/server';
import {supabase} from '../../key'

export async function GET(req: NextRequest,{ params }: { params: { id: bigint  } }) {



  //res.status(200).json({ message: 'Hello from Next.js!' })
  try {
    // Fetch data from Supabase
    const { data: job, error } = await supabase
      .from('jobs')
      .select('*') // Or select specific columns
      .eq('id', params.id)
    if (error) {
      throw error;
    }

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

}