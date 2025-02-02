import MyComponent from "../myComponents/MyComponent";
import "./PositiveSummary.css"

const PositiveSummary = () => {

// Для кажжого элеме нта массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
    const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10];

     var myPositiveSumResult = arr.reduce(function(sum, current) {
        if(current > 0){
            return sum + current;
        }else{
            return sum;
        }
        }, 0);

    return(
       <>
       <div>
        <MyComponent 
            title="Positive Summary Function"
            description = {myPositiveSumResult}
        />
       </div>
       </>
    )
}

export default PositiveSummary;