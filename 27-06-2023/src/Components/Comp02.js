import { useState } from 'react'
//import myStore from '../Store/Store';
import { useDispatch } from 'react-redux';
import fnaction from '../Action/Action';

function Comp02() {
    const [state2, setState2] = useState("");
    const dispatch = useDispatch();

    const submitData2 = () => {
        // var actionObject = { //create action a seprate file
        //     type: "comp02",
        //     info: state2,
        // }
        //myStore.dispatch(actionObject);
        //dispatch(actionObject);
        dispatch(fnaction("comp02",state2));
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Comp02</h2>
            <input type='text' placeholder='Enter Some Text' onChange={(e) => {
                setState2(e.target.value);
            }} />
            <button onClick={submitData2}>Submit</button>
        </div>
    )
}

export default Comp02