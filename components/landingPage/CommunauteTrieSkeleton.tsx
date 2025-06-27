const CommunauteTrieSkeleton = () => {
  return (
    <div className="w-full flex flex-col pt-4 justify-center items-start left-0 right-0">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-start w-full max-w-[1022px] mx-auto pt-6">
        {/* Filter buttons skeleton */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-3 w-full sm:w-auto">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="animate-strong-pulse h-[52px] w-full sm:w-20 px-6 py-3 rounded-full bg-[#aa7fb9]/40"
            />
          ))}
        </div>

        {/* Controls skeleton */}
        <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-start sm:w-auto sm:justify-end gap-3">
          <div className="flex flex-nowrap lg:flex-wrap mid-xl:flex-nowrap gap-3 max-w-full md:max-w-[252px]">
            {/* Search button skeleton */}
            <div className="h-[52px] w-[52px] animate-strong-pulse rounded-full bg-[#aa7fb9]/40" />

            {/* View toggles skeleton */}
            <div className="flex gap-3">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="h-[52px] w-[52px] animate-strong-pulse rounded-full bg-[#aa7fb9]/40"
                />
              ))}
            </div>
          </div>

          {/* Date dropdown skeleton */}
          <div className="relative w-[175px] min-w-[175px] min-h-[52px]">
            <div className="h-[52px] animate-strong-pulse rounded-[26px] bg-[#aa7fb9]/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunauteTrieSkeleton;
