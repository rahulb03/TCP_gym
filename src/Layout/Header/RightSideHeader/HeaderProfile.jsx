
import React, { useContext, useState } from "react";
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
import Cookies from 'js-cookie';
import { FaUser } from "react-icons/fa";

const HeaderProfile = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { accountData, refetch, clearSession } = useContext(AccountContext);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const { t } = useTranslation(i18Lang, "common");

  const { mutate, isLoading } = useCreate(LogoutAPI, false, false, "Logout Successfully", () => {
    Cookies.remove('uat');
    Cookies.remove('account');
    localStorage.removeItem('account');
    clearSession();
    refetch();
    router.push(`/${i18Lang}/auth/login`);
    setModal(false);
  });

  const handleLogout = () => {
    mutate({});
  };

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
            <h3> </h3>
          )}
        </div>
        <div className="delivery-detail">
          <h6>
            {t("Hi")}, {accountData?.name ?? t("User")}
          </h6>
          <h5>{t("MyAccount")}</h5>
        </div>
      </div>

      <div className="onhover-div onhover-div-login">
        <ul className="user-box-name">
          {accountData ? (
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
            </>
          ) : (
            <>
              <li className="product-box-contain">
                <Link href={`/${i18Lang}/auth/login`}>
                  <RiUserLine className="me-2" /> {t("Login")}
                </Link>
              </li>
              <li className="product-box-contain">
                <Link href={`/${i18Lang}/auth/register`}>
                  <FaUser className="me-2" /> {t("Register")}
                </Link>
              </li>
            </>
          )}
          <ConfirmationModal
            modal={modal}
            setModal={setModal}
            confirmFunction={handleLogout}
            isLoading={isLoading}
          />
        </ul>
      </div>
    </li>
  );
};

export default HeaderProfile;




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
// import { userDetail } from "@/Config/Constant";

// const HeaderProfile = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { accountData, setAccountData } = useContext(AccountContext);
//   const router = useRouter();
//   const [modal, setModal] = useState(false);
//   const { t } = useTranslation(i18Lang, "common");
//   const { mutate, isLoading } = useCreate(
//     LogoutAPI,
//     false,
//     false,
//     "Logout Successfully",
//     () => {
//       setAccountData(null); // Clear account data on logout
//       router.push(`/${i18Lang}/auth/login`);
//       setModal(false);
//     }
//   );

//   useEffect(() => {
//     // Fetch account data if necessary
//     // Assuming fetchAccountData is a function that fetches the account data
//     // if (!accountData) {
//     //   fetchAccountData().then(data => setAccountData(data));
//     // }
//   }, []);

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
//             // <h3>{accountData?.name?.charAt(0)?.toString()?.toUpperCase() ?? ''}</h3>

//             <div className="delivery-detail">
//             <h6>
//               {t("Hi")}, {accountData?.name ?? t("Guest")}
//             </h6>
//           </div>
//           )}
//         </div>
//         {/* <div className="delivery-detail">
//           <h6>
//             {t("Hi")}, {accountData?.name ?? t("Guest")}
//           </h6>
//         </div> */}
//       </div>

//       <div className="onhover-div onhover-div-login">
//         <ul className="user-box-name">
//           {userDetail ? (
//             <>
             
//              <li className="product-box-contain">
//                 <Link href={`/${i18Lang}/auth/login`}>
//                   {t("Login")}
//                 </Link>
//               </li>
//               <li className="product-box-contain">
//                 <Link href={`/${i18Lang}/auth/register`}>
//                   {t("Register")}
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


// />
//             </>
//           )}
//         </ul>
//       </div>
//     </li>
//   );
// };

// export default HeaderProfile;



