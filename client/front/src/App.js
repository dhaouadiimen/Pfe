import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Messenger from './pages/Messenger/Messenger';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
    //const { account } = useContext(AuthContext);
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { <Messenger/> }
        /> <
        /Routes> <
        /BrowserRouter>
    );
};

export default App;