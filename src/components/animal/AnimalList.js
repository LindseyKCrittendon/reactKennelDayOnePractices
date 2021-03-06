import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        };

       

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animals) => {
            this.setState({
                animals: animals
            })
        })
    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
           <> <section className="section-content">
             <button type="button"
             className="btn"
             onClick={() => {this.props.history.push("/animals/new")}}>
             Admit Animal
             </button>

             <button
             onClick={()=> {this.props.history.push("/employees/2")}}>
                 surprise
                 </button>
            </section>
            <div className="container-cards">
                {this.state.animals.map((currentAnimalInLoop) => {
                console.log("this is a current animal in the loop", currentAnimalInLoop)
                return <AnimalCard key={currentAnimalInLoop.id} animalProp = {currentAnimalInLoop} dischargeAnimal = {this.deleteAnimal} />;
    })}
            </div> </>
        )
    }
}

export default AnimalList