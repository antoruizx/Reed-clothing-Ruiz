import { Link } from 'react-router-dom';

function Card2(props) {
    return(
        <div>
            <Link to={'data.json'}><h2>{props.name}</h2>
            <h4>{props.description}</h4></Link>
            
            <p>{props.price}</p>
        </div>
    )
}

export default Card2;