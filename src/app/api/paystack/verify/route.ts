import { NextRequest, NextResponse } from "next/server";

// Verifies a transaction reference against Paystack's API using the secret
// key (server-side only, never exposed to the browser). Called from the
// donate success page after the inline popup closes.
export async function GET(request: NextRequest) {
  const reference = request.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Paystack is not configured yet. Add PAYSTACK_SECRET_KEY to your environment." },
      { status: 501 }
    );
  }

  const res = await fetch(
    "https://api.paystack.co/transaction/verify/" + encodeURIComponent(reference),
    {
      headers: {
        Authorization: "Bearer " + secretKey,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok || data.status !== true) {
    return NextResponse.json(
      { error: data.message || "Could not verify transaction" },
      { status: res.status || 502 }
    );
  }

  const tx = data.data;

  return NextResponse.json({
    success: tx.status === "success",
    amount: tx.amount / 100,
    currency: tx.currency,
    reference: tx.reference,
    email: tx.customer?.email,
    paidAt: tx.paid_at,
  });
}
