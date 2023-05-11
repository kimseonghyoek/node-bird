import React, {useState} from 'react';
import PropTypes from "prop-types";
import Slick  from "react-slick";
import styled, {createGlobalStyle} from "styled-components";
import {Global, Header, ImgWrapper, Indicator, Overlay, SlickWrapper} from "./styles";
import {Button} from "antd";

const ImagesZoom = ({images, onClose}) => {
  const [currentState, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          <Slick initialSlide={0} afterChange={(slide) => setCurrentSlide(slide)} infinite arrows={false}
                 slidesToScroll={1} slidesToShow={1}>
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentState + 1}
              {' '}
              /
              {' '}
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;