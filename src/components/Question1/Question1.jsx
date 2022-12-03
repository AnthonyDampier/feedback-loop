import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function questionOne(){
    const dispatch = useDispatch();
    const history = useHistory();

    const questionStore = useSelector((store => store.questions))
    const answerStore = useSelector((store => store.answers))

    const [answer, setAnswer] = useState(answerStore.answerOne ? answerStore.answerOne : '')


    const handleInputChange = (event) => {
        console.log('in handeInputChange',event.target.value);
        setAnswer(event.target.value);
        console.log(answerStore);
        console.log(questionStore);
    }

    const handleNextClick = () => {
        console.log('in handleNextClick');
        if (answer !== ''){
            dispatch({type: 'ADD_Q1_ANSWER', payload: answer})
            history.push('/2');
        } else {
            alert('Please, fill input');
        }
    }

    return(
    < div className="card">
        <h1>How are you feeling today?</h1>
        <div>
            <div>
                <h3>Feeling?</h3>
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
    </div>
    )
}

export default questionOne;