
//main
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/header";
import Body from "./component/body";

function    Githubprofile(){
    return (
        <>
           <Header></Header>
           <Body></Body>
           
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Githubprofile/>)