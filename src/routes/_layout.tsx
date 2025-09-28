import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <header className="flex flex-row gap-4 p-4">
        <NavLink to="/" className="aria-[current]:text-indigo-500">
          Home
        </NavLink>
        <NavLink to="/form" className="aria-[current]:text-indigo-500">
          Form
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
