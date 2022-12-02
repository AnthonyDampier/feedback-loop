import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import axios from 'axios';

function Review (){
    const dispatch = useDispatch();
    const history = useHistory();

    const answers = useSelector(state => state.answers);

    const completeFeedback = () =>{
        console.log(answers);
        if (answers.answerOne && answers.answerTwo && answers.answerThree && answers.answerFour){
            console.log('Answers prepared for database');

            // post data to DB
            axios.post('./answers', answers)
            .then(response => {
                console.log('Post successful');
                resetFeedback();
            })
            .catch( error => {
                console.log('Failed to post feedback answers');
            })
        }
    };

    const resetFeedback = () => {
        console.log('reset Feedback');
        dispatch({type: 'RESET'})
        history.push('/6')
    }

    return(
        <>
            <h1>Review Your Feedback</h1>
            <p>Feeling {answers.answerOne}</p>
            <p>Understanding: {answers.answerTwo}</p>
            <p>Support: {answers.answerThree}</p>
            <p>Comments: {answers.answerFour}</p>
            <button onClick={completeFeedback}>Leave New Feedback</button>
        </>
    )
}
export default Review;