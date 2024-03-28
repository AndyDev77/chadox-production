"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Interview from "@/components/Interview";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";

const Page = () => {
  useEffect(() => {
    const scrollArrowUp = document.getElementById("scrollArrowUp");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollArrowUp?.classList.remove("hidden");
      } else {
        scrollArrowUp?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Interview />
      <Contact />
      <div
        id="scrollArrowUp"
        className="fixed bottom-5 right-5 hidden cursor-pointer bg-dark p-3"
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp className="h-8 w-8 text-white" />
      </div>
    </main>
  );
};

export default Page;
