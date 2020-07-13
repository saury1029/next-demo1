import { fetchPost } from '../../apis';

const Post = ({ post }) => {
  return (
    <div className="container px-4">
      <div className="flex justify-center">
        <div className="py-8 md:w-4/5">
          {post.title ? (
            <>
              <h1 className="mb-8 text-4xl md:text-6xl font-bold leading-none break-words text-indigo-700">
                {post.title}
              </h1>
              <p className="text-gray-600">{post.body}</p>
            </>
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold leading-none break-words text-indigo-700 text-center">
              Not Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await fetchPost(id);

  return {
    props: {
      post,
    },
  };
}

export default Post;
