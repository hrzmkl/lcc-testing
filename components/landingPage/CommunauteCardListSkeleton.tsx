import SkeletonCard from '../ui/SkeletonCard';

const CommunauteCardListSkeleton = () => {
  return (
    <div className="w-full items-start flex gap-4 flex-col">
      <div className="flex flex-col gap-4 w-full">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-full h-[90px] overflow-hidden">
            <div className="flex items-center gap-4 p-2">
              <SkeletonCard className="w-[70px] h-[70px] rounded-full overflow-hidden" />
              <div className="flex-1">
                <SkeletonCard className="h-6 w-3/4 mb-2" />
                <SkeletonCard className="h-4 w-1/2" />
              </div>
              <SkeletonCard className="w-24 h-8 rounded-full mr-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunauteCardListSkeleton;
