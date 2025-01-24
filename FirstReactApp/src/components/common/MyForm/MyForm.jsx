import "./FormComponent.css"

const MyForm = ({}) => {
    const { register } = useForm();

    function onSumbit() {}

    return (
        <div style={styles.container}>
            <h4>Signup</h4>
            <form onSubmit={onSumbit}>
                <input name="username" ref={register} placeholder="Username" style={styles.input} />
                <input name="email" ref={register} placeholder="Email" style={styles.input} />
                <input name="password" ref={register} placeholder="Password" style={styles.input} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default MyForm;
    