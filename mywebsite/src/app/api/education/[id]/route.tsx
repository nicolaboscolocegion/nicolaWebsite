"use server";

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../key';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }  // params è Promise<...>
) {
  const { id } = await context.params;  // devi fare await
  const idBigInt = BigInt(id);

  try {
    const { data: education, error } = await supabase
      .from('education')
      .select('*')
      .eq('id', idBigInt);

    if (error) throw error;

    return NextResponse.json(education, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}