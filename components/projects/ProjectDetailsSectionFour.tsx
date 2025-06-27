import ContributionCard from "./ContributionCard";
import { CommunityProfilDetails } from "@/types/community";

const ProjectDetailsSectionFour = ({communities}: {communities: CommunityProfilDetails[]}) => {
  if (!communities || communities.length === 0) return <p className="text-center">Aucune communauté trouvée.</p>;
  return (
    <div className="flex flex-col">
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto left-0 right-0 px-4">
        <section className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto h-full flex justify-start items-center  mb-4 md:mb-6 lg:mb-14">
          <div className="">
            <p className="text-[50px] font-extrabold leading-tight text-slate-900 mb-3 relative bottom-[15%] 8xl:bottom-[11%]">
              Ils contribuent au projet
            </p>
          </div>
        </section>
      </div>

        <section className={`${communities.length <= 3 && 'sm:max-w-[90%] xl:max-w-[1536px]'} mx-auto w-full h-[85%] flex justify-center items-start mb-3 md:mb-6 lg:mb-14`}>
          <div
            className={`${communities.length <= 3 && 'md:w-[69%] lg:w-[69%] xl:w-[69%]'} mx-auto w-full h-full`}
          >
            <ContributionCard data={communities || []} />
          </div>
        </section>

    </div>
  );
};

export default ProjectDetailsSectionFour;
