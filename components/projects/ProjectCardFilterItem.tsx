import useMediaQuery from "@/lib/useMediaQuery";
import { ReactNode, useRef, useState } from "react";

export type FilterType = "options_proj_localisation" | "opp_status_label" | "status" | "categories"

type ProjectCardFilterItem = {
  placeholder?: string;
  children?: ReactNode;
  handleFilter: (filterType: FilterType, value: string) => void;
  filterType: FilterType;
  filters: string[];
};

const ProjectCardFilterItem = ({placeholder, children, handleFilter, filters, filterType}: ProjectCardFilterItem) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const [toggle, setToggle] = useState(false);
  const md = useMediaQuery('(min-width: 992px)');
  const handleToggle = () => {
    setToggle(s => !s);
  }
  return (
    <div className="relative w-full sm:w-auto" onMouseEnter={() => md && setToggle(true)} onMouseLeave={() => setToggle(false)}>
      <button
        style={{ borderBottomLeftRadius: !toggle ? 25 : 0, borderBottomRightRadius: toggle ? 0 : 25 }}
        className="px-6 py-3 h-[50px] sm:px-6 sm:py-3 text-xs 2xl:text-base text-black font-medium bg-[#93c1fd] w-full sm:w-auto flex justify-center items-center gap-2 text-center rounded-t-[24px] group-hover:rounded-b-none whitespace-nowrap"
        onClick={handleToggle}
      >
        {children || placeholder}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${toggle && 'rotate-180'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div 
        style={{ willChange: 'height', height: toggle ? ulRef.current?.offsetHeight : 0 }}
        className={`absolute left-0 shadow-lg w-full bg-[#75a9fb] rounded-b-[25px] z-20 overflow-hidden h-0`}
      >
        <ul ref={ulRef} className="text-black font-medium">
          {filters?.map((filter, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
              onClick={() => handleFilter(filterType, filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCardFilterItem;