import Topbar from "../components/Topbar/index";
import Dashboard from "./Dashboard";
import SingUpPage from "./SingUp.js";
import SingInPage from "./SingIn";
import PageSwap from "../components/pageSwap";
import ProdudctList from "../pages/ProductList"
import { useState } from 'react';
import styled from "styled-components";
import useToken from '../hooks/useToken';

export default function Pages() {
    const token = useToken();
    const [pageNumber, SetPageNumber] = useState(0);
    if(pageNumber === 0){
        return (
        <Container>
            <Topbar SetPageNumber={SetPageNumber} />
            <Dashboard />
            <PageSwap token={token} SetPageNumber={SetPageNumber} />
        </Container>
        )
    }
    if(pageNumber === 1){
        return (
        <Container>
            <Topbar SetPageNumber={SetPageNumber} />
            <SingUpPage SetPageNumber={SetPageNumber} />
        </Container>
        )
    }
    if(pageNumber === 2){
        return (
        <Container>
            <Topbar SetPageNumber={SetPageNumber} />
            <SingInPage SetPageNumber={SetPageNumber} />
        </Container>
        )
    }
    if(pageNumber === 3){
        return (
            <Container>
                <Topbar SetPageNumber={SetPageNumber} />
                <ProdudctList />
                <PageSwap token={token} SetPageNumber={SetPageNumber} />
            </Container>
        )
    }
}
const Container = styled.div`
    position:relative;
`;
