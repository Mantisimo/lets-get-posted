import { useEffect, useState } from "react";
import { Post } from ".";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(`/api/post?limit=10&page=${page}`);
      const result = await response.json();
      setPosts([...posts, ...result.data]);
      console.info("fetching posts, page " + page, posts);
      setHasMore(posts.length < result.total);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async (postId: string) => {
    try {
      const response = await fetch(`/api/post/${postId}/comment`);
      const result = await response.json();
      console.info("fetching comments for post " + postId, result);
    } catch (error) {
      console.error(error);
    }
  }


  const features = {
    getComments
  }

  return { posts, getPosts, hasMore, features  };
};
