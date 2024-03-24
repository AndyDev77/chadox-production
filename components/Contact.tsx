import { contactData } from "@/constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { title, info, form } = contactData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1">
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email } = item;

                return (
                  <div key={index}>
                    <div className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </div>
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    <div className="flex flex-col gap-y-3 mb-8">
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <FaMapMarkerAlt />
                        </div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <FaPhoneAlt />
                        </div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <FaEnvelope />
                        </div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center">
            <form className="flex flex-col gap-y-10 w-full">
              <input
                type="text"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder={form.name}
              />
              <input
                type="email"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder={form.email}
              />
              <input
                type="text"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder={form.message}
              />
              <button className="btn btn-sm btn-dark self-start">
                {form.btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
