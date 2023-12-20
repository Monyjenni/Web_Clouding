import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './views/pages/HomePage';
import PostsPage from './views/pages/PostsPage';
import ContactPage from './views/pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
