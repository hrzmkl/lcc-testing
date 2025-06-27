import parse from "html-react-parser";
import ProjectDetailsLoading from "./ProjectDetailsLoading";
import { Project } from "@/types/project";
import { Contribution } from "@/types/contribution";
import { getFullName } from "@/lib/utils";
import { formatTimeAgo } from "@/lib/dateUtils";
import { useRef } from "react";
import ImageKit from "../ui/ImageKit";

interface ProjectDetailsSectionTwoProps {
  project?: Project;
  contributions: Contribution[];
}

const ProjectDetailsSectionTwo = ({ project, contributions }: ProjectDetailsSectionTwoProps)  => {
  const leftSectionRef = useRef<HTMLDivElement>(null);

  if (!project) {
    return null;
  }

  return (
    <section className="relative flex justify-center items-center py-12 px-4">
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col  mx-auto left-0 right-0"> 
      <div className="w-full  md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto flex flex-wrap lg:flex-nowrap justify-between">
        {/* Left Section */}
        <section className="w-full lg:w-[60%] flex flex-col  items-center mb-8 lg:mb-0">
          <div className="w-full flex justify-start items-center gap-4 mb-6">
            {project?.array_options.options_oddphoto.split(',').map((id: string) => (
              <div
                key={id}
                className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] flex items-center justify-center"
              >
                <ImageKit
                  src={`/Images/projects/ODD_${id}.png`}
                  alt={`ODD_${id}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Project Context */}
          <div className="w-full flex flex-col mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Contexte et justification du projet
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed">
            {parse(String(project?.array_options.options_proj_contexte || "Contexte par défaut"))}
            </p>
          </div>

          {/* Project Objective */}
          <div className="w-full flex flex-col">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Objectif
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed">
            {parse(String(project?.array_options.options_proj_objectifprojet || "Objectif par défaut"))}
            </p>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-full lg:w-[35%] flex justify-center items-center h-full">
          <div className="w-full lg:w-full bg-white rounded-2xl shadow-xl flex flex-col items-start justify-between p-6"
            style={{ maxHeight: `${leftSectionRef.current?.offsetHeight as number ?? 574}px`, transition: 'height 150ms ease-in-out', willChange: 'height' }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Objectif:  {Math.round((parseFloat(project?.array_options.options_proj_objectif.split(':')[0])))} €
            </p>
            <ProjectDetailsLoading project={project}/>
            <p className="text-sm md:text-base font-medium mt-4">
              {contributions.length ?? 0} {contributions.length > 1 ? 'contributions' : 'contribution'}
            </p>
            <div className="mt-4 overflow-auto">

              <div className="space-y-4">
                  {contributions.length > 0 && contributions.map((contribution, index) => (
                    contribution.community && <div key={index} className="flex items-start gap-4">
                        <ImageKit
                          src={contribution.community.photo_url || (contribution.community.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                          alt="Profile picture"
                          width={40}
                          height={40}
                          className="w-10 h-10 min-w-10 rounded-full object-cover bg-[#6f84b8]"
                        />
                        <div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold">
                                <span className="capitalize">
                                  {getFullName(contribution.community.firstname, contribution.community.lastname, contribution.community.display_name, contribution.community.customer_type, contribution.community.company_name)} <br />
                                </span>
                                a permis un
                                <span className="text-[#44a7f4]">{" "}financement de{" "}
                                    {Number(contribution.amount.toFixed(2)) === 0 
                                        ? Math.ceil(contribution.amount * 1000) / 1000 
                                        : contribution.amount.toFixed(2)
                                    }€
                                </span>                              </p>
                              <p className="text-[14px] text-[#d8d8d8] ml-4">
                                  {contribution.date_creation ? formatTimeAgo(contribution.date_creation) : 'Date inconnue'}
                              </p>
                            </div>
                            {contribution.note_public && <div className="bg-[#fdf9e9] mt-2 rounded-[24px] p-4">
                              <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden" dangerouslySetInnerHTML={{ __html: contribution.note_public }} />
                            </div>}
                        </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSectionTwo;
