import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function questionThree(){
    const dispatch = useDispatch();
    const history = useHistory();

    const questionStore = useSelector((store => store.questions))
    const answerStore = useSelector((store => store.answers))

    const [answer, setAnswer] = useState(answerStore.answerThree ? answerStore.answerThree : '')


    const handleInputChange = (event) => {
        console.log('in handeInputChange',event.target.value);
        setAnswer(event.target.value);
        console.log(answerStore);
        console.log(questionStore);
    }

    const handleNextClick = () => {
        console.log('in handleNextClick');
        if (answer !== ''){
            dispatch({type: 'ADD_Q3_ANSWER', payload: answer})
            history.push('/4');
        } else {
            alert('Please, fill input');
        }
    }

    return(
    <div className="card">
        <h1>How well are you being supported?</h1>
        <div>
            <div>
                {/* <h3>Support</h3> */}
                <input 
                    type="number"
                    onChange={handleInputChange}
                    value={answer}
                />
            </div>
            <button 
            onClick={handleNextClick}
            >
            Next <ArrowForwardIcon fontSize='large'/>
            </button>
        </div>
    </div>
    )
}

export default questionThree;