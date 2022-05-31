import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {


    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')    

    // const handledelete = (id) => {
    //     // filter returns a new list
    //     const newBlogs = blogs.filter((blog) => blog.id!==id)
    //     setData(newBlogs)
    // }

    return ( 
        <div className="home">
            {error && <div> { error } </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>} {/*props being passed*/}
        </div>
     );
}
 
export default Home;