import styled from 'styled-components';

export default function PageSwap({
    token,
    SetPageNumber
}) {

return (
    <>
    {token?  
    <>
        <PageSwape1 onClick={()=> SetPageNumber(0)}>(</PageSwape1>
        <PageSwape2 onClick={()=> SetPageNumber(3)}>)</PageSwape2>
    </>   
    :  "" }
    </>
);
}
const PageSwape1 = styled.div`
    position:absolute;
    top:45vh;
    width:15%;
    height:20vh;
    font-size:25px;
    padding-left:20px;
    color:#A17dee;
    display:flex;
    justify-content:left;
    align-items:center;
    :hover{
        font-size:34px;
        padding-right:20px;
    }
`;
const PageSwape2 = styled.div`
    position:absolute;
    top:45vh;
    width:15%;
    height:20vh;
    right:0px;
    font-size:25px;
    padding-right:20px;
    color:#A17dee;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
        font-size:34px;
        padding-right:20px;
    }
    @media only screen and (max-width:600px){
        width:10%; 
    }
    @media only screen and (max-width:550px){
        width:5%; 
    }
`;

