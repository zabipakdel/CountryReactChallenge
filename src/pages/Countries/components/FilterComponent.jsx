import React from "react";
import Input from "./Input";
import ComboBox from "./ComboBox";

const FilterComponent = ({ term, setTerm, regionFilter, setRegionFilter }) => {
  return (
    <div className="fixed mt-16 bg-White pb-5 w-full pt-20 dark:bg-DarkBackground pt-3 lg:px-10 md:px-8 px-5  flex flex-col justify-start md:flex-row lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between md:justify-between">
      <Input setTerm={setTerm} term={term} />
      <ComboBox regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
    </div>
  );
};

export default FilterComponent;
