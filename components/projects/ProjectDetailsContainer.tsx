'use client';

import { useEffect, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import ProjectDetailsSectionOne from '@/components/projects/ProjectDetailsSectionOne';
import ProjectDetailsSectionThree from '@/components/projects/ProjectDetailsSectionThree';
import ProjectDetailsSectionTwo from '@/components/projects/ProjectDetailsSectionTwo';
import { executeOnIntersection } from '@/lib/utils';
import useSWR from 'swr';
import { fetchCommunitiesByProject, fetchContributionsByProjectId, fetchProjectById, fetchProjects } from '@/services/data';
import { notFound, useParams } from 'next/navigation';
import { useAppStore } from '@/store/appStore';
import { Project } from '@/types/project'
import SkeletonProjectDetailsSectionFour from './SkeletonProjectDetailsSectionFour';

const ProjectDetailsSectionFour = dynamic(
  () => import('@/components/projects/ProjectDetailsSectionFour'),
  { loading: () => <div>Loading communities...</div> }
);
const ProjectDetailsSectionFive = dynamic(
  () => import('@/components/projects/ProjectDetailsSectionFive'),
  { loading: () => <div>Loading projects...</div> }
);

type Props = {
  project: Project;
};

const ProjectDetailsContainer = ({project: data}: Props) => {
  const params = useParams<{id: string}>();

  const bgColors = useMemo(
    () => ['#e7f0ff', '#e7f0ff', '#d8ff00', '#e0feec', '#ffe9fa'],
    []
  );
  const { setBgColor, height } = useAppStore((state) => state);
  const id = params?.id ?? '0';

  const { data: project, isLoading } = useSWR(`/projects/${id}`, () => fetchProjectById(id).catch((err) => {
    if (err.response?.status === 404) notFound();
    throw err;
  }), {
    revalidateOnFocus: false,
  });

  const { data: contributions } = useSWR(`/projects/${id}/contributions`, () => fetchContributionsByProjectId(id), {
    revalidateOnFocus: false,
  });

  const { data: communities, isLoading: communityLoading } = useSWR(`/projects/${id}/communities`, () => fetchCommunitiesByProject(id), {
    revalidateOnFocus: false,
  });

  const { data: projects, isLoading: projectsLoading } = useSWR(`/projects?limit=${10}`, () => fetchProjects(10), {
    revalidateOnFocus: false,
  });

  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const sectionThreeRef = useRef<HTMLDivElement>(null);
  const sectionFourRef = useRef<HTMLDivElement>(null);
  const sectionFiveRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setBgColor(bgColors[0])

    if (sectionOneRef.current)
      executeOnIntersection(sectionOneRef.current, () =>
        setBgColor(bgColors[0])
      );
    if (sectionTwoRef.current)
      executeOnIntersection(sectionTwoRef.current, () =>
        setBgColor(bgColors[1])
      );
    if (sectionThreeRef.current)
      executeOnIntersection(sectionThreeRef.current, () =>
        setBgColor(bgColors[2])
      );
    if (sectionFourRef.current)
      executeOnIntersection(sectionFourRef.current, () =>
        setBgColor(bgColors[3])
      );
    if (sectionFiveRef.current)
      executeOnIntersection(sectionFiveRef.current, () =>
        setBgColor(bgColors[4])
      );

    if (sectionFiveRef.current) {
      const observer = new IntersectionObserver(
        () => {
          if (!sectionFiveRef.current) return false
          const rect = sectionFiveRef.current.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;

          const handleScroll = () => {
        if (window.scrollY >= sectionTop && 
            window.scrollY <= sectionTop + sectionHeight) {
          // Your callback here
          setBgColor('#ff37fc');
        }
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      );
      observer.observe(sectionFiveRef.current);

    }
  }, [bgColors, setBgColor]);

  return (
    <div style={{ margin: 0, marginTop: `-${height}px`}}>
      <div ref={sectionOneRef}>
        <ProjectDetailsSectionOne project={project || data} isLoading={isLoading} />
      </div>
      <div ref={sectionTwoRef}>
        <ProjectDetailsSectionTwo project={project || data} contributions={contributions || []} />
      </div>
      <div ref={sectionThreeRef}>
        <ProjectDetailsSectionThree project={project} />
      </div>
      <div ref={sectionFourRef}>
        {
          communityLoading ? (
            <SkeletonProjectDetailsSectionFour />
          ) : (
            <ProjectDetailsSectionFour communities={communities || []} />
          )
        }
      </div>
      <div ref={sectionFiveRef}>
        {
          projectsLoading ? (
            <SkeletonProjectDetailsSectionFour />
          ) : (
            <ProjectDetailsSectionFive projects={projects || []} />
          )
        }
      </div>
    </div>
  );
};

export default ProjectDetailsContainer;
