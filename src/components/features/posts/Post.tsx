import { formatRelativeDate } from "@core/utils";
import { ThumbsUpIcon } from "@icons";
import { Post } from ".";

export const PostComponent: React.FunctionComponent<{ post: Post }> = ({
  post,
}) => {
  const getFullname = (post: Post) => {
    return `${post.owner.firstName} ${post.owner.lastName}`;
  };
  return (
    <div key={post.id} className="flex space-x-4 text-sm text-gray-500 mb-10">
      <div className="flex-shrink-0">
        <img
          src={post.owner.picture}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
      </div>
      <div className="flex-grow ">
        <h3 className="font-medium text-gray-900">{getFullname(post)}</h3>
        <p>
          <time dateTime={post.publishDate}>
            {formatRelativeDate(post.publishDate)}
          </time>
        </p>

        <div className="flex space-x-4 my-3 border p-2 justify-center mr-3">
          <div className=" bg-black flex-grow text-center flex justify-center overflow-hidden">
            <img
              src={post.image}
              alt=""
              className="h-[280px] bg-gray-100 block h-full object-contain"
            />
          </div>
        </div>
        <div className="flex space-x-4 justify-between pb-2">
          <div className="">{post.likes} Likes</div>
          <div className="text-right pr-3">
            <ThumbsUpIcon />
          </div>
        </div>
        <div
          className="prose prose-sm max-w-none text-gray-500"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
      </div>
    </div>
  );
};
