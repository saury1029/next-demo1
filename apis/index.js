import fetch from 'node-fetch';

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return posts;
};

export const fetchPost = async (id) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
  );
  const post = await response.json();

  return post;
};
