'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ProjectsCardFilter from '@/components/projects/ProjectsCardFilter';
import ProjectsTagFilter from '@/components/projects/ProjectsTagFilter';
import { Project } from '@/types/project';
import { handleScrollBg } from '@/lib/utils';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { fetchCategorie, fetchCommunityByProjectId, fetchProjects } from '@/services/data';
import ProjectSkeleton from '@/components/ui/ProjectSkeleton';
import CommunitySimpleListSkeleton from '@/components/Community/CommunitySimpleListSkeleton';
import { useAppStore } from '@/store/appStore';

const ModalLinkedInStyle = dynamic(() => import('@/components/ui/ModalLinkedInStyle'), { ssr: false });
const CommunitySimpleList = dynamic(() => import('@/components/Community/CommunitySimpleList'), { ssr: false, loading: () => <CommunitySimpleListSkeleton /> });
const ProjectCardItems = dynamic(() => import('@/components/projects/ProjectCardItems'), { ssr: false, loading: () => Array.from({ length: 6 }, (_, index) => (
  <ProjectSkeleton key={index} />
)) });

const Page = () => {
  const { bgColor, setBgColor } = useAppStore((state) => state);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [actifProject, setActifProject] = useState<Project | null>(null);
  const [limit, setLimit] = useState(10);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: projects, isLoading } = useSWR('/api/projects', () => fetchProjects(20), {
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 5
  });
  const { data: categories } = useSWR('/api/projects/categories', fetchCategorie, { dedupingInterval: 60000 * 60 * 12});
  const { data: communities, isLoading: communityLoading } = useSWR(() => actifProject?.id ? `/api/projects/${actifProject.id}/community?limit=${limit}` : null, () => fetchCommunityByProjectId(parseInt(actifProject?.id ?? '0'), limit), { 
    revalidateOnFocus: false,
    dedupingInterval: 60000 * 5,
    keepPreviousData: limit > 10,
  });

  useEffect(() => {
    setBgColor('#e7f0ff');

    const scrollHandler = () => {
      handleScrollBg(sectionRef, () => setBgColor('#d8fc31'), () => setBgColor('#e7f0ff'), setBgColor);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setBgColor]);

  const [filters, setFilters] = useState({
    options_proj_localisation: null as string | null,
    opp_status_label: null as string | null,
    status: null as string | null,
    categories: null as string | null,
    theme_people: null as string | null,
  });

  const handleFilterChange = useCallback((
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType] === value ? null : value,
    }));
  }, []);

  const handleTagClick = useCallback((category: string | null) => {
    setFilters((prevFilters) => {
      const themePeople = category
        ? prevFilters.theme_people
          ? prevFilters.theme_people + ',' + category
          : category
        : null;

      return {
        ...prevFilters,
        theme_people: themePeople,
      };
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      options_proj_localisation: '',
      opp_status_label: '',
      status: '',
      categories: null,
      theme_people: null,
    });
  }, []);

  const handleClick = (data: Project) => {
    setActifProject(data);
    setLimit(10);
    setModalIsOpen(true);
  }

  const filteredProjects = useMemo(() => projects?.filter((project) => {
    const matchesLocation = filters.options_proj_localisation
      ? project.array_options.options_proj_localisation.label ===
        filters.options_proj_localisation
      : true;

    const matchesOppStatusLabel = filters.opp_status_label
      ? project.opp_status_label === filters.opp_status_label
      : true;

    const matchesStatus = filters.status
      ? project.status === filters.status
      : true;

    const matchesThemePeople = !filters.theme_people || (
      Array.isArray(project.array_options.options_proj_theme_pple) &&
      project.array_options.options_proj_theme_pple.length > 0 &&
      filters.theme_people
        .split(',')
        .some((filterTag) =>
          project.array_options.options_proj_theme_pple.some(
            (category: { label: string }) => category.label === filterTag
          )
        )
    );

    const matchesCategory = !filters.categories || (
      Array.isArray(project.categories) &&
      project.categories.length > 0 &&
      filters.categories
        .split(',')
        .some((filterTag) =>
          project.categories.some(
            (category: { label: string }) => category.label === filterTag
          )
        )
    );

    return (
      matchesLocation &&
      matchesOppStatusLabel &&
      matchesStatus &&
      matchesCategory &&
      matchesThemePeople
    );
  }), [filters.categories, filters.opp_status_label, filters.options_proj_localisation, filters.status, filters.theme_people, projects]);

  return (
    <div
      ref={sectionRef}
      className="px-[2.5px] xl:px-[0]"
    >
      <div className="h-full !w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col mx-auto left-0 right-0">
        <div className="w-full flex flex-col justify-center items-start px-4 md:px-8 pb-2 mt-15">
          <div className="w-full max-w-[1022px] mx-auto">
            <p className="text-gray-900 text-[36px] md:text-[80px] lg:text-[76px] 2xl:text-8xl text-left mb-4 md:mb-8 font-extrabold leading-[1.1] mt-2 md:mt-6">
              Vos projets pour le climat
            </p>
            <p className="text-base lg:text-mm leading-[20px] lg:leading-[25px] font-normal">
              Ici, par vos achats de café, vous financez des projets qui captent les gaz à effet de serre pour lutter contre le réchauffement climatique sans 1 centime de plus.
            </p>
            <ProjectsTagFilter
              onTagClick={handleTagClick}
              resetFilters={resetFilters}
              bgColor={bgColor}
            />
          </div>
        </div>
        <div className="w-full flex flex-col px-4 md:px-8 pt-4 pb-8 justify-center items-start left-0 right-0 overflow-hidden">
          <ProjectsCardFilter
            categories={categories}
            onFilter={handleFilterChange}
            onResteFilter={resetFilters}
          />

          <div
            className={`w-full max-w-[1022px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-500`}
            data-aos="fade-left" data-aos-duration="300" data-aos-offset="-100"
          >
            { isLoading
            ? Array.from({ length: 6 }, (_, index) => (
              <ProjectSkeleton key={index} />
            ))
            : filteredProjects && (filteredProjects.length > 0) 
              ? filteredProjects.map((data, index) => (
                  <ProjectCardItems
                  key={data.id}
                  priority={index === 0}
                  {...data}
                  onClick={() => handleClick(data)}
                  />
                ))
              : (
                <>
                  <span></span>
                  <p className='text-center text-muted-foreground text-[20px] mt-4 mb-10'>Aucun projet trouvé</p>
                  <span></span>
                </>)
            }
          </div>
          {actifProject?.profiles && modalIsOpen && (
            <ModalLinkedInStyle
              show={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              plural={actifProject?.profiles?.length > 1}
            >
              <CommunitySimpleList
                onEndReached={() => setLimit((l) => l + 10)}
                profiles={communities || []}
                onMouseUp={() => setTimeout(() => setModalIsOpen(false), 500)}
                isLoading={communityLoading}
              />
            </ModalLinkedInStyle>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
