import CommunauteCardListSkeleton from '../landingPage/CommunauteCardListSkeleton';
import CommunauteCardSkeleton from '../landingPage/CommunauteCardSkeleton';

const CommunityListingMainSkeleton = ({displayType}: {displayType: 'list' | 'thumbnails'}) => {
  return (
    <div className="w-full flex flex-col pb-8 justify-center items-start left-0 right-0">
      <div
        className={`w-full max-w-[1022px] mx-auto pt-[0.94rem] text-center  backdrop-blur-lg`}
      >
        {displayType === 'list' ? <CommunauteCardListSkeleton /> : <CommunauteCardSkeleton />}
      </div>
    </div>
  );
}

export default CommunityListingMainSkeleton