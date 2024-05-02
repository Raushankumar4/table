import { useForm } from "react-hook-form";

const Page3 = () => {
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
              </thead>
              <tbody className="text-[1.1vw] fonr-semi">
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १२ देखी १७ महिना: दोस्रो पटक
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
                        "Page3[५८ १२ देखी १७ महिना: दोस्रो पटक जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ५९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १८ देखी २३ महिना: पहिलो पटक
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
                        "Page3[५९ १८ देखी २३ महिना: पहिलो पटक  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १८ देखी २३ महिना: दोस्रो पटक
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
                        "Page3[६० १८ देखी २३ महिना: दोस्रो पटक  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १८ देखी २३ महिना: तेस्रो पटक
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
                        "Page3[६१ १८ देखी २३ महिना: तेस्रो पटकजना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ढ)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">विविध</h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आमा समुहको बैठक वसेको पटक
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    पटक
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register("Page3[६२ आमा समुहको बैठक वसेको पटक]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आमा समुहको बैठक सहभागी संख्या
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
                        "Page3[६३ आमा समुहको बैठक सहभागी संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक
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
                        "Page3[६४ आमा समुहको बैठकमा स्वास्थ्यकर्मी सहभागी भएको पटक]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                      बाहेक अन्य स्थानमा भएको मात्र)
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
                        "Page3[६५ गर्भवती अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र) जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      प्रसव अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                      बाहेक अन्य स्थानमा भएको मात्र)
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
                        "Page3[६६ प्रसव अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र) जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुक्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                      बाहेक अन्य स्थानमा भएको मात्र)
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
                        "Page3[६७ सुक्केरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र) जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुक्तेरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा
                      बाहेक अन्य स्थानमा भएको मात्र)
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
                        "Page3[६८ सुक्तेरी अवस्थामा मातृ मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक अन्य स्थानमा भएको मात्र) जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ६९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या
                      (स्वास्थ्य संस्थामा बाहेक)
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
                        "Page3[६९ (२ महिना देखि ५९ महिनासम्मका बालवालिकाको मृत्यु संख्या (स्वास्थ्य संस्थामा बाहेक))  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      बालस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप
                      चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य
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
                        "Page3[७० बालस्वास्थ्य सम्बन्धि स्वास्थ्य शिक्षा सामग्री (फ्लिप चार्ट/पोस्टर/श्रब्य दृश्य सामग्री) प्रयोग गरी स्वास्थ्य शिक्षा पाएका संख्या]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७१
                  </th>
                  <th className="border-2 border-black bg-gray-100 h-[5vw]">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      स्वस्थ्य जीवनशैलीको लागि नसर्ने रोगका जोखिम तत्व र
                      रोकथामको बारेमा फ्लिप चार्ट/पोस्टर/श्रब्य हश्य सामग्री
                      प्रयोग गरी स्वास्थ्य शिक्षा दिएको
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
                        "Page3[७१ स्वस्थ्य जीवनशैलीको लागि नसर्ने रोगका जोखिम तत्व र रोकथामको बारेमा फ्लिप चार्ट/पोस्टर/श्रब्य हश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा दिएको पटक]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७२
                  </th>
                  <th className="border-2 border-black bg-gray-100 h-[5vw]">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      स्विस्थ्य जीवनशैलीको लागि नसर्ने रोगका जोखिम तत्व र
                      रोकथामको बारेमा फ्लिप चार्ट/पोस्टर/श्रब्य हश्य सामग्री
                      प्रयोग गरी स्वास्थ्य शिक्षा दिएको
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
                        "Page3[७२ स्विस्थ्य जीवनशैलीको लागि नसर्ने रोगका जोखिम तत्व र रोकथामको बारेमा फ्लिप चार्ट/पोस्टर/श्रब्य हश्य सामग्री प्रयोग गरी स्वास्थ्य शिक्षा दिएको संख्या]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या
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
                        "Page3[७३ १३ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या ]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या
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
                        "Page3[७४ २६ हप्तासम्म आइरन फोलिक एसिड चक्की पाएका किशोरीको संख्या]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]">
                    (ण)
                  </th>
                  <th
                    colSpan={3}
                    className="border-2 text-[1.4vw] font-bold border-black bg-red-100 w-[4vw]"
                  >
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नवजात शिशु स्पाहार कार्यक्रम
                    </h1>
                  </th>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शिशु जन्म: घर
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register("Page3[७५ शिशु जन्म घर जना]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शिशु जन्मः स्वास्थ संस्था
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    जना
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register("Page3[शिशु जन्मः स्वास्थ संस्था जना]", {})}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शिशु जन्मः तालिम प्राप्त स्वास्थकर्मिबाट
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
                        "Page3[७७ शिशु जन्मः तालिम प्राप्त स्वास्थकर्मिबाट जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      शिशु जम्मदा म.स्वा.से. उपस्थिति भएको
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
                        "Page3[७८ शिशु जम्मदा म.स्वा.से. उपस्थिति भएको जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ७९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन
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
                        "Page3[७९ घरमै जन्मिएको निःसासिएको नवजात शिशुको व्यवस्थापन जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको
                      सुनिश्चित गरिएका नवजात शिशुहरुको संख्या
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
                        "Page3[८० घरमा प्रसुति भई नाभि काट्ने बित्तिकै नाभी मलम लगाएको सुनिश्चित गरिएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      धरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको
                      सुनिश्चित गरिएका नवजात शिशुहरुको संख्या
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
                        "Page3[८१ धरमा प्रसुति भई जन्मने बित्तिकै आमाको छातीमा टांसेर राखेको सुनिश्चित गरिएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      घरमा प्रसुति भई जन्मेको १ घण्टा भित्रमा स्तनपान गराएको
                      सुनिश्चित गरिएका नवजात शिशुहरुको संख्या
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
                        "Page3[८२ घरमा प्रसुति भई जन्मेको १ घण्टा भित्रमा स्तनपान गराएको सुनिश्चित गरिएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८३
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
                        "Page3[८३ जन्मेको २४ घण्टासम्म ननुहाएको सुनिश्चित गरिएको नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सामान्य तौल भएका नवजात शिशुहरुको संख्या
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
                        "Page3[८४ सामान्य तौल भएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      कम तौल भएका नवजात शिशुहरुको संख्या
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
                        "Page3[८५ कम तौल भएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८६
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      धेरै कम तौल भएका नवजात शिशुहरुको संख्या
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
                        "Page3[८६ धेरै कम तौल भएका नवजात शिशुहरुको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुक्तेरी भएको तेश्रो दिनमा आमालाई परामर्श र बच्चालाई जाँच
                      भेट गरेको संख्या
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
                        "Page3[८७ सुक्तेरी भएको तेश्रो दिनमा आमालाई परामर्श र बच्चालाई जाँच भेट गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुक्तेरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच
                      भेट गरेको संख्या
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
                        "Page3[८८ सुक्तेरी भएको सातौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ८९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      सुक्तेरी भएको उनान्तिसौं दिनमा आमा लाई परामर्श र बच्चालाई
                      जाँच भेट गरेको संख्या
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
                        "Page3[८९ सुक्तेरी भएको उनान्तिसौं दिनमा आमा लाई परामर्श र बच्चालाई जाँच भेट गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९०
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आफो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको
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
                        "Page3[९० आफो क्षेत्रका शंकास्पद क्षयरोगका बिरामीको प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      आफो क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको
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
                        "Page3[९१ आफो क्षेत्रका शंकास्पद कुष्ठरोगका बिरामीको प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९२
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नसर्ने रोग (मधुमेह,मृगौला, दीर्घ श्वासप्रश्वास,
                      अर्बुदरोग,मुटुरोग) का बिरामीको प्रेषण गरेको संख्या
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
                        "Page3[९२ नसर्ने रोग मधुमेह मृगौला दीर्घ श्वासप्रश्वास अर्बुदरोग मुटुरोग का बिरामीको प्रेषण गरेको संख्या  जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या
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
                        "Page3[९३ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९४
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पाठेघर खस्ने समस्पा भएका आमाको प्रेषण गरेको संख्या
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
                        "Page3[९४ पाठेघर खस्ने समस्पा भएका आमाको प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९५
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या
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
                        "Page3[९५ पाठेघरको मुखको क्यान्सरको जांचको लागि प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९७
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम
                      रू. (लगानी समेत) सुखाकर
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    रकम रु.
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page3[९७ महिला सामुदायिक स्वास्थ्य स्वमसेविका कोषमा जम्मा भएको रकम रू. (लगानी समेत) सुखाकर रकम रु]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९३
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या
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
                        "Page3[९३ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना]",
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
                      व्यक्तिगत घटना दर्ता सम्बन्धि परामर्श
                    </h1>
                  </th>
                </tr>

                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९८
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नवजात शिशुको ३५ दिनभित्र जन्म दर्ताका लागि परामर्श दिएको
                      परिवार संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    परिवार
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page3[९३ मानसिक स्वास्थ्य समस्या भएका बिरामीको प्रेषण गरेको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    ९९
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या
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
                        "Page3[नवजात शिशुको जन्म दर्ता भएको सुनिश्चित गरिएको संख्या जना]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १००
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको
                      परिवार संख्या
                    </h1>
                  </th>
                  <th className="border-2 border-black bg-gray-100 w-[8vw]">
                    परिवार
                  </th>
                  <td className="border-2 border-black  w-[8vw]">
                    <input
                      className="outline-none overflow-hidden pl-[0.44vw]"
                      type="text"
                      {...register(
                        "Page3[१०० मृत्यु भएको ३५ दिनभित्र मृत्यु दर्ताका लागि परामर्श दिएको परिवार संख्या परिवार]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr className="h-[3.4vw]">
                  <th className="border-2 border-black bg-gray-100 w-[4vw]">
                    १०१
                  </th>
                  <th className="border-2 border-black bg-gray-100">
                    <h1 className="flex flex-start pl-[0.40vw]">
                      मृत्य दर्ता भएको सुनश्चित गरिएको संख्या
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
                        "Page3[मृत्य दर्ता भएको सुनश्चित गरिएको संख्या]",
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

export default Page3;
