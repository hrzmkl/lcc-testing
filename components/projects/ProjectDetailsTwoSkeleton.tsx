const ProjectDetailsTwoSkeleton = () => {
  return (
    <section className="relative flex justify-center items-center py-12 px-4 animate-strong-pulse">
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col mx-auto left-0 right-0">
        <div className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto flex flex-wrap lg:flex-nowrap justify-between">
          {/* Left Section */}
          <section className="w-full lg:w-[60%] flex flex-col items-center mb-8 lg:mb-0">
            <div className="w-full flex justify-start items-center gap-4 mb-6">
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] bg-gray-200 rounded-lg"
                />
              ))}
            </div>
            {/* Project Context Skeleton */}
            <div className="w-full flex flex-col mb-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-3" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
            </div>
            {/* Project Objective Skeleton */}
            <div className="w-full flex flex-col">
              <div className="h-8 bg-gray-200 rounded w-2/4 mb-3" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-3/6" />
              </div>
            </div>
          </section>

          {/* Right Section */}
          <section className="w-full lg:w-[35%] flex justify-center items-center h-full">
            <div className="w-full lg:w-full bg-white rounded-2xl shadow-xl flex flex-col items-start justify-between p-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="w-full h-4 bg-gray-200 rounded mb-4" />
              <div className="w-3/4 h-4 bg-gray-200 rounded mb-8" />
              <div className="space-y-4 w-full">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-16 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsTwoSkeleton;
