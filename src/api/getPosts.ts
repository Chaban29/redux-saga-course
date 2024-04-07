export const setActualPosts = async () => {
  try {
    const request = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    return await request.json();
  } catch (error) {
    throw new Error(`Posts is failed, ${error}`);
  }
};
