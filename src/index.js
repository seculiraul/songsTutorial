import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore} from 'redux'
import App from "./components/App";
import reducers from "./reducers";


const rootElement = document.querySelector('#root');

const root = createRoot(rootElement);

root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    )