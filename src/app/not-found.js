"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const redirectHandler = async () => {
    router.push("/");
  };
  useEffect(() => {
    redirectHandler();
  }, []);
  return (
    <div className="notFound">
      <h1>Oops....</h1>
      <h2>That page cannot be found.</h2>
      <Link href="/">Go to homepage</Link>
    </div>
  );
};

export default NotFound;
