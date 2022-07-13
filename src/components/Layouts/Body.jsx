import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'

export default function Body(props) {
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

  return (
    <div className="flex justify-around px-5 flex-wrap w-[1428px] mx-auto">
      {characters.map(character =>
        <Card key={character.id} character={character} />
      )}
    </div>
  )
}