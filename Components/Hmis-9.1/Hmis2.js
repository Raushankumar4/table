import { useForm } from "react-hook-form";

const Page2 = () => {
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
      <div className="Page3-Container mx-[8vw]  mt-[4vw] overflow-ellipsis">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section-1 start */}

          <section className="section-1 mt-[0.66vw]">
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
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (च)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २-५९ महिना भित्रका शिशु/ बालबालिकाको मृत्यु विवरण
                    </h1>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[1.1vw] fonr-semi">
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या
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
                        "Page-2[२-११ महिना भित्र मृत्यु भएका नवजात शिशु संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या
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
                        "Page-2[ २८ - १२-५९ महिना भित्र मृत्यु भएका बालबालिकाको संख्या  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (छ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषणः
                      झाडापखाला
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    २९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी
                      बच्चाहरुको संख्या
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
                        "Page-2[२९ झाडापखाला लागेका २ महिनादेखि ५ वर्ष मुनिका जम्मा विरामी बच्चाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३0
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पुनर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको
                      संख्या
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
                        "Page-2[३0 पुनर्जलीय झोल र जिंक चक्कीबाट उपचार गरेका बच्चाहरुको संख्या      जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      वर्ष मुनिका बच्चाहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिया
                      संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    पुरिया
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2                  ३१ ५ वर्ष मुनिका बच्चाहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या पुरिया]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ५ वर्ष भन्दा माथिका मानिसहरूलाई वितरण गरेको पुनर्जलीय
                      झोलको पुरिया संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    पुरिया
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[३२ ५ वर्ष भन्दा माथिका मानिसहरूलाई वितरण गरेको पुनर्जलीय झोलको पुरिया संख्या पुरिया]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      वितरण गरेको जिङ्क चक्कि संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    चक्कि
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[ ३३ वितरण गरेको जिङ्क चक्कि संख्या  चक्कि]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका विरामी
                      बच्चाहरुलाई प्रेषण गरेको संख्या
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
                        "Page-2[३४ झाडापखाला लागेका २ महिना देखि ५ बर्ष सम्मका विरामी बच्चाहरुलाई प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ज)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २-५९ महिना सम्मका विरामि शिशुको उपचार तथा प्रेषणः
                      श्वासप्रश्वास रोग
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      श्वास प्रश्वास रोग लागेका २ देखि ५९ महिनाका विरामी
                      बच्चाहरुको संख्या
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
                        "Page-2[३५ श्वास प्रश्वास रोग लागेका २ देखि ५९ महिनाका विरामी बच्चाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      न्यूमोनिया नभएको (रुघाखोकी भएका) ५ वर्ष मुनिका बच्चालाई
                      घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या
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
                        "Page-2[३६ न्यूमोनिया नभएको (रुघाखोकी भएका) ५ वर्ष मुनिका बच्चालाई घरेलु उपचार सल्लाह दिएको बच्चाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      श्वास प्रश्नास रोग भई स्वास्थ्य संस्थामा प्रेषण गरिएका २
                      देखि ५९ महिनाका बालबालिकाहरुको संख्या
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
                        "Page-2[३७ श्वास प्रश्नास रोग भई स्वास्थ्य संस्थामा प्रेषण गरिएका २ देखि ५९ महिनाका बालबालिकाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (झ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">प्रेषण</h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका
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
                        "Page-2[ सुरक्षित गर्भपतनको लागि स्वास्थ्य संस्थामा प्रेषण गरेका महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ३९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर
                      किशोरीहरुको संख्या
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
                        "Page-2[३९ स्वास्थ्य संस्थामा सेवा लिन प्रेषण गरिएका किशोर किशोरीहरुको संख्या जना]",
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
                        "Page-2[२३ महिना भित्रमा पूर्ण खोप प्राप्त गरेको बच्चा संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      लगातार २ हप्ता सम्म खोकी लागी स्वास्थ्य संस्थामा प्रेषण
                      गरेका विरामीहरुको संख्या
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
                        "Page-2[४० लगातार २ हप्ता सम्म खोकी लागी स्वास्थ्य संस्थामा प्रेषण गरेका विरामीहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      प्राथमिक उपचार गरेको संख्या
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
                        "Page-2[प्राथमिक उपचार गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या
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
                        "Page-2[४२ प्राथमिक उपचारको क्रममा प्रेषण गरेको बिरामीहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ज)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      परिवार नियोजन
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या
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
                        "Page-2[४३ खाने चक्की पिल्स वितरण गरिएका महिलाहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्या
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
                        "Page-2[४४ आकस्मिक गर्भ निरोधक चक्की वितरण गरिएका महिलाहरुको संख्याजना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      वितरण गरेको खाने चक्की पिल्सको साइकल संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    साइकल
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[४५ वितरण गरेको खाने चक्की पिल्सको साइकल संख्या साइकल]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    डोज
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[४६ बितरण गरेको आकस्मिक गर्भ निरोधक चक्कीको डोजको संख्या डोज]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      कण्डम वितरण गरेको जना
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register("Page-2[४७ कण्डम वितरण गरेको जना]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      वितरण गरेको कण्डमको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    गोटा
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[४८ वितरण गरेको कण्डमको संख्या गोटा]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ४९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको
                      दम्पतीहरुको संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    दम्पती
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page-2[४९ परिवार नियोजन सेवाको लागि स्वास्थ्य संस्थामा प्रेषण गरेको दम्पतीहरुको संख्या दम्पती]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य
                      दश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या
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
                        "Page-2[५० परिवार नियोजन सम्बन्धि सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दश्य) प्रयोग गरी स्वास्थ्य शिक्षा पाएको संख्या]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ट)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शीघ्र कुपोषणको एकोकृत व्यवस्थापनः एम.यु.ए.सी. छनौट
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      हरियो; हृष्टपुष्टः खुशी परिवार
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
                        "Page-2[५१ हरियो हृष्टपुष्ट खुशी परिवार जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पहेलोः मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्वारा
                      परामर्श
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
                        "Page-2[५२ पहेलोः मध्यम शीघ्र कुपोषण: घरमा म.स्वा.स्व.से. द्वारा परामर्श जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      रातोः कडा शीघ्र कुपोषण: स्वास्थ्य संस्थामा प्रेषण
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
                        "Page-2[५३ रातोः कडा शीघ्र कुपोषण स्वास्थ्य संस्थामा प्रेषण जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      फुकेनासः स्वा.संस्थामा प्रेषण
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
                        "Page-2[५४ फुकेनासः स्वा.संस्थामा प्रेषण जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ठ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शीघ्र कुपोषणको एकीकृत व्यवस्थापनः घरभेट र अनुगमन
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको
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
                        "Page-2[५३ रातो कडा शीघ्र कुपोषित बच्चाः उपचार पछि निको भएको जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल
                      वृद्धि नभएको
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
                        "Page-2[५४ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गरिरहदा पनि तौल वृद्धि नभएको  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य
                      संस्था जान छाडेका
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
                        "Page-2[५५ रातोः कडा शीघ्र कुपोषित बच्चाः उपचार गर्दा गर्दै स्वास्थ्य संस्था जान छाडेका जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ड)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      एकिकृत शिशु तथा बाल्यकालीन पोषण र बार्लाभटा समुदाय
                      प्रवर्धन कार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ६ देखी ११ महिनाः पहिलो पटक
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
                        "Page-2[५६ ६ देखी ११ महिनाः पहिलो पटक जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      ५७ १२ देखी १७ महिना: पहिलो पटक
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
                        "Page-2[५७ १२ देखी १७ महिना: पहिलो पटकजना]",
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

export default Page2;
