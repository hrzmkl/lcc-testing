const ProjectSkeleton = () => {
  return (
    <div className="w-full mx-auto !max-w-[calc(100vw - 32px)] md:!max-w-[330px] min-h-40 xl:min-w-[330px] flex flex-col rounded-2xl">
      <div className="w-full h-[250px] bg-gray-200 rounded-t-2xl animate-pulse" />

      <div className="w-full flex flex-col bg-white rounded-b-2xl p-5">
        <div className="space-y-3 mb-4">
          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-full w-32 animate-pulse" />
        </div>

        <div className="flex items-center gap-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[60px] h-[60px] bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>

        <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default ProjectSkeleton;
