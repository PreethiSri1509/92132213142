import {log} from './middleware/log';
import React from 'react';
function App(){
    React.useEffect(()=>{
        log("frontend","info","auth","React App Loaded");
    },[]);
    return(
        <div>
            <h1>React URL Shortener</h1>
        </div>
    );
} export default App;
