import { configureStore } from '@reduxjs/toolkit'
import { globalData } from './redux.state'
import { secondaryState } from './secondary.state'

export const store = configureStore({
  reducer: {
    globalData: globalData.reducer,
    secondaryState: secondaryState.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch