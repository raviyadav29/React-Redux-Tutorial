import { useState } from 'react'
import myStore from '../Store/Store';

function Comp01() {
    const [state, setState] = useState("");

    const submitData = () => {
        var actionObject = {
            type: "comp01",
            info: state,
        }
        myStore.dispatch(actionObject);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Comp01</h2>
            <input type='text' placeholder='Enter Some Text' onChange={(e) => {
                setState(e.target.value);
            }} />
            <button onClick={submitData}>Submit</button>
        </div>
    )
}

export default Comp01