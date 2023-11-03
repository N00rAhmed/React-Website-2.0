import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";

import Portfolio from "../images/portfolio.PNG";
import TaskTracker from "../images/taskapp.PNG";
import AirNavigationCalculator from '../images/air-nav-calc-screenshot.png';
import Suhbah from "../images/suhbah.png";
import Disney from "../images/disneyplus.PNG";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carourel {...settings}>
      <Wrap>
        <a>
          <img src={AirNavigationCalculator} alt="" />
          <p className="image-caption">
            {/* This was made using MERN */}
            {/* <div className='github'>
                        <a href='https://github.com/N00rAhmed/MERN-Frontend' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div> */}

            {/* <div className="icon">
              <a href="https://flytagcalc.netlify.app" target="_blank">
                <BsBoxArrowUpRight />
              </a>
            </div> */}
          </p>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={Suhbah} alt="" />
          <p className="image-caption">
            {/* This was made using MERN */}
            {/* <div className='github'>
                        <a href='https://github.com/N00rAhmed/MN-Muslim-Website' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>

            <div className="icon">
              <a href="https://mnmuslims.netlify.app" target="_blank">
                <BsBoxArrowUpRight />
              </a>
            </div> */}
          </p>

        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={Disney} alt="" />
          <p className="image-caption">
            {/* This was made using MERN */}
            {/* <div className='github'>
                        <a href='https://github.com/N00rAhmed/DisneyPlus-Clone' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>

            <div className="icon">
              <a href="https://disn3y-plus.netlify.app" target="_blank">
                <BsBoxArrowUpRight />
              </a>
            </div> */}
          </p>

        </a>
      </Wrap>
    </Carourel>
  );
};

const Carourel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    margin-right:230px;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      // width: 1000px;
      width: 800px;
      height: 350px;
    }
    @media (max-width: 768px) {
      img {
        width: 100%;
        height: auto;
      }
    }
    
    .image-caption {
      position: absolute;
      left: 0;
      right: 0;
      color: black;
      padding: 8px;
      font-size: 14px;
      text-align: center;
    }

  //   .github{
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       // padding: 13px;
  //       margin-top: -93px;
  //       margin-left: 30%;
  //       margin-right: 10px;
  //       font-size: 20px;
  
  //       a:hover {
  //         color: black; /* Updated to black */
  //       }
  //     }
  
    

  //   .icon {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     // padding: 13px;
  //     // margin-top: -68px;
  //     margin-top: -60px;
  //     margin-left: 20%;
  //     // margin-right: 10px;
  //     font-size: 20px;

  //     a:hover {
  //       color: black; /* Updated to black */
  //     }
  //   }

  //     .icon a:hover {
  //       color: black;
  //     }

  //     .github a:hover {
  //       color: black;
  //     }

  //   }
  // }
`;

export default ImgSlider;
