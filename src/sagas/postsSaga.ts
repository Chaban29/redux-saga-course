import { setActualPosts } from '../api/getPosts';
import { call, takeLeading } from 'redux-saga/effects';
import { PostsActions } from '../types/posts-types';

function* setPostsWorker(): Generator<any, void, any> {
  const posts = yield call(setActualPosts);
  yield console.log(posts);
}

function* setPostsWatcher() {
  yield takeLeading(PostsActions.SET, setPostsWorker);
}

export function* postsRootSaga() {
  yield setPostsWatcher();
}
