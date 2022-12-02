import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function questionTwo(){
    const dispatch = useDispatch();
    const history = useHistory();

    const questionStore = useSelector((store => store.questions))
    const answerStore = useSelector((store => store.answers))

    const [answer, setAnswer] = useState(answerStore.answerTwo ? answerStore.answerTwo : '')


    const handleInputChange = (event) => {
        console.log('in handeInputChange',event.target.value);
        setAnswer(event.target.value);
        console.log(answerStore);
        console.log(questionStore);
    }

    const handleNextClick = () => {
        console.log('in handleNextClick');
        if (answer !== ''){
            dispatch({type: 'ADD_Q2_ANSWER', payload: answer})
            history.push('/3');
        } else {
            alert('Please, fill input');
        }
    }

    return<>
        <h1>How well are you understanding the content?</h1>
        <div>
            <div>
                <h3>Understanding?</h3>
                <input 
                    type="number"
                    onChange={handleInputChange}
                    value={answer}
                />
            </div>
            <button 
            onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    </>
}

export default questionTwo;