"use client";
import React, { useState } from "react";
import { ProjectsData } from "@/constants";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import ProjectsCard from "@/components/ProjectsCard";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

const uniqueCategories = [
    "Tous",
    ...new Set(ProjectsData.images.map((item) => item.category)),
  ];
  

const pageProjects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("Tous");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setIsModalOpen(true);
    setVideoSrc(src);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  const filteredProjects = ProjectsData.images.filter((project) => {
    // if category is "tous les projets" retrun all projetcs else filter by category
    return category === "Tous" ? project : project.category === category;
  });


  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 mt-40 text-center mx-auto">
          Mes Projets
        </h2>
        {/*tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="bg-dark text-white w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs contents */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectsCard project={project} openModal={openModal} />
                </TabsContent>
              );
            })}
          </div>
          <ModalVideo
            channel="custom"
            isOpen={isModalOpen}
            url={videoSrc}
            onClose={closeModal}
          /> 
        </Tabs>
      </div>
    </section>
  )
}

export default pageProjects
