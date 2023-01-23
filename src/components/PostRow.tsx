import { useEffect, useState } from "react";
import { Post } from "../types/data/post";

interface PostRowProps{
  post: Post;
}

const PostRow = ({ post }: PostRowProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  

  return (
    <div className="py-8 border-b-2">
      <div className="font-bold mb-1">Title: {post.title}</div>
      <div className="text-sm mb-2">UseId: {post.userId}</div>
      <div className="">Body: {post.body}</div>
    </div>
  );
};

export default PostRow;