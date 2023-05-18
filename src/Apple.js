import React from 'react';
import {useNavigate} from 'react-router-dom';

const Apple = () =>{
    const navigation = useNavigate();
    const clickFunction = () =>{
        navigation("/");
    }
    return(
    <>
    
    <div>
        Apple
    </div>
    <button onClick={clickFunction}>Navigate</button></>
    )
}

export default Apple;