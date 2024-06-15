// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
// import { emailSchema, passwordSchema, YupObject, nameSchema , phoneSchema } from '../../Validation/ValidationSchemas'; // assuming nameSchema is defined
// import { REGISTER_API } from '@/Config/Constant';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import I18NextContext from '@/Helper/I18NextContext';
// import Cookies from 'js-cookie';
// import AccountContext from '@/Helper/AccountContext';
// import CompareContext from '@/Helper/CompareContext';
// import { toast } from 'react-toastify';

// export const RegisterSchema = YupObject({
//   name: nameSchema,
//   email: emailSchema,
//   password: passwordSchema,
//   phone: phoneSchema
// });

// const RegisterHandle = (responseData, router, i18Lang, refetch, compareRefetch) => {
//   if (responseData.status === 200 || responseData.status === 201) {
//     const token = responseData.data?.access_token;
//     Cookies.set('uat', token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
//     if (typeof window !== 'undefined') {
//       Cookies.set('account', JSON.stringify(responseData.data));
//       localStorage.setItem('account', JSON.stringify(responseData.data));
//     }
//     refetch();
//     compareRefetch();
//     router.push(`/${i18Lang}/account/dashboard`);
//     toast.success(`Registration successful`);
//   }
// };

// const useHandleRegister = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { refetch } = useContext(AccountContext);
//   const { refetch: compareRefetch } = useContext(CompareContext);
//   const router = useRouter();

//   return useMutation(
//     (data) => axios.post(REGISTER_API, data),
//     {
//       onSuccess: (responseData) => RegisterHandle(responseData, router, i18Lang, refetch, compareRefetch),
//       onError: (error) => {
//         toast.error(error.response?.data?.message || 'An error occurred');
//       },
//     },
//   );
// };

// export default useHandleRegister;


//good 

// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
// import { emailSchema, passwordSchema, YupObject, nameSchema, phoneSchema } from '../../Validation/ValidationSchemas'; // assuming nameSchema is defined
// import { REGISTER_API } from '@/Config/Constant';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import I18NextContext from '@/Helper/I18NextContext';
// import Cookies from 'js-cookie';
// import AccountContext from '@/Helper/AccountContext';
// import CompareContext from '@/Helper/CompareContext';
// import { toast } from 'react-toastify';

// export const RegisterSchema = YupObject({
//   name: nameSchema,
//   email: emailSchema,
//   password: passwordSchema,
//   phone: phoneSchema
// });

// const RegisterHandle = (responseData, router, i18Lang, refetch, compareRefetch) => {
//   if (responseData.status === 200 || responseData.status === 201) {
//     const token = responseData.data?.access_token;
//     Cookies.set('uat', token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
//     if (typeof window !== 'undefined') {
//       Cookies.set('account', JSON.stringify(responseData.data));
//       localStorage.setItem('account', JSON.stringify(responseData.data));
//     }
//     refetch();
//     compareRefetch();
//     router.push(`/${i18Lang}/account/dashboard`);
//     toast.success(`Registration successful`);
//   }
// };

// const useHandleRegister = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { refetch } = useContext(AccountContext);
//   const { refetch: compareRefetch } = useContext(CompareContext);
//   const router = useRouter();

//   return useMutation(
//     (data) => {
//       const payload = { ...data };
//       if (!payload.role) {
//         payload.role = 'GUEST';
//       }
//       return axios.post(REGISTER_API, payload);
//     },
//     {
//       onSuccess: (responseData) => RegisterHandle(responseData, router, i18Lang, refetch, compareRefetch),
//       onError: (error) => {
//         toast.error(error.response?.data?.message || 'An error occurred');
//       },
//     },
//   );
// };

// export default useHandleRegister;


//bad



// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
// import { emailSchema, passwordSchema, YupObject, nameSchema, phoneSchema } from '../../Validation/ValidationSchemas';
// import { REGISTER_API } from '@/Config/Constant';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import I18NextContext from '@/Helper/I18NextContext';
// import Cookies from 'js-cookie';
// import AccountContext from '@/Helper/AccountContext';
// import CompareContext from '@/Helper/CompareContext';
// import { toast } from 'react-toastify';

// export const RegisterSchema = YupObject({
//   name: nameSchema,
//   email: emailSchema,
//   password: passwordSchema,
//   phone: phoneSchema
// });

// const RegisterHandle = (responseData, router, i18Lang, refetch, compareRefetch) => {
//   if (responseData.status === 200 || responseData.status === 201) {
//     const token = responseData.data?.access_token;
//     Cookies.set('uat', token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
//     if (typeof window !== 'undefined') {
//       Cookies.set('account', JSON.stringify(responseData.data));
//       localStorage.setItem('account', JSON.stringify(responseData.data));
//     }
//     refetch();
//     compareRefetch();
//     router.push(`/${i18Lang}/account/dashboard`);
//     toast.success(`Registration successful`);
//   }
// };

// const useHandleRegister = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { refetch } = useContext(AccountContext);
//   const { refetch: compareRefetch } = useContext(CompareContext);
//   const router = useRouter();

//   return useMutation(
//     (data) => {
//       const payload = { ...data };
//       return axios.post(REGISTER_API, payload);
//     },
//     {
//       onSuccess: (responseData) => RegisterHandle(responseData, router, i18Lang, refetch, compareRefetch),
//       onError: (error) => {
//         toast.error(error.response?.data?.message || 'An error occurred');
//       },
//     },
//   );
// };

// export default useHandleRegister;



import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { emailSchema, passwordSchema, YupObject, nameSchema, phoneSchema } from '../../Validation/ValidationSchemas';
import { REGISTER_API } from '@/Config/Constant';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import I18NextContext from '@/Helper/I18NextContext';
import Cookies from 'js-cookie';
import AccountContext from '@/Helper/AccountContext';
import CompareContext from '@/Helper/CompareContext';
import { toast } from 'react-toastify';

export const RegisterSchema = YupObject({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema
});

const RegisterHandle = (responseData, router, i18Lang, refetch, compareRefetch) => {
  if (responseData.status === 200 || responseData.status === 201) {
    const token = responseData.data?.access_token;
    Cookies.set('uat', token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
    if (typeof window !== 'undefined') {
      Cookies.set('account', JSON.stringify(responseData.data));
      localStorage.setItem('account', JSON.stringify(responseData.data));
    }
    refetch();
    compareRefetch();
    router.push(`/${i18Lang}/account/dashboard`);
    toast.success(`Registration successful`);
  }
};

const useHandleRegister = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { refetch } = useContext(AccountContext);
  const { refetch: compareRefetch } = useContext(CompareContext);
  const router = useRouter();

  return useMutation(
    (data) => {
      const payload = { ...data };
      return axios.post(REGISTER_API, payload);
    },
    {
      onSuccess: (responseData) => RegisterHandle(responseData, router, i18Lang, refetch, compareRefetch),
      onError: (error) => {
        toast.error(error.response?.data?.message || 'An error occurred');
      },
    },
  );
};

export default useHandleRegister;
