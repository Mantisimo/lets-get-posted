import { StarIcon, ThumbsUpIcon } from "@icons";
import { cn } from "@core/utils";
import { Post } from ".";

interface PostsProps {
  posts: Post[];
}

export const Posts: React.FunctionComponent<PostsProps> = ({ posts }) => {
  const getFullname = (post: Post) => {
    return `${post.owner.firstName} ${post.owner.lastName}`;
  };

  const formatRelativeDate = (date: string) => {
    // todo: format
    return date;
  };

  return posts.map((post) => (
    <div key={post.id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-shrink-0 py-10">
        <img
          src={post.owner.picture}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-gray-900">{getFullname(post)}</h3>
        <p>
          <time dateTime={post.publishDate}>
            {formatRelativeDate(post.publishDate)}
          </time>
        </p>

        <div className="flex space-x-4 my-3 border p-3 justify-center">
          <div className="bg-black flex-grow text-center flex justify-center">
            <img
              src={post.image}
              alt=""
              className="h-[280px] bg-gray-100 block"
            />
          </div>
        </div>
        <div
          className="prose prose-sm mt-4 max-w-none text-gray-500"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />

        <div className="mt-4 flex items-center">
          <ThumbsUpIcon />
        </div>
      </div>
    </div>
  ));
};
