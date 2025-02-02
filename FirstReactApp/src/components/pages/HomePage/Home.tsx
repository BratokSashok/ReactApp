//import Form from "../common/MyForm/MyForm";

import { FC } from "react";

interface HomeProps {

}

const  Home: FC<HomeProps> = () => {
    return(
        <div className="home">
            <h2>Home page</h2>
            {/* <Form /> */}
        </div>
    )
}

export default Home;