import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import PersonScorePage from './pages/PersonScorePage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
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
