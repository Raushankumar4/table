// import React from "react";

// const Page3 = () => {
//   return (
//     <>
//       <form action="">
//         {/* section-1 start */}

//         <div className="Form-Container mb-[1vw] mx-[12vw]">
//           <section className="section-2">
//             <table class="border-2 border-collapse border-black w-full overflow-ellipsis">
//               <thead>
//                 <tr>
//                   <th className="border-2 border-black w-[10vw]"> भाग ७</th>
//                   <th className="border-2 border-black w-[46vw] ">
//                     Assessment of Disability and Nerve Function
//                   </th>
//                   <th className="border-2 border-black">Comments</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th className="border-black border-2 h-[14vw]">
//                     <h1>Date</h1>
//                     <input
//                       className="tracking-tighter font-normal text-gray-300 px-[0.60vw]"
//                       type="date"
//                     />
//                     <h1 className="mt-[1vw]">Accessor:</h1>
//                   </th>
//                   <td className="border-2 border-black">
//                     <img
//                       className="w-full object-cover"
//                       src="./nerve-img-1.png"
//                       alt=""
//                     />
//                   </td>
//                   <td>
//                     <input
//                       className=" pl-[1vw] w-full h-[10vw] overflow-hidden outline-none"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th className="border-black border-2 h-[14vw]">
//                     <h1>Date</h1>
//                     <input
//                       className="tracking-tighter font-normal text-gray-300 px-[0.60vw]"
//                       type="date"
//                     />
//                     <h1 className="mt-[1vw]">Accessor:</h1>
//                   </th>
//                   <td className="border-2 border-black">
//                     <img
//                       className="w-full object-cover"
//                       src="./nerve-img-2.png"
//                       alt=""
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className=" pl-[1vw] w-full h-[10vw] overflow-hidden outline-none"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th className="border-black border-2 h-[14vw]">
//                     <h1>Date</h1>
//                     <input
//                       className="tracking-tighter font-normal text-gray-300 px-[0.60vw]"
//                       type="date"
//                     />
//                     <h1 className="mt-[1vw]">Accessor:</h1>
//                   </th>
//                   <td className="border-2 border-black">
//                     <img
//                       className="w-full object-cover"
//                       src="./nerve-img-3.png"
//                       alt=""
//                     />
//                   </td>
//                   <td>
//                     <input
//                       className=" pl-[1vw] w-full h-[10vw] overflow-hidden outline-none"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th colSpan={3} className="border-2  border-black">
//                     <img
//                       className="w-full object-cover"
//                       src="foot-sec.png"
//                       alt=""
//                     />
//                   </th>
//                 </tr>
//               </tbody>
//             </table>
//           </section>
//           {/* section-1 end */}

//           {/* section-2 start */}
//           <h1
//             className="font-bold text-[1.2rem] mb-[0.20vw] mt-4

//          "
//           >
//             भाग ८-बिमारीको परिवार सम्पर्क जाँच अभिलेख
//           </h1>
//           <section className="section-2">
//             <table class="border-collapse border border-slate-900 w-full overflow-ellipsis">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th rowSpan={2} className="border-2 border-black w-[4vw]">
//                     कं. सं.
//                   </th>
//                   <th rowSpan={2} className="border-2 border-black w-[20vw]">
//                     नाम र थार
//                   </th>
//                   <th rowSpan={2} className="border-2 border-black w-[8rem]">
//                     उमेर
//                   </th>
//                   <th colSpan={2} className="border-2 border-black">
//                     लिङ्ग
//                   </th>
//                   <th rowSpan={2} colSpan={2} className="border-2 border-black">
//                     बिरामीको नाता
//                   </th>

//                   <th colSpan={2} className="border-2 border-black">
//                     निदान
//                   </th>
//                   <th rowSpan={2} className="border-2 border-black">
//                     कैफियात
//                   </th>
//                 </tr>
//                 <tr className="bg-gray-200">
//                   <th className="border-2 border-black">महिला </th>
//                   <th className="border-2 border-black"> पुरुष</th>
//                   <th className="border-2 border-black"> एम.वी. </th>
//                   <th className="border-2 border-black">पी.वी. </th>
//                 </tr>
//                 <tr className="bg-gray-200">
//                   <th className="border-2 border-black">1</th>
//                   <th className="border-2 border-black">2</th>
//                   <th className="border-2 border-black">3</th>
//                   <th className="border-2 border-black">4</th>
//                   <th className="border-2 border-black">5</th>
//                   <th colSpan={2} className="border-2 border-black">
//                     6
//                   </th>
//                   <th className="border-2 border-black">7</th>
//                   <th className="border-2 border-black">8</th>
//                   <th className="border-2 border-black">9</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.78vw] w-[4vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[1vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.58vw] w-[2vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td colSpan={2} className="border-2 border-black ">
//                     <input
//                       className="pl-[0.80vw] w-[10vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                   <td className="border-2 border-black ">
//                     <input
//                       className="pl-[0.20vw] w-[3vw] outline-none overflow-hidden"
//                       type="text"
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </section>
//           {/* section-2 end */}
//         </div>
//       </form>
//     </>
//   );
// };

// export default Page3;
