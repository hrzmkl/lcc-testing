import SingleCommunityContainer from '@/components/Community/SingleCommunityContainer';
import { fetchCommunauteProfileById, fetchContributionsByCommunityId } from '@/services/data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const communityProfile = await fetchCommunauteProfileById(id).catch(() => null);

  const lastname = communityProfile?.lastname || 'Profil';
  const idProfile = communityProfile?.id || id;

  const title = `${lastname} - ${idProfile}`;
  const description = `${lastname} - ${idProfile} - Let's catch carbon`;

  return {
    title,
    description,
  };
}

const page = async ({ params }: { params: Promise<{id: string}> }) => {
  const { id } = await (params);
  const [communityProfile, contributions] = await Promise.all([
    fetchCommunauteProfileById(id).catch((err) => {
      if (err.response.status === 404) notFound();
    }),
    fetchContributionsByCommunityId(id).catch(() => []),
  ]);

  if (!communityProfile) {
    notFound();
  };

  return <SingleCommunityContainer communityProfile={communityProfile} contributions={contributions} />;
}

export default page;