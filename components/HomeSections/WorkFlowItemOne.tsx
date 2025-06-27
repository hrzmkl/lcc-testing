// import WorkFlowItemOneDescription from "./WorkFlowItemOneDescription";
// import WorkFlowItemOneTitle from "./WorkFlowItemOneTitle";

const WorkFlowItemOne = () => {
  return (
    <div className="w-full
 h-[50vh] gap-[70px] flex-center">
      <div className="w-full h-full flex justify-end items-center">
        {/* <WorkFlowItemOneTitle /> */}
      </div>
      <div className="w-full h-full flex justify-start items-center">
        <div className="w-[50%] h-[80%] flex justify-start items-end">
          {/* <WorkFlowItemOneDescription /> */}
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItemOne;
