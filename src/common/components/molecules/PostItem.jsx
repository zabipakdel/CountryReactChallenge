import { Link } from "react-router-dom";

const PostItem = ({ data }) => {
  const { body, title, id } = data;

  return (
    <div className="bg-white rounded-lg shadow-md w-full p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg mb-4">{title}</h2>
        <p className="text-slate-300 text-xs">{body.substr(0, 80)}</p>
      </div>

      <div className="mt-10">
        {/* ACTIONS */}
        <Link to={`/posts/${id}`}>
          <span className="p-4 text-xs">More Info</span>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
