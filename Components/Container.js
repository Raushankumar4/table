import React from "react";

const Container = () => {
  return (
    <>
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
                <h1 className="w-[10vw]  border-r-2 border-black flex justify-center items-center bg-gray-100">
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
                <h1 className="flex justify-center items-center boreder-r-2 border-black ml-[0.56vw]">
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
      </form>
    </>
  );
};

export default Container;
