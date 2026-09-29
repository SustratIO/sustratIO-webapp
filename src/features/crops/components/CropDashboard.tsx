import { useAuthStore } from '@app/stores/useAuthStore';
import { useCrops } from '@features/crops/api/useCrops';
import { CropList } from '@features/crops/components/CropList';
import { CropDetail } from './CropDetail';
import { useState } from 'react';
import type { Crop } from '../types';

export const CropDashboard = () => {
  const [selectedCrop, setSelectedCrop] = useState<Crop | undefined>(undefined);

  const {
    user,
    isAuthenticated,
    login,

    logout,
    isLoading: isUserLoading,
  } = useAuthStore();

  const {
    data: cropsPage,
    isLoading: isCropsAPILoading,
    isError: isCropsAPIError,
    error: cropAPIError,
  } = useCrops(user?.id);

  if (!isAuthenticated) {
    return (
      <button
        type='button'
        onClick={() => {
          void login();
        }}
      >
        Login to see crops
      </button>
    );
  }

  if (isUserLoading) return <p>Loading session...</p>;
  if (isCropsAPIError) return <p>API Error: {cropAPIError.message}</p>;
  if (isCropsAPILoading) return <p>Loading crops...</p>;

  return (
    <div className='flex max-h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-2 overflow-x-hidden'>
      <div className='flex max-w-full flex-row justify-between pr-5 pb-1 pl-5'>
        <span className='text-brand font-bold'>Welcome, ${user?.email}</span>
        <button
          type='button'
          onClick={() => {
            void logout();
          }}
        >
          Logout
        </button>
      </div>
      <div className='grid min-h-0 max-w-full flex-1 grid-cols-[30%_65%] overflow-y-auto pr-1 pb-1.5 pl-1.5'>
        <CropList
          items={cropsPage?.items ?? []}
          onSelect={(cropId) => {
            setSelectedCrop(cropsPage?.items.find((c) => c.id === cropId));
          }}
        />
        {selectedCrop ? <CropDetail cropData={selectedCrop} /> : <></>}
      </div>
    </div>
  );
};
