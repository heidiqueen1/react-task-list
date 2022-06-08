import React from 'react'
import heidi from '../imagenes/heidi.jpg';

export default function Profile()  {
  return (
    <div className='profile'>
      <div>
        <img src={heidi}
        className='heidi-profile'  />

      </div>
      <h2>I am the Author</h2>
      <h2>my name is HEIDI ALBERTINA SANCHEZ</h2>
      <h3>FRONTEND DEVELOPER REACT-JS</h3>
      <p>
      Technocreative professional with experience in technology start-up. Passion for projects with
purpose, I have worked on the coordination and implementation and measurement of impact of
social projects.
Ease of working in a team with agile methodologies. Mastery of platforms for work
remote.
I am flexible, organized, t-shaped talent or multidisciplinary profile.


      </p>
    </div>
  )
}


