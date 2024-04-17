"use server";

import { NextRequest, NextResponse } from 'next/server';
import {supabase} from '../key'

export async function GET(req: NextRequest) {

  const url = new URL(req.url);

  //res.status(200).json({ message: 'Hello from Next.js!' })
  try {
    // Fetch data from Supabase
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*') // Or select specific columns

    if (error) {
      throw error;
    }

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
  }

}