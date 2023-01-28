import styled from 'styled-components';
import { useState } from 'react';
import { DivisorMenuFunction, GrandMenuFunction } from './Menus.js';
function CountContainerFunction({
    Setvalue1,
    Setvalue2,
    value1,
    value2,
    calculate,
    SetUnity,
    unity,
    finalValue,
    SetFinalValue,
    grandUnity,
    SetGrandUnity
}){
    const [grandMenu, SetGrandMenu] = useState(false);
    const [divisorMenu, SetDivisorMenu] = useState(false);
    return(
    <CountContainer>
        <input type="number" id="value1"
          name="value1"
          onChange={(e) => { Setvalue1(e.target.value); calculate(e.target.value, value2); }}
          className='Top'
          placeholder='Valor'>
        </input>

        <input type="number" id="value2"
          name="value2"
          onChange={(e) => { Setvalue2(e.target.value); calculate(value1, e.target.value); }}
          className='Bottom'
          placeholder='Qtd.'
        ></input>

        <ChooseContainer>
          <button type="button" onClick={(e) => { SetDivisorMenu(false); SetGrandMenu(!grandMenu); calculate(value1, value2); }}>{grandUnity}</button>
        </ChooseContainer>
        
        {grandMenu ?
          <GrandMenuFunction
            SetGrandUnity = {SetGrandUnity}
            SetUnity = {SetUnity}
            finalValue = {finalValue}
            SetFinalValue = {SetFinalValue}
            grandUnity = {grandUnity}
            SetGrandMenu = {SetGrandMenu}
            /> : ""}

        <ChooseContainer2>
          <button type="button" onClick={(e) => { SetGrandMenu(false); SetDivisorMenu(!divisorMenu); }}>{unity}</button>
        </ChooseContainer2>

        {divisorMenu ?
          <DivisorMenuFunction
            SetGrandUnity = {SetGrandUnity}
            SetUnity = {SetUnity}
            finalValue = {finalValue}
            SetDivisorMenu = {SetDivisorMenu}
            SetFinalValue = {SetFinalValue}
            unity = {unity}
          /> : ""}

      </CountContainer>)
}
export {CountContainerFunction}

const CountContainer = styled.div`
  display: flex;
  position:relative;
  flex-direction:column;
  align-items: center;
  justify-content: left;
  background-color: #f7f7f7;
  margin-left:4%;
  width:36%;
  height:94px;
  border-radius:12PX;
  min-width: 150px;
    input{
      background-color: #f7f7f7;
      border:none;
      width:100%;
      height:50%;
      outline:none;
      min-width:fit-content;
    }
    input:focus{
      border:none;
    }
    .Top{
      background-color:#ede8f7;
      font-size:20px;
      padding-left:30%;
      border-radius: 10px 10px 0px 0px;
      ::placeholder{
        color:#a17dee;
      }
    }
    .Bottom{
      padding-left:14%;
      font-size:18px;
      border-radius: 0px 0px 10px 10px;
      padding-left:45px;
      ::placeholder{
        color:#b291fa;
      }
    }

`;
const ChooseContainer = styled.div`
  width:20%;
  height:50%;
  right:0px;
  top:0px;
  position:absolute;
  min-width:32px;
    button{
      padding-left:16%;
      background-color:#e4dbf7;
      border: none;
      color:#9975e6;
      font-size:14px;
      border-radius: 0px 10px 0px 0px;
      width:100%;
      height:100%;
    }
`;
const ChooseContainer2 = styled.div`
  width:20%;
  height:50%;
  right:0px;
  bottom:0px;
  position:absolute;
  min-width:32px;
    button{
      padding-left:16%;
      background-color:#ede8f7;
      color:#a17dee;
      font-size:14px;
      width:100%;
      height:100%;
      border: none;
      border-radius: 0px 0px 10px 0px;
    }
`;