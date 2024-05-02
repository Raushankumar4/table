import { useForm } from "react-hook-form";

const Hmis7 = () => {
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
      <div className="Page7-Container mx-[2vw]  mt-[4vw] overflow-ellipsis mb-[2vw]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Main-Section start */}
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
                      {...register("Page7[गतिविधिहरू ईकाइ-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page7[गतिविधिहरू ईकाइ-18]", {})}
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
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      सामान्य तौल भएका नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८५ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.6vw] ">
                  <th className="border-2 border-black bg-gray-100">८६ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.10vw] whitespace-nowrap">
                      कम तौल भएका नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८६ कम तौल भएका नवजात शिशुहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">८७ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      धरै कम तौल भएका नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८७ धरै कम तौल भएका नवजात शिशुहरुको संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ८८ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      र बर्त जांच भेट गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८८ सुत्केरी भएको तेश्रो दिनमा आमालाइ परामश र बर्त जांच भेट गरेको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८९ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      सुत्केरी भएको सातौं दिनमा आमा लाई
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      परामर्श र बच्चालाई जाँच भेट गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[८९ सुत्केरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">९० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      परामर्श र बच जाँच भेट जना गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९०  सुत्केरी भएको उनान्तिसौं दिनमा आमा लाइ परामर्श र बच जाँच भेट जना गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">९१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      आफ्नो क्षेत्रका शंकास्पद क्षयरोगका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      बिरामीको प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९१ आफ्नो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">९२</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      आफ्नो क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      {" "}
                      गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९२ क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">९३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      नसर्ने रोग (मधुमेह,मृगौला,दीर्घ श्वासप्रश्वास, अर्बुदरोग
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      ,मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९३ नसर्ने रोग (मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग) का बिरामीको जना प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९४</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      मानसिक स्वास्थ्य समस्या भएका बिरामीको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९४ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९५ पाठेघर खस्ने समस्या भएका आमाको प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९६ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९६ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">९७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गरी प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९७ स्वास्थ्य समस्या भएका जेष्ठ नागरिकको पहिचान गरी प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९८</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      जम्मा भएको रकम रू. रकमरू लगानी समेत
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    {" "}
                    रकमरू.
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमर [लगानी समे रकमरू)-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९८ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू रकमरू लगानी समेत रकमरू-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ९९</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      जात शिशुको ३५ दिनभित्र जन्म दर्ताका लागि
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      परामर्श दिएको परिवार संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">परिवार</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[९९  परामर्श दिएको परिवार संख्या परिवार-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१००</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०० नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">१०१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      परामर्श दिएको परिवार संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    {" "}
                    परिवार
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०१ मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या  परिवार-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">१०२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      मूस दर्ता भएको सुनश्चित गरिएको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[१०२ मूस दर्ता भएको सुनश्चित गरिएको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page7[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                {/*(ण) नवजात शिशु स्याहार कार्यक्रम  Section End */}
              </tbody>
            </table>
          </section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Hmis7;
