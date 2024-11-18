
import { NextResponse } from "next/server";
import midtransClient from "midtrans-client";

interface TransactionRequest {
    gross_amount: string;
    first_name: string;
    last_name: string | " ";
    email: string;
    user_id: string;
    phone: string;
  }
const logError = (message: string, error: unknown) => {
    const errorObj = error as Error;
    console.error(`[Midtrans API Error] ${message}:`, {
      error,
      message: errorObj?.message,
      stack: errorObj?.stack,
      cause: errorObj?.cause,
    });
  };
  
  export async function POST(req: Request) {
    try {
      // 1. Extract and validate environment variables
      const { 
        MIDTRANS_SERVER_KEY,
        NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
        NODE_ENV 
      } = process.env;
  
      if (!MIDTRANS_SERVER_KEY || !NEXT_PUBLIC_MIDTRANS_CLIENT_KEY) {
        throw new Error("Missing required Midtrans configuration");
      }
  
      // 2. Parse and validate request body
      const body: TransactionRequest = await req.json();
      
      // Validate required fields
      if (!body.gross_amount || !body.email || !body.first_name || !body.phone) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
  
      // 3. Initialize Midtrans client
      const snap = new midtransClient.Snap({
        isProduction: NODE_ENV === "production",
        serverKey: MIDTRANS_SERVER_KEY,
        clientKey: NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
      });
  
      // 4. Generate unique order ID
      const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  
      // 5. Prepare transaction data
      const transactionData = {
        transaction_details: {
          order_id: orderId,
          gross_amount: parseInt(String(body.gross_amount))
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: body.first_name,
          last_name: body.last_name || "",
          email: body.email,
          phone: body.phone
        }
      };
  
      // 6. Create transaction
      const transaction = await snap.createTransaction(transactionData);
      
      
      // 7. Return success response
      return NextResponse.json({
        success: true,
        transactionToken: transaction.token,
        redirectUrl: transaction.redirect_url,
        orderId,
      });
  
    } catch (error) {
      // Handle specific Midtrans errors
      if (error instanceof Error && 'ApiResponse' in error) {
        const midtransError = error as unknown as { ApiResponse: unknown };
        logError("Midtrans API Error", midtransError.ApiResponse);
        return NextResponse.json({
          error: "Payment gateway error",
          details: midtransError.ApiResponse
        }, { status: 500 });
      }
  
      // Handle general errors
      logError("Unexpected error", error);
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }