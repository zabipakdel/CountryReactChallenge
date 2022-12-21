import Skeleton from "react-loading-skeleton";

const Title = ({ children, isLoading }) => {
  return (
    <h1 className="text-3xl mb-10">{isLoading ? <Skeleton /> : children}</h1>
  );
};

export default Title;
