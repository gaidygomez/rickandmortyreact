import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './Layouts/Header'

function Main(props) {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  useEffect(() => {
    searchCharacters()
  }, [])

  function searchCharacters(e) {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setInfo(res.data.info)

        setCharacters(res.data.results)
      })
      .catch(err => console.error(err))  
  }

  console.log(characters, info)
  return (
    <main>
      <Header />
    </main>
  )
}

export default Main