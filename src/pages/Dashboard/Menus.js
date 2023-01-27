
import styled from 'styled-components';
function DivisorMenuFunction({
    SetGrandUnity,
    SetUnity,
    SetDivisorMenu
    }){

    return(
    <DivisorMenu>
        <button type="button"
            onClick={() => {
            SetGrandUnity("1Kg");
            SetUnity("1Kg");
            SetDivisorMenu(false);
            }}> 1Kg </button>

        <button type="button"
            onClick={() => {
            SetGrandUnity("1U");
            SetUnity("1U");
            SetDivisorMenu(false);
            }}> 1U </button>

        <button type="button"
            onClick={() => {
            SetGrandUnity("1L");
            SetUnity("1L");
            SetDivisorMenu(false);
            }}> 1L </button>

        <button type="button"
            onClick={() => {
            SetGrandUnity("1Kg");
            SetUnity("1g");
            SetDivisorMenu(false);
            }}> 1g </button>

        <button type="button"
            onClick={() => {
            SetGrandUnity("1L");
            SetUnity("1ml");
            SetDivisorMenu(false);
            }}> 1ml </button>
    </DivisorMenu>
    )
}
function GrandMenuFunction({
    SetGrandUnity,
    SetUnity,
    SetGrandMenu
    }){

    return(
        <GrandMenu>
            <button type="button"
              onClick={() => {
                SetGrandUnity("1Kg");
                SetUnity("1g");
                SetGrandMenu(false);
              }}> Kg </button>

            <button type="button"
              onClick={() => {
                SetGrandUnity("1L");
                SetUnity("1ml");
                SetGrandMenu(false);
              }}> L </button>

            <button type="button"
              onClick={() => {
                SetGrandUnity("1U");
                SetUnity("1u");
                SetGrandMenu(false);
              }}>  U </button>

        </GrandMenu>
    );
}
export { DivisorMenuFunction, GrandMenuFunction }

const GrandMenu = styled.div`
  width:25px;
  height:80px;
  background-color:#E4DBF7;
  position:absolute;
  right:-25px;
  top:6px;
  display:flex;
  border-radius: 0px 10px 10px 0px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  button{
    color:#9975e6;
    display:flex;
    border:none;
    border-radius: 5px;
    background-color:#E4DBF7;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 90%;
    height:25px;
  }
`;

const DivisorMenu = styled.div`
  width:25px;
  height:131px;
  background-color:#E4DBF7;
  position:absolute;
  right:-25px;
  top:46px;
  display:flex;
  border-radius: 0px 10px 15px 15px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  button{
    color:#9975e6;
    display:flex;
    border:none;
    border-radius: 5px;
    background-color:#E4DBF7;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:25px;
  }
`;