import { Spinner } from "@nextui-org/react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Spinner
      color='secondary'
      className='loading loading-spinner mb-12 flex w-[5rem] justify-center'
    />
  );
};

export default LoadingSpinner;
