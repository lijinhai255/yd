import React from 'react';
import axios from "axios";

class About extends React.Component{
    state ={
      data:""
    }
    componentDidMount(){
      axios.get("http://localhost:3001/getData").then(({data})=>{
        console.log(data,"data")
        this.setState({
          data:data.data
        })
      })
    }
      
    render(){
      return <>
      <h1>about</h1>
      <h2>{this.state.data}</h2>
      </>;
    }
    
}

export default About;  