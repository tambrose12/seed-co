
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function SeedCard({ seed, onAdd }) {


    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={seed.image} alt={seed.name} />
            <Card.Body>
                <Card.Title>{seed.name}</Card.Title>
                <Card.Text>
                    Price: ${seed.price.toFixed(2)}
                </Card.Text>
                <Button variant="outline-success" onClick={() => onAdd(seed)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}