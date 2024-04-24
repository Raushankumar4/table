// "use client";
// import React, { useState } from "react";

// const Container = () => {
//   const [userInput, setInput] = useState("");

//   const handleChange = (e) => {
//     setInput(onchange);
//   };
//   return (
//     <>
//       <div className="md:ml-[8rem]  sm:my-[4rem] sm:mx-[6rem] my-10 mx-10 md: md:max-w-[70vw] justify-center align-center sm:border-2  sm:border-black lg:ml-[12rem] sm:ml-[3rem] sm:mr-[2rem]">
//         <div className=" h-full sm:h-full max-w-[79vw] sm:max-w-[100%] mx-2 my-2 border-2 border-black bg-red-200] relative ">
//           <img
//             className="lg:rounded-lg lg:w-[8rem] md:rounded-lg md:w-[4.80rem] sm:w-[4rem] md:my-2 lg:ml-4  lg:pt-4 lg:pl-2 lg:h-[6rem] md:mx-4  absolute t-[50px] sm:overflow-hidden sm:mx-4 sm:my-2 ml-1 rounded-lg my-3 w-[4rem] lg:pb-[0.5rem]"
//             src="/logo.png"
//             alt="not found"
//           />
//           <h4 className="flex-col justify-center align-center text-center bg-gray-300">
//             Nepal Government
//           </h4>

//           <h4 className="flex-col justify-center align-center text-center bg-gray-300">
//             Health Ministry
//           </h4>
//           <h4 className="flex-col justify-center align-center text-center bg-gray-300">
//             Nepal Governemt Health Ministry
//           </h4>
//           <h4 className="flex-col justify-center align-center text-center font-bold text-2xl pb-2 border-blac bg-gray-300">
//             Nepal Governemt Health Ministry
//           </h4>
//           <h4 className="flex text-center align-center justify-center border-t-2 border-black ">
//             मातृ तथा नवशिशु स्वास्थ्य कार्डमा
//           </h4>
//           <form action="">
//             <div className="grid grid-cols-4 border-2 border-black border-l-0 border-r-0">
//               <div className=" min-h[500px] border-2 border-black border-l-0 border-t-0">
//                 <h1 className="pl-2">Health post Name</h1>
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0">
//                 <h1 className="pl-2">District</h1>
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0">
//                 <h1 className="md:pl-2">Nagarpalika</h1>
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0 border-r-0">
//                 <h1 className="pl-2">ward no</h1>
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0 border-b-0">
//                 <input
//                   className="md:h-8 md:w-[7rem] lg:w-[10rem]  ml-3 my-2 sm:h-8 w-[4rem] "
//                   type="text"
//                   value={userInput}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0 border-b-0">
//                 <input
//                   className="h-8 ml-3 my-2 lg:md:w-[10rem]  md:w-[7rem] sm:w-[6rem] sm:h-8 w-[4rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className=" min-h[50px] border-2 border-black border-l-0 border-t-0 border-b-0">
//                 <input
//                   className="h-8 ml-3 my-2 lg:md:w-[10rem]  md:w-[7rem] sm:w-[6rem] sm:h-8 w-[4rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className=" min-h[50px] ml-1">
//                 <input
//                   className="h-8 ml-2 my-2 lg:md:w-[10rem]  md:w-[7rem] sm:w-[4rem]  sm:hover:w-[7rem] w-[4rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-4 ">
//               <div className="border-2  border-t-0 border-l-0 border-black ">
//                 <h4 className="text-center justify-center align-center  bg-gray-300 h-[3rem]">
//                   Mul Darta No
//                 </h4>
//               </div>
//               <div className="border-2  border-t-0 border-l-0 border-black ">
//                 <h4 className="text-center justify-center align-center bg-gray-300 h-[3rem]">
//                   Sewa Darta No.
//                 </h4>
//               </div>
//               <div className="border-2  border-t-0 border-l-0 border-black ">
//                 <h4 className="text-center justify-center align-center  bg-gray-300 h-[3rem]">
//                   ORC Darta No.
//                 </h4>
//               </div>
//               <div className="border-2  border-t-0 border-l-0 border-r-0 border-black ">
//                 <h4 className="text-center justify-center align-center   bg-gray-300 h-[3rem]">
//                   Darta Miti
//                 </h4>
//               </div>
//             </div>
//             <div className="grid grid-cols-6 border-2 border-black border-t-0 border-l-0 border-r-0">
//               <div>
//                 <input
//                   className="h-8 ml-2 my-2  lg:w-[6rem]  md:w-[4rem] sm:w-[4rem] sm:h-8 w-[4rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-l-2 border-black">
//                 <input
//                   className=" h-8 ml-2 my-2  lg:w-[6rem]  md:w-[4rem]  sm:w-[4rem] sm:h-8 w-[4rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-l-2 border-black">
//                 <input
//                   className="h-8 ml-2 my-2  lg:w-[6rem]  md:w-[4rem]  sm:w-[4rem] sm:h-8 w-[4rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-l-2 border-black ml-[-2px]">
//                 <input
//                   className="h-8 ml-2 my-2  lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem]  sm:hover:w-[7rem] w-[2rem] "
//                   type="text"
//                   placeholder="gateway"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-l-2 border-black ">
//                 <input
//                   className="h-8 ml-2 my-2  lg:w-[6rem]   md:w-[4rem]   sm:w-[4rem]  sm:hover:w-[7rem] w-[2rem]  "
//                   type="text"
//                   placeholder="mahina"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-l-2 border-black min-h[50px] ml-1">
//                 <input
//                   className="h-8 ml-2 my-2  lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem]  sm:hover:w-[7rem] w-[2rem] "
//                   type="text"
//                   placeholder="saal"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             <div className="flex align-center justify-center border-b-2 border-black">
//               <h4>मातृ तथा नवशिशु स्वास्थ्य कार्डमा</h4>
//             </div>
//             <div className="grid grid-cols-6 border-b-2 border-black ">
//               <div className="border-r-2 border-black h-14 align-center justify-center text-center">
//                 <h4 className="pt-1">Name thar</h4>
//               </div>
//               <div className=" border-black ">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem]  sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-l-2 border-black align-center justify-center text-center pt-2">
//                 <h4>Umer</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[4rem]   md:w-[4rem]  sm:w-[4rem] sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="pt-2 justify-center text-center">Uchai cm</h4>
//               </div>
//               <div>
//                 <input
//                   className="h-8  mx-2 my-1 lg:w-[4rem]  md:w-[4rem]  sm:w-[4rem] sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             {/* secon */}

//             <div className="grid grid-cols-6 border-b-2 border-black ">
//               <div className="border-r-2 border-black h-13 align-center justify-center text-center ">
//                 <h4 className="pt-2">jilla</h4>
//               </div>
//               <div className=" border-black ">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[6rem]  md:w-[4rem]  sm:w-[4rem] sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-l-2 border-black align-center justify-center text-center pt-2 sm:object-cover ">
//                 <h4 className="md:-mx-1 sm:object-cover overflow-auto">
//                   Nagarpali
//                 </h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[6rem]  md:w-[4rem] sm:w-[4rem] sm:overflow-auto   sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="pt-2 justify-center text-center">ward</h4>
//               </div>
//               <div>
//                 <input
//                   className="h-8  mx-2 my-1 lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem]  sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             {/* secon2 */}

//             <div className="grid grid-cols-6 border-b-2 border-black ">
//               <div className="border-r-2 border-black h-17 align-center justify-center text-center">
//                 <h4 className="lg:pt-3 pt-6 overflow-auto">Gau-tol</h4>
//               </div>
//               <div className=" border-black ">
//                 <input
//                   className="h-8  mx-2 my-2  lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem] sm:mt-2 sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-l-2 border-black align-center justify-center text-center pt-2">
//                 <h4 className=" overflow-auto">samparka no</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 lg:w-[6rem]   md:w-[4rem]  sm:w-[4rem] sm:mt-2 sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="pt-2 justify-center text-center">blood group</h4>
//               </div>
//               <div>
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[6rem]   md:w-[4rem] sm:w-[4rem] sm:mt-2 sm:hover:w-[7rem] w-[3rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>

//             {/* secon 3*/}

//             <div className="grid grid-cols-4 border-b-2 border-black ">
//               <div className="border-r-2 border-black lg:h-12 align-center justify-center text-center  w-[7rem]">
//                 <h4 className="pt-2">garbha patak</h4>
//               </div>
//               <div className=" border-black ">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[6rem]  md:w-[6rem]  sm:w-[7rem]   w-[4rem] ml-6"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-l-2 border-black align-center justify-center text-center pt-2 ml-[-2px]">
//                 <h4>pati ko name</h4>
//               </div>
//               <div className=" border-black   ">
//                 <input
//                   className="h-8  mx-2 my-1  lg:md:w-[8rem]  md:w-[7rem]  sm:w-[7rem] sm:mt-2  sm:hover:w-[7rem] w-[4rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             <div className="border-t-2 mt-2 border-black"></div>
//             <div className="align-center text-center justify-center bg-gray-300 border-b-2 border-black  ">
//               <h4>Aaghilo garbha ko bibaran</h4>
//             </div>

//             <div className="grid grid-cols-5 ">
//               <div className="h-[5rem] lg:h-[5rem] md:h-[5rem] sm:tracking-tight sm:overflow-hidden sm:h-[4.99rem] border-r-2 border-b-2 border-black row-span-2">
//                 <h4 className="align-center justify-center text-center sm:pt-1 md:pt-2 lg:pt-6 ">
//                   Aaghilo garbha ko Name
//                 </h4>
//               </div>

//               <div className="h-15 border-r-2 border-b-2 border-black justify-center text-center ">
//                 <h4 className="my-2 lg:my-6  sm:mt-4">garbha ko bibaran</h4>
//               </div>
//               <div className="h-20 border-r-1 border-b-2 border-black justify-center text-center ">
//                 <h4 className="my-6 md:my-5 ">jiwit bachha</h4>
//               </div>
//               <div className=" border-r-2 border-l-2 border-b-2 border-black justify-center text-center row-span-2 relative">
//                 <h4 className="md:pt-4 lg:pt-2 md:h-[2rem] justify-end items-center absolute -top-6 left-4 pb-4 sm:mt-8 leading-tight tracking-tighter mt-10">
//                   garba ko jatilta
//                 </h4>
//               </div>
//               <div className=" border-b-2 border-black justify-center text-center row-span-2">
//                 <h4 className="pt-7">prasuti kisim</h4>
//               </div>
//             </div>
//             <div className="grid grid-cols-7 border-b-2 border-black ">
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-2">jiwit</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-2 md:text-wrap md:h-4">mirty </h4>
//               </div>
//               <div className="border-r-2 border-black -">
//                 <h4 className="text-center pt-2  overflow-hidden tracking-tight ">
//                   Aavadhi napugeko
//                 </h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-2">twins</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-t md:px-1 md:py-2 md:overflow-auto sm:overflow-auto sm:pt-2 overflow-auto mt-2">
//                   garbhapatan
//                 </h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-2">gender</h4>
//               </div>
//               <div className="text-center pt-2">
//                 <h4 className="text-center pt-2">Umer</h4>
//               </div>
//             </div>
//             <div className="grid grid-cols-10">
//               <div className="border-b-2 border-r-2 border-black">
//                 <h1 className="pl-2 mt-2">first</h1>
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1  lg:w-[3rem] w-[1.4rem] md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-black ">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-10">
//               <div className="border-b-2 border-r-2 border-black">
//                 <h1 className="pl-2 md:text-wrap  md:overflow-auto mt-2 sm:overflow-auto overflow-auto">
//                   Second
//                 </h1>
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1  w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-black ">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-10">
//               <div className="border-b-2 border-r-2 border-black">
//                 <h1 className="pl-2 mt-2 overflow-auto">Third</h1>
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 sm:w-[2rem] lg:w-[3rem] w-[1.4rem]  md:w-[2rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem] sm:w-[2rem]  "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-b-2 border-black ">
//                 <input
//                   className="h-8  mx-2 my-1 w-[1.4rem] lg:w-[3rem]  md:w-[2rem]  sm:w-[2rem] "
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-7  bg-yellow-300 border-b-2 border-black ">
//               <div className="border-r-2 border-black">
//                 <h4 className="flex  justify-center text-center lg:overflow-auto overflow-auto  sm:px-4  h-[4rem] ">
//                   genderaagilo garbha ko tb khop ko bibaran
//                 </h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-6">td1</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-6">1</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-6">td2</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-6"> 2</h4>
//               </div>
//               <div className="border-r-2 border-black">
//                 <h4 className="text-center pt-6">t.d 2+</h4>
//               </div>
//               <div>
//                 <h4 className="text-center pt-6">3</h4>
//               </div>
//             </div>
//             <div className="border-b-2 border-black mt-2"></div>
//             <div className="align-center justify-centert text-center border-b-2 border-black bg-gray-300">
//               <h4>Aaghilo garbha ko bibaran</h4>
//             </div>
//             <div className="grid grid-cols-4 border-b-2 border-black ">
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem] lg:w-[10rem]  md:w-[7rem] sm:w-[6rem] "
//                   type="text"
//                   placeholder="Name"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem]  lg:w-[10rem]  md:w-[7rem]  sm:w-[6rem] "
//                   type="text"
//                   placeholder="Pad"
//                   value={userInput}
//                 />
//               </div>
//               <div className="border-r-2 border-black">
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem]  lg:w-[10rem]  md:w-[7rem]  sm:w-[6rem]"
//                   type="text"
//                   placeholder="Dashtkhat"
//                   value={userInput}
//                 />
//               </div>
//               <div>
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem]  lg:w-[10rem]  md:w-[7rem]  sm:w-[6rem] "
//                   type="text"
//                   placeholder="Mlti"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-4 border-b-2 border-black h-16  pl-4  ">
//               <div className="lg:px-4 lg:py-4 border-r-2 border-black md:text-center">
//                 organization name
//               </div>
//               <div className="">
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem] mt-2  lg:w-[10rem]  md:w-[7rem]  sm:w-[6rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//               <div className="lg:pt-4 border-l-2 border-r-2 text-center border-black leading-[0.99rem] ">
//                 <h1 className="sm:tracking-tight justify-center items-center mb-[-26px] mt-2 ">
//                   ambulance phone number
//                 </h1>
//               </div>
//               <div>
//                 <input
//                   className="h-8  mx-2 my-1 w-[4rem] mt-2  lg:w-[10rem]  md:w-[7rem]  sm:w-[6rem]"
//                   type="text"
//                   value={userInput}
//                 />
//               </div>
//             </div>
//             <div className="text-center text-2xl font-bold text pt-4">
//               <h1 className="pb-4">Thankyou...</h1>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Container;
// import React from "react";
// import { useState } from "react";

// const Container = () => {
//   const [input, setInput] = useState("");
//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <>
//       <div className=" my-10 mx-10 justify-center align-center border-4 border-black overflow-x-auto">
//         <div className="bg-gray-200">
//           <img src="" alt="img_notFound" />
//           <div className="flex flex-col justify-between items-center border-b-2 border-black">
//             <h4 className="font-semibold tracking-tight pb-[1vw]">
//               नेपाल सरकार
//             </h4>
//             <h4 className="font-semibold tracking-tight pb-[1vw]">
//               स्वास््य िथा िनसख्ं या मन्त्रालय
//             </h4>
//             <h4 className="font-semibold tracking-tight pb-[1vw]">
//               स्वास््य सेवा जवभाग
//             </h4>
//             <h4 className="font-semibold tracking-tight pb-[1vw] text-[1.5vw] pt-[1vw]">
//               स्वास््य व्यवस्थापन सच ू ना प्रणाली
//             </h4>
//           </div>
//         </div>
//         <div className="w-full h-[10vw] border-b-2 border-black"></div>
//         <div className="w-full h-[10vw] flex flex-col justify-center items-center bg-gray-200  border-b-2 border-black">
//           <h1 className="text-[2vw] font-semibold">
//             पोषण प ु नस्थािपना गहृ रजिष्टर
//           </h1>
//           <h1 className="text-[2.2vw] tracking-tighter font-bold pt-[1.4vw] ">
//             NRH REGISTER
//           </h1>
//         </div>
//         <div className="w-full h-[8vw] border-b-2 border-black"></div>
//         <form action="">
//           <div className="w-full h-[4.80vw] border-b-2 border-black justify-center items-center pt-[1.4vw] pl-[1vw]  bg-gray-200">
//             <h1 className="font-extrabold tracking-tight text-[1vw]">
//               पोषण पुनस्थापना गहृको नाम:
//               <input
//                 onChange={inputHandler}
//                 className="bg-gray-200 ml-[2vw]  h-[2vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//           </div>
//           <div className="w-full h-[4.80vw] border-b-2 border-black flex justify-between =justify-between.bind(this) items-center pt-[10.45w] pl-[1vw]  bg-gray-200">
//             <h1 className="font-extrabold tracking-tight text-[1vw]">
//               प्रदेशः
//               <input
//                 onChange={inputHandler}
//                 className="bg-gray-200 ml-[2vw]  h-[2vw] w-[12vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//             <h1 className="font-extrabold tracking-tight text-[1vw]">
//               जिल्ला:
//               <input
//                 onChange={inputHandler}
//                 className="bg-gray-200 ml-[2vw] h-[2vw] w-[12vw] mr-[40vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//           </div>
//           <div className="flex justify-items-start gap-[15vw] w-full h-[4.80vw] pt-[1.6vw] font-extrabold tracking-tight text-[1vw] bg-gray-200 overflow-x-auto">
//             <h1 className=" pl-[1vw] flex">
//               प्रयोग जमजि:{" "}
//               <input
//                 onChange={inputHandler}
//                 className=" h-[2vw] w-[6vw] bg-gray-200 ml-[1vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//             <h1 className="flex">
//               आजथिक वषि:{" "}
//               <input
//                 onChange={inputHandler}
//                 className="h-[2vw] w-[6vw] bg-gray-200 ml-[1vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//             <h1 className="flex">
//               देजि{" "}
//               <input
//                 onChange={inputHandler}
//                 className="h-[2vw] w-[6vw] bg-gray-200 ml-[1vw]"
//                 type="text"
//                 value={input}
//               />
//             </h1>
//             <h1 className="flex">
//               सम्म{" "}
//               <input
//                 onChange={inputHandler}
//                 className="h-[2vw] w-[6vw] bg-gray-200 ml-[1vw]"
//                 value={input}
//                 type="text"
//               />
//             </h1>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Container;
