import { IPost } from '../../interfaces/posts';
import { PostsActions, TypePostsAction } from '../../types/posts-types';

const postsState: IPost[] = [];

export const postsReducer = (
  state = postsState,
  { type, payload }: TypePostsAction
) => {
  switch (type) {
    case PostsActions.SET:
      return [...state, ...payload];
    default:
      return state;
  }
};
