// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import AccountContext from '.';
// import request from '../../Utils/AxiosUtils';
// import { LOGIN_API} from '@/Config/Constant';


// const AccountProvider = (props) => {
//   const [mobileSideBar, setMobileSideBar] = useState(false);
//   const [accountData, setAccountData] = useState();
//   const { data, refetch, isLoading } = useQuery([LOGIN_API], () => request({ url:LOGIN_API }), {
//     enabled: true,
//     select: (res) => {
//       return res?.data;
//     },
//   });
//   useEffect(() => {
//     if (data) {
//       setAccountData(data);
//     }
//   }, [isLoading, data]);

//   return <AccountContext.Provider value={{ ...props, accountData, setAccountData, refetch, mobileSideBar, setMobileSideBar }}>{props.children}</AccountContext.Provider>;
// };

// export default AccountProvider;



// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import AccountContext from '.';
// import request from '../../Utils/AxiosUtils';
// import { LOGIN_API } from '@/Config/Constant';

// const AccountProvider = (props) => {
//   const [mobileSideBar, setMobileSideBar] = useState(false);
//   const [accountData, setAccountData] = useState();
//   const { data, refetch, isLoading } = useQuery([LOGIN_API], () => request({ url: LOGIN_API }), {
//     enabled: true,
//     select: (res) => {
//       return res?.data;
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       setAccountData(data);
//     }
//   }, [isLoading , data]);

//   return (
//     <AccountContext.Provider value={{ ...props, accountData, setAccountData, refetch, mobileSideBar, setMobileSideBar }}>
//       {props.children}
//     </AccountContext.Provider>
//   );
// };

// export default AccountProvider;



// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import AccountContext from '.';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { LOGIN_API, GET_PROFILE} from '@/Config/Constant';

// const AccountProvider = (props) => {
//   const [mobileSideBar, setMobileSideBar] = useState(false);
//   const [accountData, setAccountData] = useState();

//   // Function to fetch user data using the token
//   const fetchAccountData = async () => {
//     const token = Cookies.get('uat');
//     if (token) {
//       const response = await axios.get(GET_PROFILE, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     }
//     return null;
//   };

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


import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AccountContext from '@/Helper/AccountContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GET_PROFILE, userDetail } from '@/Config/Constant';

const fetchAccountData = async () => {
  const token = Cookies.get('uat');
  if (token) {
    const response = await axios.get(GET_PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
  return null;
};

const AccountProvider = (props) => {
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [accountData, setAccountData] = useState();

  const { data, refetch, isLoading } = useQuery('accountData', fetchAccountData, {
    enabled: !!Cookies.get('uat'),
    select: (res) => res,
  });

  useEffect(() => {
    if (data) {
      setAccountData(data);
    }
  }, [isLoading, data]);

  return (
    <AccountContext.Provider
      value={{
        ...props,
        accountData:userDetail,
        setAccountData,
        refetch,
        mobileSideBar,
        setMobileSideBar,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
