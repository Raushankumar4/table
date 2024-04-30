// import { useForm } from "react-hook-form";

// const PageThree = () => {
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
//       <div className="Page3-Container mx-[8vw]  mt-[2vw] overflow-ellipsis">
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
//                     className="border-2 h-[7vw] border-black bg-gray-100 w-[24vw] font-bold text-[1.2vw]"
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
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//               </thead>
//               <tbody className="text-[1vw] font-semi">
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">36</th>
//                   <th
//                     rowSpan={15}
//                     className="border-2 border-black bg-gray-100 w-[4vw]"
//                   >
//                     <h1 className="-rotate-90">वर्गीकरण</h1>
//                     <h1 className="-rotate-90 mt-[20vw]">उपचार</h1>
//                   </th>
//                   <th
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 w-[7vw]"
//                   >
//                     औलो
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     फाल्सिप्यारम
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">37</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     फाल्सिप्यारम नभएको
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[औलो फाल्सिप्यारम नभएको जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">38</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     धेरै कडा ज्वरो जन्य रोग (Very severe febrile)
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[धेरै कडा ज्वरो जन्य रोग (Very severe febrile) जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">39</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">दादुरा</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[दादुरा जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">40</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       कानको समस्या
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कानको समस्या जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">41</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">ज्वरो</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[ज्वरो जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">42</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       मध्यम कुपोषण
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[मध्यम कुपोषण जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">43</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">कडा कुपोषण</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[कडा कुपोषण जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">44</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">रक्तअल्पता</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[रक्तअल्पता जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">45</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       अन्य बर्गिकरण
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य बर्गिकरण जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">46</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       एमोक्सिसिलिन बाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[एमोक्सिसिलिन बाट जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">47</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       पुर्नजलिय झोल र जिड्र चक्की वाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[पुर्नजलिय झोल र जिड्र चक्की वाट जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">48</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       जुकाको औषधीबाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[जुकाको औषधीबाट जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">49</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       भिटामिन ए बाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[भिटामिन ए बाट जना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">50</th>
//                   <th colSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       अन्य (जस्तै घरेलु/प्राथमिक उपचार)
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[अन्य (जस्तै घरेलु/प्राथमिक उपचार) जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">51</th>
//                   <th colSpan={4} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       फलोअप संख्या
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[फलोअप संख्या जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">52</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={3}
//                     className="border-2 border-black  bg-gray-100"
//                   >
//                     रेफर गरेको
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       श्वासप्रश्वास रोग भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको श्वासप्रश्वास रोग भएका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">53</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       झाडापखाला भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[रेफर गरेको झाडापखाला भएका जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">54</th>

//                   <th
//                     colSpan={2}
//                     className="border-2 border-black bg-gray-100 tarcking-tight"
//                   >
//                     <h1 className="flex flex-start pl-[0.45vw]">अन्य</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[अन्य जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">55</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={3}
//                     className="border-2 border-black  bg-gray-100"
//                   >
//                     <h1 className="pb-[0.60vw]">मृत्यूसंख्या</h1>
//                     <h1>(कारण अनुसार)</h1>
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       श्वासप्रश्वास रोगवाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) श्वासप्रश्वास रोगबाट जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">56</th>

//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       झाडापखालावाट
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[झाडापखालावाट जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">57</th>

//                   <th
//                     colSpan={2}
//                     className="border-2 border-black bg-gray-100 tarcking-tight"
//                   >
//                     <h1 className="flex flex-start pl-[0.45vw]">अन्य</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (कारण अनुसार) अन्य जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">58</th>

//                   <th
//                     colSpan={2}
//                     rowSpan={2}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="pb-[0.60vw]">मृत्यूसंख्या</h1>{" "}
//                     <h1>(उमेर अनुसार)</h1>
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">२-११ महिना</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) २-११ महिना जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">59</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">१२-५९ महिना</h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100"> जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[मृत्यूसंख्या (उमेर अनुसार) १२-५९ महिना जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr
//                   className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
// "
//                 >
//                   <th className="border-2 border-black ">(ग)</th>
//                   <th colSpan={12} className="border-2 border-black ">
//                     <h1 className="flex flex-start pl-[0.44vw]">
//                       पोषण कार्यक्रम
//                     </h1>
//                   </th>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">60</th>
//                   <th
//                     rowSpan={6}
//                     className="border-2 border-black bg-gray-100 "
//                   >
//                     <h1 className="-rotate-90">बालबालिकाको पोषण स्थिति</h1>
//                   </th>
//                   <th rowSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="pb-[0.60vw]">०–११</h1>
//                     <h1>महिना</h1>
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       सामान्य तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ सामान्य तौल भएका जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">61</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       {" "}
//                       जोखिम तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ जोखिम तौल भएका जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">62</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       अति जोखिम तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[०–११ अति जोखिम तौल भएकाजना-7]", {})}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">63</th>
//                   <th rowSpan={3} className="border-2 border-black bg-gray-100">
//                     <h1 className="pb-[0.60vw]">१२–२३ </h1>
//                     <h1>महिना</h1>
//                   </th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       सामान्य तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ सामान्य तौल भएका जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">64</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       जोखिम तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ जोखिम तौल भएका जना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.4vw]">
//                   <th className="border-2 border-black bg-gray-100">65</th>
//                   <th colSpan={2} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       अति जोखिम तौल भएका
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-1]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-2]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-3]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-4]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-5]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-6]", {})}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register("Page-3[१२–२३ अति जोखिम तौल भएकाजना-7]", {})}
//                     />
//                   </td>
//                 </tr>

//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">66</th>
//                   <th colSpan={4} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.40vw]">
//                       जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[जन्मेको ६ महिना सम्म स्तनपान मात्र नगराएको जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">67</th>
//                   <th
//                     rowSpan={2}
//                     colSpan={3}
//                     className="border-2 border-black bg-gray-100"
//                   >
//                     <h1 className="pb-[0.60vw]">
//                       ६ महिनापछि स्तनपानका साथै ठोस,
//                     </h1>
//                     <h1 className="flex flex-start pl-[0.60vw]">
//                       अर्धठोस र नरम खाना शुरु{" "}
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">गराएको</th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु गराएको जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">68</th>
//                   <th className="border-2 border-black bg-gray-100">नगराएको</th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[६ महिनापछि स्तनपानका साथै ठोस अर्धठोस र नरम खाना शुरु नगराएको जना-7]",
//                         {}
//                       )}
//                     />
//                   </td>
//                 </tr>
//                 <tr
//                   className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
// "
//                 >
//                   <th className="border-2 border-black ">(घ)</th>
//                   <th colSpan={12} className="border-2 border-black ">
//                     <h1 className="flex flex-start pl-[0.44vw]">
//                       गर्भवती सेवा
//                     </h1>
//                   </th>
//                 </tr>
//                 <tr className="h-[3.6vw]">
//                   <th className="border-2 border-black bg-gray-100">69</th>
//                   <th colSpan={4} className="border-2 border-black bg-gray-100">
//                     <h1 className="flex flex-start pl-[0.45vw]">
//                       गर्भवती जाँच गराएका महिलाको संख्या
//                     </h1>
//                   </th>
//                   <th className="border-2 border-black bg-gray-100">जना</th>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-1]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-2]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-3]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-4]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-5]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-6]",
//                         {}
//                       )}
//                     />
//                   </td>
//                   <td className="border-2 border-black">
//                     <input
//                       className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
//                       type="text"
//                       {...register(
//                         "Page-3[गर्भवती जाँच गराएका महिलाको संख्या जना-7]",
//                         {}
//                       )}
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

// export default PageThree;
