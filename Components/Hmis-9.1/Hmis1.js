import { useForm } from "react-hook-form";

const Page1 = () => {
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
            <table className="w-full tracking-wide border-2 border-black border-collapse text-[1vw] font-semi">
              <thead>
                <tr>
                  <th rowSpan={3} className="border-2 border-black bg-gray-100">
                    संस्थाको
                  </th>
                  <th
                    colSpan={2}
                    className="h-[3.4vw] border-2 border-black bg-gray-100"
                  >
                    नाम
                  </th>
                  <td colSpan={3} className="border-2 border-black w-[10vw] ">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-1-Head[नाम]", {})}
                    />
                  </td>
                  <th
                    rowSpan={3}
                    className="border-2 border-black w-[10vw] bg-gray-100"
                  >
                    प्रतिवेदनपेश गरेको
                  </th>
                  <th className="border-black border-2  bg-gray-100">मितिः</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("Page-1-Head[मिति]", {})}
                    />
                  </th>
                </tr>
                <tr>
                  <th
                    rowSpan={2}
                    className="border-2 border-black  bg-gray-100"
                  >
                    ठेगाना
                  </th>
                  <th className="border-2 border-black h-[3.4vw] bg-gray-100">
                    जिल्ला
                  </th>
                  <td colSpan={3} className="border-2 border-black w-[10vw]">
                    <input
                      className="outline-none overflow-hidden w-[5vw] pl-[1vw]"
                      type="text"
                      {...register("Page-1-Head[जिल्ला]", {})}
                    />
                  </td>
                  <th className="border-black border-2  bg-gray-100">आ. ब.</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("Page-1-Head[आब]", {})}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="border-2 border-black bg-gray-100 h-[3.4vw]">
                    नगर/गाउँपालिका
                  </th>
                  <td className="border-2 border-black w-[8vw]">
                    <input
                      className="outline-none overflow-hidden w-[4vw] pl-[1vw] "
                      type="input"
                      {...register("Page-1-Head[नगर/गाउँपालिका]", {})}
                    />
                  </td>
                  <th className="border-2 border-black bg-gray-100">
                    वार्ड नं
                  </th>
                  <td className="border-2 border-black w-[8vw]">
                    <input
                      className="outline-none overflow-hidden w-[4vw] pl-[1vw] "
                      type="input"
                      {...register("Page-1-Head[वार्ड नं]", {})}
                    />
                  </td>
                  <th className="border-black border-2  bg-gray-100">महिना:</th>
                  <th className="border-2 border-black w-[12vw]">
                    <input
                      className="outline-none overflow-hidden w-[10vw] text-gray-200"
                      type="date"
                      {...register("Page-1-Head[महिना]", {})}
                    />
                  </th>
                </tr>
              </thead>
            </table>
          </section>

          {/* Section-1 end */}

          <section className="section-2 mt-[0.66vw]">
            <table className="border-2 border-black border-collapse w-full">
              <thead>
                <tr className="h-[3.6vw]">
                  <th className="border-2 border-black bg-gray-100 w-[5vw] font-extrabold text-[1.4vw]">
                    क.स.
                  </th>
                  <th className="border-2 border-black bg-gray-100 font-extrabold text-[1.4vw]">
                    विवरण
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw] font-extrabold text-[1.4vw]">
                    ईकाइ
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw] font-extrabold text-[1.4vw]font-extrabold text-[1.4vw]">
                    संख्या
                  </th>
                </tr>
              </thead>
              <tbody className="text-[1.1vw] fonr-semi">
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सेवा पु-याएका जम्मा सेवाग्राहीको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden"
                      type="text"
                      {...register(
                        "Page-1[१ सेवा पु-याएका जम्मा सेवाग्राहीको संख्या  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (क)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      गर्भवति सेवा
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२ आफ्नो क्षेत्रमा भेट गरिएका गर्भवती महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती
                      महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[३ गर्भ जाँचको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आमावाट बच्चामा सर्ने एचआइभि सम्वन्धि सूचना दिएका
                      गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[४ आमावाट बच्चामा सर्ने एचआइभि सम्वन्धि सूचना दिएका गर्भवतीलाइ रक्त परिक्षणका लागि रेफर गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पहिलो पटक स्वास्थ्य संस्थामा गर्भ जाँच गरेको सुनिश्चित
                      गरेको महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[५ पहिलो पटक स्वास्थ्य संस्थामा गर्भ जाँच गरेको सुनिश्चित गरेको महिलाहरुको संख्या  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      दिहोन्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती
                      महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[६ दिहोन्याई आएको वेला आईरन चक्की वितरण गरेको गर्भवती महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको
                      गर्भवती महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[७ प्रसूति सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको गर्भवती महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की
                      (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[८ स्वास्थ्यकर्मी विना घरमै सुत्केरी भई मातृसुरक्षा चक्की (मिसोप्रोस्टोल) खाएको सुनिश्चित गरिएका महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप
                      चार्ट/पोस्टर/श्रब्य दश्य सामग्री) प्रयोग गरी स्वास्थ्य
                      शिक्षा पाएका संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    संख्या
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[९ सुरक्षित मातृत्व र नवशिशु सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ख)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      घरमा जन्मेका शिशुहरूको जन्म अवस्था
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      जिवित जन्म भएका शिशुहरू
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१० जिवित जन्म भएका शिशुहरू जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ११
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      मृत जन्म भएका शिशुहरू
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register("Page-1[११ मृत जन्म भएका शिशुहरू जना]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात
                      शिशुहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१२ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ग)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ।आमा र नवजात शिशु स्वास्थ्य
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको
                      आमाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१३ शिशु तथा बाल्यकालिन पोषण व्यवहार सम्बन्धी सल्लाह दिएको आमाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१४ सुत्केरी जाँचको लागि प्रेषण गरेको महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      धरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्की वितरण गरेको
                      महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१५ धरमा प्रसुती भएका सुत्केरीलाई ४५ आइरन चक्की वितरण गरेको महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१६ भिटामिन ए दिएको सुत्केरी महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (घ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      खोपकार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    पटक
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१७ खोप क्लिनिक र सरसफाई सेसनमा सहभागी भएको पटक]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      खोप लगाउन पठाएको नयाँ बच्चाको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[१८ खोप लगाउन पठाएको नयाँ बच्चाको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    पटक
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२० गाउँघर क्लिनिकमा सहभागी भई सघाएको पटक]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ङ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २ महिना मुनिको विरामि शिशुको उपचार तथा प्रेषण
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ०-७ दिन सम्मका विरामी शिशुहरूको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२१ - 0-७ दिन सम्मका विरामी शिशुहरूको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२२ - ८-२८ दिनसम्मका विरामी शिशुहरूको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२३ - २९-५९ दिन सम्मका विरामी शिशुहरूको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      0८७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२४ - ०८७ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२५ - ८-२८ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-1[२६ - २९-५९ दिन भित्र मृत्यु भएका नवजात शिशु संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Page1;
