import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import request from '../AxiosUtils';
import SuccessHandle from '../CustomFunctions/SuccessHandle';

const useCreate = (url, updateId, path = false, message, extraFunction, notHandler, setCouponError) => {
  const router = useRouter();
  const pathName = usePathname();
  return useMutation((data) => request({ url: updateId ? `${url}/${Array.isArray(updateId) ? updateId.join('/') : updateId}` : url, data, method: 'post' }), {
    onSuccess: (resDta) => {
      !notHandler && SuccessHandle(resDta, router, path, message, setCouponError, pathName);
      extraFunction && extraFunction(resDta);
    },
    onError: (err) => {
      return err;
    },
  });
};

export default useCreate;


// import { useState } from 'react';
// import axios from 'axios'; // Assuming Axios is used for HTTP requests

// const useCreate = (apiEndpoint, initialData, initialLoading, successMessage, onSuccess) => {
//   const [isLoading, setIsLoading] = useState(initialLoading);

//   const mutate = async (requestData) => {
//     setIsLoading(true);
//     try {
//       // Perform API request, for example:
//       const response = await axios.post(apiEndpoint, requestData);
//       if (response.status === 200) {
//         onSuccess(); // Callback function on success
//         console.log(successMessage); // Log success message
//       } else {
//         console.error('Failed to logout'); // Handle failure cases
//       }
//     } catch (error) {
//       console.error('Error while logging out:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     mutate,
//     isLoading,
//   };
// };

// export default useCreate;
