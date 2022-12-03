import {useEffect, useState} from 'react';
import axios from 'axios';
import './Admin.css'

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
            // TODO: Make axios.delete path for item by id
        }
    }

    // TODO: flag an item for further review

    return(
        <>
            <table>
                <thead><tr><th>Feeling</th><th>Comprehension</th><th>Support</th><th>Comments</th><th>Delete</th></tr></thead>
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
                        <tr></tr>
                </tbody>
            </table>
        </>
    )
}
export default ThankYou;