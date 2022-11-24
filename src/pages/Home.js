import Cards from '../components/Card/Cards';
import React from "react"

const Home = (props) => {
    return(
        <div>
        {
            Object.entries(props.heroes).map(([key, value]) => {
            return(
                <Cards key={key} heroe={value}></Cards>
                        )
                    }
                )
            }
        </div>
    )
}

export default Home;