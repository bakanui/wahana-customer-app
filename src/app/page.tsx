"use client";
import Image from "next/image";
import HomePage from "./home/pages";
import { AuthContextProvider } from "./store/app.store";

export default function Home() {
  return (
    <AuthContextProvider>
      <HomePage />
    </AuthContextProvider>
  );
}
