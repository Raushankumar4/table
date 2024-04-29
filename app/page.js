"use client";
import React from "react";

import Link from "next/link";
// import Page3 from "@/Components/Page3";
// import Page2 from "@/Components/Page2";
// import Page3 from "@/Components/Page3";
// import Page4 from "@/Components/Page4";

import PageOne from "@/Components/Table-9.3/PageOne";
import PageTwo from "@/Components/Table-9.3/PageTwo";
import PageThree from "@/Components/Table-9.3/PageThree";
import PageFour from "@/Components/Table-9.3/PageFour";
const page = () => {
  return (
    <>
      <Link href="/"></Link>
      {/* <Page3 />
      <Page2 />
      <Page3 />
      <Page4 /> */}
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />

      {/* <Page5 /> */}
    </>
  );
};

export default page;
