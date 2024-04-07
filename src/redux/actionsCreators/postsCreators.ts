import { IPost } from '../../interfaces/posts';
import { PostsActions } from '../../types/posts-types';

export const setPostsCreator = (payload: IPost[]) => ({
  type: PostsActions.SET,
  payload,
});
