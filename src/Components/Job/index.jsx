// 'use client';

// import { useContext, useState  } from 'react';
// // import {useHistory } from 'react-router-dom';
// import { RiArrowDownSLine, RiArrowRightLine, RiShoppingBag2Line, RiShoppingBag3Line } from 'react-icons/ri';
// import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
// import { useQuery } from '@tanstack/react-query';
// import request from '@/Utils/AxiosUtils';
// import { FaqAPI } from '@/Utils/AxiosUtils/API';
// import Loader from '@/Layout/Loader';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { ASSETS_URL, jobData } from '@/Config/Constant';
// import RatioImage from '@/Utils/RatioImage';
// import { FaPaperPlane } from "react-icons/fa";
// import { GET_JOB } from '@/Config/Constant';
// const BrowserJob = () => {
 
//   // const history = useHistory();

//   const handleMessageClick = (userId) => {
//     history.push(`/message/${userId}`);
//   };


//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [open, setOpen] = useState('1');
//   const toggle = (id) => {
//     if (open === id) {
//       setOpen();
//     } else {
//       setOpen(id);
//     }
//   };
//   const { data, isLoading } = useQuery([FaqAPI], () => request({ url: FaqAPI, params: { status: 1 } }), {
//     enabled: true,
//     refetchOnWindowFocus: false,
//     select: (data) => data?.data?.data,
//   });

//   if (isLoading) return <Loader />;
//   return (
//     <>
//       <section className='faq-box-contain section-b-space'>
//         <Container>
//           <Row >
//           {
//             jobData?.map((e, index) => {
//               return (
//                 <>
//                   <Col lg='4' sm='6' xs='12' >
//                     <Card className='h-100 p-0 job-card g-20'  >
//                       <CardBody className='p-2'>
//                         <Row>
//                           <Col lg='4' xs='12'>
//                             <div className='h-100'>
//                               <RatioImage
//                                 src={ASSETS_URL + e?.jobThumbnail}
//                                 height={90}
//                                 width={90}
//                                 className="rounded"
//                               />
//                             </div>
//                           </Col>
//                           <Col lg='8' xs='12'>
//                             <div className='d-flex justify-content-start flex-column gap-2 h-10'>
//                               <h3>{e?.jobTitle}</h3>
//                               <h6>{e?.jobShortDescription}</h6>
//                             </div>
//                           </Col>
//                         </Row>
//                         <Row>
//                           <Col lg='12' mt='3'> 
//                             <div className='d-flex flex-column gap-1'>
//                               <div className='d-flex gap-2'>
//                                 <span>Experience:</span>
//                                 <span>{e?.jobExeperince}</span>
//                               </div>
//                               <div className='d-flex gap-2'>
//                                 <span>Salary:</span>
//                                 <span>{e?.jobSalary?? 'Not Disclosed'}</span>
//                               </div>
//                               <div className='d-flex gap-2'>
//                                 <span>Location:</span>
//                                 <span>{e?.jobLocation?? 'Remote'}</span>
//                               </div>
//                               <div>
//                                 <p>{e?.jobDescription}</p>
//                               </div>
//                             </div>
                               
//                                 <div className='button-holder' >
//                               <button  className='btn deal-button btn btn-secondary' onClick={() => handleMessageClick(userId) }
                                
//                               >
//                                  Message <FaPaperPlane className="icon" />
//                               </button>
//                             </div>

//                           </Col>
//                         </Row>
              
//                       </CardBody>
                     
//                       <CardFooter className='p-2 ' >
//                         <div className='d-flex justify-content-between align-items-center'>
//                           <div>
//                             <h6>Posted: {e?.jobCreatedAt}</h6>
//                           </div>
//                           <div>
//                             <RiArrowRightLine fontSize={25} />
//                           </div>
//                         </div>
//                       </CardFooter>
//                     </Card>
//                   </Col>
//                 </>
//               )
//             })
//           }
//           </Row>
//           <Row className='d-none'>
//             <Col xl={5}>
//               <div className='faq-contain'>
//                 <h2>{t('FrequentlyAskedQuestions')}</h2>
//                 <p>{t('faqDescription')}</p>
//               </div>
//             </Col>
//             <Col xl={7}>
//               <div className='faq-accordion'>
//                 <Accordion open={open} toggle={toggle}>
//                   {data?.map((faq, i) => (
//                     <AccordionItem>
//                       <AccordionHeader targetId={i + 1}>
//                         {faq?.title}
//                         <RiArrowDownSLine />
//                       </AccordionHeader>
//                       <AccordionBody accordionId={i + 1}>
//                         <p>{faq?.description}</p>
//                       </AccordionBody>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
 
    
//  </>
//   );
// };

// export default BrowserJob;



'use client';

import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowDownSLine, RiArrowRightLine } from 'react-icons/ri';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import { useQuery } from '@tanstack/react-query';
import request from '@/Utils/AxiosUtils';
import { FaqAPI, GetProfileAPI } from '@/Utils/AxiosUtils/API';
import Loader from '@/Layout/Loader';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { ASSETS_URL } from '@/Config/Constant';
import RatioImage from '@/Utils/RatioImage';
import { FaPaperPlane } from "react-icons/fa";

const BrowserJob = () => {
  const history = useHistory();

  const handleMessageClick = (userId) => {
    history.push(`/message/${userId}`);
  };

  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // Fetch FAQ data
  const { data: faqData, isLoading: isFaqLoading } = useQuery(
    [FaqAPI],
    () => request({ url: FaqAPI, params: { status: 1 } }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) => data?.data?.data,
    }
  );

  // Fetch job data using get_profile API
  const { data: jobData, isLoading: isJobLoading } = useQuery(
    [GetProfileAPI],
    () => request({ url: GetProfileAPI, params: { status: 1 } }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) => data?.data?.data,
    }
  );

  if (isFaqLoading || isJobLoading) return <Loader />;

  return (
    <section className='faq-box-contain section-b-space'>
      <Container>
        <Row>
          {jobData?.map((e, index) => (
            <Col lg='4' sm='6' xs='12' key={index}>
              <Card className='h-100 p-0 job-card g-20'>
                <CardBody className='p-2'>
                  <Row>
                    <Col lg='4' xs='12'>
                      <div className='h-100'>
                        <RatioImage
                          src={ASSETS_URL + e?.jobThumbnail}
                          height={90}
                          width={90}
                          className="rounded"
                        />
                      </div>
                    </Col>
                    <Col lg='8' xs='12'>
                      <div className='d-flex justify-content-start flex-column gap-2 h-10'>
                        <h3>{e?.jobTitle}</h3>
                        <h6>{e?.jobShortDescription}</h6>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg='12' mt='3'>
                      <div className='d-flex flex-column gap-1'>
                        <div className='d-flex gap-2'>
                          <span>Experience:</span>
                          <span>{e?.jobExeperince}</span>
                        </div>
                        <div className='d-flex gap-2'>
                          <span>Salary:</span>
                          <span>{e?.jobSalary ?? 'Not Disclosed'}</span>
                        </div>
                        <div className='d-flex gap-2'>
                          <span>Location:</span>
                          <span>{e?.jobLocation ?? 'Remote'}</span>
                        </div>
                        <div>
                          <p>{e?.jobDescription}</p>
                        </div>
                      </div>
                      <div className='button-holder'>
                        <button className='btn deal-button btn btn-secondary' onClick={() => handleMessageClick(e.userId)}>
                          Message <FaPaperPlane className="icon" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className='p-2'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h6>Posted: {e?.jobCreatedAt}</h6>
                    </div>
                    <div>
                      <RiArrowRightLine fontSize={25} />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className='d-none'>
          <Col xl={5}>
            <div className='faq-contain'>
              <h2>{t('FrequentlyAskedQuestions')}</h2>
              <p>{t('faqDescription')}</p>
            </div>
          </Col>
          <Col xl={7}>
            <div className='faq-accordion'>
              <Accordion open={open} toggle={toggle}>
                {faqData?.map((faq, i) => (
                  <AccordionItem key={i}>
                    <AccordionHeader targetId={i + 1}>
                      {faq?.title}
                      <RiArrowDownSLine />
                    </AccordionHeader>
                    <AccordionBody accordionId={i + 1}>
                      <p>{faq?.description}</p>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrowserJob;
