import Skeleton from "react-loading-skeleton";

const Paragraph = ({ children, isLoading }) => {
  return (
    <p className="leading-5">
      {isLoading ? <Skeleton className="h-4 mb-3" count={4} /> : children}
    </p>
  );
};

export default Paragraph;
