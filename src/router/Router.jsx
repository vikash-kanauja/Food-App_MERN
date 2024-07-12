import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Main from '../layout/Main.jsx';
import Home from '../pages/home/Home.jsx';
// import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <App />,
      },
    ],
  },
]);

export default router;
