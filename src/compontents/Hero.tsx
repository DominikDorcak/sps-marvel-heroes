import React from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/API'
import { Character } from '../services/responseInterfaces'
import { Footer } from './Footer'

interface HeroProps {
       match:{params:{id:number}} 
}
interface HeroState{
        hero: Character
}

class HeroData implements Character{
    thumbnail = {path:"",extension: ""}
}

export class Hero extends React.Component<HeroProps,HeroState>{
    

    constructor(props:HeroProps){
        super(props)
        this. state = {hero:new HeroData()}
    }

    componentDidMount(){
        API.getHeroById(this.props.match.params.id).then((response) => {
            this.setState((oldState) => {
                return { hero: response }
            })
        })
    }
        
        

    render(){
        return <div>
            <h2>{this.state.hero.name}</h2>
            <p>{this.state.hero.description}</p>
             <img src={this.state.hero!.thumbnail!.path +"."+  this.state.hero!.thumbnail!.extension} alt={this.state.hero.name}></img>
             <Footer text={API.attributionText}></Footer>
        </div>
    }
}