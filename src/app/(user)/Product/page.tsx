"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import midtransClient from "midtrans-client";
import axios from "axios";

import { StaticImageData } from "next/image";
import Arang from "@/../../public/img/p1.jpg";
import Arang2 from "@/../../public/img/p2.jpg";
import Arang3 from "@/../../public/img/arang (1).jpg";
import Arang4 from "@/../../public/img/p8.jpg";
import Arang5 from "@/../../public/img/p5.jpg";
import Arang6 from "@/../../public/img/p6.jpg";
import Arang7 from "@/../../public/img/p7.jpg";
import Arang8 from "@/../../public/img/p8.jpg";
import Arang10 from "@/../../public/img/p10.jpg";
import Arang11 from "@/../../public/img/p11.jpg";
import Image from "next/image";
import toast from "react-hot-toast";
import { FormButton } from "../Components/Button";
interface Card {
  path: StaticImageData;
}
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setError] = useState<string | null>(null);
  const filteredUsers: Card[] = [
    {
      path: Arang,
    },
    {
      path: Arang2,
    },
    {
      path: Arang3,
    },
    {
      path: Arang4,
    },
    {
      path: Arang5,
    },
    {
      path: Arang6,
    },
    {
      path: Arang7,
    },
    {
      path: Arang8,
    },
    {
      path: Arang10,
    },
    {
      path: Arang11,
    },
  ];

  const handleBuy = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = {
        gross_amount: "500",
        first_name: "Unknown",
        last_name: "",
        email: "unknown@gmail.com",
        phone: "08123456789",
        user_id: "17788bajjak",
      };

      // Debug log
      console.log("Sending payment request with data:", formData);

      const response = await axios.post("/api/midtrans", formData);

      if (response.data?.transactionToken) {
        // Make sure snap is loaded
        if (typeof window.snap !== "undefined") {
          window.snap.pay(response.data.transactionToken, {
            onSuccess: async function (result: any) {
              console.log("Payment success:", result);
              toast.success("Payment successful!");
              // Handle success - you might want to redirect or show a success message
            },
            onPending: function (result: any) {
              console.log("Payment pending:", result);
              // Handle pending state
            },
            onError: function (result: any) {
              console.log("Payment error:", result);
              setError("Payment failed. Please try again.");
            },
            onClose: function () {
              setError(
                "Payment cancelled. Please try again if you wish to complete the purchase."
              );
            },
          });
        } else {
          setError(
            "Payment system not initialized. Please refresh the page and try again."
          );
        }
      }
    } catch (error) {
      console.error("Detailed error:", error);

      if (axios.isAxiosError(error)) {
        // Handle validation errors from the server
        const errorDetails = error.response?.data?.details;
        if (Array.isArray(errorDetails)) {
          setError(errorDetails.join(", "));
        } else {
          setError(
            error.response?.data?.error || "Failed to create transaction"
          );
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 bg-white rounded-xl pt-48">
      {filteredUsers.map((user, i) => (
        <div
          key={i}
          id="container"
          className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
        >
          <Image
            src={user.path}
            unoptimized
            quality={100}
            width={100}
            height={100}
            alt="banner"
            className="w-full h-36 rounded-t-3xl"
          />
          <div className="ml-8 mt-2">
            <div className="flex justify-between p-5">
              <p
                key={i}
                className="font-medium xl:text-[15px]  lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-black"
              >
                <FormButton
                  variant="white"
                  onClick={handleBuy}
                  className="bg-transparent border rounded-full"
                >
                  Buy
                </FormButton>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
