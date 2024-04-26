import React, { useEffect } from 'react';
import ButtonList from './ButtonList';
// import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../utils/appSlice';

const MainContainer = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    // const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div className='flex flex-col mx-auto items-center'>
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;
