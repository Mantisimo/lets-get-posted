import InfiniteScroll from "react-infinite-scroll-component";
import { PostComponent } from "./Post";
import { usePosts } from "./usePosts";

export const Posts: React.FC = () => {
  const { posts, getPosts, hasMore } = usePosts();

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getPosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more to see</b>
        </p>
      }
    >
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};
