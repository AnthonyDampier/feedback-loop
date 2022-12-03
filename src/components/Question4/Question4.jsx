import { useSelector, useDispatch, useStore } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function questionFour(){
    const dispatch = useDispatch();
    const history = useHistory();

    const questionStore = useSelector((store => store.questions))
    const answerStore = useSelector((store => store.answers))
    const userStore = useSelector((store => store.userInfo))


    const [answer, setAnswer] = useState(answerStore.answerFour ? answerStore.answerFour : '')
    const [userName, setName] = useState(userStore.name ? userStore.name: '')

    const handleInputChange = (event) => {
        console.log('in handelInputChange',event.target.value);
        setAnswer(event.target.value);
        console.log(answerStore);
        console.log(questionStore);
    }

    const handleNextClick = () => {
        console.log('in handleNextClick');
        if (answer !== ''){
            dispatch({type: 'ADD_Q4_ANSWER', payload: answer})
            history.push('/5');
        } else {
            alert('Please, fill input');
        }
    }

    return(
    <div className="card">
        <h1>How well are you being supported?</h1>
        <div>
            <div>
                <h3>Thanks for the help{' ' +userName}!</h3>
                <input 
                    type="text"
                    onChange={handleInputChange}
                    value={answer}
                />
            </div>
            <button 
            onClick={handleNextClick}
            >
                SUBMIT ✅
            </button>
        </div>
    </div>
    )
}

export default questionFour;