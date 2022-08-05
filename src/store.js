import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../features/filters/filtersSlice'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})