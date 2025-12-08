"use server";

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../key';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // params ora è Promise
) {
  try {
    // Ottieni i parametri dinamici
    const { id } = await context.params;

    // Converto l'id a bigint se necessario per Supabase
    const idBigInt = BigInt(id);

    // Fetch da Supabase
    const { data: job, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', idBigInt);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
    }

    return NextResponse.json(job, { status: 200 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
