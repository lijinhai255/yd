import React from 'react';
import axios from "axios";

import { connect } from "react-redux";
import { Dispatch } from 'redux';

interface IProps {
  data: string;
  dispatch: Dispatch;
}

class Home extends React.Component{
    state ={
      data:""
    }
    static getSomeData(store){
      console.log(store,"store")
      return new Promise(resolve =>{
        axios.get("http://localhost:3001/getData").then(({data})=>{
          console.log(data.data)
          store.dispatch({
            type: "CHANGE_HOME_DATA",
            payload: {
              data: data.data,
            },
          });
          resolve({data:data.data});
      })
      })

    }
    componentDidMount(){
      console.log(1212121)
      this.setState({
        data:this.props.data
      })
      
    }
      
    render(){
      return<>
      <h1>Home</h1>
       <h2>{this.props.data}</h2>
       <p>12121</p>
       <h2>{this.state.data}</h2>
      </>;
    }
    
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(Home);  