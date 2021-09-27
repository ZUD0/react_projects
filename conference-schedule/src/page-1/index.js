import React from 'react';
import Counter from './Counter';
import Main from './Main';
import Nav from './Nav';
import './style.css'

const MainPage = () => {
    return (
        <div className="mainPage">
            <Nav />
            <Main />
            <Counter />
            {/* <CountDown />
            <Footer/> */}
        </div>
    )
}

export default MainPage
