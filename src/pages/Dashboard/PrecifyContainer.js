import styled from 'styled-components';
import { useState } from 'react';

function PrecifyFunction({
    ProductValue,
    precifyNumber,
    percentage,
    SetPrecifyNumber,
    SetPercentage,
    finalValue,
    SetPercentageMultiply,
    percentageMutiply
    
}){
    function calculatePercentage(e) {
        const percentage = (Number(ProductValue) + Number(finalValue)) / 100 * Number(e.target.value)
        const precifyNumber = (Number(ProductValue) + Number(finalValue)) + percentage;
        SetPercentageMultiply(Number(e.target.value));
        console.log(percentageMutiply);
        SetPercentage(percentage.toFixed(2))
        SetPrecifyNumber(precifyNumber.toFixed(2));
    }
    return(
    <PrecifyContainer>
      <div><p>Valor Estimado:</p><p>R$ {ProductValue}</p>  </div>
      <div><p>Porcentagem de Lucro:</p><input type="number" placeholder='%' onChange={(e) => { calculatePercentage(e) }}></input>  </div>
      <div><p>Valor Final:</p><p>R$ {precifyNumber}</p>  </div>
      <div><p>Lucro total</p><p>R$ {percentage}</p>  </div>
    </PrecifyContainer>
    );
}

function calculatePercentageWithoutEvent({ProductValue, finalValue, percentageMutiply}) {
  const percentage = (Number(ProductValue) + Number(finalValue)) / 100 * Number(percentageMutiply)
  const precifyNumber = (Number(ProductValue) + Number(finalValue)) + percentage;
  const body = {
    percentage: percentage.toFixed(2),
    precifyNumber: precifyNumber.toFixed(2),
  }
  return (body)
}

export { PrecifyFunction, calculatePercentageWithoutEvent }


const PrecifyContainer = styled.div`
  width:40%;
  max-width:400px;
  min-width:250px;
  margin-top:40px;
  height:fit-content;
  background-color:red;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
  padding:10px;
  border-radius:15px;
  background-color:#AA80FE;
  color:#ede8f7;
  
  div{
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:10px;
    width:100%;
    height:30%;

  }
  input{
      background-color: #f7f7f7;
      border:none;
      width:40%;
      max-width:100px;
      height:50%;
      outline:none;
      background-color:#AA80FE;
      font-size:20px;
      border:2px solid;
      border-color:#ede8f7;
      color:#ede8f7;
      text-align:center;
      border-radius: 10px 10px 10px 10px;
      ::placeholder{
        color:#ede8f7;
      }
    }
    input:focus{
      border:2px solid;
      border-color:#AA80FE;
    }
    input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
}
`;