import MyComponent from "../myComponents/MyComponent";
import "./SummaryFunction.css"

const SummaryFunction = () => {

// Для кажжого элеме нта массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
    const arr = [1, 2, 3, 4, 5];

     var mySumResult = arr.reduce(function(sum, current) {
            return sum + current;
        }, 0);

    return(
       <>
       <div>
        <MyComponent 
            title="Summary Function"
            description = {mySumResult}
        />
       </div>
       </>
    )
}

export default SummaryFunction;

