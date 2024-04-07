import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IPost } from '../../interfaces/posts';
import { useDispatch } from 'react-redux';
import { setPostsCreator } from '../../redux/actionsCreators/postsCreators';
import { setActualPosts } from '../../api/getPosts';

let nextPostId = 0;

export const Posts: FC = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSetActualPosts = async () => {
    try {
      const posts = await setActualPosts();
      dispatch(setPostsCreator(posts));
    } catch (error) {
      throw new Error(`Posts error ${error}`);
    }
  };

  return (
    <div>
      <ul>
        {posts.map((post: IPost) => (
          <li key={nextPostId++}>
            {post.title} <b>{post.body}</b>
          </li>
        ))}
      </ul>
      <button type='button' onClick={handleSetActualPosts}>
        Set actual posts
      </button>
    </div>
  );
};
