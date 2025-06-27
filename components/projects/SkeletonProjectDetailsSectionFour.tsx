const SkeletonProjectDetailsSectionFour = () => {
  return (
    <div className="flex flex-col animate-strong-pulse">
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto left-0 right-0 px-4">
        <section className="w-full md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto h-full flex justify-start items-center mb-4 md:mb-6 lg:mb-14">
          <div className="w-full">
            <div className="h-[60px] bg-gray-200 rounded-lg w-3/4 mb-3"></div>
          </div>
        </section>
      </div>

      <section className="sm:max-w-[90%] xl:max-w-[1536px] mx-auto w-full flex justify-center items-start mb-3 md:mb-6 lg:mb-14">
        <div className="md:w-[69%] lg:w-[69%] xl:w-[69%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-200 rounded-[1.2rem] h-[500px]"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkeletonProjectDetailsSectionFour;
