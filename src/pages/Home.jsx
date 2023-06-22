import React from 'react'
import Image from 'react-bootstrap/Image';
import Produto from '../components/Produtos';


const Home = () => {
    return (
        <>
            <Image src="src/images/RE4.jpg" fluid />
            <div className='d-flex flex-wrap'>
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </div>  
        </>
    )
}

export default Home