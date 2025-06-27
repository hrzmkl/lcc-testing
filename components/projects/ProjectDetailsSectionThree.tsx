import { Project } from "@/types/project";
import parse from "html-react-parser";
import Image from "next/image";

const ProjectDetailsSectionThree = ({ project, loading = false }: { project?: Project; loading?: boolean }) => {
  if (loading && !project) {
    return null;
  }

  return (
    <>
      <div className="h-[100%] md:h-[70%] 2xl:h-[60%] flex-center px-4">
        <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col  mx-auto left-0 right-0">
          <section className="md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto h-full flex flex-wrap justify-start items-center mb-4 md:mb-6 lg:mb-14 gap-8">
            <div className="w-[100%] md:w-[58%] h-full flex flex-col justify-center items-center gap-8">
              {project?.array_options.options_proj_descr_miseenoeuvre && (
                <div className="w-full h-full flex flex-col justify-start items-start">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                    Description de mise en oeuvre
                  </p>
                  <p className="w-[95%] text-sm 2xl:text-base 9xl:text-lg 10xl:text-xl 11xl:text-2xl 13xl:text-3xl 10xl:leading-[2rem] 12xl:leading-[2.5rem] 13xl:leading-[3.2rem] font-light relative top-[6%] 10xl:top-[6%] 12xl:top-[8%] 13xl:top-[10%]">
                    {parse(
                      String(
                        project?.array_options.options_proj_descr_miseenoeuvre
                      )
                    )}
                  </p>
                </div>
              )}
              {project?.array_options.options_proj_resultat && (
                <div className="w-full h-full flex flex-col justify-start items-start">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                    Résultats attendus
                  </p>
                  <p className="w-[95%] text-sm 2xl:text-base 9xl:text-lg 10xl:text-xl 11xl:text-2xl 13xl:text-3xl 10xl:leading-[2rem] 12xl:leading-[2.5rem] 13xl:leading-[3.2rem] font-light relative top-[6%]">
                    {parse(
                      String(project?.array_options.options_proj_resultat)
                    )}
                  </p>
                </div>
              )}
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Indicateurs clés de succès
              </p>
              <div className="w-full h-[90%] flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-4">
                <div className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                  {project?.array_options
                    .options_proj_iconindicateurscles_1 && (
                    <Image
                      width={128}
                      height={128}
                      alt="icon"
                      src={
                        project.array_options.options_proj_iconindicateurscles_1
                      }
                      className="size-14 8xl:size-16 10xl:size-[5rem] 12xl:size-[6rem] 13xl:size-[8rem] relative top-[8%] object-contain"
                    />
                  )}
                  <p className="text-[0.7rem] 10xl:text-[0.9rem] 12xl:text-[1rem] 13xl:text-[1.4rem] text-gray-900 font-semibold text-center relative top-[3%]">
                    {project?.array_options.options_proj_indicateurscles_1 ||
                      ''}
                  </p>
                </div>
                <div className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                  {project?.array_options
                    .options_proj_iconindicateurscles_2 && (
                    <Image
                      width={128}
                      height={128}
                      alt="icon"
                      src={
                        project.array_options.options_proj_iconindicateurscles_2
                      }
                      className="size-14 8xl:size-16 10xl:size-[5rem] 12xl:size-[6rem] 13xl:size-[8rem] relative top-[8%] object-contain"
                    />
                  )}
                  <p className="text-[0.7rem] 10xl:text-[0.9rem] 12xl:text-[1rem] 13xl:text-[1.4rem] text-gray-900 font-semibold text-center relative top-[3%]">
                    {project?.array_options.options_proj_indicateurscles_2 ||
                      ''}
                  </p>
                </div>
                <div className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                  {project?.array_options
                    .options_proj_iconindicateurscles_3 && (
                    <Image
                      width={128}
                      height={128}
                      alt="icon"
                      src={
                        project.array_options.options_proj_iconindicateurscles_3
                      }
                      className="size-14 8xl:size-16 10xl:size-[5rem] 12xl:size-[6rem] 13xl:size-[8rem] relative top-[8%] object-contain"
                    />
                  )}
                  <p className="text-[0.7rem] 10xl:text-[0.9rem] 12xl:text-[1rem] 13xl:text-[1.4rem] text-gray-900 font-semibold text-center relative top-[3%]">
                    {project?.array_options.options_proj_indicateurscles_3 ||
                      ''}
                  </p>
                </div>
                <div className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                  {project?.array_options
                    .options_proj_iconindicateurscles_4 && (
                    <Image
                      width={128}
                      height={128}
                      alt="icon"
                      src={
                        project.array_options.options_proj_iconindicateurscles_4
                      }
                      className="size-14 8xl:size-16 10xl:size-[5rem] 12xl:size-[6rem] 13xl:size-[8rem] relative top-[8%] object-contain"
                    />
                  )}
                  <p className="text-[0.7rem] 10xl:text-[0.9rem] 12xl:text-[1rem] 13xl:text-[1.4rem] text-gray-900 font-semibold text-center relative top-[3%]">
                    {project?.array_options.options_proj_indicateurscles_4 ||
                      ''}
                  </p>
                </div>
                <div className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                  {project?.array_options
                    .options_proj_iconindicateurscles_5 && (
                    <Image
                      width={128}
                      height={128}
                      alt="icon"
                      src={
                        project.array_options.options_proj_iconindicateurscles_5
                      }
                      className="size-14 8xl:size-16 10xl:size-[5rem] 12xl:size-[6rem] 13xl:size-[8rem] relative top-[8%] object-contain"
                    />
                  )}
                  <p className="text-[0.7rem] 10xl:text-[0.9rem] 12xl:text-[1rem] 13xl:text-[1.4rem] text-gray-900 font-semibold text-center relative top-[3%]">
                    {project?.array_options.options_proj_indicateurscles_5 ||
                      ''}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="h-[100%] 2xl:h-[60%] bg-[#d8ff00] relative bottom-[7.8rem] 2xl:bottom-[11.8rem]"></section>
    </>
  );
};
export default ProjectDetailsSectionThree;