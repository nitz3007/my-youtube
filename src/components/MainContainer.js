import React from 'react';
import ButtonList from './ButtonList';
// import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    // const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div>
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;
