import { useEffect, useState } from 'react'
import { useParams, setCardFetch } from 'react-router-dom'


function Detail () {

    const params = useParams ()
    const [cardFetch, setCardsFetch] = useState([])

    const fetchCard = () => {
        fetch(`data.json`)
        .filter( i => i.id ===1 )
        .then((response) => response.json())
        .then((data) => setCardsFetch(data))
    }

    useEffect(() => {
        fetchCard()
    }, [])

    return (
        <>
        {cardFetch.leght !==0 && <h1>Producto: {cardFetch[0].name}</h1>}
        </>
    )
}

export default Detail;