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

    async componentDidMount(){
        console.log("Did mount triggers after the component was rendered");

        //-- Generate a random number between 1 and 1017 (number of pokemon ??)
        function getRandomPokemonId(){
            return Math.floor(Math.random() * 1017) + 1;
        }
        //-- Retreieve the API data
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).catch(error => {
            //-- No response from API
            throw new Error("API faliure");
        });

        //-- If response but data not found
        if (response.status === "404") {
            throw new Error("API did not have data for the requested ID")
        };

        //-- Convert the response into usable JSON
        let data = await response.json().catch(error => {
            //-- response, with data, but not in JSON format
            throw new Error ("API did not return valid JSON");
        });
        console.log(data.name);
        this.setState({ pokemonName : data.name })


        console.log("Did mount triggers when...")
    }

    componentWillUnmount(){
        console.log("Will unmount triggers when...")
    }

    render() {
        if (this.state.pokemonName){
            return (
                <h2>{this.state.pokemonName}</h2>
            )
        } else {
            return (
                <h2>Loading...</h2>
            )
        }
    }
}