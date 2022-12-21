import { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../../../constants/endpoints";

const useCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("");
  const [dark, setDark] = useState(false);
  const [regionFilter, setRegionFilter] = useState("");

  const getData = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const { data } = await axios.get(endpoints.getCountries);
      setIsLoading(false);
      setCountries(data);
      setAllCountries(data);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (regionFilter == "") {
      setCountries(allCountries);
    } else {
      setCountries(allCountries.filter((e) => e.region == regionFilter));
    }
  }, [regionFilter]);

  useEffect(() => {
    const newCountries = allCountries.filter((e) =>
      e.name?.toUpperCase().match(term.toUpperCase())
    );
    setCountries(newCountries);
  }, [term]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return {
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
  };
};

export default useCountries;
