import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './views/pages/HomePage';
import PostsPage from './views/pages/PostsPage';
import ContactPage from './views/pages/ContactPage';

function App() {
  const [lang, setLang] = useState('en');

  const router = createBrowserRouter([
    {
      path: "/contact-us",
      element: <ContactPage lang={lang} setLang={setLang} />,
    },
    {
      path: "/posts",
      element: <PostsPage lang={lang} setLang={setLang} />,
    },
    {
      path: "/",
      element: <HomePage lang={lang} setLang={setLang} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
