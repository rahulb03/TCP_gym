'use client';

import { useEffect , useContext, useState  } from 'react';
import {  RiArrowRightLine } from 'react-icons/ri';
import {  Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { ASSETS_URL, JOB_TOKEN, GET_JOB} from '@/Config/Constant';
import RatioImage from '@/Utils/RatioImage';
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios';
const BrowserJob = () => {
 
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

   
  const [jobData, setJobData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get( GET_JOB, {
          headers: {
            'token': JOB_TOKEN // Replace with your token
            // 'token': `` // Replace with your token

          }
        });
        setJobData(response.data); 
        setLoading(false); 
      } catch (error) {
        setError(error); 
        setLoading(false); 
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; 


  
  return (
    <>
      <section className='faq-box-contain section-b-space'>
        <Container>
          <Row className='job-row'>
          {
            jobData?.map( job => {
              return (
                <>
                  <Col lg='4' sm='6' xs='12' >
                    <Card className='h-100 p-0 job-card' >
                      <CardBody className='p-2'>
                        <Row>
                          <Col lg='4' xs='12'>
                            <div className='h-100'>
                              <RatioImage
                                src={ASSETS_URL + job.image}
                                height={90}
                                width={90}
                                className="rounded"
                              />
                            </div>
                          </Col>
                          <Col lg='8' xs='12' className='job-post'>
                            <div className='d-flex justify-content-start flex-column gap-2 h-100 '>
                              <h3>{job.name}</h3>
                              <h6>{job.shortDescription}</h6>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg='12'className='job-details'> 
                            <div className='d-flex flex-column gap-1'>
                              <div className='d-flex gap-2'>
                                <span>Experience:</span>
                                <span>{job.experience}</span>
                              </div>
                              <div className='d-flex gap-2'>
                                <span>Salary:</span>
                                <span>{job.Salary}</span>
                              </div>
                              <div className='d-flex gap-2'>
                                <span>Location:</span>
                                <span>{job.Location}</span>
                              </div>
                              <div>
                                <p>{job.longDescription}</p>
                              </div>
                               
                              <div className='d-flex gap-2'>
                                <span>mode:</span>
                                <span>{job.mode}</span>
                              </div>

                            </div>
{/*                                
                        <div className='button-holder' >
                              <button  className='btn deal-button btn btn-secondary' 
                                
                              >
                                 Message <FaPaperPlane className="icon" />
                              </button>
                      </div> */}

                          </Col>
                        </Row>
              
                      </CardBody>
                     
                      <CardFooter className='p-2 ' >
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h6>Posted: {job.CreatedAt}</h6>
                          </div>
                          <div>
                            <RiArrowRightLine fontSize={25} />
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                </>
              )
            })
          }
          </Row>

        </Container>
      </section>
 
    
 </>
  );
};

export default BrowserJob;
