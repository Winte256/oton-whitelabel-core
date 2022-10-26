import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import linearReducer from './modules/linear'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    linear: linearReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch