// import React, { useContext, useState } from "react";
// import Link from "next/link";
// import I18NextContext from "@/Helper/I18NextContext";
// import { useTranslation } from "@/app/i18n/client";
// import { useRouter } from "next/navigation";
// import { RiLogoutBoxRLine, RiUserLine } from "react-icons/ri";
// import { LogoutAPI } from "@/Utils/AxiosUtils/API";
// import useCreate from "@/Utils/Hooks/useCreate";
// import ConfirmationModal from "@/Components/Common/ConfirmationModal";
// import AccountContext from "@/Helper/AccountContext";
// import Avatar from "@/Components/Common/Avatar";

// const HeaderProfile = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { accountData } = useContext(AccountContext);
//   const router = useRouter();
//   const [modal, setModal] = useState(false);
//   const { t } = useTranslation(i18Lang, "common");
//   const { mutate, isLoading } = useCreate(LogoutAPI,false,false,"Logout Successfully", () => { router.push(`/${i18Lang}/auth/login`); setModal(false);});

//   const handleLogout = () => {
//     mutate({});
//   };
//   return (
//     <li className="right-side onhover-dropdown">
//       <div className="delivery-login-box">
//         <div className="delivery-icon">
//           {accountData?.profile_image?.original_url ? (
//             <Avatar
//               data={'https://react.pixelstrap.net/fastkart/assets/avatar.png'}
//               customeClass="user-box me-2"
//               customImageClass="img-fluid"
//             />
//           ) : (
//             <h3>{accountData?.name?.charAt(0)?.toString()?.toUpperCase()}</h3>
//           )}
//         </div>
//         <div className="delivery-detail">
//           <h6>
//             {t("Hi")}, { accountData?.name ?? t("User")}
//           </h6>
        
//         </div>
//       </div>

//       <div className="onhover-div onhover-div-login">
//         <ul className="user-box-name">
//           <li className="product-box-contain">
//             <Link href={`/${i18Lang}/account/dashboard`}>
//               <RiUserLine className="me-2" /> {t("MyAccount")}
//             </Link>
//           </li>
//           <li className="product-box-contain" onClick={() => setModal(true)}>
//             <a>
//               <RiLogoutBoxRLine className="me-2" /> {t("Logout")}
//             </a>
//           </li>
//           <ConfirmationModal
//             modal={modal}
//             setModal={setModal}
//             confirmFunction={handleLogout}
//             isLoading={isLoading}
//           />
//         </ul>
//       </div>
//     </li>
//   );
// };

// export default HeaderProfile;


// import React, { useContext, useState, useEffect } from "react";
// import Link from "next/link";
// import I18NextContext from "@/Helper/I18NextContext";
// import { useTranslation } from "@/app/i18n/client";
// import { useRouter } from "next/navigation";
// import { RiLogoutBoxRLine, RiUserLine } from "react-icons/ri";
// import { LogoutAPI } from "@/Utils/AxiosUtils/API";
// import useCreate from "@/Utils/Hooks/useCreate";
// import ConfirmationModal from "@/Components/Common/ConfirmationModal";
// import AccountContext from "@/Helper/AccountContext";
// import Avatar from "@/Components/Common/Avatar";

// const HeaderProfile = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { accountData, setAccountData } = useContext(AccountContext);
//   const router = useRouter();
//   const [modal, setModal] = useState(false);
//   const { t } = useTranslation(i18Lang, "common");
  
//   // Simulate user not being logged in initially
//   useEffect(() => {
//     if (!accountData) {
//       setAccountData(null);
//     }
//   }, [accountData, setAccountData]);

//   const { mutate, isLoading } = useCreate(LogoutAPI, false, false, "Logout Successfully", () => {
//     setAccountData(null); // Reset account data on logout
//     router.push(`/${i18Lang}/auth/login`);
//     setModal(false);
//   });

//   const handleLogout = () => {
//     mutate({});
//   };

//   return (
//     <li className="right-side onhover-dropdown">
//       <div className="delivery-login-box">
//         <div className="delivery-icon">
//           {accountData?.profile_image?.original_url ? (
//             <Avatar
//               data={accountData.profile_image.original_url}
//               customeClass="user-box me-2"
//               customImageClass="img-fluid"
//             />
//           ) : (
//             <h3>{accountData?.name?.charAt(0)?.toString()?.toUpperCase() || ""}</h3>
//           )}
//         </div>
//         <div className="delivery-detail">
//           <h6>
//             {t("Hi")}, {accountData?.name ?? t("Guest")}
//           </h6>
//           <h5>{accountData ? t("MyAccount") : t("Welcome")}</h5>
//         </div>
//       </div>

//       <div className="onhover-div onhover-div-login">
//         <ul className="user-box-name">
//           {!accountData ? (
//             <>
//               <li className="product-box-contain">
//                 <Link href={`/${i18Lang}/auth/login`}>
//                   <RiUserLine className="me-2" /> {t("Login")}
//                 </Link>
//               </li>
//               <li className="product-box-contain">
//                 <Link href={`/${i18Lang}/auth/register`}>
//                   <RiUserLine className="me-2" /> {t("Register")}
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="product-box-contain">
//                 <Link href={`/${i18Lang}/account/dashboard`}>
//                   <RiUserLine className="me-2" /> {t("MyAccount")}
//                 </Link>
//               </li>
//               <li className="product-box-contain" onClick={() => setModal(true)}>
//                 <a>
//                   <RiLogoutBoxRLine className="me-2" /> {t("Logout")}
//                 </a>
//               </li>
//               <ConfirmationModal
//                 modal={modal}
//                 setModal={setModal}
//                 confirmFunction={handleLogout}
//                 isLoading={isLoading}
//               />
//             </>
//           )}
//         </ul>
//       </div>
//     </li>
//   );
// };

// export default HeaderProfile;

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine, RiUserLine } from "react-icons/ri";
import { LogoutAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import ConfirmationModal from "@/Components/Common/ConfirmationModal";
import AccountContext from "@/Helper/AccountContext";
import Avatar from "@/Components/Common/Avatar";
import { userDetail } from "@/Config/Constant";

const HeaderProfile = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { accountData, setAccountData } = useContext(AccountContext);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const { t } = useTranslation(i18Lang, "common");

  const { mutate, isLoading } = useCreate(LogoutAPI, false, false, "Logout Successfully", () => {
    setAccountData(null); 
    router.push(`/${i18Lang}/auth/login`);
    setModal(false);
  });

  const handleLogout = () => {
    mutate({});
  };

  useEffect(() => {
  }, [accountData]);

  return (
    <li className="right-side onhover-dropdown">
      <div className="delivery-login-box">
        <div className="delivery-icon">
          {accountData?.profile_image?.original_url ? (
            <Avatar
              data={accountData.profile_image.original_url}
              customeClass="user-box me-2"
              customImageClass="img-fluid"
            />
          ) : (
            <h3>{userDetail?.name?.charAt(0)?.toString()?.toUpperCase() || ""}</h3>
          )}
        </div>
        <div className="delivery-detail">
          <h6>
            {t("Hi")}, {userDetail?.name ?? "guest"}
          </h6>
        </div>
      </div>

      <div className="onhover-div onhover-div-login">
        <ul className="user-box-name">
          {userDetail?.id <= 0 ? (
            <>
              <li className="product-box-contain">
                <Link href={`/${i18Lang}/auth/login`}>
                  <RiUserLine className="me-2" /> {t("Login")}
                </Link>
              </li>
              <li className="product-box-contain">
                <Link href={`/${i18Lang}/auth/register`}>
                  <RiUserLine className="me-2" /> {t("Register")}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="product-box-contain">
                <Link href={`/${i18Lang}/account/dashboard`}>
                  <RiUserLine className="me-2" /> {t("MyAccount")}
                </Link>
              </li>
              <li className="product-box-contain" onClick={() => setModal(true)}>
                <a>
                  <RiLogoutBoxRLine className="me-2" /> {t("Logout")}
                </a>
              </li>
              <ConfirmationModal
                modal={modal}
                setModal={setModal}
                confirmFunction={handleLogout}
                isLoading={isLoading}
              />
            </>
          )}
        </ul>
      </div>
    </li>
  );
};

export default HeaderProfile;
