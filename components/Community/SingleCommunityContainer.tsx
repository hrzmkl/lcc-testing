"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CardProfileDetail from "@/components/landingPage/CommunauteCardProfileDetail";
import ProfileDetail from "@/components/landingPage/CommunauteFicheProfile";
import { CommunityProfilDetails, ProjetsSoutenu } from "@/types/community";
import { executeAtSectionEnd, executeOnIntersection } from "@/lib/utils";
import { Contribution } from "@/types/contribution";
import ProjectCardItems from '@/components/projects/ProjectCardItems';
import dynamic from "next/dynamic";
import { fetchCommunityByProjectId } from "@/services/data";
import useSWR from "swr";
import CommunitySimpleListSkeleton from "./CommunitySimpleListSkeleton";
import { useAppStore } from "@/store/appStore";
const ModalLinkedInStyle = dynamic(() => import('../ui/ModalLinkedInStyle'), { ssr: false });
const CommunitySimpleList = dynamic(() => import('@/components/Community/CommunitySimpleList'), { ssr: false, loading: () => <CommunitySimpleListSkeleton /> });

type Props = {
  communityProfile: CommunityProfilDetails;
  contributions: Contribution[];
}

const SingleCommunityContainer = ({ communityProfile, contributions }: Props) => {
  const bgColors = useMemo(
    () => ['#f5ffa3', '#a9ff85', '#be84ff', '#be84ff'],
    []
  );
  const [limit, setLimit] = useState(10);
  const setBgColor = useAppStore((state) => state.setBgColor);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [actifProject, setActifProject] = useState<ProjetsSoutenu | null>(null);
  const { data: communities, isLoading: communityLoading } = useSWR(() => actifProject?.id ? `/api/projects/${actifProject.id}/community?limit=${limit}` : null, () => fetchCommunityByProjectId(parseInt(actifProject?.id ?? '0'), limit), { revalidateOnFocus: false, dedupingInterval: 60000 * 5, keepPreviousData: limit > 10 });
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const sectionThreeRef = useRef<HTMLDivElement>(null);
  const sectionFourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBgColor(bgColors[0]);

    if (communityProfile) {
      if (window.scrollY === 0) {
        setBgColor(bgColors[0]);
      }

      if (sectionOneRef.current)
      executeOnIntersection(sectionOneRef.current, () =>
        setBgColor(bgColors[0])
      );
      if (sectionTwoRef.current)
      executeOnIntersection(sectionTwoRef.current, () =>
        setBgColor(bgColors[1])
      , 0.5);
      if (sectionThreeRef.current)
      executeOnIntersection(sectionThreeRef.current, () =>
        setBgColor(bgColors[2])
      );
      if (sectionFourRef.current)
      executeOnIntersection(sectionFourRef.current, () =>
        setBgColor(bgColors[3])
      );

      executeAtSectionEnd(sectionFourRef, setBgColor);
    }

  }, [bgColors, communityProfile, setBgColor]);

  const handleProjectClick = useCallback((project: ProjetsSoutenu) => {
    setActifProject(project);
    setLimit(10);
    setModalIsOpen(true);
  }, []);

  return (
    <div
      className="flex flex-col px-[16px] xl:px-[0] items-center justify-start min-h-screen"
    >
      <ProfileDetail
        ref={sectionOneRef}
        communityProfile={communityProfile}
      />
      <CardProfileDetail
        ref={sectionTwoRef}
        communityProfile={communityProfile}
        contributions={contributions}
      />
      <div
        ref={sectionThreeRef}
        className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto"
      >
        <div className="w-full md:w-[75%] max-w-[1022px] mx-auto">
          <h1 className="text-[80px] mx-auto font-extrabold my-10 py-6 leading-[96px]">
            Ses projets financés
          </h1>
        </div>
      </div>
      <div
        ref={sectionFourRef}
        className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col md:px-8 pt-4 pb-8 justify-center items-start left-0 right-0"
      >
        <section className="w-full sm:w-[75%] max-w-[1022px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {communityProfile?.projetsSoutenus.filter((project) => !!project.title).map((data) => (
            <ProjectCardItems
              key={data.id}
              {...data}
              onClick={() => handleProjectClick(data)}
            />
          ))}
        </section>
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
  );
};

export default SingleCommunityContainer;