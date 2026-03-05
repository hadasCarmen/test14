import { useNavigate, useParams } from 'react-router'
import useMovieStore from '../store/movieStore.js'
import './oneMovie.css'
export default function OneMovie() {

  const {id}=useParams()
  const navigate=useNavigate()
  const {getMovieById} =useMovieStore()
  const movieCurrent=getMovieById(id)

 


  return (
    <>
    <button onClick={()=>navigate("/")}>back home</button>
    <div className='onePictureBig'>
      <img src={movieCurrent.Poster} alt="" /> 
      {movieCurrent.Title}<br />
      {movieCurrent.Year}<br />
      {movieCurrent.Runtime}<br />
      {movieCurrent.imdbRating}<br />
      {movieCurrent.Genre}<br />
      {movieCurrent.Plot}<br />
      <button>choose seat</button>
    
    </div>
    </>
  )
}
