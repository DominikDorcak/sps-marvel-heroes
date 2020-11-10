import React from 'react'
import { Link } from 'react-router-dom';
import API from '../services/API';
import { Character } from '../services/responseInterfaces';
import { Footer } from './Footer';

interface HeroesProps {

}

interface HeroesState {
    data: Character[]
    attributionText: string
    query:string
}

export class Heroes extends React.Component<HeroesProps, HeroesState>{
    constructor(props: HeroesProps) {
        super(props)
        this.state = { data: [], attributionText: "", query: "" }

    }

    // componentDidMount() {
    //     API.getHeroes(this.state.query).then((response) => {
    //         this.setState((oldState) => {
    //             return { data: response, attributionText: API.attributionText }
    //         })
    //     })
    // }

    searchHeroes = (e: React.FormEvent<HTMLInputElement>) => {
    
        API.getHeroes(e.currentTarget.value).then((response) => {
            this.setState((oldState) => {
                return { data: response, attributionText: API.attributionText }
            })
        },
        (err) => {
            this.setState((oldState) => {
                return { data: [{name: "No data found"}], attributionText: API.attributionText }
            })
        })
    }

    render() {
        return <div>
            <h3>Search for your marvel hero</h3>
            <input type="text" placeholder="place name of your hero here" onChange={this.searchHeroes} ></input> 
            <br></br>           
            {this.state.data.map(
                (item) => {
                return item.id ? <div><Link to={"/hero/" + item.id}>{item.name}</Link></div> : <div>{item.name}</div>
            })}
            <br/>
            <Footer text={this.state.attributionText}/>

        </div>
    }


}