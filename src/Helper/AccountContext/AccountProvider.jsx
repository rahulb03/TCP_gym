

import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AccountContext from '@/Helper/AccountContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GET_PROFILE, STORAGE } from '@/Config/Constant';
import { toast } from 'react-toastify';

const fetchUserProfile = async (token) => {
  const response = await axios.get(GET_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const AccountProvider = (props) => {
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [accountData, setAccountData] = useState(null);

  const clearSession = () => {
    Cookies.remove('uat');
    Cookies.remove(STORAGE.userDetail);
    localStorage.removeItem(STORAGE.userDetail);
    setAccountData(null);
  };

  useEffect(() => {
    clearSession(); // Ensure session is cleared on initial load
  }, []);

  const token = Cookies.get('uat');

  const { data, refetch, isLoading } = useQuery(
    'fetchUserProfile',
    () => fetchUserProfile(token),
    {
      enabled: !!token,
      onSuccess: (data) => {
        setAccountData(data);
      },
      onError: () => {
        clearSession(); // Clear session if there's an error (e.g., token expired)
      },
    }
  );

  useEffect(() => {
    if (data) {
      setAccountData(data);
    }
  }, [data]);

  const updateAccountData = (newData) => {
    setAccountData(newData);
    Cookies.set('uat', newData?.access_token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
    Cookies.set(STORAGE.userDetail, JSON.stringify(newData), { path: '/' });
    localStorage.setItem(STORAGE.userDetail, JSON.stringify(newData));
  };

  return (
    <AccountContext.Provider value={{ ...props, accountData, setAccountData: updateAccountData, refetch, mobileSideBar, setMobileSideBar, clearSession }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;



// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import AccountContext from '@/Helper/AccountContext';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { GET_PROFILE, userDetail } from '@/Config/Constant';

// const fetchAccountData = async () => {
//   const token = Cookies.get('uat');
//   if (token) {
//     const response = await axios.get(GET_PROFILE, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   }
//   return null;
// };

// const AccountProvider = (props) => {
//   const [mobileSideBar, setMobileSideBar] = useState(false);
//   const [accountData, setAccountData] = useState();

//   // const clearSession = () => {
//   //   Cookies.remove('uat');
//   //   Cookies.remove('account');
//   //   localStorage.removeItem('account');
//   //   setAccountData(null);
//   // };

//   // useEffect(() => {
//   //   clearSession(); // Ensure session is cleared on initial load
//   // }, []);


//   const { data, refetch, isLoading } = useQuery('accountData', fetchAccountData, {
//     enabled: !!Cookies.get('uat'),
//     select: (res) => res,
//   });

//   useEffect(() => {
//     if (data) {
//       setAccountData(data);
//     }
//   }, [isLoading, data]);

//   return (
//     <AccountContext.Provider
//       value={{
//         ...props,
//         accountData:userDetail,
//         setAccountData,
//         refetch,
//         mobileSideBar,
//         setMobileSideBar,
//       }}
//     >
//       {props.children}
//     </AccountContext.Provider>
//   );
// };

// export default AccountProvider;


// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import AccountContext from '@/Helper/AccountContext';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { GET_PROFILE, userDetail } from '@/Config/Constant';

// const fetchAccountData = async () => {
//   const token = Cookies.get('uat');
//   if (token) {
//     const response = await axios.get(GET_PROFILE, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   }
//   return null;
// };

// const AccountProvider = (props) => {
//   const [mobileSideBar, setMobileSideBar] = useState(false);
//   const [accountData, setAccountData] = useState(null);

//   const { data, refetch, isLoading, isError } = useQuery('accountData', fetchAccountData, {
//     enabled: !!Cookies.get('uat'),
//     refetchOnWindowFocus: false, // Prevent refetch on window focus
//   });

//   useEffect(() => {
//     if (data) {
//       setAccountData(data);
//     }
//   }, [data]);

//   return (
//     <AccountContext.Provider
//       value={{
//         accountData,
//         setAccountData,
//         refetch,
//         mobileSideBar,
//         setMobileSideBar,
//       }}
//     >
//       {props.children}
//     </AccountContext.Provider>
//   );
// };

// export default AccountProvider;
