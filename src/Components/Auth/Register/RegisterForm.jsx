
import axios from 'axios';
import { useContext } from 'react';
import { Form, Formik } from 'formik';
import { Col, Input, Label } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
import FormBtn from '@/Components/Common/FormBtn';
import { toast } from 'react-toastify';
import { REGISTER_API } from '@/Config/Constant';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';

import { useRouter } from 'next/navigation';


const RegisterForm = () => {

  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const router = useRouter();
  return (
    <Formik
     
    initialValues={{
        name: '',
        email: '',
        password: '',
        country_code: '91',
        phone: '',
      }}
    
      validationSchema={YupObject({
        name: nameSchema,
        email: emailSchema,
        password: passwordSchema,
        phone: phoneSchema,
      })}
    
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const data = {
          name: values.name,
          email: values.email,
          mobile: values.phone,
          password: values.password,
          role: 'GUEST', // Set role to 'GUEST' as default
        };

        axios.post(REGISTER_API, data)
          .then(response => {
            toast.success("Successfully registered");
            resetForm();
           router.push(`/${i18Lang}/auth/login`)
           
            
          })
          .catch(error => {
            toast.error("Registration failed");
            console.error('Registration error:', error);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur }) => (
        <Form className='row g-md-4 g-3'>
          <Col xs='12' className='form-group'>


          <SimpleInputField
                nameList={[
                  {
                    name: 'name',
                    type: 'text',
                    placeholder: t('FullName'),
                    title: 'name',
                    label: 'FullName',
                  },
                ]}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />   
              </Col>

        <Col xs='12' className='form-group'>


            <SimpleInputField
                  nameList={[
                    {
                      name: 'email',
                      type: 'email',
                      placeholder: t('EmailAddress'),
                      title: 'email',
                      label: 'EmailAddress',
                    },
                  ]}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

              </Col>

            <Col xs='12' className='form-group'>

               <SimpleInputField
                nameList={[
                  {
                    name: 'password',
                    type: 'password',
                    placeholder: t('Password'),
                    title: 'password',
                    label: 'Password',
                  },
                ]}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
        
          </Col>
        
          <Col xs='12' className='form-group'>
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
                value={values.country_code}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <SimpleInputField
                nameList={[
                  {
                    name: 'phone',
                    type: 'text',
                    placeholder: t('EnterPhoneNumber'),
                    colclass: 'country-input-box',
                    title: 'Phone',
                    label: 'Phone',
                  },
                ]}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Col>

          <Col xs={12}>
            <div className='forgot-box'>
              <div className='form-check remember-box'>
                <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
                <Label className='form-check-label' htmlFor='flexCheckDefault'>
                  {t('Iagreewith')}
                  <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
                </Label>
              </div>
            </div>
          </Col>
                 
          <Col xs={12}>
            <FormBtn title={t('SignUp')} classes={{ btnClass: 'btn btn-animation w-100' }} disabled={isSubmitting} />
          </Col>

        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;



 //successful 

// import axios from 'axios';
// import { useContext } from 'react';
// import { Form, Formik, ErrorMessage } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import { toast } from 'react-toastify';
// // import './register.css';
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
//         country_code: '91',
//         phone: '',
//       }}
//       validationSchema={YupObject({
//         name: nameSchema,
//         email: emailSchema,
//         password: passwordSchema,
//         phone: phoneSchema,
//       })}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         const data = {
//           name: values.name,
//           email: values.email,
//           mobile: values.phone,
//           password: values.password,
//           role: 'GUEST', // Set role to 'GUEST' as default
//         };

//         axios.post(REGISTER_API, data)
//           .then(response => {
//             toast.success("Successfully registered");
//             resetForm();
//           })
//           .catch(error => {
//             toast.error("Registration failed");
//             console.error('Registration error:', error);
//           })
//           .finally(() => {
//             setSubmitting(false);
//           });
//       }}
//     >
//       {({ values, isSubmitting, handleChange, handleBlur }) => (
//         <Form className='row g-md-4 g-3'>
//           <Col xs='12' className='form-group'>
//             <Input
//               type='text'
//               name='name'
//               id='name'
//               placeholder=''
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <Label class='r' htmlFor='name'>{t('FullName')}</Label>
//             <ErrorMessage name='name' component='div' className='text-danger' />
//           </Col>
//           <Col xs='12' className='form-group'>
//             <Input
//               type='email'
//               name='email'
//               id='email'
//               placeholder=' '
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <Label  htmlFor='email'  class='r'>{t('EmailAddress')}</Label>
//             <ErrorMessage name='email' component='div' className='text-danger' />
//           </Col>
//           <Col xs='12' className='form-group'>
//             <Input
//               type='password'
//               name='password'
//               id='password'
//               placeholder=' '
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <Label htmlFor='password'  class='r'>{t('Password')}</Label>
//             <ErrorMessage name='password' component='div' className='text-danger' />
//           </Col>
//           <Col xs='12' className='form-group'>
//             <Input
//               type='text'
//               name='phone'
//               id='phone'
//               placeholder=' '
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <Label htmlFor='phone'  class='r'>{t('Phone')}</Label>
//             <ErrorMessage name='phone' component='div' className='text-danger' />
//           </Col>
      
//           {/* <Col xs={12}>
//             <div className='form-check'>
//               <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
//               <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                 {t('Iagreewith')} <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//               </Label>
//             </div>
//           </Col>
//           <Col xs={12}>
//             <FormBtn title={t('SignUp')} classes={{ btnClass: 'btn btn-animation w-100' }} disabled={isSubmitting} />
//           </Col> */}
          
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;






