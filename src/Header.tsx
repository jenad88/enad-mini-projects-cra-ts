import { NavLink, Link, useSearchParams, Form } from 'react-router-dom';
import logo from './logo.svg';

import { User } from './api/authenticate';

type Props = {
  user: undefined | User;
  onSignInClick: () => void;
  loading: boolean;
};

export function Header({ user, onSignInClick, loading }: Props) {
  const [searchParams] = useSearchParams();

  return (
    <header className="flex flex-col border-b-2 border-gray-400 pb-6 h-28 bg-gray-900">
      <div className="flex flex-row justify-between align-baseline py-2">
        <div className="flex flex-row align-baseline">
          <Link to="">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
          <Link to="" className="flex items-center">
            <h1 className="text-2x text-white">React Tools</h1>
          </Link>
        </div>
        <div className="flex flex-row align-baseline">
          <div>
            <Form className="text-right" action="/products">
              <input
                type="search"
                name="search"
                placeholder="Search"
                defaultValue={searchParams.get('search') ?? ''}
                className="rounded py-2 px-3 text-gray-700"
              />
            </Form>
          </div>
          <div>
            {user ? (
              <span className="ml-auto font-bold">{user.name} has signed in</span>
            ) : (
              <button
                onClick={onSignInClick}
                className="whitespace-nowrap inline-flex items-center justify-center ml-2 
                px-4 py-2 w-36 border border-transparent rounded-md shadow-sm 
                text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? '...' : 'Sign in'}
              </button>
            )}
          </div>
        </div>
      </div>

      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="contact-us"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Contact Us (Uncontrolled)
        </NavLink>
        <NavLink
          to="contact-us2"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Contact Us (React Router Form)
        </NavLink>
        <NavLink
          to="contact-us3"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Contact Us (React Hook Form)
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 
            ${isActive ? 'border-white' : 'border-transparent'}`
          }
        >
          Admin
        </NavLink>
        <NavLink
          to="personscore"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Person Score
        </NavLink>
      </nav>
    </header>
  );
}
