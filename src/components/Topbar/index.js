import styled from 'styled-components';

export default function Topbar({
    SetPageNumber
}) {

return (
    <TopbarDiv>
        <p onClick={() => SetPageNumber(0)}>GRAPE</p>
        <p onClick={() => SetPageNumber(2)}>o
        <p>G</p>
        </p>

    </TopbarDiv>
);
}
const TopbarDiv = styled.div`
    width:100%;
    height:60px;
    border-radius:-25px;
    display:flex;
    justify-content:space-between;
    padding:0px 20px 0px 20px;
    align-items:center;
    background-color:#A17dee;
    p{
        position: relative;
        
        :hover{
            cursor: pointer;
        }
        font-weight:bold;
        font-size:22px;
        color:#f7f7f7;
        p{
            rotate:90deg;
            top:14px;
            right:-2px;
            position:absolute;
        }
    }
`;