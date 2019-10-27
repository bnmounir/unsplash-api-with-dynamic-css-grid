import React from 'react';
import './ImageList.css';
import { ImageCard } from './ImageCard';

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}></ImageCard>;
    });
    return (
        <div className='ui segment'>
            <div className='image-list'>{images}</div>
        </div>
    );
};

export default ImageList;
