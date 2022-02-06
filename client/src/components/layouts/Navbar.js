import React from 'react';
import { IoIosContacts } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';

export default function Navbar({
  title = 'Contact Keeper',
  icon = <IoIosContacts className="text-7xl text-white" />,
}) {
  const routes = [
    { to: '/', name: 'Home' },
    { to: '/about', name: 'About' },
  ];
  return (
    <div className="bg-yellow-500 text-indigo-800">
      <Layout>
        <div className="flex items-center justify-between space-x-5">
          <h1 className="flex justify-center items-center mr-8">
            {icon} {title}
          </h1>
          <div className="flex items-center justify-between space-x-5">
            {routes.map((r) => (
              <div key={r.name}>
                <NavLink
                  to={r.to}
                  className={({ isActive }) =>
                    `${isActive ? 'text-white' : ''}`
                  }
                >
                  {r.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
