import {useEffect, useState} from 'react';
import axios from 'axios';

function ThankYou (){
    const [feedback, setFeedback] = useState([]);

    const fetchFeedback = () => {
        axios.get('./answers')
        .then((response) => {
            console.log(response.data)
            setFeedback(response.data);
        })
    }

    useEffect(() => {
        fetchFeedback();
    }, []);

    const handleDelete = () => {
        console.log('delete clicked');
        if (confirm('Are you sure you want delete this feedback!')){
            console.log('delete item');
        }
    }

    return(
        <>
            <table>
                <thead><tr><td>Feeling</td><td>Comprehension</td><td>Support</td><td>Comments</td><td>Delete</td></tr></thead>
                <tbody>
                    {feedback.map(item => 
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td onClick={handleDelete}>🗑</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </>
    )
}
export default ThankYou;