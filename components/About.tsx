import { aboutData } from "@/constants";
// import { IoMdArrowForward } from "react-icons/io";

const About = () => {
  const { title, subtitle1, subtitle2} = aboutData;
  return (
    <section className="lg:py-16 xl:pb-[160px]" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          <div className="flex flex-col lg:flex-row flex-1">
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
              01
            </div>
          </div>
          <div className="flex-1 h-full xl:mt-48">
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                {/* <button className="btn btn-lg btn-link">
                  {btnText}{" "}
                  <div className="text-xl">
                    <IoMdArrowForward />
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
