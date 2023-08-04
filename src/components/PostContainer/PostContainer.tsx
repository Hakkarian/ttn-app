import React, { useEffect, useState } from 'react'
import { postAPI } from '../../services/PostService'
import Post from './Post/Post';
import { IPost } from '../../models/IUser';

const PostContainer = () => {
    const [limit] = useState<number>(5);
    const { data, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost,] = postAPI.useCreatePostMutation();
  
  console.log(data)
    useEffect(() => {
        // setInterval(() => {
        //     setLimit(2)
        // }, 2000)
    }, []);


    const handleCreatePost = async () => {
        const title = prompt();
        await createPost({ title, body: title } as IPost);
    }
    
    return (
        <div>
            <button type='button' onClick={handleCreatePost}>Add post</button>
            <button type='button' onClick={refetch}>Refetch</button>
        {isLoading && !error && <h2>Loading...</h2>}
        {error ? (
          <h2>Oops, an error happened</h2>
        ) : (
          <ul>
            {data &&
              data.map((post) => (
                <li key={post.id}>
                  {/* <Post title={post.title} body={post.body} /> */}
                </li>
              ))}
          </ul>
        )}
      </div>
    );
}

export default PostContainer