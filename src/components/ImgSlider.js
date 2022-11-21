import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        Infinite: true,
        spees: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return(
            <Carourel {...settings}>
                <Wrap>
                    <a>
                        <img src='https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src='https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </a>
                </Wrap>

            </Carourel>
    );
};

const Carourel = styled(Slider)`
margin-top: 20px;
& > button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}
ul li button{
    &:before{
        font-size: 10px;
        color: rgb(150, 158, 171);
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow: initial;
}
.slick-prev{
    left: -75px;
}
.slick-next{
    right: -75px;
}
`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
        width: 100%;
        height: 100%;
    }
    &:hover{
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
}
`;

export default ImgSlider;
