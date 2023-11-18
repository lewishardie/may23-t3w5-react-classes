import React from "react"

//-- react class needs React.Component to work
export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);
        this.name = "Pikachu"
        
        //-- State stores data per component
        this.state = {
            pokemonName: null
        }
    }

    componentDidMount(){
        this.name = "Bulbasaur";
        console.log(this.name);
        console.log("Did mount triggers when...")
    }

    componentWillUnmount(){
        console.log("Will unmount triggers when...")
    }

    render() {
        return(
            <h2>Pokemon {this.name}</h2>
        )
    }
}