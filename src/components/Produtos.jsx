import React from 'react'
import { Button, Card } from 'react-bootstrap'

class Produtos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            titulo: '',
            resumo: '',
            preço: 0,
            jogos: []
        }
    }

    procurarProduto = () => {
        fetch('http://localhost:3000/jogos')
            .then(res => res.json())
            .then(data => {
                this.setState({ jogos: data })
            })
    }

    componentDidMount() {
        this.procurarProduto()
    }

    render() {
        return (
            <div className='d-flex flex-wrap'>
                {
                    this.state.jogos.map((jogo) =>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="src/images/RE4.jpg" />
                            <Card.Body>
                                <Card.Title>{jogo.titulo}</Card.Title>
                                <Card.Text>{jogo.resumo}</Card.Text>
                                <Card.Text>{jogo.preço}</Card.Text>
                                <Button variant="primary">Compre</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        )
    }
}
export default Produtos