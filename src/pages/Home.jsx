import React from 'react'
import Image from 'react-bootstrap/Image';
import Produtos from '../components/Produtos';


const Home = () => {
    return (
        <>
            <Image src="src/images/RE4.jpg" fluid />
            <Produtos />
        </>
    )
}

export default Home