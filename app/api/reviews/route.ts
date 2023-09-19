import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(rate: string) {
  const res = axios
    .get(
      `https://c6b7e9bc-4b87-4f71-a2bd-db8aade9d5f0.mock.pstmn.io/reviews?rating=${rate}`
    )
    .then((res) => {
      console.log(res);
    });

  return NextResponse.json({ res });
}
