import { useForm } from "react-hook-form";

const Hmis5 = () => {
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
      <div className="Page5-Container mx-[2vw]  mt-[4vw] overflow-ellipsis mb-[2vw]">
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
                      {...register("Page5[गतिविधिहरू ईकाइ-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[गतिविधिहरू ईकाइ-18]", {})}
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
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[१ सिवा पु-याएका जम्मा सेवाग्राहीको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(छ)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण:
                      झाडापखाला
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className=" overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला-22]", {})}
                    />
                  </td> */}
                </tr>

                <tr className="h-[3.6vw] ">
                  <th className="border-2 border-black bg-gray-100">२९ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.10vw] whitespace-nowrap">
                      झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      {" "}
                      विरामी बच्चाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ३0</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      पुनर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      बच्चाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३0 पानर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३१ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      पुनर्जलीय झोलको पुरिया संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">पुरिया</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३१ - ५ वर्ष मुनिका बच्चाहरुलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या  पुरिया-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      पुनर्जलीय झोलको पुरिया संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    {" "}
                    पुरिया
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[ ३२  ५ वर्ष भन्दा माथिव मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिय संख्या  पुरिया-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३३ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      वितरण गरेको जिंङ्क चक्कि संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">चक्कि</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३३ वितरण गरेको जिंङ्क चक्कि संख्या चक्कि-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३४</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      पिरामी प्रेषण गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका पिरामी प्रेषण गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                {/* (छ) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: झाडापखाला Section End */}

                {/* (ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200"> (ज)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण:
                      श्वासप्रश्वास रोग
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ज) २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ३५ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      श्वास प्रश्नास रोग लागेका २ देखि ५९
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      महिनाका विरामी बच्चाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३५ श्वास प्रश्नास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३६  न्युमोनिया नभएको (रुघाखोको भएका) ५ वर्ष मुनिका बच घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ३७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३७ श्वास प्रश्वास रोग भइ स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाव बालबालिकाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ज)   २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषण: श्वासप्रश्वास रोग Section End */}

                {/* (झ)  प्रेषण Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(झ)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">प्रेषण</h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[झ  प्रेषण-22]", {})}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ३८</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रेषण गरेका महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३८ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">३९</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      <h1 className="flex flex-start pl-[0.29vw] ">
                        स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका
                      </h1>
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">४०</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      संस्थामा प्रेषण गरेका विरामीहरुको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४० जिगातार २ हप्ता सम्म खौक। लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४१ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्राथमिक उपचार गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४१ प्राथमिक उपचार गरेको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्राथमिक उपचारको क्रममा प्रेषण गरेको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बिरामीहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (झ)
प्रेषण  Section End */}

                {/* (ञ) परिवार नियोजन Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ञ) </th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      परिवार नियोजन
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[(ञ) परिवार नियोजन-22]", {})}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">४३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      {" "}
                      खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      आकस्मिक गर्भ निरोधक चक्की वितरण
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गरिएका महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४५ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      वितरण गरेको खाने चक्की पिल्सको साइकल संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> साइकल</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४६ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बितरण गरेको आकस्मिक गर्भ निरोधक
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      चक्कीको डोजको संख्या{" "}
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">डोज</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४७ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      ४७ कण्डम वितरण गरेको जना
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page5[४७ कण्डम वितरण गरेको जना-22]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४८ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      वितरण गरेको कण्डमको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> गोटा</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४८ वितरण गरेको कण्डमको संख्या गोटा-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ४९ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रेषण गरेको दम्पतीहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">दम्पती</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">५० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य
                      दृश्य)
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    {" "}
                    संख्या
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ञ) परिवार नियोजन  Section End */}

                {/* (ट) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट  Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ट) </th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      हरियो; हृष्टपुष्टः खुशी परिवार
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५१ हरियो हृष्टपुष्ट खुशी परिवार जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      पहेलो: मध्यम शीघ्र कुपोषण: घरमा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      म.स्वा.स्व.से. द्धारा परामर्श
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५२ पहेलो: मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्धारा परामर्श जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५३ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      रातोः कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५३ रातो कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      फुकेनासः स्वा.संस्थामा प्रेषण जना
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                {/* (ट)  शीघ्र कुपोषणको एकीकृत व्यवस्थापन: एम.यु.ए.सी. छनौट Section End*/}

                {/* (ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ठ)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[(ठ) शीघ्र कुपोषणको एकीकृत व्यवस्थापन: घरभेट र अनुगमन-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गरिरहदा पनि तौल वृद्धि नभएको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page5[५६ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको जना-22]",
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

export default Hmis5;
