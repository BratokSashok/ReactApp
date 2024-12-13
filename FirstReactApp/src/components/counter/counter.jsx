import React, {useState} from "react";
import "./Counter.css";
import MyButton from "../common/buttonComponents/ButtonComponent";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
                <h2>{count} bad thougts in my head</h2>
            {/* Reset count to its previous value - 1 */}
                <MyButton 
                onClick={() => setCount(count - 1)}
                
                >
                -
                </MyButton>
                
                {/* Reset count to its previous value + 1 */}
                <MyButton 
                onClick={() => setCount(count + 1)}>
                +
                </MyButton>
                <h3>'+' or '-' to increase\decrease</h3>
            {/* <h3>Count them and submit ur answer ↓ here</h3>
            <Button
            onClick={()=> setCount(count + 999)}>Sumbit
            </Button> */}
        </div>
    )
}

export default Counter;