import {IMG_CDN_URL} from "../utils/constants"
const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 m-2 overflow-hidden" >
        <img alt='card_img' className="w-full h-full object-cover" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard