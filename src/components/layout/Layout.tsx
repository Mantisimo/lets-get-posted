import { Outlet } from "react-router-dom";
import { siteName } from "@config";

export const Layout = () => {
  return (
    <div className="min-h-full">
      <div className="bg-indigo-600 pb-32">
        <header className="py-10">
          <div className="max-w-7xl px-8 lg:px-12">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              { siteName }
            </h1>
          </div>
        </header>
      </div>
      <main className="-mt-32">
        <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6 min-h-svh">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
