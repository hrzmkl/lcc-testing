import { Project } from "@/types/project";
import Image from "next/image";

const ProjectDetailsSectionOne = ({ project, isLoading = false }: { project?: Project, isLoading?: boolean })  => {
  if (isLoading && !project) {
    return null;
  }

  return (
    <section className="h-[70vh] max-h-[560px] lg:h-[90vh] mid-xl:h-[56vh] flex justify-center items-center relative">
      <Image src={project?.header_photo_url || "/Images/fiche-bg.webp" } alt="" fill sizes="1920px" loading="eager" className="object-cover" />
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col absolute mx-auto left-0 right-0 px-4"> 
        <div className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto flex flex-col justify-center items-start gap-6 mt-[7.5rem]">
          <div className="w-full flex flex-wrap justify-start items-center gap-3">  
            <p
              className="px-3 py-2 text-xs md:text-sm lg:text-base font-normal rounded-full"
              style={{ background: "#3fe8a6" }}
            >
            {project?.opp_status_label.toUpperCase()}
            </p>
            <div className="flex items-center px-2 py-2 md:py-[6px] text-xs md:text-sm lg:text-base font-normal rounded-full bg-[#eeefee]">
              <span className="w-[20px] h-[20px] relative md:w-[28px] md:h-[28px] flex items-center justify-center rounded-full mr-2">
                <Image
                  src="/Images/cameroun-flag.webp"
                  alt="cameroon_flag_image"
                  fill
                  sizes="20px"
                  priority
                  className="w-full h-full object-cover"
                />
              </span>
              {project?.array_options?.options_proj_lieurealisation?.length
              ? `${project.array_options.options_proj_localisation.label.toUpperCase()} : ${project.array_options.options_proj_lieurealisation
                  .map((lieu: string) => lieu.toUpperCase())
                  .join(" ET ")}`
              : project?.array_options.options_proj_localisation.label.toUpperCase()}
            </div>
            {project && (project.categories.length > 0) ? (
              project?.categories.map((category: { id: string; color: string; label: string }, index: number) => (
                <p
                  key={index}
                  className="px-3 py-2 text-xs md:text-sm lg:text-base font-normal rounded-full"
                  style={{ background: `#${category.color}` || "#ccc" }}
                >
                  {category.label.toUpperCase()}
                </p>
              ))
            ) : (
              <p className="px-3 py-2 text-xs md:text-sm lg:text-base font-normal rounded-full bg-gray-300">
                Non défini
              </p>
            )}
          </div>

          <div className="w-full">
            <p className="text-white text-[2.5rem] md:text-[50px] leading-[1] md:leading-tight font-extrabold">
              {project?.title || "Titre par défaut"}
            </p>
          </div>
        </div>
      </div>
 
    </section>
  );
};

export default ProjectDetailsSectionOne;
