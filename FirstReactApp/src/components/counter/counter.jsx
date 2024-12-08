import React, {useState} from "react";
import "./counter.css";
import Button from "../common/buttonComponents/ButtonComponent";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
                <h2>{count} good memes with cats</h2>
            {/* Reset count to its previous value - 1 */}
                <Button 
                onClick={() => setCount(count - 1)}>
                -
                </Button>

                {/* Reset count to its previous value + 1 */}
                <Button 
                onClick={() => setCount(count + 1)}>
                +
                </Button>
                <h3>'+' or '-' to increase\decrease</h3>
            {/* <h3>Count them and submit ur answer ↓ here</h3>
            <Button
            onClick={()=> setCount(count + 999)}>Sumbit
            </Button> */}
        </div>
    )
}

export default Counter;