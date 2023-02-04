import styled from 'styled-components';
import { useState } from 'react';
import { DivisorMenuFunction, GrandMenuFunction } from './Menus.js';
function CountContainerFunction({
    value1,
    value2,
    Setvalue1,
    Setvalue2,
    calculate,
    unity,
    grandUnity,
    SetUnity,
    SetGrandUnity,
    finalValue,
    SetFinalValue,
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
        <p className='cifrao'>$</p>
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
            unity = {unity}
            finalValue = {finalValue}
            SetFinalValue = {SetFinalValue}
            grandUnity = {grandUnity}
            SetGrandMenu = {SetGrandMenu}
            /> : ""}

        <ChooseContainer2>
          <button type="button" onClick={(e) => { SetGrandMenu(false); SetDivisorMenu(!divisorMenu); calculate(value1, value2);}}>{unity}</button>
        </ChooseContainer2>

        {divisorMenu ?
          <DivisorMenuFunction
            SetGrandUnity = {SetGrandUnity}
            SetUnity = {SetUnity}
            finalValue = {finalValue}
            SetDivisorMenu = {SetDivisorMenu}
            SetFinalValue = {SetFinalValue}
            grandUnity = {grandUnity}
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
  position:relative;
  margin-left:4%;
  width:36%;
  height:94px;
  border-radius:12PX;
  min-width: 150px;
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    input{
      background-color: #f7f7f7;
      color:#A17dee;
      border:none;
      width:100%;
      height:50%;
      outline:none;
      min-width:fit-content;
      :focus{
        border:none;
      }
    }
    .Top{
      background-color:#ede8f7;
      font-size:20px;
      padding-right:33px;
      padding-left:20px;
      text-align:center;
      border-radius: 10px 10px 0px 0px;
      ::placeholder{
        color:#a17dee;
      }
      
    }
    .Bottom{
      padding-left:14%;
      font-size:18px;
      border-radius: 0px 0px 10px 10px;
      text-align:center;
      padding-right:33px;
      ::placeholder{
        color:#b291fa;
      }
    }
    .cifrao{
      display:flex;
      color:#b291fa;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      position:absolute;
      width:20px;
      height:28px;
      background-color:#ede8f7;
      top:9px;
      left:0px;
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
      :hover{
            cursor: pointer;
      } 
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
      :hover{
            cursor: pointer;
      } 
    }
`;