import { Spinner } from "@nextui-org/react";

const loading = () => {
  return (
    <div className="max-container min-h-screen flex justify-center items-center">
      <Spinner label="Loading" color="secondary" labelColor="secondary" />
    </div>
  );
};

export default loading;
