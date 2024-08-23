"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Chatbot from "./components/Chatbot";

export default function Home() {

  const router = useRouter();

  return (
    <Chatbot/>
  );
}
