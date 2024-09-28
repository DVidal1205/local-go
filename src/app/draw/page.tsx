"use client"

import { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import Voice from "../_components/voice";
import { api } from "~/trpc/react";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Voice />
    </main>
  );
}
