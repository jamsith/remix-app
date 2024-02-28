import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import './root.css'

export const meta: MetaFunction = () => {
  return [
    { title: "Jtsmithers" },
    { name: "description", content: "Built with Remix" },
  ];
};


export default function Index() {

  return (
    <div className="main">
      <div className="mx-auto">
        <Link
          to="/about"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          About
        </Link>
        <Link
          to="/nhl"
          className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
        >
          NHL Standings
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
