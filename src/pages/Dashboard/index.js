import { useState } from 'react';
import { FormFunction } from '../../components/dashboardComponents/Form';
import { PrecifyFunction, calculatePercentageWithoutEvent } from '../../components/dashboardComponents/PrecifyContainer';
import Ingredients from '../../components/dashboardComponents/ingredients/index.js';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';

export default function Dashboard() {
  const token = useToken();
  const [ingridienteArray, SetIngridienteArray] = useState([]);
  const [percentage, SetPercentage] = useState(0);
  const [percentageMutiply, SetPercentageMultiply] = useState(0)
  const [ProductMenu, SetProductMenu] = useState(false);
  const [ProductValue, SetProductValue] = useState(0);
  const [precifyNumber, SetPrecifyNumber] = useState(0);
  const [finalValue, SetFinalValue] = useState(0);

  function calculateProduct() {
    SetProductMenu(true);
    let count = 0;
    for (let i = 0; i < ingridienteArray.length; i++) {
      count = count + Number(ingridienteArray[i].finalValue);
    }
    const finalCount = count + Number(finalValue);
    SetProductValue(Number(finalCount.toFixed(2)));
  }
  return (
    <Container>

      <div className='Ingredients'>
      <FormFunction
        calculateProduct = {calculateProduct}
        ingridienteArray = {ingridienteArray}
        SetIngridienteArray = {SetIngridienteArray}
        percentage = {percentage}
        SetProductMenu = {SetProductMenu}
        finalValue = {finalValue}
        ProductValue = {ProductValue}
        SetFinalValue = {SetFinalValue}
        SetPercentage = {SetPercentage}
        precifyNumber = {precifyNumber}
        SetPrecifyNumber = {SetPrecifyNumber}
        percentageMutiply = {percentageMutiply}
        ProductMenu= {ProductMenu}
        calculatePercentageWithoutEvent = {calculatePercentageWithoutEvent}
      />
          <Ingredients
            calculateProduct = {calculateProduct}
            ingridienteArray = {ingridienteArray}
            SetIngridienteArray = {SetIngridienteArray}
            SetPrecifyNumber = {SetPrecifyNumber}
            SetPercentage = {SetPercentage}
            SetProductMenu = {SetProductMenu}
          />
        {
          ProductMenu ?
            <PrecifyFunction
              ProductValue = { ProductValue }
              precifyNumber = { precifyNumber }
              percentage = { percentage }
              SetPercentage = {SetPercentage}
              finalValue = {finalValue}
              SetPrecifyNumber = {SetPrecifyNumber}
              percentageMutiply = {percentageMutiply}
              SetPercentageMultiply = {SetPercentageMultiply}
            />:
            <p className='message'>Você ainda não acrescentou nenhum ingrediente</p>
        }
      </div>
    </Container >
  );
}
const Container = styled.div`
  padding: 30px;
  padding-top:90px;
  width:100%;
  height: fit-content;
  min-height:800px;
  display:flex;
  position:relative;
  flex-direction:column;
  align-items:center;
  overflow-y: auto;
  .Submit{
      position:absolute;
      right:-15%;
      height:25px;
      width:25px;
      border-radius: 5px 5px 5px 5px;
      border:none;
      background-color:#8057d3;
      font-size:22px;
      color:#f7f7f7;
      :hover{
            cursor: pointer;
      }
  }
  .message{
    color:#A17dee;
    margin-top:105px;
  }
  .Ingredients{
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:left;   
  }

  form{
    align-items:left;
    width:98%;
    height:60%;
    min-height:125px;
    position:relative;
    max-width:500px;
    background-color:#A17dee;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-width:330px;
  }
`;