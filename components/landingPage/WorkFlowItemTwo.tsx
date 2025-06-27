import WorkFlowItemTwoDescription from "./WorkFlowItemTwoDescription";
import WorkFlowItemTwoTitle from "./WorkFlowItemTwoTitle";

const WorkFlowItemTwo = () => {
  return (
    <div className="w-full
 h-[40vh] mid-xl:h-[28vh] 2xl:h-[40vh] 8xl:h-[30vh] flex-center relative bottom-[5vh]">
      <div className="w-full h-full flex justify-end items-start">
        <div className="w-[50%] h-[80%] flex justify-start items-end">
          <WorkFlowItemTwoDescription />
        </div>
      </div>
      <div className="w-full h-full flex justify-start items-start">
        <WorkFlowItemTwoTitle />
      </div>
    </div>
  );
};

export default WorkFlowItemTwo;
