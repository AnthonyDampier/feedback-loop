import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import axios from 'axios';

function ThankYou (){
    const dispatch = useDispatch();
    const history = useHistory();

    const resetFeedback = () => {
        console.log('reset Feedback');
        dispatch({type: 'RESET'})
        history.push('/')
    }

    return(
        <>
            <h1>Thank You!!</h1>
            <button onClick={resetFeedback}>Leave New Feedback</button>
        </>
    )
}
export default ThankYou;