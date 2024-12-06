import PropTypes from "prop-types";
import "./MyComponent.css" ; 

const MyComponent = (props) => {
    const myProps =  {
        title : "Title by default",
        description: "Description by default"
        };

    return (
        <div clasName="my-component-container">
            <h1 className="my-component-title">{myProps.title}</h1>
            <p className="my-component-description">{myProps.description}</p>
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
MyComponent.PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default MyComponent;