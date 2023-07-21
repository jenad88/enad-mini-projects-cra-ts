import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import PersonScorePage from './pages/PersonScorePage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
      },
      {
        path: 'personscore',
        element: <PersonScorePage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
