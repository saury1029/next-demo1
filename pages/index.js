import Link from 'next/link';
import { fetchPosts } from '../apis';

export default function Home({ posts }) {
  return (
    <>
      <div className="container px-4">
        {posts.map((post) => (
          <Link
            href={`/posts/?id=${post.id}`}
            key={post.id}
            as={`/posts/${post.id}`}
            prefetch
          >
            <a>
              <div className="py-6 border-b">
                <h1 className="text-3xl font-bold leading-none mb-4">
                  {post.title}
                </h1>
                <p className="text-gray-600">{post.body}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
}
