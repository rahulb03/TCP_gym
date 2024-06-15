// import { useContext } from 'react';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import { REGISTER_API } from '@/Config/Constant';

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         // country_code: '91',
//         phone: '',
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values) => {
//         // Add your logic here
//       }}>
//       {({ values }) => (
//         <Form className='row g-md-4 g-3'>
//           <SimpleInputField
//             nameList={[
//               { name: 'name', placeholder: t('EmailAddress'), title: 'Name', label: 'FullName' },
//               { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'EmailAddress' },
//               { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
//             ]}
//           />
//           <Col xs='12'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//               />
//             </div>
//           </Col>

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('Iagreewith')}
//                   <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>
//           <FormBtn title={'SignUp'} classes={{ btnClass: 'btn btn-animation w-100' }} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;

// import { useContext } from 'react';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import { REGISTER_API } from '@/Config/Constant';

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         // country_code: '91',
//         phone: '',
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values) => {
//         // Add your logic here
//       }}>
//       {({ values }) => (
//         <Form className='row g-md-4 g-3'>
//           <SimpleInputField
//             nameList={[
//               { name: 'name', placeholder: t('EmailAddress'), title: 'Name', label: 'FullName' },
//               { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'EmailAddress' },
//               { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
//             ]}
//           />
//           <Col xs='12'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//               />
//             </div>
//           </Col>

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('Iagreewith')}
//                   <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>
//           <FormBtn title={'SignUp'} classes={{ btnClass: 'btn btn-animation w-100' }} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;

// import { useContext } from 'react';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import useHandleRegister from '@/Utils/hooks/Auth/useregister'; // Import your hook

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const handleRegister = useHandleRegister(); // Get the mutation function

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         // country_code: '91',
//         phone: '',
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values) => {
//         handleRegister.mutate(values); // Call the mutation function with form values
//       }}>
//       {({ values }) => (
//         <Form className='row g-md-4 g-3'>
//           <SimpleInputField
//             nameList={[
//               { name: 'name', placeholder: t('EmailAddress'), title: 'Name', label: 'FullName' },
//               { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'EmailAddress' },
//               { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
//             ]}
//           />
//           <Col xs='12'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//               />
//             </div>
//           </Col>

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('Iagreewith')}
//                   <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>
//           <FormBtn title={'SignUp'} classes={{ btnClass: 'btn btn-animation w-100' }} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;



 // last




// import { useContext } from 'react';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import useHandleRegister from '@/Utils/hooks/Auth/useregister'; // Import your hook

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const handleRegister = useHandleRegister(); // Get the mutation function

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         country_code: '91', // Default country code
//         phone: '',
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values) => {
//         handleRegister.mutate(values); // Call the mutation function with form values
//       }}
//     >
//       {() => (
//         <Form className='row g-md-4 g-3'>
//           <SimpleInputField
//             nameList={[
//               { name: 'name', placeholder: t('FullName'), title: 'Name', label: 'Full Name' },
//               { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'Email Address' },
//               { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
//             ]}
//           />
//           <Col xs='12'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//               />
//             </div>
//           </Col>

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('I agree with')}
//                   <span> {t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>
//           <FormBtn title={t('Sign Up')} classes={{ btnClass: 'btn btn-animation w-100' }} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;





// import { useContext } from 'react';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import useHandleRegister from '@/Utils/hooks/Auth/useregister'; // Import your hook

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const handleRegister = useHandleRegister(); // Get the mutation function

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         country_code: '91', // Default country code
//         phone: '',
//         role: 'GUEST', // Default role
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values) => {
//         handleRegister.mutate(values); // Call the mutation function with form values
//       }}
//     >
//       {() => (
//         <Form className='row g-md-4 g-3'>
//           <SimpleInputField
//             nameList={[
//               { name: 'name', placeholder: t('FullName'), title: 'Name', label: 'Full Name' },
//               { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'Email Address' },
//               { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
//             ]}
//           />
//           <Col xs='12'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//               />
//             </div>
//           </Col>

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('I agree with')}
//                   <span> {t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>
//           <FormBtn title={t('Sign Up')} classes={{ btnClass: 'btn btn-animation w-100' }} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;



import { useContext } from 'react';
import { Form, Formik } from 'formik';
import { Col, Input, Label } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
import FormBtn from '@/Components/Common/FormBtn';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
import useHandleRegister from '@/Utils/hooks/Auth/useregister'; // Import your hook

const RegisterForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const handleRegister = useHandleRegister(); // Get the mutation function

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        country_code: '91', // Default country code
        phone: '',
        role: 'GUEST', // Default role
      }}
      validationSchema={YupObject({
        name: nameSchema,
        email: emailSchema,
        password: passwordSchema,
        phone: phoneSchema,
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleRegister.mutate(values, {
          onSuccess: () => {
            setSubmitting(false); // Reset submitting state
          },
          onError: () => {
            setSubmitting(false); // Reset submitting state
          },
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className='row g-md-4 g-3'>
          <SimpleInputField
            nameList={[
              { name: 'name', placeholder: t('FullName'), title: 'Name', label: 'Full Name' },
              { name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'Email Address' },
              { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
            ]}
          />
          <Col xs='12'>
            <div className='country-input'>
              <SearchableSelectInput
                nameList={[
                  {
                    name: 'country_code',
                    notitle: 'true',
                    inputprops: {
                      name: 'country_code',
                      id: 'country_code',
                      options: AllCountryCode,
                    },
                  },
                ]}
              />
              <SimpleInputField
                nameList={[
                  {
                    name: 'phone',
                    type: 'number',
                    placeholder: t('EnterPhoneNumber'),
                    colclass: 'country-input-box',
                    title: 'Phone',
                    label: 'Phone',
                  },
                ]}
              />
            </div>
          </Col>

          <Col xs={12}>
            <div className='forgot-box'>
              <div className='form-check remember-box'>
                <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
                <Label className='form-check-label' htmlFor='flexCheckDefault'>
                  {t('I agree with')}
                  <span> {t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
                </Label>
              </div>
            </div>
          </Col>
          <FormBtn title={t('Sign Up')} classes={{ btnClass: 'btn btn-animation w-100' }} disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;






