"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>{"<-"} Go back to dashboard</button>
    </>
  );
};

export default GoBackButton;
