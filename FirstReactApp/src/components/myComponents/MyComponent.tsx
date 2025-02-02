import PropTypes from "prop-types";
import Counter from "../counter/Counter";
import "./MyComponent.css" ; 

const MyComponent = ({title, description}) => {
    const myProps =  {
        title : "Title by default",
        description: "Description by default"
        };

    return (
        <div className="my-component-container">
            <h1 className="my-component-title">{title}</h1>
            <p className="my-component-description">{description}</p>
        </div>
    );
};
/*
export default function MyComponent(){
    return (
        <div>
            <h1>(props.title)</h1>
            <p>(props.description)</p>
        </div>
    );
}
*/
// MyComponent.propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// }

export default MyComponent;