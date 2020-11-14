import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux"

import App from "./components/App";
import reducers from "./reducers"
import thunk from 'redux-thunk'


function composeEnhancers(applyMiddleware) {
    return undefined;
}

const store =createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)