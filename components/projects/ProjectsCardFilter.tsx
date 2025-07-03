"use client";

import { useState } from "react";
import ProjectCardFilterItem, { FilterType } from "./ProjectCardFilterItem";

const ProjectsCardFilter = ({
  categories,
  onFilter,
  onResteFilter,
}: {
  categories?: any[],
  onFilter: (
    filterType: FilterType,
    value: string
  ) => void;
  onResteFilter: () => void;
}) => {
  const [activeFilters, setActiveFilters] = useState({
    options_proj_localisation: "",
    opp_status_label: "",
    status: "",
    categories: ""
  });

  const handleFilter = (
    filterType: "options_proj_localisation" | "opp_status_label" | "status" | "categories",
    value: string
  ) => {
    setActiveFilters((prev) => ({ ...prev, [filterType]: value }));
    onFilter(filterType, value);
  };

  const handleResetFilters = () => {
    setActiveFilters({ options_proj_localisation: "", opp_status_label: "", status: "", categories: "" });
    onResteFilter();
  };

  const filtersValue1 = ['Cameroun', 'Togo'];
  const filtersValue2 = categories?.filter(cat => cat.label === "Forêt et biodiversité" || cat.label === "Conditions de vie").map((cat) => cat.label) || [];
  const filtersValue3 = ['En collecte', 'En déploiement', 'Réalisé'];

  const isActiveFilters = Object.values(activeFilters).some((filter) => filter !== "");

  return (
    <div className="w-full max-w-[1022px] mx-auto h-full flex justify-center items-start relative top-[7%] mb-6 gap-4 z-50">
      <div className="flex flex-col sm:flex-row gap-4 w-full relative min-h-[50px]">
        <ProjectCardFilterItem filterType="options_proj_localisation" filters={filtersValue1} handleFilter={handleFilter}>
          {activeFilters.options_proj_localisation || "Localisation"}
        </ProjectCardFilterItem>
        <ProjectCardFilterItem filterType="categories" filters={filtersValue2} handleFilter={handleFilter}>
          {activeFilters.categories || "Agir sur"}
        </ProjectCardFilterItem>
        <ProjectCardFilterItem filterType="opp_status_label" filters={filtersValue3} handleFilter={handleFilter}>
          {activeFilters.opp_status_label || "Statuts d'état d’avancement"}
        </ProjectCardFilterItem>

        {/* Effacer les filtres */}
        {isActiveFilters && (
          <button onClick={handleResetFilters} className="px-6 py-3 sm:px-6 sm:py-3 text-xs 2xl:text-base text-white font-medium bg-gray-800 rounded-[24px] hover:bg-gray-900 w-full sm:w-auto">
            Effacer les filtres
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsCardFilter;
