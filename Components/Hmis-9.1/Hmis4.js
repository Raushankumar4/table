import { useForm } from "react-hook-form";

const Hmis4 = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Your submission logic here
      console.log(data);
      // Clearing previous errors if any
      Object.keys(errors).forEach((name) => setError(name, { type: "clear" }));
      // Resetting the form after successful submission
      reset(); // This will clear the form fields
    } catch (error) {
      // Handle submission errors here if needed
      console.error("Submission error:", error);
    }
  };
  return (
    <>
      <div className="Page4-Container mx-[2vw]  mt-[4vw] overflow-ellipsis mb-[2vw]">
        {/* Head start */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-[1.2vw] flex justify-center items-center my-[0.44vw]">
            महिला स्वास्थ्य स्वयं सेविका कार्यक्रमः मासिक प्रतिवेदन संकलन फारम
          </h1>
          <section className="Section-1">
            <table className="border-2 border-black border-collapse w-full">
              <thead className="font-semi text-[1vw]">
                <tr className="h-[2.4vw]">
                  <th className="border-2 border-black" colSpan={3}>
                    <h1 className="flex flex-start pl-[0.44vw]">
                      स्वास्थ्य संस्थाको नामः
                    </h1>
                  </th>
                  <th colSpan={4} className="border-2 border-black">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      प्रगति प्रतिवेदन महिनाः
                    </h1>
                  </th>
                  <th colSpan={4} className="border-2 border-black">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      आर्थिक बर्षः
                      <input
                        className="outline-none overflow-hidden pl-[0.20vw] text-gray-400"
                        type="date"
                        {...register("Page4[आर्थिक बर्ष]", {})}
                      />
                    </h1>
                  </th>
                  <th colSpan={4} className="border-2 border-black">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      जम्मा म.स्वा.स्व. से को संख्य्राः
                    </h1>
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hiddentext-gray-400"
                      type="text"
                      {...register(
                        "Page4[जम्मा म स्वा स्व से को संख्य्रा]",
                        {}
                      )}
                    />
                  </td>
                  <th colSpan={4} className="border-2 border-black">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      प्रगति विवरण पेश गरेका मस्वास्वसे को संख्य्राः
                    </h1>
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hiddentext-gray-400"
                      type="text"
                      {...register(
                        "Page4[प्रगति विवरण पेश गरेका मस्वास्वसे को संख्य्रा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </section>
          {/* Head end */}
          {/* Main-sec start */}
          <section className="main-section mt-[0.24vw]">
            <table className="border-2 border-black border-collapse w-full font-semi text-[1vw]">
              <thead>
                <tr className="h-[3vw]">
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-green-200 w-[3vw]"
                  >
                    क.स.
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-green-200 w-[22vw]"
                  >
                    गतिविधिहरू
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-green-200 w-[4vw] "
                  >
                    ईकाइ
                  </th>
                  <th
                    colSpan={18}
                    className="border-2 border-black bg-green-200  "
                  >
                    महिला स्वास्थ्य स्वयं सेविकाको नाम
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-green-200 w-[4vw] "
                  >
                    जम्मा
                  </th>
                </tr>
                <tr className="h-[2.8vw]">
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[गतिविधिहरू ईकाइ-18]", {})}
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[1vw] bg-green-200">
                  <th className="border-2 border-black">१</th>
                  <th className="border-2 border-black">२</th>
                  <th className="border-2 border-black">३</th>
                  <th className="border-2 border-black">४</th>
                  <th className="border-2 border-black">५</th>
                  <th className="border-2 border-black">६</th>
                  <th className="border-2 border-black">७</th>
                  <th className="border-2 border-black">८</th>
                  <th className="border-2 border-black">९</th>
                  <th className="border-2 border-black">१०</th>
                  <th className="border-2 border-black">११</th>
                  <th className="border-2 border-black">१२</th>
                  <th className="border-2 border-black">१३</th>
                  <th className="border-2 border-black">१४</th>
                  <th className="border-2 border-black">१५</th>
                  <th className="border-2 border-black">१६</th>
                  <th className="border-2 border-black">१७</th>
                  <th className="border-2 border-black">१८</th>
                  <th className="border-2 border-black">१९</th>
                  <th className="border-2 border-black">२०</th>
                  <th className="border-2 border-black">२१</th>
                  <th className="border-2 border-black">२२</th>
                </tr>
                <tr className="h-[1vw] ">
                  <th className="border-2 border-black bg-gray-100">१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      सिवा पु-याएका जम्मा सेवाग्राहीको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (क)  गर्भवति सेवा Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(क)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गर्भवति सेवा
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[क गर्भवति सेवा जना-22]", {})}
                    />
                  </td> */}
                </tr>

                <tr className="h-[2.8vw] ">
                  <th className="border-2 border-black bg-gray-100">२</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      <h1 className="flex flex-start pl-[0.10vw] whitespace-nowrap">
                        आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या
                      </h1>
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भ महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[४ आमावाट बच्चामा सर्ने एचआइभ सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">५ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      पहिलो पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गरेको महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[५ पहिली पटक स्वास्थ्य संस्थामा गर्भ जाच गरेको सुनिश्चित गरेको महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गर्भवती महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[६ दोहोऱ्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      गर्भवती महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">८</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] tracking-tighter">
                      स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] tracking-tighter">
                      (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की  (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री)
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (क) गर्भवति सेवा Section End */}

                {/* (ख)   घरमा जन्मेका शिशुहरूको जन्म अवस्था Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200"> (ख)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      घरमा जन्मेका शिशुहरूको जन्म अवस्था
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ख घरमा जन्मेका शिशुहरूको जन्म अवस्था-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> १० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१० सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">११ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      मृत जन्म भएका शिशुहरू
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[११ मृत जन्म भएका शिशुहरू जना-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[११ मृत जन्म भएका शिशुहरू जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> १२</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको  नवजात शिशुहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ख)   घरमा जन्मेका शिशुहरूको जन्म अवस्था Sction End */}

                {/* (ग) आमार नवजात शिशु स्वास्थ्य Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ग)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      आमार नवजात शिशु स्वास्थ्य
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[ग आमार नवजात शिशु स्वास्थ्य-22]", {})}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> १३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सल्लाह दिएको आमाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१४</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      चक्को वितरण गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१५ घिरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्को वितरण गरेको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> १६ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ग)  आमार नवजात शिशु स्वास्थ्य Section End */}

                {/* (घ)       खोप कार्यक्रम Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(घ) </th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      खोप कार्यक्रम
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page4[(घ) खोप कार्यक्रम-22]", {})}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">पटक</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१८ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      खोप लगाउन पठाएको नयाँ बच्चाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१९</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      |२३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[१९ - २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">पटक</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (घ) खोप कार्यक्रम  Section End */}

                {/* (ङ)  २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण  Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ङ)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[ङ - २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२१  0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      ८-२८ दिनसम्मका विरामी शिशुहरूको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २३ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">२४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२४ - 0-७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">२५ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २६ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ङ)  २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण  Section End*/}

                {/* (च)   २-५९ महिना भित्रका शिशु/ बालबालिकाको मृत्यु विवरण Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(च)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      २-५९ महिना भित्रका शिशु/ बालबालिकाको मृत्यु विवरण
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[(च) २-५९ महिना भित्रका शिशु बालबालिकाको मृत्यु विवरण-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२७ २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> २८ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page4[२८ १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (च)   २-५९ महिना भित्रका शिशु/ बालबालिकाको मृत्यु विवरण Section End */}
              </tbody>
            </table>
          </section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Hmis4;
