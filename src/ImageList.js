import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

function ImageList({ images }) {
const returnedImages = images.map((image) => {
return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{returnedImages}</div>;
};

export default ImageList;