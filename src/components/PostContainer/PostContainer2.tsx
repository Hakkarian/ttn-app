import React from "react";
import { postAPI } from "../../services/PostService";
import Post from "./Post/Post";
import { IPost } from "../../models/IUser";

const PostContainer2 = () => {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  }
  const handleDelete = (post: IPost) => {
    deletePost(post);
  };
  return (
    <div>
      {isLoading && !error && <h2>Loading...</h2>}
      {error ? (
        <h2>Oops, an error happened</h2>
      ) : (
        <ul>
          {data &&
            data.map((post) => (
              <li key={post.id}>
                <Post post={post} handleUpdate={handleUpdate} handleDelete={handleDelete} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default PostContainer2;
