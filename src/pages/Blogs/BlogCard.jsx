import { Link } from "react-router-dom";

export default function BlogCard({ id, title, author, imageUrl, category, body }) {
  return (
    <div className="mb-6 md:mx-4 md:my-0 md:flex-1">
      <Link to={`/blogs/${id}`} className="block">
        <img src={imageUrl} alt={title} className="w-auto md:h-70" />
        <div className="mx-4 mt-2 font-normal">
          <span className="text-sm flex items-center gap-1 mt-4">
            <i className="fa-solid fa-hashtag"></i> {category}
          </span>
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
          <p className="line-clamp-2">{body}</p>
          <p className="text-gray-500 leading-8 font-medium">{author}</p>
        </div>
      </Link>
    </div>
  );
}
