"use client";


const AboutUs = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-auto mx-5 pt-10 p-4">
      <div className="flex w-[90%] h-[70%]  border-[1px] border-black rounded-lg overflow-auto">
        <div className="relative w-full  p-6 ">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1.5px]">
            <h1 className="relative font-semibold text-3xl pl-4 pt-4">
              About Us
            </h1>
            <p className="relative text-xl p-4">
              ScholarLift is a dedicated crowdfunding platform focused on
              providing financial aid and support for students in need. Our
              mission is to empower education by connecting donors and students
              to make a difference, one scholarship at a time.
            </p>
            <p className="relative text-xl p-4">
              We believe every student deserves an opportunity to reach their
              full potential. ScholarLift ensures transparent and effective ways
              to bridge the gap between donors and students with educational
              dreams.
            </p>
            <div className="flex pt-4  justify-evenly items-center">
              <div className="flex flex-col justify-center ">
                <img className="h-16 p-2" src="/images/rupee.svg" alt="" />
                <h1 className="text-3xl font-semibold text-redbg text-center">
                  1000
                </h1>
                <h2 className="text-gray-600 font-semibold text-center">Donations</h2>
              </div>

              <div className="flex flex-col justify-center items-center ">
                <img
                  className="relative h-20 pb-2 "
                  src="/images/people.svg"
                  alt=""
                />
                <h1 className="text-3xl text-center font-semibold text-redbg">
                  100
                </h1>
                <h2 className="text-gray-600 font-semibold">Helped Students</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-0 sm:w-[40%]    ">
          <img
            src="https://ccrc.tc.columbia.edu/images/manycauses.jpg"
            className="w-full h-full hidden sm:block  object-cover"
            alt="Students"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
