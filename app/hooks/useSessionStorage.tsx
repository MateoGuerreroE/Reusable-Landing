"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UseSessionStorage = ({ name }: { name: string }) => {
  const router = useRouter();
  useEffect(() => {
    const session = sessionStorage.getItem(name);
    if (!session) router.push("/login");
  }, []);
  return <></>;
};

export default UseSessionStorage;
