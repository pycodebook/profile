import BlogCard from "./BlogCard";
import BlogList from "./BlogList";

const blogList = BlogList

const Blogs = () => {
  return (
    <div className="md:flex">
      {blogList.map((blogList) => <BlogCard {...blogList}/> )}
    </div>
  );
};

export default Blogs;
