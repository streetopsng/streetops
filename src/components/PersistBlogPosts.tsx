"use client"
import { dispatchType, RootStateType } from '@/store'
import { storeBlogs } from '@/store/slices/allBlogs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PersistBlogPosts = () => {
    const blogs = useSelector((store:RootStateType)=>{
        return store.blogsReducer
            })
            const dispatch = useDispatch<dispatchType>()
            useEffect(()=>{
const blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs") as string) : []

dispatch(storeBlogs(blogs))
            },[])

  return (
    <div>PersistBlogPosts</div>
  )
}

export default PersistBlogPosts