import WorkFlowItemThreeDescription from "./WorkFlowItemThreeDescription";
import WorkFlowItemThreeTitle from "./WorkFlowItemThreeTitle";

const WorkFlowItemThree = () => {
  return (
    <div className="w-full
 h-[50vh] mid-xl:h-[33vh] 2xl:h-[40vh] 8xl:h-[30vh] flex-center relative bottom-[10vh]">
      <div className="w-full h-full flex justify-end items-start">
        <WorkFlowItemThreeTitle />
      </div>
      <div className="w-full h-full flex justify-start items-">
        <div className="w-[50%] h-[80%] flex justify-start items-end">
          <WorkFlowItemThreeDescription />
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItemThree;
