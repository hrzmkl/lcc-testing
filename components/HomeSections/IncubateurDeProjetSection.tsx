import { Buttons } from '../ui/ButtonsV2/Buttons';
import SubTitle from '../ui/SubTitle';
import { fetchProjects } from '@/services/data';
import IncubateurDeProjetCarousel from './IncubateurDeProjetCarousel';
import useSWR from 'swr';
import SkeletonProjectDetailsSectionFour from '../projects/SkeletonProjectDetailsSectionFour';

export type SliderBoxProps = {
  className?: string;
  speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;
// bg-[#eeff69]

const IncubateurDeProjetSection = () => {
  const { data: projects } = useSWR('/api/projects', () => fetchProjects(20), { revalidateOnFocus: false })
  return (
    <section className="bg-opacity-[59%] z-[30] py-[5rem]">
      <div className="w-full flex-center top-0 z-[10]">
        <div className="w-full sm:max-w-[90%] xl:max-w-[1536px] flex-col sm:flex-row flex-center relative gap-[32px] px-[20px] xl:px-0 m-auto">
          <div className="w-full sm:w-[60%] flex flex-col justify-center sm:justify-end ">
            <span className="text-gray-900  text-h3 md:text-h2 5xl:text-h1 font-black leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]">
              Projets
            </span>
            <SubTitle color="#111827">
              À chaque café acheté, vous financez des projets sur le terrain.
              Sans surcoût pour vous.
              En soutien direct aux cultivateurs et leurs communautés.
            </SubTitle>
          </div>
        </div>
      </div>
      <div className="w-full py-[64px] z-[11] relative">
        {!projects? (
            <div className="flex w-full flex-col animate-strong-pulse overflow-hidden">
            <section className="mx-auto w-full flex justify-center items-start mb-3 md:mb-6 lg:mb-14">
              <div className="w-full flex gap-4 overflow-x-auto scrollbar-hide">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                key={item}
                className="bg-gray-200 rounded-[1.2rem] h-[675px] w-[330px] flex-shrink-0"
                ></div>
              ))}
              </div>
            </section>
            </div>
        ) : (
          <IncubateurDeProjetCarousel projects={projects}/>
        )}
      </div>

      <div className="w-full flex-center">
        <Buttons
          href={'/projects'}
          className={'bg-gray-900 hover:!bg-gray-800 font-medium'}
          aria-label="Voir tous les projets disponibles"
        >
          Voir tous les projets
        </Buttons>
      </div>
    </section>
  );
};

export default IncubateurDeProjetSection;
