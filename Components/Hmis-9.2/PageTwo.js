// import { useForm } from "react-hook-form";

// const PageTwo = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setError,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       console.log(data);

//       Object.keys(errors).forEach((name) => setError(name, { type: "clear" }));

//       reset();
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };
//   return (
//     <>
//       <div className="Page2-Container mx-[8vw]  mt-[2vw] overflow-ellipsis">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Section-1 Start */}
//           <section className="Section-1 my-[2vw]">
//             <table className="w-full border-2 border-black border-collapse text-[1vw] font-semi">
//               <thead>
//                 <tr className="h-[2.6vw]">
//                   <th
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 font-bold text-[1.2vw]"
//                   >
//                     क.सं.
//                   </th>
//                   <th
//                     colSpan={4}
//                     rowSpan={2}
//                     className="border-2 h-[7vw] border-black bg-gray-100 w-[17vw] font-bold text-[1.2vw]"
//                   >
//                     गाउँघर क्लिनिक कार्यक्रमः <h1>गतिविधिहरू</h1>
//                   </th>
//                   <th
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 w-[5vw] font-bold text-[1.2vw]"
//                   >
//                     ईकाइ
//                   </th>
//                   <th
//                     colSpan={6}
//                     className="border-2 border-black bg-gray-100 font-bold text-[1.2vw]"
//                   >
//                     गाउँघर क्लिनिक संचालन स्थान
//                   </th>
//                   <th
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 font-bold text-[1.2vw] w-[7vw]"
//                   >
//                     जम्मा
//                   </th>
//                 </tr>
//                 <tr className="h-[2.6vw]">
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black font-bold text-[1.2vw] bg-gray-100">
//                     1
//                   </th>
//                   <th
//                     colSpan={4}
//                     className="border-2 border-black font-bold text-[1.2vw] bg-gray-100"
//                   >
//                     सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा)
//                   </th>
//                   <th className="border-2 border-black font-semi text-[1vw] bg-gray-100">
//                     जना
//                   </th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[सेवा दिएको संख्या (क्लिनिकमा दर्ताको आधारमा) जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr
//                   className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
// "
//                 >
//                   <th className="border-2 border-black ">(क)</th>
//                   <th colSpan={12} className="border-2 border-black ">
//                     २ महिना मुनिका विरामी शिशुको वर्गिकरण तथा उपचार
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-[1vw] font-semi">
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">2</th>
//                   <th
//                     rowSpan={2}
//                     colSpan={2}
//                     className="border-2 border-black bg-gray-100"
//                   >
//                     जम्मा बिरामी संख्या
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">3</th>

//                   <th
//                     colSpan={2}
//                     className="border-2 border-black bg-gray-100 tracking-tight"
//                   >
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा बिरामी संख्या २९–५९ दिन सम्मका दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">4</th>
//                   <th
//                     rowSpan={16}
//                     className="border-2 border-black bg-gray-100 w-[4vw] "
//                   >
//                     <h1 className="-rotate-90 tracking-wide">वर्गीकरण</h1>
//                     <h1 className="-rotate-90 tracking-wide mt-[18vw]">
//                       उपचार
//                     </h1>
//                   </th>
//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="pb-[0.80vw]"> ब्याकटेरियाको</h1>{" "}
//                     <h1>गंभिर संक्रम</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">5</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको गंभिर संक्रम २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">6</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     निमोनिया
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">7</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[निमोनिया २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">8</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="pb-[0.80vw]"> ब्याकटेरियाको</h1>
//                     <h1>स्थानीय संक्रमण</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">9</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[ब्याकटेरियाको स्थानीय संक्रमण २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">10</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="pb-[0.80vw]"> कडा कमलपित्त</h1>
//                     <h1>(जण्डिस)</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">11</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कडा कमलपित्त (जण्डिस) २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">12</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     कमतौल
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">13</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[कमतौल २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">14</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     एम्पिसिलिन
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">15</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एम्पिसिलिन २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">16</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     एमोक्सिसिलिन
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">17</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[एमोक्सिसिलिन २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">18</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="pb-[0.80vw]"> जेण्टामाईसिन</h1>
//                     <h1>(गम्भीर संक्रमण)</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     पहिलो डोज पाएका संख्या जना
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पहिलो डोज पाएका संख्या जना जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">19</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     पुरा डोज पाएका संख्या जना
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जेण्टामाईसिन (गम्भीर संक्रमण) पुरा डोज पाएका संख्या जना जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">20</th>

//                   <th
//                     colSpan={3}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     रेफर गरेको
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">21</th>
//                   <th className="border-2 border-black bg-gray-100">
//                     २९–५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २९–५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">22</th>
//                   <th colSpan={4} className="border-2 border-black bg-gray-100">
//                     फलोअपविरामी संख्या
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[फलोअपविरामी संख्या जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">23</th>
//                   <th
//                     colSpan={2}
//                     rowSpan={3}
//                     className="border-2 border-black bg-gray-100"
//                   >
//                     मृत्यू मध्ये उमेर समूह संख्या
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     0-७ दिनसम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या 0-७ दिनसम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या  0-७ दिनसम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">24</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     ८-२८ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या ८-२८ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या  ८-२८ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">25</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     २९-५९ दिन सम्मका
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[ जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या २९-५९ दिन सम्मका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या २९-५९ दिन सम्मका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या २९-५९ दिन सम्मका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या २९-५९ दिन सम्मका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या २९-५९ दिन सम्मका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[मृत्यू मध्ये उमेर समूह संख्या  २९-५९ दिन सम्मका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr
//                   className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
// "
//                 >
//                   <th className="border-2 border-black ">(ख)</th>
//                   <th colSpan={12} className="border-2 border-black ">
//                     <h1 className="flex flex-start pl-[0.44vw]">
//                       २ महिना देखि ५ बर्ष सम्मका विरामी बच्चाको वर्गिकरण तथा
//                       उपचार
//                     </h1>
//                   </th>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">26</th>

//                   <th
//                     colSpan={3}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     जम्मा विरामी संख्या
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">बालिका</th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[रेफर गरेको २८ दिन सम्मका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालक जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">27</th>
//                   <th className="border-2 border-black bg-gray-100">बालिका</th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[जम्मा विरामी संख्या बालिका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">28</th>
//                   <th
//                     rowSpan={8}
//                     className="border-2 border-black w-[4vw] bg-gray-100"
//                   ></th>
//                   <th
//                     rowSpan={3}
//                     className="border-2 border-black  bg-gray-100"
//                   >
//                     श्वासप्रश्वास रोग
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     न्यूमोनिया नभएको रुघाखोकी
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया नभएको रुघाखोकी जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">29</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     न्यूमोनिया
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग न्यूमोनिया जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">30</th>

//                   <th
//                     colSpan={2}
//                     className="border-2 border-black bg-gray-100 tarcking-tight"
//                   >
//                     धेरै कडा रोग/कडा न्यूमोनिया
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[श्वासप्रश्वास रोग धेरै कडा रोग/कडा न्यूमोनिया जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">31</th>
//                   <th rowSpan={5} className="border-2 border-black bg-gray-100">
//                     झाडापखाला
//                   </th>
//                   <th
//                     rowSpan={3}
//                     className="border-2 border-black bg-gray-100 w-[8vw]"
//                   >
//                     जल वियोजन
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">
//                     जल वियोजन नभएको
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन जल वियोजन नभएको जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">32</th>

//                   <th className="border-2 border-black bg-gray-100">
//                     केही जल वियोजन
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">33</th>

//                   <th className="border-2 border-black bg-gray-100">
//                     कडा जल वियोजन
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन कडा जल वियोजन जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page2-first[झाडापखाला जल वियोजन केही जल वियोजन जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">34</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1>दीर्घ झाडापखाला</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[दीर्घ झाडापखाला जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">35</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1>आँउ रगत </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page2-first[आँउ रगत जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </section>
//           <input type="submit" value="Submit" />
//           <h1>Click OnSumit and Check Console(All Data in Console) </h1>
//         </form>
//       </div>
//     </>
//   );
// };

// export default PageTwo;
