import {  useEffect, useState } from "react"
import "./index.css"
//import { store } from "../../store"
import axios from "axios";



const BlogDetail=({match})=>{
   // const {blog}=useContext(store)
    /*const{id,title,description,urlToImage,content,publishedAt}=blog
    console.log(id,title,description,urlToImage,content,publishedAt)*/

    const [blog,setBlog]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            
            
            await axios.get(`http://localhost:4000/blogs/${match.params.id}`).then(
                res=>setBlog(res.data)
            )
        }
    
        fetchData();

    },[match.params.id])

console.log(`${match.params.id}`)
   


    console.log(blog)

    return(
    <div className="blogdetail-container">

    {blog&&(<div  className="blog-container">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-descripton">{blog.description}</p>
        <img src={blog.urlToImage} alt="img" className="blog-img"/>
        <p className="blog-content">{blog.content}</p>
        <p className="blog-published">{blog.publishedAt}</p>       
       </div>)}
    
       </div>)
}


export default BlogDetail