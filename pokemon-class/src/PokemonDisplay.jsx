import React from "react"

//-- react class needs React.Component to work
export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);
        
        //-- State stores data per component
        this.state = {
            pokemonName: null
        }

    }

    render() {
        return(
            <h2>Pokemon name</h2>
        )
    }
}