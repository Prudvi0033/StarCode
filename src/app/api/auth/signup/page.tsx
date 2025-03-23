"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Sign in to StarCode</h1>
      <button
        onClick={() => signIn("google", {callbackUrl : "/"})}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
