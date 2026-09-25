import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const RootLayout = () => {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <header className='to-color-background flex items-center bg-linear-to-b from-green-800 p-4'>
        <span className='font-headers pr-20 text-4xl font-bold text-white'>
          SustratIO
        </span>
        <nav className='font-headers flex gap-10 text-xl font-bold text-white'>
          <Link to='/'>Home</Link>
          <Link to='/crops'>Crops</Link>
        </nav>
      </header>

      {/* Current page render */}
      <main className='min-h-0 min-w-0 flex-1 overflow-hidden'>
        <Outlet />
      </main>

      <footer className='from-color-background flex h-10 items-center bg-linear-to-b to-green-800 pr-4 pl-4'></footer>

      {/* Toolset for inspecting routes and types */}
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position='bottom-right' />
      )}
    </div>
  );
};
