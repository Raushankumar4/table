import { useForm } from "react-hook-form";

const PageFour = () => {
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
      console.log(data);

      Object.keys(errors).forEach((name) => setError(name, { type: "clear" }));

      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <div className="Page3-Container mx-[8vw]  mt-[2vw] overflow-ellipsis">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section-1 Start */}
          <section className="Section-1 my-[2vw]">
            <table className="w-full border-2 border-black border-collapse text-[1vw] font-semi">
              <thead>
                <tr className="h-[2.6vw]">
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100 font-bold text-[1.2vw]"
                  >
                    क.सं.
                  </th>
                  <th
                    colSpan={4}
                    rowSpan={2}
                    className="border-2 h-[7vw] border-black bg-gray-100 w-[24vw] font-bold text-[1.2vw]"
                  >
                    गाउँघर क्लिनिक कार्यक्रमः <h1>गतिविधिहरू</h1>
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100 w-[5vw] font-bold text-[1.2vw]"
                  >
                    ईकाइ
                  </th>
                  <th
                    colSpan={6}
                    className="border-2 border-black bg-gray-100 font-bold text-[1.2vw]"
                  >
                    गाउँघर क्लिनिक संचालन स्थान
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100 font-bold text-[1.2vw] w-[7vw]"
                  >
                    जम्मा
                  </th>
                </tr>
                <tr className="h-[2.6vw]">
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[गाउँघर क्लिनिक कार्यक्रम गतिविधिहरू ईकाइ-6]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">70</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      जुकाको औषधी बितरण गरिएका गर्भवती संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[जुकाको औषधी बितरण गरिएका गर्भवती संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">71</th>
                  <th
                    rowSpan={2}
                    colSpan={3}
                    className="border-2 border-black bg-gray-100"
                  >
                    <h1 className="flex flex-start pb-[0.60vw] pl-[0.66vw]">
                      आइरन चक्की वितरण गरिएका
                    </h1>
                    <h1 className="flex flex-start pl-[0.66vw]">
                      गर्भवती महिला संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">नयाँ</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या नयाँ जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">72</th>
                  <th className="border-2 border-black bg-gray-100">
                    दोहोर याइ आएका
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-3[आइरन चक्की वितरण गरिएका  गर्भवती महिला संख्या दोहोर याइ आएका जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(ङ)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      सुत्केरी सेवा
                    </h1>
                  </th>
                </tr>

                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">73</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुत्केरी जाँच गराएका महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सुत्केरी जाँच गराएका महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">74</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[४५ आइरन चक्की पाएका सुत्केरी महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">75</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      भिटामिनए पाएका सुत्केरी महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[भिटामिनए पाएका सुत्केरी महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(च)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      परिवार नियोजन सेवा
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">76</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      किण्डम वितरण संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[किण्डम वितरण संख्या जना-7]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">77</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पिल्स चक्की बितरण गरेको महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[पिल्स चक्की बितरण गरेको महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">78</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      डिपो सेवा प्रदान गरेको महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[डिपो सेवा प्रदान गरेको महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">79</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सायना प्रेस प्रदान गरेको महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रदान गरेको महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">80</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">डोज</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको डोज संख्या डोज-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">81</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आकस्मिक गर्भनिरोधक चक्की प्रयोग गरेको महिलाको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">82</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      खाने चक्की पिल्स वितरण गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">साईकल</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[खाने चक्की पिल्स वितरण गरेको साईकल-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">83</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      डिपो प्रयोग गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100"> डोज</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-4[डिपो प्रयोग गरेको डोज-7]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">84</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सायना प्रेस प्रयोग गरेको
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100"> डोज</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सायना प्रेस प्रयोग गरेको डोज-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(छ)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      औलो रोग निवारण कार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">85</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      रक्त नमूना संकलन गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">स्लाईड</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[ रक्त नमूना संकलन गरेको संख्या स्लाईड-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">86</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शंकास्पद विरामीलाई रेफर गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद विरामीलाई रेफर गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(ज)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      क्षयरोग नियन्त्रण कार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">87</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नियमित नभएका विरामीको खोज गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">88</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शंकास्पद बिरामीलाई रेफर गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(झ)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      कुष्ठरोग निवारण कार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">89</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नियमित नभएका विरामीको खोज गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[नियमित नभएका विरामीको खोज गरेको संख्या जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">90</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शंकास्पद बिरामीलाई रेफर गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[शंकास्पद बिरामीलाई रेफर गरेको संख्या  जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(ञ)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      बिविध क्रियाकलापहरू
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">91</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि)
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[सामान्य चिकित्सा दिएको संख्या (५ वर्षभन्दा माथि) जना-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100">92</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100"> पटक</th>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[बिधालय र समुदायमा स्वास्थ्य शिक्षा दिएको पटक-7]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr
                  className="h-[3.4vw] font-bold text-[1.2vw] bg-gray-100
"
                >
                  <th className="border-2 border-black ">(ट)</th>
                  <th colSpan={12} className="border-2 border-black ">
                    <h1 className="flex flex-start pl-[0.44vw]">
                      महिलास्वास्थ्य स्वयंसेविका कार्यक्रम
                    </h1>
                  </th>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100">93</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.46vw]">
                      आमा समुहको वैठकमा स्वास्थ्यकर्मीले भाग लिएको
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">पटक </th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आमा समुहको वैठकमा स्वास्थ्यकर्मीले भाग लिएको पटक-1]",
                        {}
                      )}
                    />
                  </td>
                  <th className="border-2 border-black bg-gray-100">96</th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.45vw]">
                      यस महिनामा कोषको लगानी भएको रकम
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">रू.</th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[यस महिनामा कोषको लगानी भएको रकम रू ]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100">94</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.46vw]">
                      कोषबाट क्रण लिने नयाँ महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100"> जना </th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[कोषबाट क्रण लिने नयाँ महिलाहरुको संख्या  जना]",
                        {}
                      )}
                    />
                  </td>
                  <th className="border-2 border-black bg-gray-100">97</th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.45vw]">
                      यस महिनामा कोषबाट खर्च भएको रकम
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">रू.</th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[यस महिनामा कोषबाट खर्च भएको रकम रू ]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100">95</th>
                  <th colSpan={4} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.46vw]">
                      <h1 className="flex flex-start pl-[0.40vw]">
                        यस महिनामा कोषमा आम्दानी भएको रकम
                      </h1>
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">रू. </th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[आमा समुहको वैठकमा स्वास्थ्यकर्मीले भाग लिएको रू]",
                        {}
                      )}
                    />
                  </td>
                  <th className="border-2 border-black bg-gray-100">94</th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.45vw]">
                      हर यस महिनामा असुल भएको रकम
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100">रू.</th>
                  <td colSpan={1} className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register(
                        "Page-4[हर यस महिनामा असुल भएको रकम रू ]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <input type="submit" value="Submit" />
          <h1>Click OnSumit and Check Console(All Data in Console) </h1>
        </form>
      </div>
    </>
  );
};

export default PageFour;
