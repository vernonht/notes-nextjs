"use client";

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import MessageScreen from "./components/MessageScreen";
import useStore from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const getNotes = useStore((state) => state.fetchNotes);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <main className="grid grid-cols-12">
      <div className="col-span-4 border-r border-gray-700 h-screen overflow-auto">
        <Sidebar />
      </div>
      <div className="col-span-8">
        <MessageScreen />
      </div>
    </main>
  );
}
