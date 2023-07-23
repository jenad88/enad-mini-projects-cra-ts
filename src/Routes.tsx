import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { ProductsPage } from './pages/ProductsPage';
// import { ProductPage } from './pages/ProductPage';
import PersonScorePage from './pages/PersonScorePage';
import ContactPageUncontrolled from './pages/ContactPageUncontrolled';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import ContactPageReactRouter, { contactPageAction } from './pages/ContactPageReactRouter';
import ContactPageReactHookForm from './pages/ContactPageReactHookForm';
import App from './App';

const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

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
        element: (
          <Suspense
            fallback={<div className="text-center p-5 text-xl text-slate-700">Loading...</div>}
          >
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: 'products/:id',
        element: (
          <Suspense
            fallback={<div className="text-center p-5 text-xl text-slate-700">Loading...</div>}
          >
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: 'contact-us',
        element: <ContactPageUncontrolled />,
      },
      {
        path: '/contact-us2',
        element: <ContactPageReactRouter />,
        action: contactPageAction,
      },
      {
        path: 'contact-us3',
        element: <ContactPageReactHookForm />,
      },
      {
        path: '/thank-you/:name',
        element: <ThankYouPage />,
      },
      {
        path: 'personscore',
        element: <PersonScorePage />,
      },
      {
        path: 'admin',
        element: (
          <Suspense
            fallback={<div className="text-center p-5 text-xl text-slate-700">Loading...</div>}
          >
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
