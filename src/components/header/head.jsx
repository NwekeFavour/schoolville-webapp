import React from 'react';
import HeaderImage from './Images/logo.svg';
import ArrowIcon from './Images/arrow.svg';
import HeroSectionBg from './Images/hero_bkg.svg';
import HeroBtnOne from './Images/SignIn (1).svg';
import HeroBtnTwo from './Images/AppleLogo.svg';
import HeroImage from './Images/Group.svg';
import Tower from './Images/DesktopTower.svg';
import Linker from './Images/svg.svg';
import Graduation from './Images/Graduation.svg';
import Briefcase from './Images/BriefcaseMetal.svg';
import Selection from './Images/SelectionPlus.svg';
import Mobile from './Images/DeviceMobile.svg';
import Squarebox from './Images/SquaresFour.svg';
import SignIn from './Images/SignIn.svg';
import Man from './Images/man.svg';
import GroupPic from './Images/Union.svg';
import SchoolvilleArt from './Images/image 537.svg';
import './head.css'
import { Col, Container, Row } from 'react-bootstrap';

function head(props) {
  return (
    <div>
      <section className='Navbar'>
        <div  className='nav'>
          <div className='navImage'>
            <img
            src={HeaderImage}
            />
          </div>
          <div className='navList'>
            <nav className='List'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Training</a></li>
                <li><a href='#'>Courses</a></li>
                <li><a href='#'>e-Academy</a></li>
              </ul>
              <div className='navBtn'>
                <li><a href='#'>Register</a></li>
                <img
                src={ArrowIcon}
                />
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* hero section */}

      <section>
        <div className='HeroSection'>
          <div className='bg'>
            <img
            className='Background'
            src={HeroSectionBg}
            />
          </div>
          <div className='heroSectiontext'>
            <div className='HeroHeader'>
              <h2>Turn your ambition into a sucess story</h2>
            </div>
            <div className='p-text'>
              <p>Tation dolor ut esse eros zzril facilisi. velit in nulla ullamcorper dolore molestie euismod luptatum augue commodo feugait iusto lobortis consectetuer at Duis ex feugiat qui volutpat. eum nisl vero aliquip dignissim </p>
              <div className='HeroBtn'>
                <div className='HeroSect_btn'>
                  <a href='#'>
                    Register
                    <img
                    src={HeroBtnOne}
                    />
                  </a>
                </div>
                <div className='HeroSect_Btn2'>
                  <a href='#'>
                    Explore our courses
                    <img
                    src={HeroBtnTwo}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='Hero_Img'>
            <img
            src={HeroImage}
            />
          </div>
        </div>
      </section>

      {/* Training section*/}
      <section className='Section3'>
        <Container>
          <Row>
            <Col className='text-center mt-5'>
              <div className='Training'>
                <p>Our Training Courses</p>
              </div>
            </Col>
          </Row>
          <Row className='m-5'>
            <Col>
                <div className='divOne'>
                  <div>
                    <img
                    className='m-1'
                    src={Tower}
                    />
                  </div>
                  <div className='cardOnehead mt-3'>
                    <h3 className='text-uppercase'>computer training</h3>
                    <p>We train Individuals to be computer literate and professionals in the use of ICT tool</p>
                  </div>
                  <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
            <Col>
                <div className='divTwo'>
                  <div>
                    <img
                    className='m-1'
                    src={Graduation}
                    />
                  </div>
                  <div className='cardTwohead mt-2'>
                    <h3 className='text-uppercase'>career training</h3>
                    <p>We train individuals on how to manage and run their career. Whether you are looking for a new job or already on a job..</p>
                  </div>
                  <div className='cardTwoimage mt-5'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
            <Col>
                <div className='divThree'>
                  <div>
                    <img
                    className='m-1'
                    src={Briefcase}
                    />
                  </div>
                  <div className='cardThreehead mt-1'>
                    <h3 className='text-uppercase'>corporate training</h3>
                    <p>At Schoolville, we offer trainings tailored for corporate bodies and government agencies. We allow our client to choose their training programme</p>
                  </div>
                  <div className='cardThreeimage'>
                    <img
                    src={Linker}
                    />
                    <a href=''>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
          </Row>
          <Row className='m-5'>
            <Col>
                <div className='divFour'>
                  <div>
                    <img
                    className='m-1'
                    src={Selection}
                    />
                  </div>
                  <div className='cardFourhead mt-3'>
                    <h3 className='text-uppercase'>ui/ux design</h3>
                    <p>The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design.</p>
                  </div>
                  <div className='cardFourimage '>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
            <Col>
                <div className='divFive'>
                  <div>
                    <img
                    className='m-1'
                    src={Mobile}
                    />
                  </div>
                  <div className='cardFivehead mt-2'>
                    <h3 className='text-uppercase'>mobile development</h3>
                    <p>Build job-ready skills by learning from the best. Get started in the in-demand field of Mobile Development design with a Professional Certificate</p>
                  </div>
                  <div className='cardFiveimage mt-3'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
            <Col>
                <div className='divSix'>
                  <div>
                    <img
                    className='m-1'
                    src={Squarebox}
                    />
                  </div>
                  <div className='cardSixhead mt-1'>
                    <h3 className='text-uppercase'>software development</h3>
                    <p>Front End Programming using Javascript, PHP or Visual Studio .NET and Backend Programming using MySQL or Microsoft SQL Server, Phython Programming.</p>
                  </div>
                  <div className='cardSiximage mt-1'>
                    <img
                    src={Linker}
                    />
                    <a href=''>
                      Explore
                    </a>
                  </div>
                </div>
            </Col>
          </Row>
          <div className='moreCourses'>
            <a className='text-capitalize' href=''>
              more courses
              <img
              src={SignIn}
              />
              </a>
          </div>
        </Container>
      </section>

      {/* Learning Section */}

      <section>
        <Container className='SectionFour m-4'>
          <Row>
            <Col>
                <div className='Man'>
                  <img
                  className='ManImage'
                  src={Man}
                  />
                </div>
                <div className='ManLink'>
                  <a className='text-uppercase' href=''>Book a consultation</a>
                </div>
            </Col>
            <Col className='d-block'>
                <div className='Group-pic'>
                  <img
                  src={GroupPic}
                  />
                </div>
                <div className='Group-pictext'>
                  <a href='' className='text-capitalize'>Learn In-Demand Skill
                  to boost your chances
                  of getting a Job.</a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Col>
            <Col>
                <div className='AnotherGrouptext'>
                  <a className='text-capitalize' href=''>learn online or on-site</a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only popularised.....</p>
                </div>
                <div>
                <img
                className='schoolvilleImg'
                src={SchoolvilleArt}
                />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default head;