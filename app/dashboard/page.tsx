"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center  h-screen">
      <Button
        onClick={handleSignOut}
        variant={"outline"}
        className="cursor-pointer"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Page;
