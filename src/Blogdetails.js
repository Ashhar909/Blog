import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const history = useHistory()
    const{ data:blog, isPending, error}=useFetch(`http://localhost:8000/blogs/${id}`)
    const handleClick = () =>{
        fetch(`http://localhost:8000/blogs/${id}` ,{
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }


    return ( 
        <div className="blog-details">
            {isPending && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                </article>
            )}
            <button onClick={handleClick}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;