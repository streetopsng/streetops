"use client";

import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align"
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";


const postData = async(formData:any)=>{
    const res = await fetch("/api/blog/post-blog",{
        method:'POST',
        body:JSON.stringify(formData)
    })

    if (!res.ok) {
        console.log("something went wrong");
        return
        
    }
    const response = await res.json()
    return response
    
}
export default function TiptapEditor() {
  const [isClient, setIsClient] = useState(false);
  const [image,setImage] = useState<File | null>()
  const [loading,setLoading] = useState<boolean>(false)
  const [formInfo,setFormInfo] = useState({
    title:"",
    content:"",
    imageUrl:"",
    date:dayjs(new Date()).format("D, MMM, YYYY")
  })
  const [imagePrev,setImagePrev] = useState<string | null>(null)
  const [content, setContent] = useState("");
  const mutation = useMutation({
    mutationFn:postData,
    onSuccess:(data)=>{
        console.log(data);
        if (data.success) {
            alert("posted blog successfully")
            window.location.reload()
        }
        else{
            alert("an error occured, couldn't post blog")
        }
        setLoading(false)
        
    },
    onError:(error)=>{
console.log(error);
alert("an error occured, couldn't post blog")
setLoading(false)

    }
  })

  const buttonStyle =
  "px-3 py-1 rounded-md font-medium transition-colors text-white";

  useEffect(() => {
    
    setIsClient(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit, Underline, TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),],
    content: "<p>Start typing...</p>",
    immediatelyRender: false, 
  });

  const handleUpload = async ():Promise<{url:null | string,
    success:boolean,
    message:string}> => {
    if (!image) {
        return {
        url:null,
        success:false,
        message:"no image choosen"
      }
    }
 

    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
   
      console.log(data.result.secure_url);
      return {
        url:data.result.secure_url,
        success:true,
        message:"uploaded successfully"
      }
      
    } else {
      alert("Upload failed!");
      return {
        url:null,
        success:false,
        message:"upload failed"
      }
    }
 
  };




  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      return
    }
setLoading(true)

    
      if (editor) {
          const imageUploadResponse =  await handleUpload()
          const html = editor.getHTML();
          if (!html) {
            alert("input field empty")
            setLoading(false)
            return
          }

   console.log(imageUploadResponse);
   
      
      if (imageUploadResponse.success) {
        setFormInfo({
            ...formInfo,
            content:html,
            imageUrl:imageUploadResponse.url as string,
            date:dayjs(new Date()).format("D, MMM, YYYY")
        
          })

          mutation.mutate({
            ...formInfo,
            content:html,
            imageUrl:imageUploadResponse.url as string,
            date:dayjs(new Date()).format("D, MMM, YYYY")
        
          })
          
        }
        else{
            alert(imageUploadResponse.message)
            setLoading(false)
        }
// console.log({...formInfo,content:"lssk"});

     
    //   setContent(html);
    //   console.log("HTML:", html);

    }
    
  };

  if (!isClient || !editor) return <p>Loading editor...</p>;

  return (
    <div className="w-full max-w-2xl mx-auto border rounded-lg p-4 shadow-md ">
      {/* Toolbar */}


<form action="" onSubmit={handleSubmit}>

{/* blog title */}
<div className="text-grayOne  py-4">
    <label htmlFor="" className="font-semibold ">Blog title</label>
    <br />
    <input type="text"
    value={formInfo.title}
    className="w-full  border-1 border-grayOne px-2 h-[40px]"
    onChange={(e)=> {
setFormInfo({...formInfo,title:e.target.value})
    }}
    
    />
</div>
{/* blog  image */}
<div className="text-grayOne  py-4 ">
    <label htmlFor="image" className="font-semibold block text-center bg-grayOne text-bgcolor w-[50%] border-black border-1 rounded-md">upload Image </label>
    
    <br />
    <input type="file"
    id="image"
    accept="image/*"
    className="w-full  border-1 border-grayOne px-2 hidden"
    onChange={(e)=> {
console.log(e?.target?.files?.[0]);
const imageFile: File = e?.target?.files?.[0] as File
setImage(imageFile)
setImagePrev(URL.createObjectURL(imageFile))

    }}
    
    />
</div>

<div>
    {imagePrev ? <img src={imagePrev ? imagePrev : ""} alt="image prev" /> : ""}
</div>

<label htmlFor=""
className="font-semibold text-grayOne text-centre"
>Blog content</label>
<br />
      <div className="flex gap-2 mb-3 bg-grayTwo py-2 rounded-lg border-1 border-gray-500 px-2">
        
      <button
    type="button"
    onClick={() => editor.chain().focus().toggleBold().run()}
    className={`${buttonStyle} px-3 py-1 border rounded  bg-gray-500${
      editor.isActive("bold") ? "bg-black text-white" : ""
    }`}
  >
    B
  </button>


  {/* Italic */}
  <button
    type="button"
    onClick={() => editor.chain().focus().toggleItalic().run()}
    className={`${buttonStyle} px-3 py-1 border rounded bg-gray-500 ${
      editor.isActive("italic") ? "bg-black text-white" : ""
    }`}
  >
    I
  </button>

  {/* Underline */}
  <button
    type="button"
    onClick={() => editor.chain().focus().toggleUnderline().run()}
    className={`${buttonStyle} px-3 py-1 border rounded  bg-gray-500 ${
      editor.isActive("underline") ? "bg-black text-white" : ""
    }`}
  >
    U
  </button>

  {/* Paragraph */}
  {/* <button
    type="button"
    onClick={() => editor.chain().focus().setParagraph().run()}
    className={`${buttonStyle} px-3 py-1 border rounded ${
      editor.isActive("paragraph") ? "bg-black text-white" : ""
    }`}
  >
    P
  </button> */}

  {/* Double Line Break */}
  <button
    type="button"
    onClick={() =>
      editor.chain().focus().insertContent([{ type: "hardBreak" }, { type: "hardBreak" }]).run()
    }
    className={`${buttonStyle} px-3 py-1 border rounded bg-gray-500`}
  >
    ↵↵
  </button>
      </div>

      {/* Editor Area */}
      <div className="bg-gray-200 ">
      <EditorContent
        editor={editor}
        className=" border p-3 rounded"
        />
        </div>

        <div className="my-4">
            <button type="submit" 
           
            className="bg-primary rounded-lg px-6 py-2">{loading ? "----" : "post blog"}</button>
        </div>
        </form>
    </div>
  );
}
