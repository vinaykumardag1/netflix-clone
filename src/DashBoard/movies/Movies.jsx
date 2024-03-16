import React from 'react'
import '../movies/Movies.css'
import image1 from '../mainHomeimages/image1.png'
import image2 from '../mainHomeimages/image2.png'
import image3 from '../mainHomeimages/image3.png'
import image4 from '../mainHomeimages/image4.png'
import img5 from '../mainHomeimages/image5.png'
import img6 from '../mainHomeimages/img6.png'
import img7 from '../mainHomeimages/img7.png'
import img8 from '../mainHomeimages/img8.png'
import img9 from '../mainHomeimages/img9.png'
import img10 from '../mainHomeimages/img10.png'
import img11 from '../mainHomeimages/img11.png'
import img12 from '../mainHomeimages/img12.png'
import img13 from '../mainHomeimages/img13.png'
import img14 from '../mainHomeimages/img14.png'
import img15 from '../mainHomeimages/img15.png'
import img16 from '../mainHomeimages/img16.png'
import img17 from '../mainHomeimages/img17.png'
import img19 from '../mainHomeimages/img19.png'
import img20 from '../mainHomeimages/img20.png'
import img21 from '../mainHomeimages/img21.png'
import img22 from '../mainHomeimages/img22.png'
import img23 from '../mainHomeimages/img23.png'
import img24 from '../mainHomeimages/img24.png'
import img25 from '../mainHomeimages/img25.png'
import img26 from '../mainHomeimages/img26.png'
import img27 from '../mainHomeimages/img27.png'
import img28 from '../mainHomeimages/img28.png'
import sci1 from '../mainHomeimages/sci1.png'
import sci2 from '../mainHomeimages/sci2.png'
import sci3 from '../mainHomeimages/sci3.png'
import sci4 from '../mainHomeimages/sci4.png'
import img29 from '../mainHomeimages/image29.png'
import img30 from '../mainHomeimages/img30.png'
import img31 from '../mainHomeimages/img31.png'
import img32 from '../mainHomeimages/img32.png'



const Movies = () => {
  const images1=[image1,image2,image3,image4]
  const images2=[img5,img6,img7,img8]
  const images3=[img9,img7,image1,image3]
  const images4=[img9,img10,img11,img12]  
  const images5=[img13,img14,img15,img16]
  const images6=[img17,img7,img19,img20]
  const images7=[img21,img22,img23,img24]
  const images8=[sci1,sci2,sci3,sci4]
  const images9=[img25,img26,img27,img28]
  const images10=[img29,img30,img31,img32]
  return (
    <div className='movies-list'>
      <p>Popular on netlfix</p>
      <div className="movie-images">
        {images1.map((item)=>(
          <img src={item} alt="" />
        ))}
      </div>
      <p>Continue watching</p>
      <div className="movie-images">
       {images2.map((item)=>(
        <img src={item} alt='image'/>
       ))}
      </div>
      <p>Trending</p>
      <div className="movie-images">
        {images3.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>New Releases</p>
      <div className="movie-images">
        {images4.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>Anime</p>
      <div className="movie-images">
        {images5.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>Us Tv Drama</p>
      <div className="movie-images">
        {images6.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>Bollywood Movies</p>
      <div className="movie-images">
        {images7.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>TV Sci-Fi & Horror</p>
      <div className="movie-images">
        {images8.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>K-dramas</p>
      <div className="movie-images">
        {images9.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
      <p>Action Movies</p>
      <div className="movie-images">
        {images10.map((item)=>(
          <img src={item} alt='image'/>
        ))}
      </div>
    </div>
  )
}

export default Movies
