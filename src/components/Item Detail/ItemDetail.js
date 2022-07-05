

function ItemDetail ({props, initial, onAdd, unit}) {
    const productFetch = props.productDetail[0];
    const [units, setUnits] = useState(0);
    const [disableBtnPlus, setDisableBtnPlus] = useState(false);
    const [disableBtnLess, setDisableBtnLess] = useState(true);
    console.log(props.productDetail)

    const addProduct = () => {
        setDisableBtnLess(false)
        if (units === (productFetch.stock-1)) {
            setDisableBtnPlus(true) 
        }
        setUnits(units + 1)
    }

    const lessProduct = () => {
        setDisableBtnPlus(false)
        if(units ===productFetch.initial) {
            setDisableBtnLess(true)
        }
        setUnits(units - 1)
    }

    return (
        <>
            <Card key={productFetch.id} className="text-center" style={{ width:'18rem' }}>
                <CardImg variant="top" src={require(`../img/1.png`)}/>
                <Card.Body>
                    <Card.Title>Producto{props.name}</Card.Title>
                    <Card.Text>{props.description}Esto es una descripción</Card.Text>
                    <Card.Text>{props.price}</Card.Text>
                    <ItemCount initial={1} stock={5}/>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail;