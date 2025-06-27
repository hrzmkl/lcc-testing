import SkeletonCard from '../ui/SkeletonCard';

const CommunauteCardSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div 
          key={index}
          className="bg-white rounded-[1.2rem] p-6 flex flex-col items-center"
        >
          <SkeletonCard className="w-60 h-60 rounded-full mb-6" />
          <SkeletonCard className="h-8 w-3/4 mb-4" />
          <SkeletonCard className="h-6 w-full mb-2" />
          <SkeletonCard className="h-6 w-2/3 mb-4" />
          <SkeletonCard className="h-24 w-full" />
        </div>
      ))}
    </div>
  );
};

export default CommunauteCardSkeleton;
