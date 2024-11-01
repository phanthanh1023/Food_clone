import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import FooDisplay from '../../components/Oder/FoodDisplay/FooDisplay';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Menu ></Menu>
            <FooDisplay></FooDisplay>
            <Footer></Footer>
        </div>
    );
};

export default Home;