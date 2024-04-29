// import React from "react";

// const Page3 = () => {
//   return (
//     <>
//       <div className="5.4">
//         <form action="">
//           {/* Header-section Start */}
//           <div className=" mt-[4vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto ">
//             <div className="header-section flex  bg-gray-200 h-[12vw]">
//               <div className="img w-[14vw] flex justify-center items-center ">
//                 <img
//                   className="h-[10vw] "
//                   src="/nepal_logo.png"
//                   alt="not found"
//                 />
//               </div>
//               <div className="flex flex-col justify-center items-center w-full pr-[6vw]">
//                 <h1 className="text-[1.1rem] font-semibold  tracking-tight">
//                   नेपाल सरकार
//                 </h1>
//                 <h1 className="text-[1.1rem] font-semibold tracking-tight">
//                   स्वास्थ्य तथा जनसंख्य मन्त्रालय
//                 </h1>
//                 <h1 className="text-[1.1rem] font-semibold tracking-tight">
//                   स्वास्थ्य सेवा विभाग
//                 </h1>
//                 <h1 className="text-[1.3rem] font-bold tracking-tight">
//                   स्वास्थ्य व्यावस्थापन सुचना प्रणाली
//                 </h1>
//                 <h1 className="text-[1.4rem] font-bold">
//                   कुष्ठ रोग परिक्षण र पउपचार कार्ड
//                 </h1>
//               </div>
//             </div>
//             <div className="flex justify-between items-center border-t-2 border-black font-semibold tracking-tight text-[1.2vw] bg-gray-200">
//               <h1 className="ml-[2vw]">प्रदेश:</h1>
//               <h1 className="]">जिला:</h1>
//               <h1>गा.पा/न.पा./उप./म.न.पाः</h1>
//               <h1 className="mr-[2vw]">स्वास्थ्य संस्था:</h1>
//             </div>
//           </div>
//           {/* section-1 end */}
//           <h1 className="font-semibold text-[0.86rem] pl-[3.08vw] tracking-tight ">
//             भाग १-विरामीको विवरन
//           </h1>
//           {/* section-2 start */}
//           <div className=" mt-[0vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto h-[6vw] ">
//             <div className="section-2 flex">
//               <div className="text-[0.87rem] font-semi flex flex-col tracking-tight h-[5.74vw] border-r-2 border-black w-[7vw]">
//                 <h1 className="bg-gray-200 h-[3.4vw] border-b-2 border-black flex justify-center items-center ">
//                   मुल दर्ता नं.
//                 </h1>
//                 <input
//                   className="w-[2.4] outline-none pl-[0.34vw] "
//                   type="text"
//                 />
//               </div>
//               <div className="text-[0.87rem] font-semi flex flex-col tracking-tight h-[5.74vw] border-r-2 border-black w-[7vw]">
//                 <h1 className="bg-gray-200 h-[3.4vw] border-b-2 border-black flex justify-center items-center ">
//                   शेवा दर्ता नं.
//                 </h1>
//                 <input
//                   className="w-[2.4] outline-none pl-[0.34vw] "
//                   type="text"
//                 />
//               </div>
//               <div className="text-[0.87rem] font-semi flex flex-col tracking-tight h-[5.74vw] border-r-2 border-black w-[26vw] ">
//                 <h1 className="bg-gray-200 h-[3.4vw] border-b-2 border-black flex justify-center items-center ">
//                   दर्ता भयको मिति
//                 </h1>
//                 <div className="flex">
//                   <div className="w-[4.4vw] h-[2.3vw] border-r-2 border-black flex items-center justify-center">
//                     <input
//                       className="w-[2.4vw] pl-[0.44vw]  outline-none  "
//                       type="text"
//                       placeholder="ग"
//                     />
//                   </div>
//                   <div className="w-[17.2vw] h-[2.3vw] border-r-2 border-black flex items-center justify-center">
//                     <input
//                       className="w-[2.4vw] pl-[0.44vw]  outline-none  "
//                       type="text"
//                       placeholder="म"
//                     />
//                   </div>
//                   <div className=" h-[2.3vw]  flex justify-center items-center">
//                     <input
//                       className="w-[2.4vw] pl-[0.44vw]  outline-none  "
//                       type="text"
//                       placeholder="ग"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex border-r-2 border-black">
//                 <div className="w-[28vw] text-[0.93rem] font-semi tracking-tight">
//                   <h1 className="bg-gray-200 h-[3.4vw] border-b-2 border-black flex justify-center items-center ">
//                     बिमारिको नाम र थर
//                   </h1>
//                   <input
//                     className="pl-[2vw] outline-none w-[18vw]"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[6vw] text-[0.93rem] font-semi tracking-tight border-r-2 border-black ">
//                 <h1 className="bg-gray-200  flex justify-center items-center h-[3.4vw] border-b-2 border-black">
//                   लिंग
//                 </h1>
//                 <div className="w-[6vw]">
//                   <input
//                     className="w-[4vw] pl-[0.44vw] outline-none bg-white"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[14vw] text-[0.93rem] font-semi tracking-tight border-r-2 border-black ">
//                 <h1 className="bg-gray-200  flex justify-center items-center h-[3.4vw] border-b-2 border-black">
//                   आयु
//                 </h1>
//                 <div className="w-[10vw]">
//                   <input
//                     className="w-[4vw] pl-[0.44vw] outline-none bg-white"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[6vw] text-[0.93rem] font-semi tracking-tight ">
//                 <h1 className="bg-gray-200  flex justify-center items-center h-[3.4vw] border-b-2 border-black">
//                   संपर्क नं.
//                 </h1>
//                 <div className="w-[6vw]">
//                   <input
//                     className="w-[4vw] pl-[0.44vw] outline-none bg-white"
//                     type="text"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* section-2 the end */}
//           {/* section-3 start */}
//           <div className=" mt-[1vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto ">
//             <div className="sec-3 flex">
//               <div className="flex flex-col border-r-2 border-black w-[7vw] font-semi text-[0.93rem] tracking-tight h-[10vw] ">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   पेशा
//                 </h1>
//                 <div className="w-[7vw]  border-b-2 border-black h-[2.6vw]">
//                   <input
//                     className="w-[6.5vw] h-[1.6vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   जाति कोड
//                 </h1>
//                 <div className="w-[7vw]   h-[2.6vw]">
//                   <input
//                     className="w-[6.5vw] h-[1.6vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[11.4vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   थेगाना
//                 </h1>
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   जन्म आस्थान
//                 </h1>
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   जन्म स्थान
//                 </h1>
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.6vw] ">
//                   हालको
//                 </h1>
//               </div>

//               <div className="flex flex-col w-[18.4vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   जिला
//                 </h1>
//                 <div className=" flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>

//                 <div className=" flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//                 <div className=" flex justify-center items-center h-[2.4vw] ">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[18.4vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   गा.पा.न/उप/म.न.पाः
//                 </h1>
//                 <div className=" flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>

//                 <div className=" flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//                 <div className=" flex justify-center items-center h-[2.4vw] ">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[18.4vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   वार्ड नं.
//                 </h1>
//                 <div className=" flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>

//                 <div className=" flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//                 <div className=" flex justify-center items-center h-[2.4vw] ">
//                   <input className="outline-none" type="text" name="" id="" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[10.4vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   जिला
//                 </h1>
//                 <div className="w-[10.4vw] flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   <input
//                     className="w-[6.4vw]  outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>

//                 <div className=" w-[10.4vw] flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   <input
//                     className="w-[6.4vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div className="w-[10.4vw] flex justify-center items-center h-[2.4vw] ">
//                   <input
//                     className="w-[6.4vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col font-semi text-[0.93rem] tracking-tight">
//                 <h1 className="bg-gray-200 flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   गाँउ तोला
//                 </h1>
//                 <div className="flex justify-center items-center h-[2.6vw] border-b-2 border-black">
//                   <input
//                     className="pl-[1vw] w-[4.4] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>

//                 <div className="flex justify-center items-center h-[2.4vw] border-b-2 border-black">
//                   <input
//                     className="pl-[1vw] w-[3.4] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div className="flex justify-center items-center h-[2.4vw] ">
//                   <input
//                     className="pl-[1vw] w-[3.4] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* section-3 end */}
//           {/* section-4 start */}
//           <h1 className="font-semibold text-[0.86rem] pl-[3.08vw] tracking-tight ">
//             भाग १-रोग को अवस्था
//           </h1>
//           <div className=" mt-[0vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto ">
//             <h1 className="w-full h-[2vw] border-b-2 border-black flex justify-center items-center text-[0.93rem] font-semi bg-gray-200">
//               इतिहास
//             </h1>
//             <div className="flex ">
//               <div className="h-[4vw] w-[56%] flex flex-col">
//                 <div className="flex h-[3.2vw] border-r-2 border-black  border-b-2   ">
//                   <h1 className="w-[16vw] bg-gray-200 flex justify-center items-center text-[0.93rem] font-semi  border-r-2 border-black font-semi  tracking-tight ">
//                     प्रारम्भिक लक्षन
//                   </h1>
//                   <div className="w-[20vw]">
//                     <input
//                       className="outline-none w-[22vw] pl-[2vw]"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex">
//                   <h1 className="w-[16vw] bg-gray-200 flex justify-center items-center text-[0.93rem] font-semi  border-r-2 border-black font-semi ] tracking-tight ">
//                     प्लक्षन को अवदी
//                   </h1>
//                   <div className="w-[12vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                     <input
//                       className="outline-none w-[6vw] pl-[2vw]"
//                       type="text"
//                       placeholder="वर्ष"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="w-[11vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                     <input
//                       className="outline-none w-[6vw] pl-[2vw]"
//                       type="text"
//                       placeholder="महिना"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className=" w-[12.8vw] border-r-2 border-black font-semi text-[0.93rem] tracking-tight">
//                     <input
//                       className="outline-none w-[6vw] pl-[2vw]"
//                       type="text"
//                       placeholder="दिन"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="h-[4vw] w-[44%] flex">
//                 <h1 className="font-semi text-[0.90rem] tracking-tight w-[16vw] border-black border-r-2 flex justify-center items-center bg-gray-200 ">
//                   जचाँउन आउनका कारण
//                 </h1>
//                 <div className="">
//                   <input
//                     className="outline-none pl-[2vw] pt-[0.56vw]"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* section-4 end */}
//           {/* section-5 start */}
//           <div className=" mt-[0vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto ">
//             <div className="flex ">
//               <h1 className="font-semi tracking-tight text-[0.90rem] w-[39vw] bg-gray-200 flex justify-center items-center border-r-2 border-t-2  border-b-2 border-black h-[2vw] mt-[0.45vw]">
//                 परिवार वा नातामा कशेलाई कुस्टरोग
//               </h1>
//               <div className="w-[10vw] h-[2vw] font-semi tracking-tight text-[0.90rem] flex mt-[0.45vw]">
//                 <h1 className="h-[2vw] ml-[4vw] pt-[0.20vw]">थियो</h1>
//                 <div className="h-[2vw] w-[4vw] border-2 border-black ml-[2vw] ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="w-[10vw] h-[2vw] font-semi tracking-tight text-[0.90rem] flex">
//                 <h1 className="h-[2vw] ml-[4vw] pt-[0.20vw] mt-[0.45vw]">
//                   थिएन
//                 </h1>
//                 <div className="h-[2vw] w-[4vw] border-2 border-black ml-[2vw] mt-[0.45vw] ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className=" h-[3vw] font-semi tracking-tight text-[0.90rem] flex">
//                 <h1 className="h-[2vw] ml-[4vw] pt-[0.20vw] mt-[0.45vw]">
//                   थियो मने नाता:
//                 </h1>
//                 <div className="h-[2vw] w-[20vw] border-2 border-black ml-[2vw] mt-[0.45vw] ">
//                   <input
//                     className="w-[10vw]  h-[1vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//             <h1 className="flex justify-center items-center bg-gray-200 border-b-2 border-t-2 border-black font-semi text-[0.83rem]">
//               पहिले कुस्ट्रोग उपचार नलिएको
//             </h1>
//             <div className="flex h-[3vw]">
//               <div className="w-[12vw] h-[2vw] font-bold tracking-tight text-[0.90rem] flex mt-[0.45vw]">
//                 <h1 className="h-[2vw] ml-[1vw] pt-[0.40vw] ">MB MDT</h1>
//                 <div className="h-[2vw] w-[4vw] border-2 border-black ml-[2vw] ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="w-[16vw] h-[2vw] font-bold tracking-tight text-[0.90rem] flex mt-[0.45vw]">
//                 <h1 className="h-[2vw] ml-[4.6vw] pt-[0.20vw]">PB MDT</h1>
//                 <div className="h-[2vw] w-[4vw] border-2 border-black ml-[2vw] ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="w-[20vw] h-[2vw] font-bold tracking-tight text-[0.90rem] flex mt-[0.45vw]">
//                 <h1 className="h-[2vw] ml-[4vw] pt-[0.20vw]">
//                   कति महिना खाएको
//                 </h1>
//                 <div className="h-[2vw] w-[4vw] border-2 border-black ml-[2vw] ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="w-[36vw] h-[2vw] font-bold tracking-tight text-[0.90rem] flex ">
//                 <h1 className="h-[2vw] ml-[2vw] pt-[0.20vw] mt-[0.54vw]">
//                   अन्तिम मात्रा कति महिना अगाडि खाएको
//                 </h1>
//                 <div className="h-[2vw] w-[12vw] border-2 mt-[0.54vw] border-black ml-[2vw] ">
//                   <input
//                     className="w-[8vw] outline-none h-[1vw]"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mx-[0.45vw] flex h-[4vw] my-[0.56vw] border-r-2   border-l-2   border-t-2 border-b-2 border-black">
//               <div className="flex font-bold text-[0.93rem] border-black border-r-2 ">
//                 <h1 className="flex justify-center items-center w-[4vw] bg-gray-200">
//                   नया
//                 </h1>
//                 <div className="input-sec  border-black border-l-2 w-[5vw] flex justify-center items-center">
//                   <input
//                     className="w-[4vw]  outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div className="input-sec  border-black border-l-2 w-[30vw] flex justify-center items-center">
//                   <input
//                     className="w-[26vw]  outline-none text-[0.76rem] tracking-tight"
//                     type="text"
//                     name=""
//                     id=""
//                     placeholder="नयाँ बिरामी भनेला कहिलेपनि दर्ता नभएको बिरामी लाई बुझाउँछ।"
//                   />
//                 </div>
//               </div>
//               <div className="flex ml-[1vw]">
//                 <h1 className="flex justify-center items-center w-[10vw] bg-gray-200 text-[0.83rem] font-bold tracking-tight border-l-2 border-r-2 border-black">
//                   पहिले दर्ता भइसकेको
//                 </h1>
//                 <div className="flex flex-col w-[8vw] ml-[2.45vw]">
//                   <h1 className="tracking-tigh text-[0.75rem] font-bold h-[1.3vw] ">
//                     Transferred in
//                   </h1>
//                   <div className="ml-[0.74vw] w-[3vw] border-2 border-black flex justify-center items-center">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col w-[8vw] ml-[1.45vw]">
//                   <h1 className="tracking-tigh text-[0.75rem] font-bold h-[1.3vw]  ml-[0.30vw]  ">
//                     Relapsed
//                   </h1>
//                   <div className="ml-[0.74vw] w-[3vw] border-2 border-black flex justify-center items-center">
//                     <input
//                       className="w-[2vw] outline-none "
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col w-[8vw] ml-[2vw]">
//                   <h1 className="tracking-tigh text-[0.75rem] font-bold h-[1.3vw] ml-[0.30vw] ">
//                     Re-starter
//                   </h1>
//                   <div className="ml-[0.74vw] w-[3vw] border-2 border-black flex justify-center items-center">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col w-[8vw] ml-[0.45vw]">
//                   <h1 className="tracking-tigh text-[0.75rem] font-bold h-[1.3vw]  ml-[0.90vw] ">
//                     Others
//                   </h1>
//                   <div className="ml-[0.74vw] w-[3vw] border-2 border-black flex justify-center items-center">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex h-[5vw] mx-[0.34vw] my-[0.45vw]  border-2 border-black ">
//               <h1 className="w-[10vw] flex justify-center items-center bg-gray-200 border-r-2 border-black text-[0.83rem] font-bold tracking-tight">
//                 पत्ता लागेको तरिका
//               </h1>
//               <div className="flex flex-col w-[26vw]  ">
//                 <h1 className=" flex justify-center items-center tracking-tigh text-[0.83rem] font-bold h-[1.4vw]   mt-[0.24vw] ">
//                   Contact Examination
//                 </h1>
//                 <div className="ml-[4.8vw] flex justify-center items-center mt-[0.44vw]  w-[16vw] border-2 border-black">
//                   <input
//                     className="w-[6vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[18vw]  ">
//                 <h1 className=" flex justify-center items-center tracking-tigh text-[0.83rem] font-bold h-[1.4vw]  mt-[0.24vw] ">
//                   Voluntarily
//                 </h1>
//                 <div className="ml-[7vw] flex justify-center items-center mt-[0.44vw]  w-[4vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[9.6vw]  ">
//                 <h1 className=" flex justify-center items-center tracking-tigh text-[0.83rem] font-bold h-[1.4vw]   mt-[0.24vw] ">
//                   Referred
//                 </h1>
//                 <div className="ml-[2.8vw] flex justify-center items-center mt-[0.44vw]  w-[4vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-[10vw]  ">
//                 <h1 className=" flex justify-center items-center tracking-tigh text-[0.83rem] font-bold h-[1.4vw] ml-[1vw]   mt-[0.64vw] ">
//                   Others
//                 </h1>
//                 <div className=" flex justify-center items-center mt-[0.44vw]  w-[27vw]">
//                   <h1 className="flex font-bold justify-center items-center tracking-tigher text-[0.73rem] mt-[0.66vw]">
//                     (School Survey, Active Case Detection, LPEP..............)
//                   </h1>
//                 </div>
//               </div>
//               <div className="w-[4vw] border-2 border-black h-[2vw] mt-[0.34vw] flex justify-center items-center">
//                 <input
//                   className="w-[2vw] h-[1.4vw] outliline-none"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//             </div>
//           </div>
//           {/* section-4 end */}
//           {/* section-5 start */}
//           <div className=" mt-[0.23vw] mb-2 mx-10 justify-center align-center border-2 border-black   overflow-y-auto ">
//             <div className="flex ">
//               <div className="w-[68%] bg-gray-200  border-2 border-black ml-[0.54vw] my-[0.80vw]">
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="flex justify-center items-center w-[53.90vw]  border-r-2 border-black">
//                     छाला/आँखा जाँचको विवरण
//                   </h1>
//                   <h1 className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black">
//                     छ
//                   </h1>
//                   <h1 className="flex justify-center items-center w-[3vw]">
//                     छैन
//                   </h1>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw] w-[54vw]  border-r-2 border-black">
//                     छुँदा थाहा नहुने दाग
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     दागको संख्या
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white border-r-2 border-black">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     नयाँ मांसपेशी कमजोर वा छुन्दा थाहा नहुने छ।
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     छालामा
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     छालामा सुखापन Infiltration
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  border-b-2 border-black h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     ल्यागफतलमस
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>

//                 <div className="flex  text-[0.83rem] font-semibold tracking-tight  h-[2vw]">
//                   <h1 className="pl-[0.47vw]  w-[54vw]  border-r-2 border-black">
//                     आँखा रातो छ ?
//                   </h1>
//                   <div className="flex justify-center items-center w-[4.4vw]  border-r-2 border-black bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center w-[4.4vw]  bg-white">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="ml-[3.54vw] mr-[3vw] border-2 border-black my-[0.86vw] w-[30vw]">
//                 <h1 className="flex justify-center items-center font-bold text-[0.83rem] bg-gray-100 h-[3vw] border-b-2 border-black">
//                   स्पेयर मिति
//                 </h1>
//                 <div className="flex border-b-2 border-black h-[2vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     Skin Smear Sites
//                   </h1>
//                   <h1 className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     Date
//                   </h1>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     Date
//                   </h1>
//                 </div>
//                 <div className="flex border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem]  ">
//                     (R) Earlobe
//                   </h1>
//                   <div className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </h1>
//                 </div>
//                 <div className="flex border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem]  ">
//                     (L) Earlobe
//                   </h1>
//                   <div className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </h1>
//                 </div>
//                 <div className="flex border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem]  ">
//                     Lesion 1 or (R) Arm
//                   </h1>
//                   <div className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </h1>
//                 </div>
//                 <div className="flex border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem]  ">
//                     Lesion 2 or (R) Thigh
//                   </h1>
//                   <div className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </h1>
//                 </div>
//                 <div className="flex h-[2.1vw] ">
//                   <h1 className="w-[12.4vw]  border-r-2 border-black  flex justify-center items-center font-medium text-[0.83rem]  ">
//                     BI
//                   </h1>
//                   <div className="border-r-2 w-[6vw] border-black  flex justify-center items-center font-medium text-[0.83rem] ">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <h1 className=" w-[6vw] flex justify-center items-center font-medium text-[0.83rem]">
//                     <input
//                       className="w-[4vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* section-5 end */}
//           {/* sec-6 start */}
//           <div className="flex  ">
//             <div className="w-[64.78%]  mb-2 ml-[3vw] border-2 border-black overflow-y-auto flex h-[12.3vw] ">
//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[8vw] border-r-2 border-b-2 border-black h-[6vw]  bg-gray-200 ">
//                   स्यानुको स्थिति
//                 </h1>
//                 <h1 className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[8vw] border-r-2 border-black  border-b-2 h-[3vw] bg-gray-200 ">
//                   Thickened
//                 </h1>

//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[8vw] border-r-2 border-black h-[3vw] ">
//                   Tender
//                 </h1>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[20vw] border-b-2  border-r-2 border-black h-[3.8vw] ">
//                   Ulnar
//                 </h1>
//                 <div className="flex  border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[10vw]   border-r-2 border-black ">
//                     R
//                   </h1>
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[10vw]   border-r-2 border-black">
//                     L
//                   </h1>
//                 </div>
//                 <div className="flex ">
//                   <div className="w-[10vw] border-r-2 border-b-2 h-[2.96vw] border-black flex justify-center items-center">
//                     <input className="w-[6vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[10vw] border-r-2 border-b-2 h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[6vw] outline-none" type="text" />
//                   </div>
//                 </div>
//                 <div className="flex">
//                   <div className="w-[10vw] border-r-2 h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[6vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[10vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[6vw] outline-none" type="text" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[10vw] border-b-2  border-r-2 border-black h-[3.8vw] ">
//                   Median
//                 </h1>
//                 <div className="flex  border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[5vw]   border-r-2 border-black ">
//                     R
//                   </h1>
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[5vw]   border-r-2 border-black">
//                     L
//                   </h1>
//                 </div>
//                 <div className="flex  border-b-2 border-black h-[3.01vw] ">
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//                 <div className="flex   border-black h-[2.8vw] ">
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[10vw] border-b-2  border-r-2 border-black h-[3.8vw] ">
//                   Radial
//                 </h1>
//                 <div className="flex  border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[5vw]   border-r-2 border-black ">
//                     R
//                   </h1>
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[5vw]   border-r-2 border-black">
//                     L
//                   </h1>
//                 </div>
//                 <div className="flex  border-b-2 border-black h-[3.01vw] ">
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//                 <div className="flex   border-black h-[3vw] ">
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[5vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[8vw] border-b-2  border-r-2 border-black h-[3.8vw] ">
//                   Lateral Poplitial
//                 </h1>
//                 <div className="flex  border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black ">
//                     R
//                   </h1>
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black">
//                     L
//                   </h1>
//                 </div>
//                 <div className="flex  border-b-2 border-black h-[3.01vw] ">
//                   <div className="w-[4vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[4vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//                 <div className="flex   border-black h-[3vw] ">
//                   <div className="w-[4vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[4vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[7.69vw] border-b-2  border-black h-[3.8vw] ">
//                   Median
//                 </h1>
//                 <div className="flex  border-b-2 border-black h-[2.2vw] ">
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[3.86vw] border-r-2  border-black ">
//                     R
//                   </h1>
//                   <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[3.86vw]   border-black">
//                     L
//                   </h1>
//                 </div>
//                 <div className="flex  border-b-2 border-black h-[3.01vw] ">
//                   <div className="w-[3.89vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[3.6vw] h-[3vw] flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//                 <div className="flex  h-[2.9vw] ">
//                   <div className="w-[3.89vw] border-r-2  h-[3vw] border-black flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                   <div className="w-[3.6vw] h-[3vw] flex justify-center items-center">
//                     <input className="w-[3vw] outline-none" type="text" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* section-5 end */}
//             <div className="w-[26%] h-[36vw]  mb-2 ml-[3vw] justify-center align-center border-[1px] border-black overflow-y-auto  ">
//               <img
//                 className="object-cover pt-[1vw] pl-[1.5vw]"
//                 src="/Human.png"
//                 alt=""
//               />
//               <div className="flex text-[1.2vw] font-medium border-t-[1px] border-black tracking-tight">
//                 <h1 className="ml-[1.84vw] mt-[0.67vw]">चिन्ह:</h1>
//                 <div className="w-[2.4vw] h-[2.4vw] border-[1px]  mt-[0.67vw] border-black rounded-full flex justify-center items-center ml-[0.34vw]">
//                   <input
//                     className="pl-[0.34vw] outline-none  w-[1vw]   rounded-full"
//                     type="text"
//                   />
//                 </div>
//                 <h1 className=" mt-[0.67vw] ml-[0.20vw] tracking-wide">
//                   =दाग,\=
//                 </h1>
//                 <h1 className="ml-[0.34vw] mt-[0.67vw]">स्नायु ,</h1>
//                 <div className="w-[2vw] h-[2vw] border-[1px]  mt-[0.67vw] border-black rounded-tr-[20px] rounded-tl-[20px]  rounded-bl-[16px]  rounded-br-[17px]  flex justify-center items-center ml-[0.34vw]">
//                   ||||
//                 </div>

//                 <h1 className="ml-[0.34vw] mt-[0.67vw]"> छुँदा थाहा नहुने,</h1>
//               </div>
//               <div className="flex ml-[2vw] text-[1.1rem] font-medium">
//                 <h1 className="mt-[0.56vw]">Infiltration </h1>
//                 <h1 className="ml-[0.59vw] mt-[0.54vw]">:⫶:⫶ </h1>
//                 <h1 className="mt-[0.56vw] ml-[2vw]">Ulcer = </h1>
//                 <h1 className=" text-[2vw]">⨂</h1>
//               </div>
//             </div>
//           </div>

//           {/*
//           section-6 start */}
//           <div className="w-[64.8%] mt-[-19.90vw] ml-[3vw]  border-2 border-black overflow-y-auto flex h-[11.66vw]">
//             <div className="flex flex-col font-bold text-[0.83rem] tracking-tight">
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[8vw] h-[3.6vw] bg-gray-100 border-b-2  border-r-2 border-black">
//                 निदानको समस्या प्रतिक्रिया
//               </h1>
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[8vw] h-[2.6vw] bg-gray-100 border-b-2  border-r-2 border-black ">
//                 Type I
//               </h1>
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[8vw] h-[2.6vw] bg-gray-100 border-b-2  border-r-2 border-black ">
//                 Type II
//               </h1>
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[8vw] h-[2.6vw] bg-gray-100  border-r-2 border-black ">
//                 Neuritis
//               </h1>
//             </div>
//             <div className="flex flex-col font-bold text-[0.83rem] tracking-tight">
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[3.6vw] bg-gray-100 border-b-2  border-r-2 border-black">
//                 Mild
//               </h1>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]  border-b-2  border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]  border-b-2  border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]   border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//             </div>
//             <div className="flex flex-col font-bold text-[0.83rem] tracking-tight">
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[3.6vw] bg-gray-100 border-b-2  border-r-2 border-black">
//                 Severe
//               </h1>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]  border-b-2  border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]  border-b-2  border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//               <div className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[6vw] h-[2.6vw]   border-r-2 border-black ">
//                 <input className="outline-none w-[4vw] h-[2vw]" type="text" />
//               </div>
//             </div>
//             <div className="flex flex-col tracking-tight">
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[12vw] h-[6.2vw] border-b-2  border-r-2 border-black font-bold text-[0.90rem] ">
//                 असमर्थको श्रेणी
//               </h1>
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[12vw] h-[2.6vw] bg-gray-100 border-b-2  border-r-2 border-black font-bold text-[0.83rem]  ">
//                 निदानको समस्या
//               </h1>
//               <h1 className="flex justify-center items-center pl-[0.34vw]  whitespace-wrap w-[12vw] h-[2.6vw] bg-gray-100  border-r-2 border-black  font-bold text-[0.83rem]">
//                 RFT को समस्या
//               </h1>
//             </div>
//             <div className="flex flex-col">
//               <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[8vw] border-b-2  border-r-2 border-black h-[3.2vw] ">
//                 आँखा
//               </h1>
//               <div className="flex  border-b-2 border-black h-[3vw] ">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black ">
//                   दा(०/२)
//                 </h1>
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black">
//                   बा (०/२)
//                 </h1>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  border-b-2 b ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[8vw] border-b-2  border-r-2 border-black h-[3.2vw] ">
//                 हात
//               </h1>
//               <div className="flex  border-b-2 border-black h-[3vw] ">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black leading-4">
//                   दा
//                   <br /> (०/१/२)
//                 </h1>
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black  leading-4">
//                   बा <br /> (०/१/२)
//                 </h1>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  border-b-2 b ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[8vw] border-b-2  border-r-2 border-black h-[3.2vw] ">
//                 गोडा
//               </h1>
//               <div className="flex  border-b-2 border-black h-[3vw] ">
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black  leading-4 ">
//                   दा <br /> (०/१/२)
//                 </h1>
//                 <h1 className="flex justify-center items-center text-[0.83rem] bg-gray-200 tracking-tight font-bold w-[4vw]   border-r-2 border-black ">
//                   बा
//                   <br /> (०/१/२)
//                 </h1>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  border-b-2 b ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex h-[2.6vw]  border-r-2 border-black  ">
//                 <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[4vw]  border-r-2 border-black  ">
//                   <input
//                     className="w-[2vw] outline-none"
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.8vw]  ">
//                     <input
//                       className="w-[2vw] outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col border-r-2 border-black">
//               <div className="w-[4vw] bg-gray-200 h-[6.19vw] flex whitespace-nowrap border-b-2 border-black ">
//                 <h1 className="font-bold tracking-tighter -rotate-90 ml-[1vw]  text-[0.83rem] ">
//                   अधिकतम श्रेणी <br /> (०,१ २, )
//                 </h1>
//               </div>
//               <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.99vw]  border-b-2 border-black h-[2.68vw] ">
//                 <input
//                   className="w-[2vw] outline-none"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//               <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.99vw]   h-[2.60vw] ">
//                 <input
//                   className="w-[2vw] outline-none"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="border-b-2 border-black bg-gray-200 text-[0.83rem] font-bold   w-[3.56vw]  h-[6.24vw]">
//                 <h1 className="-rotate-90 leading-3 whitespace-nowrap mt-[2.68vw] ">
//                   EHF Score <br /> (0-१२)
//                 </h1>
//               </div>
//               <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold w-[3.54vw]  border-b-2 border-black h-[2.60vw]">
//                 <input
//                   className="w-[2vw] outline-none"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//               <div className="flex justify-center items-center text-[0.83rem] tracking-tight font-bold h-[2.60vw] w-[3.52vw]">
//                 <input
//                   className="w-[2vw] outline-none"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex ml-[3vw] border-b-2   border-black border-l-2 w-[64vw] flex-col">
//             <div className="font-bold text-[0.93rem] border-r-2 border-black flex">
//               <h1 className="flex justify-center items-center whitespace-wrap w-[32.3vw] h-[3.2vw] bg-gray-100 border-r-2  border-b-2 border-black ">
//                 कुष्टरोग को प्रकार
//               </h1>
//               <h1 className="flex justify-center items-center whitespace-wrap w-[32vw] h-[3.2vw] bg-gray-100 border-b-2 border-black ">
//                 हालको उपचार
//               </h1>
//             </div>
//             <div className="font-bold text-[0.93rem] border-r-2 border-black flex">
//               <div className="flex justify-evenly items-center whitespace-wrap w-[32.3vw] h-[3.2vw]  border-r-2  border-black ">
//                 <h1>MB</h1>
//                 <div className="w-[3vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] h-[1.4vw] outline-none "
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <h1>PB</h1>
//                 <div className="w-[3vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] h-[1.4vw] outline-none "
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-evenly items-center whitespace-wrap w-[32vw] h-[3.2vw] bg-gray-100k ">
//                 <h1>MB MDT</h1>
//                 <div className="w-[3vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] h-[1.4vw] outline-none "
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//                 <h1>PB MDT</h1>
//                 <div className="w-[3vw] border-2 border-black">
//                   <input
//                     className="w-[2vw] h-[1.4vw] outline-none "
//                     type="text"
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex my-[4vw] flex-col ml-[4vw]">
//             <div className="flex">
//               <h1 className=" text-[1rem] font-bold tracking-wide mt-[1vw]">
//                 जाँच गर्ने नाम:
//               </h1>
//               <input
//                 className="w-[20vw] ml-[4vw]  outline-none border-b-[2px] border-black mr-[2vw]"
//                 type="text"
//                 name=""
//                 id=""
//               />

//               <h1 className="ml-[20vw] text-[1rem] font-bold tracking-wide mt-[1vw] ">
//                 पदः
//               </h1>
//               <input
//                 className="w-[20vw] ml-[4vw] mt-[1vw] outline-none border-b-[2px] border-black mr-[2vw]"
//                 type="text"
//                 name=""
//                 id=""
//               />
//             </div>
//             <div className="flex">
//               <h1 className=" text-[1rem] font-bold tracking-wide mt-[1vw]">
//                 दस्तखत:
//               </h1>
//               <input
//                 className="w-[20vw] ml-[6.6vw] mt-[1vw] outline-none border-b-[2px] border-black mr-[2vw]"
//                 type="text"
//                 name=""
//                 id=""
//               />
//               <h1 className=" text-[1rem] font-bold tracking-wide mt-[1vw] ml-[14vw]">
//                 मिति (ग/म/सा)
//               </h1>
//               <input
//                 className="w-[20vw] ml-[4vw] mt-[1vw] outline-none border-b-[2px] border-black mr-[2vw]"
//                 type="date"
//                 name=""
//                 id=""
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Page3;
