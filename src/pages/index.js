import Topbar from "../components/Topbar/index";
import Dashboard from "./Dashboard";
import SingUpPage from "./SingUp.js";
import SingInPage from "./SingIn";
import { useState } from 'react';

export default function Pages() {
    const [pageNumber, SetPageNumber] = useState(0);
    return (
        <>
            <Topbar
                SetPageNumber={SetPageNumber}
            ></Topbar>
            {(pageNumber === 0) ?
                <>
                    <Dashboard></Dashboard>
                </> :
                (pageNumber === 1) ?
                    <SingUpPage
                        SetPageNumber={SetPageNumber}></SingUpPage> :
                    <SingInPage SetPageNumber={SetPageNumber}></SingInPage>
            }

        </>

    );
}
