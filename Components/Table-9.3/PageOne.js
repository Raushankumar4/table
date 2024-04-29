import { useForm } from "react-hook-form";

const PageOne = () => {
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
      <div className="Page3-Container mx-[8vw]  mt-[2vw] overflow-ellipsis">
        <div className="header  border-black border-2 mb-[0.34vw] bg-gray-100">
          <h1 className="flex justify-center items-center text-[1.1vw] pt-[0.34vw] font-semi tracking-wide">
            नेपाल सरकार
          </h1>
          <h1 className="flex justify-center items-center  text-[1.2vw] font-semi tracking-wide">
            स्वास्थ्य तथा जनसंख्या मन्त्रालय
          </h1>
          <h1 className="flex justify-center items-center  text-[1.2vw] font-semi tracking-wide">
            स्वास्थ्य सेवा विभाग
          </h1>
          <h1 className="flex justify-center items-center text-[1.4vw] font-semibold tracking-tight">
            स्वास्थ्य व्यवस्थापन सूचना प्रणाली
          </h1>
          <h1 className="flex justify-center items-center text-[1.4vw] font-semibold tracking-tight pb-[0.34vw]">
            समुदायस्तर स्वास्थ्य कार्यक्रमको मासिक प्रतिवेदन: खोप तथा गाँउघर
            क्लिनिक कार्यक्रम
          </h1>
        </div>

        {/* Section-1 start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="section-1">
            <table className="w-full border-2 border-black border-collapse text-[1vw] font-semi">
              <thead>
                <tr>
                  <th rowSpan={3} className="border-2 border-black bg-gray-100">
                    संस्थाको
                  </th>
                  <th colSpan={2} className="border-2 border-black bg-gray-100">
                    नाम
                  </th>
                  <td colSpan={3} className="border-2 border-black w-[10vw] ">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("first[नाम]", {})}
                    />
                  </td>
                  <th rowSpan={3} className="border-2 border-black w-[10vw]">
                    प्रतिवेदनपेश गरेको
                  </th>
                  <th className="border-black border-2">मितिः</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("first[मिति]", {})}
                    />
                  </th>
                </tr>
                <tr>
                  <th rowSpan={2} className="border-2 border-black">
                    ठेगाना
                  </th>
                  <th className="border-2 border-black">जिल्ला</th>
                  <td colSpan={3} className="border-2 border-black w-[10vw]">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("first[जिल्ला]", {})}
                    />
                  </td>
                  <th className="border-black border-2">आ. ब.</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("first[आब]", {})}
                    />
                  </th>
                </tr>
                <tr>
                  <th>नगर/गाउँपालिका</th>
                  <td className="border-2 border-black w-[8vw]">
                    <input
                      className="outline-none overflow-hidden w-[4vw] pl-[1vw] "
                      type="input"
                      {...register("first[नगर/गाउँपालिका]", {})}
                    />
                  </td>
                  <th>वार्ड नं</th>
                  <td className="border-2 border-black w-[8vw]">
                    <input
                      className="outline-none overflow-hidden w-[4vw] pl-[1vw] "
                      type="input"
                      {...register("first[वार्ड नं]", {})}
                    />
                  </td>
                  <th className="border-black border-2">महिना:</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("first[महिना]", {})}
                    />
                  </th>
                </tr>
              </thead>
            </table>
          </section>

          {/* Section-1 end */}

          {/* section-2 start */}
          <section className="Section-2 mt-[0.32vw] ">
            <table className="w-full border-2 border-black text-[1vw] font-semi">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-[4vw] border-2 border-black">क.स.</th>
                  <th className="w-[16vw] border-2 border-black whitespace-nowrap">
                    स्वास्थ्यकर्मी को नाम
                  </th>
                  <th className="w-[6vw] border-2 border-black ">पद</th>
                  <th className="border-2 w-[20vw] border-black whitespace-nowrap">
                    फिल्डमा काम गरेको दिन
                  </th>
                  <th className="border-2 border-black">सही</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[3vw]">
                  <th className="border-2 border-black bg-gray-100">1</th>
                  <td className=" w-[30vw] border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[10vw]"
                      type="text"
                      {...register("Second[स्वास्थ्यकर्मी को नाम]", {})}
                    />
                  </td>
                  <td className="border-2 border-black w-[6vw]">
                    <input
                      className="w-[4vw] pl-[1vw] outline-none overflow-hidden"
                      type="text"
                      {...register("Second[पद]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[28vw]"
                      type="text"
                      {...register("Second[फिल्डमा काम गरेको दिन]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register("Second[सही]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3vw]">
                  <th className="border-2 border-black bg-gray-100">2</th>
                  <td className=" w-[30vw] border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[10vw]"
                      type="text"
                      {...register("Second[स्वास्थ्यकर्मी को नाम-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black w-[6vw]">
                    <input
                      className="w-[4vw] pl-[1vw] outline-none overflow-hidden"
                      type="text"
                      {...register("Second[पद-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[28vw]"
                      type="text"
                      {...register("Second[फिल्डमा काम गरेको दिन-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register("Second[सही-2]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3vw]">
                  <th className="border-2 border-black bg-gray-100">3</th>
                  <td className=" w-[30vw] border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[10vw]"
                      type="text"
                      {...register("Second[स्वास्थ्यकर्मी को नाम-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black w-[6vw]">
                    <input
                      className="w-[4vw] pl-[1vw] outline-none overflow-hidden"
                      type="text"
                      {...register("Second[पद-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw] w-[28vw]"
                      type="text"
                      {...register("Second[फिल्डमा काम गरेको दिन-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register("Second[सही-3]", {})}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Section-2 end */}

          {/* Section-3 start */}
          <section className="Section-3 mt-[0.40vw]">
            <table className="w-full border-2 border-black text-[1vw] font-semi">
              <thead className="bg-gray-100">
                <tr className="h-[3vw]">
                  <th className="w-[4vw] border-2 border-black">क.स.</th>
                  <th className="w-[20vw] border-2 border-black whitespace-nowrap">
                    विवरण
                  </th>
                  <th className="whitespace-nowrap  border-2 border-black ">
                    खोप क्लिनिक (संख्या)
                  </th>
                  <th className="border-2  border-black whitespace-nowrap">
                    खोप सेसन पटक
                  </th>
                  <th className="border-2 border-black">सरसफाई प्रवर्द्धन</th>
                  <th className="border-2 border-black">
                    सरसफाई प्रवर्द्धन सेसन (पटक)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[3.2vw]">
                  <th className="border-2 border-black">1</th>
                  <th className="border-2 border-black w-[20vw] bg-gray-100">
                    यस महिनामा संचालन हुनुपर्ने
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन हुनुपर्ने - खोप क्लिनिक (संख्या)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन हुनुपर्ने - खोप सेसन पटक]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन हुनुपर्ने - सरसफाई प्रवर्द्धन]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन हुनुपर्ने - सरसफाई प्रवर्द्धन सेसन (पटक)]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.2vw]">
                  <th className="border-2 border-black">2</th>
                  <th className="border-2 border-black w-[20vw] bg-gray-100">
                    यस महिनामा संचालन/ प्रतिवेदन भएको
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन/ प्रतिवेदन भएको - खोप क्लिनिक (संख्या)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन/ प्रतिवेदन भएको- खोप सेसन पटक]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन/ प्रतिवेदन भएको - सरसफाई प्रवर्द्धन]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[10vw] outline-none overflow-hidden pl-[1vw]"
                      type="text"
                      {...register(
                        "Third[यस महिनामा संचालन/ प्रतिवेदन भएको - सरसफाई प्रवर्द्धन सेसन (पटक)]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section-3 end */}

          {/* 
          Section-4 start */}
          <section className="mt-[0.40vw]">
            <table className="w-full border-2 border-black border-collapse text-[1.1vw] font-semi tracking-wide">
              <thead>
                <tr className="h-[2vw] bg-gray-100">
                  <th
                    className="border-2 border-black text-[1.3vw] font-bold tracking-tighter"
                    colSpan={4}
                    rowSpan={2}
                  >
                    खोप कार्यक्रमः गतिविधिहरू ईकाइ
                  </th>
                  <th rowSpan={2} className="border-2 border-black w-[4vw]">
                    ईकाइ
                  </th>
                  <th colSpan={6} className="border-black border-2">
                    खोप विलनिक सचालन स्थान
                  </th>
                  <th className="border-2 border-black">जम्मा</th>
                </tr>
                <tr className="text-[1vw] font-semi">
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप कार्यक्रमः गतिविधिहरू ईकाइ-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा]", {})}
                    />
                  </td>
                </tr>
              </thead>
              <tbody className="font-semi text-[1vw]">
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black w-[4vw] bg-gray-100">
                    1
                  </th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    खोपसेवा पाएकाहरूको जम्मा संख्या (जना)
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना) - जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना)-1 जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना)-2  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना)-3  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना)-4  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोपसेवा पाएकाहरूको जम्मा संख्या (जना)-5  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा-2]", {})}
                    />
                  </td>
                </tr>

                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black w-[4vw] bg-gray-100">
                    2
                  </th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना) - जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)-1 जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)-2  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)-3  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)-4  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[सिरसफाई सेसनमा बसेका अभिभावकहरुको संख्या (जना)-5  जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा-3]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black w-[4vw] bg-gray-100">
                    3
                  </th>
                  <th
                    rowSpan={18}
                    className="w-[4vw] border-2 border-black bg-gray-100"
                  >
                    <h1 className="-rotate-90 whitespace-nowrap">
                      खोप पाएको बच्चा संख्या
                    </h1>
                  </th>
                  <th
                    colSpan={2}
                    className=" bg-gray-100 border-2 border-black "
                  >
                    बि.सि.जी.
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी-2 -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी-3 -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी-4 -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी-5 -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[बि सि जी-6 -  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा-4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    4
                  </th>
                  <th
                    rowSpan={2}
                    colSpan={1}
                    className="border-2 border-black bg-gray-100 "
                  >
                    रोटा
                  </th>

                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black h-[2.6vw]">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा पहिलो  जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा-5]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[रोटा-दोस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जम्मा-6]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={3} className="border-2 bg-gray-100 border-black">
                    5
                  </th>
                  <th
                    rowSpan={3}
                    colSpan={1}
                    className="bg-gray-100 border-2 border-black"
                  >
                    पोलियो(OPV)
                  </th>

                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-पहिलो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-दोस्रो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">तेस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पोलियो-तेस्रो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    6
                  </th>
                  <th
                    rowSpan={2}
                    colSpan={1}
                    className="border-2 border-black bg-gray-100 "
                  >
                    एम.आई.भी.
                  </th>

                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black h-[2.6vw]">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो  जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी पहिलो जना जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[ एमआईभी दोस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[एमआईभी दोस्रो जना  जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={3} className="border-2 bg-gray-100 border-black">
                    7
                  </th>
                  <th
                    rowSpan={3}
                    colSpan={1}
                    className="bg-gray-100 border-2 border-black"
                  >
                    पि.सि.भि.
                  </th>

                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि पहिलो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourthपि सि भि दोस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि दोस्रो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">तेस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[पि सि भि तेस्रो जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={3} className="border-2 bg-gray-100 border-black">
                    8
                  </th>
                  <th
                    rowSpan={3}
                    colSpan={1}
                    className="bg-gray-100 border-2 border-black tracking-tighter"
                  >
                    डि.पि.टी.- हेप बि-हिब
                  </th>

                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब पहिलो जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब दोस्रो जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">तेस्रो</th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[डि पि टी- हेप बि-हिब तेस्रो जना जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    9
                  </th>
                  <th
                    rowSpan={2}
                    colSpan={1}
                    className="border-2 border-black bg-gray-100  "
                  >
                    दादुरा- रुवेला
                  </th>

                  <th className="border-2 border-black bg-gray-100 tracking-tighter">
                    पहिलो (९ महिना)
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black h-[2.6vw]">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला पहिलो (९ महिना) जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100 tracking-tighter">
                    दोस्रो(१५ महिना)
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) दोस्रो जना]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[दादुरा- रुवेला दोस्रो(१५ महिना) जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">10</th>
                  <th
                    colSpan={2}
                    className="border-2 border-black bg-gray-100 tracking-wide"
                  >
                    जे .ई.
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[जे ई जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">11</th>
                  <th
                    colSpan={2}
                    className="border-2 border-black bg-gray-100 tracking-wide"
                  >
                    टाइफाइड(TCV)
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[टाइफाइड(TCV) जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">12</th>
                  <th
                    colSpan={3}
                    className="border-2 border-black bg-gray-100 tracking-tight"
                  >
                    २४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या
                  </th>
                  <th className="border-2 border-black bg-gray-100">जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    13
                  </th>
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100 tracking-tight"
                  >
                    खोप पाएको बालिकाहरुको संख्या
                  </th>
                  <th
                    rowSpan={2}
                    colSpan={1}
                    className="bg-gray-100 border border-black"
                  >
                    एच पी भी खोप लगाएका बालिकाको संख्या
                  </th>
                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो  जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - पहिलो जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black  bg-gray-100">दोस्रो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-1]",
                        {}
                      )}
                    />
                  </td>

                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो  जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएको बालिकाहरुको संख्या - एच पी भी खोप लगाएका बालिकाको संख्या - दोस्रो 	जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={3} className="border-2 border-black bg-gray-100">
                    14
                  </th>
                  <th
                    rowSpan={3}
                    className="border-2 border-black  bg-gray-100"
                  >
                    खोप पाएका गर्भवती महिलाको संख्या
                  </th>
                  <th
                    rowSpan={3}
                    colSpan={1}
                    className="border-2 border-black bg-gray-100"
                  >
                    गर्भवती टि.डी. खोप
                  </th>
                  <th className="border-2 border-black bg-gray-100">पहिलो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">दोस्रो</th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">
                    दोस्रो +
                  </th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[खोप पाएका गर्भवती महिलाको संख्या- गर्भवती टि डी खोप-दोस्रो+ जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">15</th>
                  <th colSpan={3} className="border-2 border-black bg-gray-100">
                    २४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्या जना
                  </th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-1]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-2]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-3]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-4]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-5]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जना-6]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fourth[२४ महिनादेखि ५ ९ महिना सम्म खोप शुरु गरेका बच्चा संख्याजना जम्मा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    16
                  </th>
                  <th
                    colSpan={3}
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100"
                  >
                    <div className="flex justify-evenly">
                      <h1 className="pt-[1vw]"> AEFI Casesbr</h1>
                      <div className="space-y-2">
                        <h1> सम्मान्य </h1>
                        <h1 className=""> गम्भीर</h1>
                      </div>
                    </div>
                  </th>
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases सम्मान्य जम्मा]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  {" "}
                  <th className="border-2 border-black bg-gray-100"> जना</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-1]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-2]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-3]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-4]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-5]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जना-6]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fourth[AEFI Cases गम्भीर जम्मा]", {})}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Section-4 end */}

          {/* Section-5 Start */}
          <section className="sectiion-5 mt-[0.40vw]">
            <table className="w-full border-2 border-black border-collapse text-[1vw]">
              <thead>
                <tr className="h-[3vw]">
                  <th
                    colSpan={15}
                    className="border-2 border-black bg-gray-100 font-bold text-[1.3vw] tracking-tight"
                  >
                    भ्याक्सिन प्राप्त तथा खर्च विवरण (भायलमा लेखे)
                  </th>
                </tr>
                <tr className="h-[2.6vw] bg-gray-100 ">
                  <th className="border-2 border-black w-[3vw]">क.सं.</th>
                  <th colSpan={2} className="border-2 border-black ">
                    विवरण
                  </th>
                  <th className="border-2 border-black   ">ईकाइ</th>
                  <th className="border-2 border-black w-[5vw]  ">बि.सि.जी.</th>
                  <th className="border-2 border-black   "> रोटा</th>
                  <th className="border-2 border-black   ">पोलियो (OPV)</th>
                  <th className="border-2 border-black   tracking-tighter  ">
                    एफ.आई.पि.भी. पि.सि.भि.
                  </th>
                  <th className="border-2 border-black   ">डि.पि.टी.-हेप.बि</th>
                  <th className="border-2 border-black   ">हिव</th>
                  <th className="border-2 border-black  w-[7vw] ">
                    दादुरा-रुबेला.
                  </th>
                  <th className="border-2 border-black   ">
                    जे.ई. टाईफाईड(TCV)
                  </th>
                  <th className="border-2 border-black   ">एच.पि.भि. (HPV)</th>
                  <th className="border-2 border-black   ">टि.डी</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[2.6vw] ">
                  <th className="border-2 border-black  bg-gray-100 ">1</th>
                  <th
                    colSpan={2}
                    className="border-2 border-black bg-gray-100 "
                  >
                    प्राप्त भएको खोप
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[4vw] ">
                    भायल
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - बि सि जी]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[प्राप्त भएको खोप - भायल - रोटा]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - पोलियो(OPV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - एफ आई पि भी पि सि भि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - डि पि टी हेप बि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[प्राप्त भएको खोप - भायल - हिव]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - दादुरा-रुबेला]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[प्राप्त भएको खोप - भायल - टि डी]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th
                    rowSpan={2}
                    className="border-2 border-black bg-gray-100 "
                  >
                    2
                  </th>
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    खर्च भएको खोप
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    खोप दिन खोलेको
                  </th>
                  <th rowSpan={2} className="border-2 border-black bg-gray-100">
                    भायल
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - बि सि जी]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - रोटा]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - पोलियो(OPV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - एफ आई पि भी पि सि भि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - डि पि टी हेप बि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - हिव]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - दादुरा-रुबेला]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - खोप दिन खोलेको - भायल - टि डी]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100 tracking-tight w-[10vw]">
                    अन्य कारणले बिग्रेको
                  </th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - बि सि जी]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - रोटा]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - पोलियो(OPV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको- भायल - एफ आई पि भी पि सि भि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - डि पि टी हेप बि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - हिव]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - दादुरा-रुबेला]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[खर्च भएको खोप - अन्य कारणले बिग्रेको - भायल - टि डी]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[2.6vw]">
                  <th className="border-2 border-black bg-gray-100">3</th>
                  <th colSpan={2} className="border-2 border-black bg-gray-100">
                    फिर्ता
                  </th>
                  <th className="border-2 border-black bg-gray-100">भायल</th>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - बि सि जी]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - रोटा]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - पोलियो(OPV)]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[फिर्ता- भायल - एफ आई पि भी पि सि भि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[फिर्ता - भायल - डि पि टी हेप बि]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - हिव]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - दादुरा-रुबेला]", {})}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[फिर्ता - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[4vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register(
                        "fifth[फिर्ता - भायल - जे ई टाईफाईड(TCV)]",
                        {}
                      )}
                    />
                  </td>
                  <td className="border-2 border-black">
                    <input
                      className="w-[3vw] outline-none overflow-hidden pl-[0.40vw]"
                      type="text"
                      {...register("fifth[फिर्ता - भायल - टि डी]", {})}
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

export default PageOne;
