const CountryItem = ({ data }) => {
  const { flags, name, id, population, region, capital } = data;

  // return (
  //   <div className="bg-white rounded-lg shadow-md w-full p-4 flex flex-col justify-between">
  //     <div>
  //       <img src={flags.png} className="object-cover w-full"/>
  //       <h2 className="text-lg font-bold dark:decoration-darkblue mb-4">{name}</h2>
  //     </div>
  //   </div>
  // );
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-DarkElements">
        <div className="md:shrink-0">
          <img className="h-48 w-[30rem] object-cover h-[15rem]" src={flags.png} alt="Modern building architecture"/>
        </div>
        <div className="p-8 dark:DarkElements">
          <h2 className="uppercase tracking-wide text-lg text-indigo-500 dark:text-White font-semibold">{name}</h2>
          <div className="flex items-center mt-2 ">
            <p className="font-bold dark:text-White">Population : </p>
            <p className="text-slate-500 ml-2 dark:text-White">{population.toLocaleString()}</p>
          </div>
          <div className="flex items-center mt-2 ">
            <p className="font-bold dark:text-White">Region : </p>
            <p className="text-slate-500 ml-2 dark:text-White">{region}</p>
          </div>
          <div className="flex items-center mt-2 ">
            <p className="font-bold dark:text-White">Capital : </p>
            <p className="text-slate-500 ml-2 dark:text-White">{capital}</p>
          </div>
        </div>
  </div>
  )
};

export default CountryItem;

