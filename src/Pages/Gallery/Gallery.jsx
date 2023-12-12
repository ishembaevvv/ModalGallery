import React from 'react'
import data from '../../data'
import { Link, useLocation } from 'react-router-dom'
import Thumbnail from '../../Styles/Thumbnail/Thumbnail';

export default function Gallery() {
  let location = useLocation();

  return (
    <div>
        {
          data.map(i => (
            <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              state: {background: location}
            }}>
              <Thumbnail color={i.color} />
              <p>{i.title}</p>
            </Link>
          ))
        }
        <Link to='/'>Back Home</Link>
    </div>

  )
}
