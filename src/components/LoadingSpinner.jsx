import { Spinner } from "@nextui-org/react";

const LoadingSpinner = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-80'>
      <Spinner color='secondary' size='lg' />
    </div>
  );
};

export default LoadingSpinner;
