import React, {useCallback, useState} from 'react';
import PropTypes from "prop-types";
import {PlusOutlined} from "@ant-design/icons";
import ImagesZoom from "./imagesZoom";

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  })

  if (images.length === 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img role="presentation" style={{ maxWidth: '50%', textAlign: 'center'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        { showImageZoom && <ImagesZoom images={images} onClose={onClose} /> }
      </div>
    )
  }
  if(images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ width: '50%', display: 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ width: '50%', display: 'inline-block'}} src={images[1].src} alt={images[0].src} onClick={onZoom} />
        { showImageZoom && <ImagesZoom images={images} onClose={onClose} /> }
      </>
    )
  }
  return (
    <>
      <div>
        <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <div role="presentation" style={{ display: "inline-block", width: '50%', textAlign: 'center', verticalAlign: 'middle'}} onClick={onZoom}>
        <PlusOutlined />
          <br/>
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      { showImageZoom && <ImagesZoom images={images} onClose={onClose} /> }
    </>
  )
}

export default  PostImages;