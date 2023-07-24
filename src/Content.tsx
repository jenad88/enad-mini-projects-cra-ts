import { Outlet } from 'react-router-dom';

type Props = {
  permissions: undefined | string[];
};

export function Content({ permissions }: Props) {
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
