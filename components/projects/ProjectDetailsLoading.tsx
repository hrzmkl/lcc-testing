import { Project } from "@/types/project";

const ProjectDetailsLoading = ({ project }: { project: Project }) => {
  const percentage = Math.round(
    (parseFloat(project?.array_options.options_proj_recolte) / 
    parseFloat(project?.array_options.options_proj_objectif)) * 100
  );
  
  return (
    <div className="w-full h-[8%] flex-center my-2 rounded-full overflow-hidden relative min-h-[26px] ">
      <section className="bg-loading flex justify-end items-center text-center min-h-[26px]"
        style={{width: `${percentage}%`}}
      >
        <p className="absolute top-0 left-0 text-sm 2xl:text-base font-light mx-auto w-full z-50 min-h-[26px]">
          {project?.array_options.options_proj_recolte === "0.00:EUR"
            ? `${project?.array_options.options_proj_recolte.split(':')[0]} €`
            : `${percentage}% - ${project?.array_options.options_proj_recolte.split(':')[0]} €`}
        </p>
      </section>
      <section className="bg-[#fdf9e9] rounded-r-full min-h-[26px]" style={{width: `${100 - percentage}%`}}></section>
    </div>
  );
};

export default ProjectDetailsLoading;
