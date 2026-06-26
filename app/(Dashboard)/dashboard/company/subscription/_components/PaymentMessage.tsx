"use client";

import { Confetti, ConfettiRef } from "@/components/ui/confetti";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PaymentMessage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSuccess = searchParams.get("isSuccess") === "true";
  const [countdown, setCountdown] = useState(5);
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    if (!isSuccess) {
      router.replace("/dashboard/company");
    }

    if (isSuccess) {
      confettiRef.current?.fire({});
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router, isSuccess]);

  useEffect(() => {
    if (countdown <= 0) {
      router.replace("/dashboard/company");
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {isSuccess && (
        <Confetti
          ref={confettiRef}
          className="absolute top-0 left-0 z-0 size-full"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="bg-white border rounded-md px-10 py-12 max-w-115 w-full text-center z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-7 shadow-lg ${
            isSuccess
              ? "bg-linear-to-br from-emerald-500 to-emerald-600"
              : "bg-linear-to-br from-red-500 to-red-600"
          }`}>
          {isSuccess ? (
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[1.75rem] font-bold text-black mb-3">
          {isSuccess ? "Payment Successful!" : "Payment Failed!"}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base text-black/80 mb-8 leading-relaxed">
          {isSuccess
            ? "Your subscription has been activated successfully. Welcome to your upgraded plan!"
            : "We couldn’t complete your payment. Please try again or contact support if the issue persists."}
        </motion.p>

        <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mb-8" />

        {/* Countdown */}
        <div className="mb-6">
          <p className="text-sm text-black/70 mb-3">
            Redirecting to your dashboard in
          </p>

          <motion.div
            key={countdown}
            initial={{ scale: 0.7, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-input-bg border-2 text-[1.375rem] font-bold text-black">
            {countdown}
          </motion.div>
        </div>

        {/* Progress */}
        <div className="h-1 bg-black/[0.07] rounded-full overflow-hidden mb-7">
          <motion.div
            className={`h-full rounded-full ${
              isSuccess ? "bg-main-color" : "bg-red-500"
            }`}
            initial={{ width: "0%" }}
            animate={{ width: `${((5 - countdown) / 5) * 100}%` }}
            transition={{ duration: 0.8, ease: "linear" }}
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.replace("/dashboard/company")}
          className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white text-[0.9rem] font-semibold cursor-pointer ${
            isSuccess ? "bg-main-color" : "bg-red-500"
          }`}>
          Go to Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
}
