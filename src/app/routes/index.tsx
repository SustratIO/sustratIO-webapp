import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <div className='mt-20 grid grid-rows-2 items-center justify-items-center'>
      <h1 className='text-brand text-3xl font-bold'>Welcome to SustratIO</h1>
      <p className='font-'>Monitoring dashboard and soil quality.</p>
    </div>
  ),
});
