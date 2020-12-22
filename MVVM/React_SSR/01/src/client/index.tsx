import React from "react"

import ReactDOM from "react-dom"

// 引入App
import App from "../shared/App";

// 引入 路由
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


//创建provider
import {Provider} from "react-redux";
import {createClientStore} from "../shared/store/index"

ReactDOM.hydrate(<Provider store={createClientStore()}><Router><App/></Router></Provider>,document.getElementById("root"))