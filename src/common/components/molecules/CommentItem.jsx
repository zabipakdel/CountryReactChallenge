import Paragraph from "../atoms/Paragraph";

const CommentItem = ({ children, isLoading, email, name }) => {
  return (
    <div className="flex flex-col border-b pb-4 mb-4">
      <div className="flex items-center">
        <span className="rounded-full w-8 h-8 mr-2 mb-2 bg-red-300">
          {/* {avatar} */}
        </span>
        <div>
          <div className="text-sm">{name}</div>
          <div>
            <a href={`mailto:${email}`} className="text-xs text-slate-400">
              {email}
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Paragraph>{children}</Paragraph>
      </div>
    </div>
  );
};

export default CommentItem;
