import BlogCard from "./BlogCard";
import BlogList from "./BlogList";

const blogList = BlogList

const Blogs = () => {
  return (
    <div className="flex flex-wrap">
    {BlogList.map((blog, index) => (
      <div className="w-full sm:w-1/2 md:w-1/3" key={index}>
        <BlogCard {...blog} />
      </div>
    ))}
  </div>
  
  );
};

export default Blogs;
