import { IPost } from '../interfaces/posts';

export const enum PostsActions {
  SET = 'posts/setPostsFromServer',
}

export type TypePostsAction = { type: PostsActions.SET; payload: IPost[] };
