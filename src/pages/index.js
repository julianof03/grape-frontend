import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import SingUpPage from "./SingUp.js";
import SingInPage from "./SingIn/Singin";
import { useState } from 'react';
import styled from "styled-components";

export default function Pages() {
    const [pageNumber, SetPageNumber] = useState(0);
    return (
        <>
            {
                (pageNumber === 0)? 
                <>
                    <Topbar
                    SetPageNumber = {SetPageNumber}
                    ></Topbar>
                    <Dashboard></Dashboard>
                </> : 
                 (pageNumber === 1)?  
                <SingUpPage
                SetPageNumber = {SetPageNumber}></SingUpPage>:
                <SingInPage SetPageNumber = {SetPageNumber}></SingInPage>
            }
            
        </>
    
    );
}
