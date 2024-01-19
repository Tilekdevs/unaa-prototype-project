import React from 'react'
import "./posts.scss"

import PostsCard from "../../components/Posts/PostsCard/PostsCard"


const News = () => {
  return (
    <section className='posts'>
        <h2 className="posts__title">Новости</h2>
        <div className="posts__container">
            <PostsCard/>
            <PostsCard/>
            <PostsCard/>
            <PostsCard/>
            <PostsCard/>
        </div>
    </section>
  )
}

export default News