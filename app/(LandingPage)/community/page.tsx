
import CommunauteHeader from "@/components/landingPage/CommunauteHeader";
import CommunityListingTemplate from "@/components/Community/CommunityListingTemplate";
import CommunityListingMain from "@/components/Community/CommunityListingMain";
import CommunauteTrie from "@/components/landingPage/CommunauteTrie";
import { Suspense, use } from "react";
import CommunauteTrieSkeleton from "@/components/landingPage/CommunauteTrieSkeleton";
import CommunityListingMainSkeleton from "@/components/Community/CommunityListingMainSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Communauté de Carbon Killers, 40 000 hectares de biodiversité restauré',
  description: 'Communauté de Carbon Killers, 40 000 hectares de biodiversité restauré',
}

const Page = ({
  searchParams,
}: {
  searchParams: Promise<{ displayType?: 'list' | 'thumbnails' }>;
}) => {
  const {displayType} = use(searchParams);

  return (
    <CommunityListingTemplate>
      <CommunauteHeader />
      <Suspense fallback={<CommunauteTrieSkeleton />}>
        <CommunauteTrie />
      </Suspense>
      <Suspense fallback={<CommunityListingMainSkeleton displayType={displayType || 'thumbnails'} />}>
        <CommunityListingMain />
      </Suspense>
    </CommunityListingTemplate>
  );
};

export default Page;
