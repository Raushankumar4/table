"use client";
import React from "react";
import Container from "@/Components/Container";

import Page from "@/Components/Page";
import Link from "next/link";
import Page3 from "@/Components/Page3";

const page = () => {
  return (
    <>
      <Link href="/"></Link>
      <Container />
      <Page />
      <Page3 />
    </>
  );
};

export default page;
