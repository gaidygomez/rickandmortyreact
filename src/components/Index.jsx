import title from '../assets/img/title.png'
import { Link } from 'react-router-dom'

function Index(props) {

    return (
        <header className="App-header">
            <div>
                <img src={title} className="" alt="title" width="600" height="150"/>
                <div>
                    <h2>Bienvenido a Rick and Morty</h2>
                </div>
                <div className="mt-4">
                    <Link to="/home" className="continue">Continuar</Link>
                </div>
            </div>
        </header>
    )
}

export default Index