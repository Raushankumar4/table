import React from "react";

const Container = () => {
  return (
    <>
      <div className=" mt-8 mb-2 mx-10 justify-center align-center border-2 border-black overflow-x-auto">
        <div class="grid grid-cols-7 ">
          <div className="row-span-2 bg-gray-100 flex justify-center items-center border-b-2 border-black border-r-2 text-[1vw] font-semi">
            <h1>नाम ि थि</h1>
          </div>
          <div className="row-span-2 bg-gray-100 w-[2.5vw]   text-[1vw] font-semi border-b-2 border-black border-r-2  ">
            <h1 className=" px-[0.3vw]  py-[0.3vw]">जाती कोड</h1>
          </div>
          <div className="bg-gray-100 w-[8vw]  ml-[-10.90vw] border-b-2 border-black border-r-2">
            <h1 className="text-[1vw] pl-[1vw] font-semi overflow-x-auto   font-semi">
              उमेि (मर्िनामा)
            </h1>
          </div>
          <div className="bg-gray-100 ml-[-16.32vw]">
            <h1 className="flex justify-center items-center border-b-2 border-black  text-[1vw] font-semi pb-[0.30vw]">
              ठेगाना
            </h1>
          </div>
          <div className="row-span-2 border-b-2 border-black border-r-2  border-l-2 bg-gray-100 flex justify-center items-center overflow-x-auto">
            <h1 className="text-[1vw] font-semi">सम्पकि नं.</h1>
          </div>
          <div className="row-span-2  border-b-2 border-black border-r-2   bg-gray-100 flex justify-center items-center ">
            <h1 className="text-[1vw] font-semi tracking-tighter whitespace-wrap">
              अर्भभावक/ िेिचाि गनेको नाम ि थि
            </h1>
          </div>
          <div className="row-span-2  bg-gray-100 flex justify-center items-center  border-b-2 border-black">
            <h1 className="text-[1vw] font-semi tracking-tighter whitespace-wrap">
              जम्मा परिवाि संख्या
            </h1>
          </div>
          <div className="grid grid-cols-2 ml-[-10.90vw]">
            <h1 className="pl-[0.45vw] text-[1vw] font-semi tracking-tighter  bg-gray-100 border-b-2 border-black w-[4.90vw]">
              मर्िला
            </h1>
            <h1 className=" ml-[-8vw] text-[1vw] font-semi tracking-tighter  border-b-2 border-l-2 border-black w-[3.90vw] border-r-2 flex justify-center items-center bg-gray-100">
              पुरूष
            </h1>
          </div>
          <div className=" bg-gray-100 flex ml-[-16.28vw] text-[1vw]  font-semi tracking-tight border-b-2 border-black overflow-x-auto">
            <h1 className="flex justify-center items-center border-black  border-r-2 w-[7vw] ">
              प्रदेश
            </h1>
            <h1 className="flex justify-center items-center border-black  border-r-2  w-[7vw] overflow-x-auto">
              र्जल्ला
            </h1>
            <h1 className="flex justify-center items-center border-black  border-r-2   w-[7vw] overflow-x-auto">
              वडा न
            </h1>
            <h1 className="flex justify-center items-center  w-[8vw] overflow-x-auto ">
              नं गााँउ/टोल
            </h1>
          </div>
          <div className="border-r-2 border-black  pl-[2vw] pt-[0.30vw]">
            <input className="outline-none w-[10vw]" type="text" />
          </div>
          <div className="flex">
            <div className="border-r-2 border-black ">
              <input
                className="w-[2.3vw] pl-[0.2vw] outline-none"
                type="
            "
              />
            </div>
            <div className=" border-r-2 border-black">
              <input className="w-[4vw] ml-[0.2vw] outline-none" type="text" />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[3.4vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[6.71vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[6.60vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[6.66vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[8.50vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[12.94vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" border-r-2 border-black">
              <input
                className="w-[13vw]  ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
            <div className=" ">
              <input
                className="w-[9.50vw] ml-[0.2vw] outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="my-0 mx-10 justify-center align-center border-2
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

              <h1 className="flex justify-center items-center w-[7.70vw] bg-gray-100">
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
              <h1 className="flex justify-center items-center w-[7.70vw] bg-gray-100">
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
              <h1 className="flex justify-center items-center w-[7.70vw] bg-gray-100">
                ४
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-1 mb-2 mx-10 justify-center align-center border-2 border-black overflow-x-auto">
        <div className="flex w-full h-[2vw]">
          <div className="bg-gray-100 w-[15vw] border-r-2 border-black"></div>
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
      </div>
    </>
  );
};

export default Container;
