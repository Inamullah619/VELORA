import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-natural w-full font-sans">
      <AnnouncementBar />
      <div>
        <Image src="/logo.png" alt="velora-logo" width={"200"} height={"200"} />
      </div>
      <main>
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome to Velora
        </h1>
      </main>
    </div>
  );
};

export default Home;
