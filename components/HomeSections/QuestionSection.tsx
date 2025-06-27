
import { FaqDAta as questions } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
// bg-[#5a1676]
const QuestionSection = () => {
  return (
      <section className="w-full py-[40px] md:py-[120px]">
        <div className="max-w-[980px] m-auto px-[16px] flex flex-col justify-center items-center">
          <div className="flex-center py-[48px] md:py-[64px] lg:py-[2em] mid-xl:py-[32px] xl:py-[64px] 5xl:py-[3rem]">
            <p className="w-full text-h3 md:text-h2 5xl:text-h1 font-black text-[#e9c0e9] leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]">
              Des questions ?
            </p>
          </div>
          <div className="w-full bg-red-404 flex justify-center items-start">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-[12px] ">
              {questions.map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="py-5 lg:py-0 mid-xl:py-1 xl:py-2 5xl:py-1 6xl:py-2 7xl:py-5 px-5 border border-fuchsia-200 bg-[#e9bfe9] rounded-[64px] flex-1 h-[200px] !duration-1000 !transition-all"
                >
                  <AccordionTrigger className={"pl-[28px] md:pl-[64px] gap-[32px]"}>
                  <p className="xl:text-[21px] 5xl:text-submenu font-bold text-purple-900 relative text-left p-0 leading-[25px]">
                    {question.question}
                  </p>
                  </AccordionTrigger>
                  <AccordionContent>
                  <div className="text-[16.87px] mid-xl:text-[19px] xl:text-[21px] 5xl:text-[25px] md:text-[18px] font-normal text-purple-900 relative px-[32px] md:px-[96px]">
                  {/* {question.answer} */}
                  <span dangerouslySetInnerHTML={{ __html: question.answer }}/>
                  </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
  );
};
export default QuestionSection;
