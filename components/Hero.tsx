import { heroData } from "@/constants";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  const { title, subtitle, btnText } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
      <div className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end">
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <h1 className="h1">{title}</h1>
          <p className="mb-8 lg:mb-16 max-w-lg leading-relaxed">{subtitle}</p>
          <div>
            <button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
              {btnText}
              <div className="text-xl">
                <IoMdArrowForward />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
