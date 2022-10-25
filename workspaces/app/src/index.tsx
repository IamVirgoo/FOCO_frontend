import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import './styles/index.sass';
import './styles/login.sass';

import './styles/header.sass';
import './styles/footer.sass';
import './styles/sidebar.sass';
import './styles/card.sass';
import './styles/deviceCard.sass';
import './styles/error.sass';

import { appStore } from "./stores/appStore";

import reportWebVitals from './reportWebVitals';
import {Route} from "./router";
import {initDB} from "react-indexed-db";
import {DBConfig} from "./devtool/DBConfig";
import { Provider } from 'react-redux';

initDB(DBConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const App = () => {
    return <>
        <React.StrictMode>
            <Provider store={appStore}>
                <RouterProvider router={Route} />
            </Provider>
        </React.StrictMode>
    </>
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
