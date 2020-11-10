import React from 'react';
import API from '../services/API';
import { Footer } from './Footer';

interface helloProps {
  name: string
}

interface helloState {
  data: any
  time: number
  attributionText :string
}


export class Welcome extends React.Component<helloProps, helloState>{
  constructor(props: helloProps) {
    super(props)
    this.state = { data: [], time: 0,attributionText: '' }
  }

  componentDidMount() {

  }


  render() {
    return <div>
      <h2>Marvel heroes</h2>
    </div>
  }
}



export function Hello(props: helloProps) {
  return (
    <>
      <div>
        Hello, {props.name}
      </div>
      <div>
      </div>
    </>
  );
}