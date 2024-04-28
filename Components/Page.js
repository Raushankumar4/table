import React, { useState } from "react";

const Page2 = () => {
  const [userInput, setuserInput] = useState("");
  const handleOnChange = (e) => {
    setuserInput(e.target.value);
  };

  return (
    <>
      <div className="register">
        <form action="">
          <div className=" mt-8 mb-2 mx-10 justify-center align-center border-2 border-black overflow-x-auto">
            {/* Section-1 start */}

            <div className="section-1 flex">
              <div className="flex flex-col w-[13vw] h-[6.6vw] border-r-2 border-black">
                <h1 className="text-[1vw] font-semi tracking-tight h-[5vw] bg-gray-100 flex justify-center items-center">
                  नाम र थर
                </h1>
                <div className="input-sec bg-white border-t-2 border-black">
                  <input
                    value={userInput}
                    onChange={handleOnChange}
                    className="w-[5vw] h-[1.2vw] ml-[2vw]  outline-none"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="flex flex-col w-[2.4vw] h-[6.6vw] border-r-2 border-black">
                  <h1 className="text-[1vw] font-semi tracking-tight h-[5vw] bg-gray-100 flex justify-center items-center pl-[0.19vw]">
                    जाती कोड
                  </h1>
                  <div className="input-section bg-white border-t-2 border-black">
                    <input
                      className="w-[1vw] h-[1.2vw] ml-[0.29vw]  outline-none"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3 w-[46vw] border-r-2 border-black">
                <div className="flex h-[1.6vw]  border-b-2 border-black text-[1vw] font-semi tracking-tight">
                  <h1 className="w-[10.1vw]  border-r-2 border-black flex justify-center items-center bg-gray-100">
                    उमर महिनामा
                  </h1>
                  <h1 className="w-full   flex justify-center items-center bg-gray-100">
                    ठेगाना
                  </h1>
                </div>
                <div className="flex h-[1.6vw]  border-b-2 border-black text-[1vw] font-semi tracking-tight bg-gray-100">
                  <h1 className="w-[4.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    महिला
                  </h1>
                  <h1 className="w-[4.12vw] border-r-2 flex justify-center items-center border-black text-[1vw] font-semi tracking-tight">
                    पुरुष
                  </h1>
                  <h1 className="w-[9.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    प्रदेश
                  </h1>
                  <h1 className="w-[9.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    जिल्ला
                  </h1>
                  <h1 className="w-[6.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    वार्ड नं
                  </h1>
                  <h1 className="w-[12.12vw]  text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    गाउँ/टोला
                  </h1>
                </div>
                <div className="flex h-[1.6vw]  border-b-2 border-black text-[1vw] font-semi tracking-tight bg-gray-100">
                  <h1 className="w-[4.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    महिला
                  </h1>
                  <h1 className="w-[4.12vw] border-r-2 flex justify-center items-center border-black text-[1vw] font-semi tracking-tight">
                    पुरुष
                  </h1>
                  <h1 className="w-[9.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    प्रदेश
                  </h1>
                  <h1 className="w-[9.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    जिल्ला
                  </h1>
                  <h1 className="w-[6.12vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    वार्ड नं
                  </h1>
                  <h1 className="w-[12.12vw]  text-[1vw] font-semi tracking-tight  flex justify-center items-center">
                    गाउँ/टोला
                  </h1>
                </div>
                <div className="flex">
                  <div className="w-[4.12vw] h-[1.8vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[2.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-[4.12vw] h-[1.8vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[2.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-[9.12vw] h-[1.8vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[6.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-[9.12vw] h-[1.8vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[6.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-[6.12vw] h-[1.8vw] border-r-2 border-black text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[4.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-[12.12vw] h-[1.8vw]  text-[1vw] font-semi tracking-tight  ">
                    <input
                      className="w-[9.2vw] h-[1vw]  mt-[0.36vw] ml-[0.30vw] outline-none "
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full h-[4.8vw] border-b-2 border-black flex font-semi tracking-tight text-[1vw] bg-gray-100">
                  <h1 className="w-[10vw] flex justify-center items-center border-r-2 border-black">
                    सम्पर्क नं.
                  </h1>
                  <h1 className="w-[18vw] flex justify-center items-center border-r-2 border-black">
                    अभिभावक/ हेरचाह गर्नेको नाम र थर
                  </h1>
                  <h1 className="flex justify-center items-center boreder-r-2 border-black m-[0.65vw]">
                    जम्मा परिवार सङ्ख्या
                  </h1>
                </div>
                <div className="flex">
                  <div className="w-[10vw] border-r-2 border-black">
                    <input
                      className="w-[6vw] ml-[0.45vw] outline-none"
                      type="text"
                    />
                  </div>
                  <div className="w-[18vw] border-r-2 border-black">
                    <input
                      className="w-[14vw] ml-[0.45vw] outline-none"
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="w-[8vw] ml-[0.45vw]  outline-none"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my-4 mx-10 justify-center align-center border-2
        border-black overflow-x-auto"
          >
            <div className="flex">
              <div className="flex flex-col bg-gray-100 w-[6rem] border-r-2 border-black ">
                <h1 className=" border-b-2 border-black flex justify-center items-center text-[1vw] font-semi  h-[4vw]">
                  सेवा दतािन
                </h1>
                <input className="" type="text" />
              </div>
              <div className="ml-[1vw]">
                <div className="w-[10vw] border-l-2 border-black">
                  <h1 className="border-b-2 border-r-2 border-black flex justify-center items-center text-[1vw] font-semi  h-[4vw] bg-gray-100">
                    भनािर्मर्त (ग.म.सा.)
                  </h1>
                  <div className="flex">
                    <input
                      className="w-[3.2vw] pl-[0.4vw] outline-none  border-r-2 border-black"
                      type="text"
                    />
                    <input
                      className="w-[3.2vw] pl-[0.4vw] outline-none  border-r-2 border-black"
                      type="text"
                    />
                    <input
                      className="w-[3.5vw] pl-[0.4vw] outline-none  border-r-2 border-black"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-[1vw]">
                <div className="w-[10vw] border-l-2 border-black">
                  <h1 className="border-b-2 border-r-2 border-black flex justify-center items-center text-[1vw] font-semi  h-[4vw] bg-gray-100 pl-[1vw]">
                    भनािको र्कर्सम (गोलो लगाउने)
                  </h1>
                  <div className="flex">
                    <h1 className="w-[4.84vw] pl-[0.4vw] outline-none  border-r-2 border-black">
                      कडा
                    </h1>
                    <h1 className="w-[4.99vw] pl-[0.4vw] outline-none  border-r-2 border-black">
                      मध्यमा
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="w-[10vw]  ">
                  <h1 className="border-b-2 border-r-2 border-black flex justify-center items-center text-[1vw] font-semi  h-[4vw] bg-gray-100 ">
                    आफै
                  </h1>
                  <div className="flex">
                    <input
                      className="w-[9.96vw] pl-[0.4vw] outline-none  border-r-2 border-black"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="w-[32vw]  ">
                  <h1 className="border-b-2 border-r-2 border-black flex justify-center items-center text-[1vw] font-semi  h-[2vw] bg-gray-100 ">
                    प्रेषण
                  </h1>
                  <div className="flex border-b-2 border-black h-[2vw] bg-gray-100 ">
                    <h1 className="flex justify-center items-center text-[1vw] font-semi tracking-tight w-[8vw] border-r-2 border-black">
                      अन्तिंग
                    </h1>
                    <h1 className="flex justify-center items-center text-[1vw] font-semi tracking-tight w-[8vw] border-r-2 border-black">
                      म.स्वा.स्व.स
                    </h1>
                    <h1 className="flex justify-center items-center text-[1vw] font-semi tracking-tight w-[8vw] border-r-2 border-black">
                      स्वास्थ्य संस्था
                    </h1>
                    <h1 className="flex justify-center items-center text-[1vw] font-semi tracking-tight w-[8vw] border-r-2 border-black">
                      बर्ििङ्ग
                    </h1>
                  </div>
                  <div className="bg-red-200 flex w-[32vw]">
                    <input
                      className="border-r-2 border-black flex justify-center items-center  font-semi outline-none w-[8vw] pl-[0.34vw] "
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black flex justify-center items-center font-semi outline-none w-[8vw] pl-[0.34vw] "
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black flex justify-center items-center font-semi outline-none w-[8vw] pl-[0.34vw] "
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black flex justify-center items-center  font-semi outline-none w-[8vw] pl-[0.34vw] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex w-full border-b-2 border-black text-[1vw] font-sem h-[2vw]">
                  <h1 className="flex justify-center items-center w-[3.55vw] bg-gray-100 border-r-2 border-black"></h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    बुवा
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    आमा
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    जुम्ल्यािा
                  </h1>

                  <h1 className="flex justify-center items-center w-[6.48vw] bg-gray-100">
                    {" "}
                    पुनः िोगी भना
                  </h1>
                </div>
                <div className="flex border-b-2 border-black text-[1vw] font-semi h-[2vw]">
                  <h1 className="flex justify-center items-center w-[3.55vw] bg-gray-100 border-r-2 border-black">
                    भएको
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    १
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    २
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    ३
                  </h1>
                  <h1 className="flex justify-center items-center w-[6.48vw] bg-gray-100">
                    ४
                  </h1>
                </div>
                <div className="flex h-[1.76vw] font-smi text-[1vw] bg-gray-100 h-">
                  <h1 className="flex justify-center items-center w-[3.55vw] bg-gray-100 border-r-2 border-black">
                    नभएको
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    १
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    २
                  </h1>
                  <h1 className="flex justify-center items-center w-[3.85vw] bg-gray-100 border-r-2 border-black">
                    ३
                  </h1>
                  <h1 className="flex justify-center items-center w-[6.48vw] bg-gray-100">
                    ४
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-1 mb-2 mx-10 justify-center align-center  border-2 border-black overflow-x-auto">
            <div className="flex w-[100%] h-[2vw] border-b-2 border-black ">
              <div className="bg-gray-100 w-[17.26vw] border-r-2 border-black"></div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                1
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                2
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                3
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                4
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                5
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                6
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                7
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                8
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                9
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                10
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                11
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                12
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                13
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                14
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                15
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                16
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                17
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                18
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                19
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                20
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                21
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                22
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                23
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                24
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                25
              </div>
              <div className="border-r-2 border-black pl-[0.56vw] bg-gray-100 w-[4vw]">
                26
              </div>
              <div className="  pl-[0.56vw] bg-gray-100 w-[4vw]">27</div>
            </div>
            <div className="flex ">
              <div className="h-[11vw] w-[2vw] text-[1.1vw] font-bold border-r-2 border-black relative ">
                <h1 className="-rotate-90 whitespace-nowrap ml-[0vw] mt-[7.5vw]">
                  नाप तौलको चाटि
                </h1>
              </div>
              <div className="w-full h-[11vw]  font-semi text-[1vw] pl-[0.24vw] pb-[1vw] flex flex-col">
                <div className="w-full h-[2vw] flex border-b-2 border-black ml-[-0.22vw] font-semi text-[1vw]">
                  <h1 className="w-[10.24vw] pl-[0.34vw] border-r-2 border-black">
                    र्मर्त
                  </h1>

                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.9vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.99vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.94vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.95vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.99vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[2.94vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="border-r-2 border-black pl-[0.56vw]  w-[3.01vw] outline-none"
                    type="text"
                  />
                  <input
                    className="pl-[0.56vw]  w-[2.6vw] outline-none"
                    type="text"
                  />
                </div>
                <div className="w-full h-[2vw]  border-b-2 border-black  ml-[-0.22vw]">
                  <div className="w-full h-[2vw] flex border-b-2 border-black ml-[-0.22vw] font-semi text-[1vw]">
                    <h1 className="w-[10.2vw] pl-[0.34vw] border-r-2 border-black">
                      उचाई/लम्बाइ (से.मी.)
                    </h1>
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.92vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.99vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.99vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.99vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.97vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.97vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.99vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.94vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.01vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[2.98vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3vw] outline-none"
                      type="text"
                    />
                    <input
                      className="border-r-2 border-black pl-[0.56vw] w-[3.12vw] outline-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full h-[2vw] border-b-2 border-black ml-[-0.34vw]">
                  <div
                    className="flex
           "
                  >
                    <h1 className="w-[10.10vw] h-[2vw] pl-[0.34vw] border-r-2 border-black">
                      तौल (के.जी.)
                    </h1>
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.94vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.94vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.98vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.96vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.94vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[2.96vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3.01vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2vw] outline-none w-[3.10vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full h-[2vw]  ml-[-0.22vw]">
                  <div className=" border-b-2 border-black h-[2.4vw] flex">
                    <h1 className="w-[10vw] pl-[0.34vw] border-r-2 border-black h-[2.4vw] whitespace-wrap leading-3 pt-[0.24vw]">
                      उचाईको आधािमा तौल (z- score)
                    </h1>
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.94vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.94vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.99vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw]  border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.94vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.97vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.94vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[2.96vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.01vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                    <input
                      className="h-[2.4vw] outline-none w-[3.11vw] border-r-2 border-b-2 pl-[0.32vw] border-black"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full h-[2.1vw] ">
                  <div className="flex ">
                    <h1 className="w-[9.80vw]  pl-[0.34vw] border-r-2 border-black h-[3.1vw] whitespace-wrap  pt-[0.74vw] font-smi text-[1vw]">
                      एम.यु.ए.सी. (र्म.र्म.)
                    </h1>
                    <input
                      className="h-[2.62vw] outline-none w-[2.97vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.95vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.95vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.96vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.96vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.90vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.97vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.96vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[2.96vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.01vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw]"
                      type="text"
                    />
                    <input
                      className="h-[2.62vw] outline-none w-[3.08vw] border-r-2 pl-[0.32vw] border-black mt-[0.42vw] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section-3 */}
          <div className="mt-2 mb-2 mx-10 justify-center align-center border-2 border-black overflow-x-auto">
            <div className="section-3 flex ">
              <div className="h-[36vw] w-[6vw] text-[1.1vw] font-bold border-r-2 border-black relative bg-gray-100 ">
                <h1 className="-rotate-90 whitespace-nowrap flex  justify-center items-center  mt-[17vw] ml-[-2vw] tracking-tighter ">
                  प्रत्येक खण्डले२० ग्राम तौल घटेको वा बडेको देखाउाँछ। बच्चा
                  सुर्िएको केसम
                </h1>
                <h1 className="-rotate-90 whitespace-nowrap flex  justify-center items-center  mt-[-1.5vw] ml-[0.45vw] tracking-tighter ">
                  प्रािखिक बेलामा तौल घट्नु स्व भार्भक िो। त्यस कािण ग्राफ शुरु
                  गदािअखन्तमवाट
                </h1>
                <h1 className="-rotate-90 whitespace-nowrap flex  justify-center items-center  mt-[-1.5vw] ml-[2.8vw] tracking-tighter ">
                  शुरु नगने |
                </h1>
              </div>
              <div>
                <div className="ml-[1vw] border-l-2 border-black">
                  <div className="h-[36vw] w-[4vw] text-[1.1vw] font-bold border-r-2 border-black relative bg-gray-100 ">
                    <h1 className="rotate-90 whitespace-nowrap pt-[14vw] pl-[18vw] tracking-tighter ">
                      तौल चाटि
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" w-[8vw] flex flex-col border-r-2 border-black">
                <div className="h-[4vw] border-b-2 border-black">
                  <input
                    className="w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw] "
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className=" w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw]  outline-none"
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto border-b-2 border-black">
                  <input
                    className="w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw] outline-none "
                    type="text"
                  />
                </div>
                <div className="h-[4vw] overflow-x-auto">
                  <input
                    className="w-[6vw] h-[2.8vw] mt-[0.40vw] ml-[0.30vw] outline-none "
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black border-r-2">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>

              <div className="w-[3.4vw] border-black ">
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>
                <div className="h-[1vw] border-b-2 border-black"></div>

                <div className="h-[1vw] "></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page2;
