import React from "react";

const Input = ({ term, setTerm }) => {
  return (
    <input
      className="shadow-md p-3  appearance-none xl:w-2/6 lg:w-2/6 md:w-2/6 w-full dark:text-DarkGrayInput  dark:bg-DarkElements rounded leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Search for a country"
      value={term}
      onChange={({ target }) => setTerm(target.value)}
    />
  );
};

export default Input;
