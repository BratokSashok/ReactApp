import "./ButtonComponent.css" ; 


const MyButton = ({ onClick, children }) => {
    return(
        <button onClick={onClick}
            className="my_button"
        >
            {children}
        </button>
    )
};

export default MyButton;
