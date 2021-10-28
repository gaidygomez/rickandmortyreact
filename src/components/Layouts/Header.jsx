import { Link } from 'react-router-dom'
import title from '../../assets/img/title.png'

function Header (props) {

  function searchCharacters(e) {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setInfo(res.data.info)

        setCharacters(res.data.results)
      })
      .catch(err => console.error(err))  
  }
  
  return (
    <header>
      <div className="main">
        <Link to="/">
          <div className="absolute top-6 left-5 z-10">
            <i className="fas fa-home text-white text-xl"></i>
          </div>
        </Link>
        <div className="mt-1 relative rounded-md shadow-sm p-10 flex justify-center flex-col">
          <div className="flex justify-center mb-8">
            <img src={title} alt="Title" width="400" height="250" className="text-center"/>
          </div>
          <div className="mt-8">
            <input onKeyUp={searchCharacters} type="text" placeholder="Search Character..." className="
              focus:ring-white-500 
              focus:border-white-500 
              w-1/2 px-2 py-3 bg-inputRM 
              bg-opacity-80 sm:text-sm 
              border-rickMorty-300 rounded-md
            "/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header