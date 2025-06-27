const ProjectDetailsSectionThreeSkeleton = () => {
  return (
    <>
      <div className="h-[100%] md:h-[70%] 2xl:h-[60%] flex-center px-4">
        <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col mx-auto">
          <section className="md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto h-full flex flex-wrap justify-start items-center mb-4 md:mb-6 lg:mb-14 gap-8">
            <div className="w-[100%] md:w-[58%] h-full flex flex-col justify-center items-center gap-8">
              <div className="w-full h-full flex flex-col justify-start items-start">
                <div className="w-48 h-8 bg-gray-200 animate-pulse rounded mb-3"></div>
                <div className="w-[95%] h-32 bg-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="w-full h-full flex flex-col justify-start items-start">
                <div className="w-48 h-8 bg-gray-200 animate-pulse rounded mb-3"></div>
                <div className="w-[95%] h-32 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <div className="w-64 h-8 bg-gray-200 animate-pulse rounded mb-3"></div>
              <div className="w-full h-[90%] flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="w-[75%] md:w-[35%] 2xl:w-[25%] 8xl:w-[20%] h-full flex flex-col justify-start items-center gap-4">
                    <div className="size-14 8xl:size-16 bg-gray-200 animate-pulse rounded"></div>
                    <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="h-[100%] 2xl:h-[60%] bg-[#d8ff00] relative bottom-[7.8rem] 2xl:bottom-[11.8rem]"></section>
    </>
  );
};

export default ProjectDetailsSectionThreeSkeleton;
