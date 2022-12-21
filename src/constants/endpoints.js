const COUNTRY_BASE_URL = "https://restcountries.com/v2";

const endpoints = {
  getCountries: `${COUNTRY_BASE_URL}/all`,
  getSearchedCountries: `${COUNTRY_BASE_URL}/all/name/`,
  // regionBlock: (region) => `${COUNTRY_BASE_URL}/regionalbloc/${region}`,
};

export default endpoints;
