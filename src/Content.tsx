import { useAppContext } from './AppContext';
import { Outlet } from 'react-router-dom';

export function Content() {
  const { permissions } = useAppContext();
  if (permissions === undefined) {
    return null;
  }
  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">
      Some important stuff that only an admin can do
      <Outlet />
    </p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions</p>
  );
}
