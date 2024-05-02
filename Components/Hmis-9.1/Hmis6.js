import { useForm } from "react-hook-form";

const Hmis6 = () => {
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
      <div className="Page6-Container mx-[2vw]  mt-[4vw] overflow-ellipsis mb-[2vw]">
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
                      {...register("Page6[गतिविधिहरू ईकाइ-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black bg-green-200  ">
                    <input
                      className=" bg-green-200 overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[गतिविधिहरू ईकाइ-18]", {})}
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
                  <th className="border-2 border-black bg-gray-100">५६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw]">
                      स्वास्थ्य संस्था जान छाडेका
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५६ रातो कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                {/* एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200">(ड)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन
                      कार्यक्रम
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className=" overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ड) एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम-22]", {})}
                    />
                  </td> */}
                </tr>

                <tr className="h-[3.6vw] ">
                  <th className="border-2 border-black bg-gray-100">५७ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.10vw] whitespace-nowrap">
                      ६ देखी ११ महिनाः पहिलो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५७ ६ देखी ११ महिनाः पहिलो पटक जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">५८ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      १२ देखी १७ महिना: पहिलो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५८ - १२ देखी १७ महिना: पहिलो पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ५९ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      १२ देखी १७ महिना: दोस्रो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[५९ - १२ देखी १७ महिना: दोस्रो पटक जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      १८ देखी २३ महिना: पहिलो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६0 - १८ देखी २३ महिना: पहिलो पटक जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६१ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      १८ देखी २३ महिना: दोस्रो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ - १८ देखी २३ महिना: दोस्रो पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६२</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw]">
                      १८ देखी २३ महिना: तेस्रो पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६२ १८ देखी २३ महिना: तेस्रो पटक जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                {/* (ड)एकिकृत शिशु तथा बाल्यकालीन पोषण र बालभिटा समुदाय प्रवर्धन कार्यक्रम Section End */}

                {/* (ढ) विविध Section Start */}
                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200"> (ढ) </th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">विविध</h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[(ढ) विविध-22]",
                        {}
                      )}
                    />
                  </td> */}
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      आमा समुहको बैठक वसेको पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">पटक</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६३ आमा समुहको बैठक वसेको  पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">६४</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      आमा समुहको बैठक सहभागी संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६४ आमा समुहको बैठक सहभागी संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ६५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> पटक</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६५ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ६६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बाहेक अन्य स्थानमा जना भएको मात्र)
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६६ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ६७ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बाहेक अन्य स्थानमा जना भएको मात्र)
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जन भएको मात्र)-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६७ प्रवस अवस्थामा मात्‌ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा जना भएको मात्र)-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ६८</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बाहेक अन्य स्थानमा भएको मात्र)
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६८ - सुत्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ६९</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र){" "}
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६९ २९-५९ दिन सम्मको बच्चाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य जना स्थानमा भएको मात्र)-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100"> ७०</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २ महिना देखि ५९ महिनासम्मका बालवालिकाको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      मृत्यु संख्या (स्वास्थ्य जना संस्थामा बाहेक)
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> जन</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जन संस्थामा बाहेक जना)-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७0 २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या            (स्वास्थ्य जना संस्थामा बाहेक) जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[6vw] ">
                  <th className="border-2 border-black bg-gray-100">७१</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      चार्द/पोस्टर/भश्रब्य दश्य संख्या 'सामग्री)
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    संख्या{" "}
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[६१ बिलस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्द/पोस्टर/भश्रब्य दश्य संख्यासामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[6vw] ">
                  <th className="border-2 border-black bg-gray-100"> ७२</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्री
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      प्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्व र
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100"> पटक</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७२ स्वास्थ्य जीवनशैलीको लागि नसर्ने रोगका द्रश्य सामग्रीप्रयोग गरी स्वास्थ्य शिक्षा दिएको जोखिम तत्वर रोकथामको बारेमा पटक फ्लिप चार्ट/पोस्टर/श्रब्य पटक-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[6vw] ">
                  <th className="border-2 border-black bg-gray-100">७३ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">
                    {" "}
                    संख्या
                  </th>
                  <td className="border-2 border-black  ">
                    <input
                      className=" overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७३ स्वास्थ्य जीवनशैली को लागि नसर्ने रोगका जोखिम तत्वको बारेमा फ्लिप संख्या चार्ट/पोस्टर/श्रब्य दृश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा बाट लाभान्वित संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">७४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      किशोरीको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">संख्या</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७४ - १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">७५</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      किशोरीको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">संख्या</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७५ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                {/* (ढ)विविधSection End */}

                {/* (ण) नवजात शिशु स्याहार कार्यक्रम Section Start */}

                <tr className="h-[2vw] bg-red-200 ">
                  <th className="border-2 border-black bg-red-200"> (ण)</th>
                  <th
                    colSpan={21}
                    className="border-2 border-black  bg-red-200 text-[0.90vw]"
                  >
                    <h1 className="flex flex-start pl-[0.29vw]">
                      नवजात शिशु स्याहार कार्यक्रम
                    </h1>
                  </th>

                  {/* <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none bg-red-200 w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[(ण) नवजात शिशु स्याहार कार्यक्रम-22]", {})}
                    />
                  </td> */}
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100"> ७६</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      शिशु जन्म: घर
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-5]", {})}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-7]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-8]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-9]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-10]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-11]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-12]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-13]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-14]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-15]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-16]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-17]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-18]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-19]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-20]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-21]", {})}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register("Page6[७६ - शिशु जन्म: घर जना-22]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">७७</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      शिशु जन्मः स्वास्थ संस्था
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[३९ शिशु जन्मः स्वास्थ संस्था जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">७८</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७८ शिशु जन्म: तालिम प्राप्त स्वास्थकर्मिबाट जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">७९ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      शिशु जम्मदा म.स्वा.से. उपस्थिति भएको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[७९ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw] ">
                  <th className="border-2 border-black bg-gray-100">८० </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८१ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] tracking-tight ">
                      घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८१ घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्याजना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८२ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८२ घरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित नवजात शिशुहरुको संख्या जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८३</th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      {" "}
                      घरमा प्रसुति भई जन्मेको १ घण्टा भित्रमा स्तनपान गराएको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      {" "}
                      सुनिश्चित गरिएका जना नवजात शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८० घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना-22]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[5vw] ">
                  <th className="border-2 border-black bg-gray-100">८४ </th>
                  <th className="border-2 border-black  bg-gray-100 text-[0.90vw]">
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको
                    </h1>
                    <h1 className="flex flex-start pl-[0.29vw] ">
                      नवजात शिशुहरुको
                    </h1>
                  </th>
                  <th className="border-2 border-black  bg-gray-100">जना</th>
                  <td className="border-2 border-black  ">
                    <input
                      className=" overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-5]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-7]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-8]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-9]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-10]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-11]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-12]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-13]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-14]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-15]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-16]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-17]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-18]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-19]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-20]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-21]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black  ">
                    <input
                      className="  overflow-hidden outline-none w-[2vw] pl-[0.10vw]"
                      type="text"
                      {...register(
                        "Page6[८४ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको जना-22]",
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

export default Hmis6;
