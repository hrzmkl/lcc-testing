'use client';
import { Project } from '@/types/project';
import React, { useCallback, useMemo, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import ProjectCardItems from '../projects/ProjectCardItems';
import AutoScroll from 'embla-carousel-auto-scroll';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import dynamic from 'next/dynamic';
import { fetchCommunityByProjectId } from '@/services/data';
import useSWR from 'swr';

const ModalLinkedInStyle = dynamic(() => import('../ui/ModalLinkedInStyle'), { ssr: false });
const CommunitySimpleList = dynamic(() => import('../Community/CommunitySimpleList'), { ssr: false });

export type SliderProps = {
  items: any[];
  className?: string;
  speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;

type Props = {
  projects: Project[];
};

const ItemsCarousel = ({
  items = [],
}: SliderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const [actifProject, setActifProject] = useState<Project | null>(null);
  const { data: communities, isLoading: communityLoading } = useSWR(() => actifProject?.id ? `/api/projects/${actifProject.id}/community?limit=${limit}` : null, () => fetchCommunityByProjectId(parseInt(actifProject?.id ?? '0'), limit), { revalidateOnFocus: false, dedupingInterval: 60000 * 5, keepPreviousData: limit > 10 });
  const handleProjectClick = useCallback((project: Project) => {
    setActifProject(project);
    setLimit(10);
    setModalIsOpen(true);
  }, []);

  return (
    <>
      {items.length > 0 &&
        items.map((data, index) => (
          <CarouselItem
            className={`flex ${index === items.length - 1 ? 'mr-4' : ''}`}
            key={index}
          >
            <ProjectCardItems
              {...data}
              className="w-[280px] h-full"
              onClick={() => handleProjectClick(data)}
            />
          </CarouselItem>
        ))}
      {actifProject?.profiles && modalIsOpen && (
        <ModalLinkedInStyle
          show={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          plural={actifProject?.profiles?.length! > 1}
        >
          <CommunitySimpleList
            profiles={communities || []}
            onEndReached={() => setLimit((l) => l + 10)}
            isLoading={communityLoading}
            onMouseUp={() => setTimeout(() => setModalIsOpen(false), 500)}
          />
        </ModalLinkedInStyle>
      )}
    </>
  );
};

const IncubateurDeProjetCarousel = ({ projects }: Props) => {
  const carouselOptions = useMemo(
    () => ({
      startIndex: 0,
      loop: true,
      dragFree: true,
    }),
    []
  );

  const carouselPlugin = useMemo(
    () => [
      AutoScroll({
        speed: 0.75,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
      WheelGesturesPlugin({
        normalizeWheel: false,
        power: 3,
        passive: false,
      }),
    ],
    []
  );
  return (
    projects && (
      <Carousel
        opts={carouselOptions}
        plugins={carouselPlugin}
        className={'w-full'}
      >
        <CarouselContent className="gap-4">
          <ItemsCarousel className="w-full" items={projects} />
        </CarouselContent>
      </Carousel>
    )
  );
};

export default IncubateurDeProjetCarousel;
