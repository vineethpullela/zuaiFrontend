import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import "./index.css"

const CreatePost = () => {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    description: '',
    urlToImage: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    ///const url=URL.createObjectURL(file)
    if(file){
      const reader =new FileReader();
      reader.onloadend=()=>{
        setFormData((prevData)=>({
          ...prevData,urlToImage:reader.result,
        }));
      };
      reader.readAsDataURL(file);
     
      
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/createpost",formData).then(
      res=>alert(res.data)
  )
  setFormData({
    author: '',
    title: '',
    description: '',
    urlToImage: '',
    content: '',
  })
  };

  console.log(formData)
  return (
    <div className="create-post">
      <h2 className='createpost-heading'>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className='createpost-form'>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className='input'
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className='input'
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className='input'
        />
        
        <div className='img-input-container'>
          <input type='text' className='input' placeholder='upload image' value={formData.urlToImage} />
          <label className="img-container" htmlFor='img'> 
          <input
          id="img"
          type="file"
          name="img"
          placeholder="Image URL"          
          onChange={handleImageChange}
          required
          className='input'  
          hidden        
        />
      <FaCloudUploadAlt  size={25}/>
          </label>
        </div>

        
        

       
        <textarea
        cols={50}
        rows={5}
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
          className='input'
        />
        
        <button type="submit" className='post-btn'>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
