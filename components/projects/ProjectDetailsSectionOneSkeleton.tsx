const ProjectDetailsSectionOneSkeleton = () => {
  return (
    <section className="h-[70vh] max-h-[560px] lg:h-[90vh] mid-xl:h-[56vh] flex justify-center items-center relative bg-gray-200 animate-strong-pulse">
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] flex flex-col absolute mx-auto left-0 right-0 px-4">
        <div className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto flex flex-col justify-center items-start gap-6 mt-[7.5rem]">
          <div className="w-full flex flex-wrap justify-start items-center gap-3">
            <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-48 bg-gray-300 rounded-full flex items-center">
              <div className="w-[28px] h-[28px] rounded-full bg-gray-400 mr-2"></div>
              <div className="h-4 w-36 bg-gray-400 rounded"></div>
            </div>
            <div className="h-8 w-32 bg-gray-300 rounded-full"></div>
          </div>

          <div className="w-full">
            <div className="h-24 w-3/4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSectionOneSkeleton;
