import React from "react";
import CountryItem from "./components/CountryItem";
import Navbar from "./components/NavBar";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

// Components
import FilterComponent from "./components/FilterComponent";
// Hooks
import useCountries from "./hooks/useCountries";

const Countries = () => {
  // Custom Hook
  const {
    isLoading,
    error,
    countries,
    setCountries,
    term,
    setTerm,
    dark,
    setDark,
    allCountries,
    regionFilter,
    setRegionFilter,
  } = useCountries();

  const switchTheme = () => {
    setDark((theme) => !theme);
  };

  return (
    <div className="bg-LightBackground dark:DarkBackground h-screen">
      {isLoading && (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}

      {error && (
        <div>
          <h1>No data found</h1>
        </div>
      )}

      {!countries.length && !isLoading ? (
        <div>
          <h1>No Data</h1>
        </div>
      ) : null}
      <Navbar
        isDark={dark}
        toggleTheme={switchTheme}
        MoonIcon={MoonIcon}
        SunIcon={SunIcon}
      />
      <FilterComponent
        term={term}
        setTerm={setTerm}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      <div className="pt-52 dark:bg-DarkBackground h-screen">
        {countries.length ? (
          <div className="grid pb-10 px-10 dark:bg-DarkBackground bg-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-2  gap-7 w-full">
            {countries.map((data) => (
              <CountryItem key={data.name} data={data} />
            ))}
          </div>
        ) : (
          <div className="h-full w-full bg-White dark:bg-DarkBackground" />
        )}
      </div>
    </div>
  );
};

export default Countries;
