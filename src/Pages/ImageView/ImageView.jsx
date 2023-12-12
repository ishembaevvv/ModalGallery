import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../data';
import Image from '../../Styles/Image/Image';

export default function ImageView() {
  let { id } = useParams();
  let image = data[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1>{image.title}</h1>
      <Image color={image.color} />
      <Link to='/gallery'>
        Close
      </Link>
    </div>
  )
}
