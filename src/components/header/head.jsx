import React, { useState } from 'react';
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
import Pin from './Images/pin.svg';
import './head.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import SponsorOne from './Images/logo_1.svg';
import SponsorTwo from './Images/logo_2.svg';
import SponsorThree from './Images/logo_3.svg';
import SponsorFour from './Images/logo_4.svg';
import SponsorFive from './Images/logo_5.svg';
import SponsorSix from './Images/logo_6.svg';
import SponsorSeven from './Images/Component 1.svg';
import SponsorEight from './Images/Component 3.svg';
import SponsorNine from './Images/logo_7.svg';
import SponsorTen from './Images/logo_8.svg';
import SponsorEleven from './Images/logo_9.svg';
import SponsorTwelve from './Images/logo_10.svg';
import SponsorThirteen from './Images/logo_11.svg';
import SponsorFourteen from './Images/logo_12.svg';
import SponsorFifteen from './Images/Component 4.svg';
import SponsorSixteen from './Images/Component 2.svg';
import FooterBg from './Images/logo-white.svg';
import FooterWatermark from './Images/logo_variance.svg';
import FooterInput from './Images/Submit.svg';
import FooterBgTwo from './Images/Ellipse 4.svg';
import navigation from './Images/menu.png';
import navigationExit from './Images/close.png';


function head(props) {

  const [navOpen, setNavOpen] = useState(false);
  const [navClose, setNavClose] = useState(false);

  return (
    <div>
      <section className='Navbar'>
        <div  className='nav'>
          <div className='navImage'>
            <img
            className='d-none'
            src={HeaderImage}
            />
            <img
            src={HeaderImage}
            />
          </div>
          <div className='d-none Nav_Link'>
            <img onClick={() => setNavOpen(!navOpen)} src={navigation}/>
          </div>
          <div className='navList'>
            <nav className={`List ${navOpen ? "LIST" : ''}`}>
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
            className='d-none'
            src={FooterBgTwo}
            />
            <img
            className='BgTwo d-none'
            src={FooterBgTwo}
            />
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
                  <div className='d-none mainBtn'>
                    <a href='#'>
                      Explore
                      <img
                      src={HeroBtnTwo}
                      />
                  </a>
                  </div>
                  <div>
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
          <Row className='m-5 CardSection'>
            <Col>
                <Card className='divOne' border='light'>
                  <Card.Header><img src={Tower}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>computer training</Card.Title>
                    <Card.Text>We train Individuals to be computer literate and professionals in the use of ICT tools</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border='light' className='divTwo'>
                  <Card.Header><img src={Graduation}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>career training</Card.Title>
                    <Card.Text>We train individuals on how to manage and run their career. Whether you are looking for a new job or already on a job..</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border='light' className='divThree'>
                  <Card.Header><img src={Briefcase}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>corporate training</Card.Title>
                    <Card.Text>At Schoolville, we offer trainings tailored for corporate bodies and government agencies...........</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
          <Row className='m-5 CardSection_Two'>
            <Col>
                <Card border='light' className='divFour'>
                  <Card.Header><img src={Selection}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>ui/ux design</Card.Title>
                    <Card.Text>The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design.</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border='light' className='divFive'>
                  <Card.Header><img src={Mobile}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>mobile technology</Card.Title>
                    <Card.Text>Build job-ready skills by learning from the best. Get started in the in-demand field of Mobile Development design with a Professional Certificate</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border='light' className='divSix'>
                  <Card.Header><img src={Squarebox}/></Card.Header>
                  <Card.Body>
                    <Card.Title className='text-uppercase'>software technology</Card.Title>
                    <Card.Text>Front End Programming using Javascript, PHP or Visual Studio .NET and Backend Programming using MySQL or Microsoft SQL Server, Phython Programming.</Card.Text>
                    <div className='cardOneimage mt-4'>
                    <img
                    src={Linker}
                    />
                    <a href='#'>
                      Explore
                    </a>
                  </div>
                  </Card.Body>
                </Card>
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

      {/* Fourth Section */}

      <section className='Section4 d-flex justify-content-center text-center'>
        <div className='SectionFourHead m-5'>
          <div>
            <div className='d-flex justify-content-center'>
              <img
                className='img'
                src={Pin}
              />
            </div>
            <h3>It is time to start investing in yourself in learning</h3>
          </div>
          <div className='Section4-p-text '>
            <p>Match your goals to our program,explore your options and and map out your path to success! <span>Schoolville</span> is right here for you.</p>
          </div>
          <div className='RegisterFour'>
            <a className='d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light' href=''>
              Register
              <img
              src={SignIn}
              />
            </a>
          </div>
          <div className='Main_Sponsors'>
            <div className='SectionFourTwo'>
              <h3>Trusted by our awesome partners</h3>
            </div>
            <Container className='Sponsors'>
              <Row>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorOne}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorTwo}
                  />
                </Col>
                <Col>
                  <img 
                  className='SponsorImages'
                  src={SponsorThree}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorFour}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorFive}
                  />
                </Col>
                <Col>
                   <img 
                  className='SponsorImages'
                  src={SponsorSix}
                   />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorSeven}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorEight}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorNine}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorTen}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorEleven}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorTwelve}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorThirteen}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorFourteen}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorFifteen}
                  />
                </Col>
                <Col>
                  <img
                  className='SponsorImages'
                  src={SponsorSixteen}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>    
      </section>

      {/* Footer Section */}
      <footer>
        <div>
          <div className='d-flex'>
            <div className='FooterForm'>
              <div className='FooterWmark'>
                <img
                className='F_watermark'
                src={FooterWatermark}
                />
                <img
                className='F_watermark1'
                src={FooterBgTwo}
                />
              </div>
              <img
              className='FooterImages'
              src={FooterBg}
              />
              <div className='Footer-p-text text-light d-block'> 
                <p>Subscribe to our Newsletter</p>
                <input placeholder='Enter your email address' type='text' className='border-0 bg-transparent'/>
                <a href='#'>
                  <img
                    src={FooterInput}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=''></div>
        </div>
        <div className='Height'></div>
        <div className='FooterEnd d-flex text-light'>
          <div>
            <h3 className='text-uppercase text-light'>Schoolville Training <br/> centre south-west origin</h3>
            <p>Plot 530A Aina, Akingbala Street (Omole Phase 2), Ikeja Lagos.
              +234 08023503315;
              +234 07044458674
              ikeja@schoolville.com
            </p>
          </div>
          <div>
            <h3 className='text-uppercase text-light'>Schoolville Training <br/> centre south-west origin</h3>
            <p>Plot 530A Aina, Akingbala Street (Omole Phase 2), Ikeja Lagos.
              +234 08023503315;
              +234 07044458674
              ikeja@schoolville.com
            </p>
          </div>
          <div>
            <h3 className='text-uppercase text-light'>Schoolville Training <br/> centre south-west origin</h3>
            <p>Plot 530A Aina, Akingbala Street (Omole Phase 2), Ikeja Lagos.
              +234 08023503315;
              +234 07044458674
              ikeja@schoolville.com
            </p>
          </div>
          <div>
            <h3 className='text-uppercase text-light'>Schoolville Training <br/> centre south-west origin</h3>
            <p>Plot 530A Aina, Akingbala Street (Omole Phase 2), Ikeja Lagos.
              +234 08023503315;
              +234 07044458674
              ikeja@schoolville.com
            </p>
          </div>
        </div>
        <div className='HeightOne'></div>
        <div className='FooterBottom text-light'>
          <div><p>FAQ’s | Policies | Careers | Press</p></div>
          <div><p>© COPYRIGHT 2023 SCHOOLVILLE</p></div>
        </div>

        <div className='d-flex justify-content-between Last_Section'>
          <div className='LastSection col-4'></div>
          <div className='LastSection_One col-4'></div>
        </div>
      </footer>
    </div>
  );
}

export default head;