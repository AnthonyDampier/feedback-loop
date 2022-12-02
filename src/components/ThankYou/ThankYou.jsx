import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import axios from 'axios';

function ThankYou (){
    const dispatch = useDispatch();
    const history = useHistory();

    const dataToSend = useSelector(state => state.answers);

    useEffect(() =>{
        console.log(dataToSend);
        if (dataToSend.answerOne && dataToSend.answerTwo && dataToSend.answerThree && dataToSend.answerFour){
            console.log('Data prepared for database');

            // post data to DB
            axios.post('./answers', dataToSend)
            .then(response => {
                console.log('Post successful');
            })
            .catch( error => {
                console.log('Failed to post feedback answers');
            })
        }
    }, []);

    const resetFeedback = () => {
        console.log('reset Feedback');
        dispatch({type: 'RESET'})
        history.push('/1')
    }

    return(
        <>
            <h1>Thank You!!</h1>
            <button onClick={resetFeedback}>Leave New Feedback</button>
        </>
    )
}
export default ThankYou;