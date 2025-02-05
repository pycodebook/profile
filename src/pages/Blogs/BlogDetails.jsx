import { useLocation, useParams } from "react-router-dom";
import BlogList from "./BlogList";

const blogList = BlogList

export default function BlogDetails(){
    const {blogId} = useParams()
    const location = useLocation()
    return(
        <div>Blog Details {blogId} and location is {location.pathname} and search: {location.search}</div>
    )
}