import React, { FC } from 'react';
import { IPost } from '../../../models/IUser';

interface PostItemProps {
    post: IPost,
    handleDelete: (post: IPost) => void;
    handleUpdate: (post: IPost) => void;
}

const Post: FC<PostItemProps> = ({post, handleUpdate, handleDelete}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        handleDelete(post);
    }
    const handleUpd = (event: React.MouseEvent) => {
        event.stopPropagation();
        const title = prompt() || "";
      handleUpdate({...post, title});
    };

    return (
      <div onClick={handleUpd}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button type="button" onClick={handleRemove}>
          Delete
        </button>
      </div>
    );
};

export default Post