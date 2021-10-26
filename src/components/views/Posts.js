// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import getData from '../helpers/fetchData'

function Posts() {

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])

    const handlePosts = async () => {
        setPosts([])
        setError('')

        const posts = await getData("posts")
        if(posts?.error !== undefined) return setError(posts.error)

        setPosts(posts)
    }

    React.useEffect(() => {
        handlePosts()
    }, [])

    
    const handleClick = () => handlePosts()

    return (
        <>
            {error}
            <div>
                <button onClick={handleClick}>Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
        </>
    )
}

export default Posts