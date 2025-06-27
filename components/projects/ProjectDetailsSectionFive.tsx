"use client"

import { useCallback, useState } from "react";
import ProjectCardItems from "./ProjectCardItems";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

import { Metadata } from "next";
import { Project } from "@/types/project";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import dynamic from "next/dynamic";
import { fetchCommunityByProjectId } from "@/services/data";
import useSWR from "swr";
const ModalLinkedInStyle = dynamic(() => import('../ui/ModalLinkedInStyle'), { ssr: false });
const CommunitySimpleList = dynamic(() => import('../Community/CommunitySimpleList'), { ssr: false });
export const metadata: Metadata = {
  title: "Projets",
};

export type SliderProps = {
    items: Project[];
    className?: string;
    speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export type SliderBoxProps = {
    className?: string;
    speed?: number;
    projects: Project[];
} & React.HTMLAttributes<HTMLDivElement>;


const ProjectDetailsSectionFive = ({
  speed = 0.75,
  projects,
  ...props
}: SliderBoxProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const [actifProject, setActifProject] = useState<Project | null>(null);
  const { data: communities, isLoading: communityLoading } = useSWR(() => actifProject?.id ? `/api/projects/${actifProject.id}/community?limit=${limit}` : null, () => fetchCommunityByProjectId(parseInt(actifProject?.id ?? '0'), limit), { revalidateOnFocus: false, dedupingInterval: 60000 * 5, keepPreviousData: limit > 10 });

  const handleProjectClick = useCallback((project: Project) => {
    setActifProject(project);
    setLimit(10);
    setModalIsOpen(true);
  }, [])

  if (!projects || projects.length === 0) return <p className="text-center">Aucun projet trouvé.</p>;

  return (
    <div className="flex flex-col">
      <section className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto left-0 right-0 px-4">
        <div className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto h-full flex justify-start items-center mb-4 md:mb-6 lg:mb-14">
          <p className="text-[50px] font-extrabold my-10 relative leading-tight">
            Ces projets pourraient <br /> vous plaire
          </p>
        </div>
      </section>

      <div className="flex w-full h-full">
         <section className="w-full h-[85%] flex justify-center items-start mb-4 md:mb-6 lg:mb-14">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                speed: speed,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
              WheelGesturesPlugin({
                normalizeWheel: false,
                power: 3,
                passive: false,
              }),
            ]}
            className={'w-full'}
          >
            <CarouselContent className="gap-4">
              {projects.map((data, index) => (
                <CarouselItem
                  className={`flex ${
                    index === projects.length - 1 ? 'mr-4' : ''
                  }`}
                  key={index}
                >
                  <ProjectCardItems
                    key={index}
                    {...data}
                    onClick={() => handleProjectClick(data)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {actifProject?.profiles && modalIsOpen && (
            <ModalLinkedInStyle
              show={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              plural={actifProject?.profiles?.length > 1}
            >
              <CommunitySimpleList
                onEndReached={() => setLimit((l) => l + 10)}
                isLoading={communityLoading}
                profiles={communities || []}
                onMouseUp={() => setTimeout(() => setModalIsOpen(false), 500)}
              />
            </ModalLinkedInStyle>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsSectionFive;
