import React from 'react'
import Image from 'react-bootstrap/Image';
import Produtos from '../components/Produtos';
import './Home.css'

const Home = () => {
    return (
        <>
            <Image src="src/images/banner.jpg" style={{width: '100%', height: '40vh'}} />
            <div>
                <Produtos />
            </div>
        </>
    )
}

export default Home