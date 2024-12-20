import React, {useState} from "react";
import "./Counter.css";
import MyButton from "../common/buttonComponents/ButtonComponent";
import { useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { console.log('Count has changed!')}, [count]);

    return(
        <div className="MyCounter">
                <h2>Count is : {count}</h2>
            <div>

                {/* Reset count to its previous value + 1 */}
                <MyButton 
                onClick={() => setCount(count + 1)}>
                Increase by 1
                </MyButton>

                {/* Reset count to its previous value - 1 */}
                <MyButton 
                onClick={() => setCount(count - 1)}
                >
                Decrease by 1
                </MyButton>
                
                                
                {/* Reset count to its previous value + 1 */}
                <MyButton 
                onClick={() => setCount(count + 10)}>
                Increase by 10
                </MyButton>

                <MyButton 
                onClick={() => setCount(count - 10)}
                >
                Decrease by 10
                </MyButton>

            </div>

                <MyButton
                onClick={() => setCount(0)}>
                Reset counter
                </MyButton>

                {/*<h3>'+' or '-' to increase\decrease</h3> */}
        </div>
    )
}

export default Counter;