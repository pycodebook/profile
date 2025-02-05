import { Link } from "react-router-dom";

const blogList = [
  {
    id: 1,
    title: "A Year of Reading the World",
    author: "Ann Morgan",
    date: "Ongoing",
    category: "Global Literature",
    tags: ["Books", "Reading Challenge", "World Literature"],
    imageUrl:
      "https://ayearofreadingtheworld.files.wordpress.com/2012/12/cropped-blog-banner.jpg",
    body: "In 2012, Ann Morgan embarked on a journey to read a book from every country in the world within a year. She documented her experiences and reviews on this blog, offering insights into global literature.",
    url: "https://ayearofreadingtheworld.com/",
  },
  {
    id: 2,
    title: "Diary of Difference",
    author: "Ivana",
    date: "Ongoing",
    category: "Book Reviews",
    tags: ["Books", "Young Adult", "Mystery", "Romance"],
    imageUrl:
      "https://diaryofdifference.com/wp-content/uploads/2021/06/Diary-of-Difference-Logo.png",
    body: "Ivana shares her passion for books through reviews, covering genres like mystery, young adult, contemporary, and romance. Her blog also features postcards and various creative content.",
    url: "https://diaryofdifference.com/",
  },
  {
    id: 3,
    title: "European Literature Network’s Blog",
    author: "Various Writers",
    date: "Ongoing",
    category: "European Literature",
    tags: ["Books", "Translations", "European Culture"],
    imageUrl:
      "https://www.eurolitnetwork.com/wp-content/uploads/2018/02/logo-3.jpg",
    body: "This platform champions European literature in the UK, featuring contributions from various writers, translators, and publishers. It serves as a collaborative hub for sharing news, reviews, and views on European literary works.",
    url: "https://www.eurolitnetwork.com/category/our-blog/",
  },
];

const Blogs = () => {
  return (
    <div>
      {blogList.map((blogList, index) => {
        
        return (
          <div className="my-4 border-b-1 border-indigo-100 py-1">
            <h2 className="text-xl font-semibold">{blogList.title}</h2>
            <p className="italic">Author: {blogList.author}</p>
            <Link
              to={`/blogs/${blogList.id}`}
              className="my-1 block font-medium !text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
