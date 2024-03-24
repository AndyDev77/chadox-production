import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Play } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  src: string;
  category: string;
  name: string;
}

const ProjectsCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <Card className="bg-white group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] flex items-center justify-center bg-tertairy dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <Image
              className="absolute bottom-0 shadow-2xl"
              src={project.src}
              width={347}
              height={250}
              alt="Images de projets récents"
              priority
            />
            <Link
              href="/"
              className="bg-dark w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Play className="text-white" />
            </Link>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="bg-dark text-white p-2 uppercase text-sm font-medium mb-2 absolute top-4 left-5 ">
            {project.category}
          </Badge>
          <h4 className="h4 mb-1">{project.name}</h4>
        </div>
      </Card>
    </div>
  );
};

export default ProjectsCard;
