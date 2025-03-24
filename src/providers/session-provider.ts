"use client";

import React from "react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
  session: any;
}

const AuthProvider = ({ children, session }: AuthProviderProps) => {
  return React.createElement(
    NextAuthProvider as any, 
    { session }, 
    children
  );
};

export default AuthProvider;