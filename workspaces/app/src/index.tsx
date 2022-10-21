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

import Index from "./pages/landing";
import Login from './pages/admin-panel/login';
import Admin from './pages/admin-panel/adminPanel'
import Register from './pages/admin-panel/register';
import Devices from "./pages/admin-panel/devices";
import Statistics from "./pages/admin-panel/statistics";
import Error from "./pages/ErrorPage";

import reportWebVitals from './reportWebVitals';
import AppOutlet from './layout/AppOutlet';
import {Route} from "./router";
import {initDB} from "react-indexed-db";
import {DBConfig} from "./devtool/DBConfig";

initDB(DBConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// {/*http://localhost:5173/admin/devices*/}
/*
    {/*
    <React.StrictMode>
        <Router>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path='login' element={<Login/>} />
                <Route path={"admin"}>
                    <Route element={<AppOutlet/>} >
                        <Route index element={<Admin/>} id={"admin_index"} />
                        <Route path="devices" element={<Devices/>} id={"admin_devices"}/>
                    </Route>
                </Route>

                <Route path={'register'} element={<Register/>}/>
                <Route path={'*'} element={<Error/>}/>
            </Routes>
            <Outlet/>
        </Router>
    </React.StrictMode>
*/

const App = () => {
    return <>
        <React.StrictMode>
            <RouterProvider router={Route} />
        </React.StrictMode>
    </>
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
