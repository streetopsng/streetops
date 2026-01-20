"use client";
import TeamMembers from "@/components/team-members";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <TeamMembers />
    </div>
  );
};

export default Page;
