import { createBrowserRouter } from 'react-router-dom'
import MovimentsPage from './pages/moviments'

export const routes = [
  { path: '/', element: <MovimentsPage/>}
]

export const router = createBrowserRouter(routes)