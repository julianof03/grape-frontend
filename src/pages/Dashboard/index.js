import { useState } from 'react';
import {
  Container, Ingredients,
} from './DashboardStyle.js';
import { FormFunction } from './Form';
import {PrecifyFunction, calculatePercentageWithoutEvent} from './PrecifyContainer';


export default function Dashboard() {

  const [ingridienteArray, SetIngridienteArray] = useState([]);
  const [finalValue, SetFinalValue] = useState(0);
  const [ProductMenu, SetProductMenu] = useState(false);
  const [ProductValue, SetProductValue] = useState(0);
  const [precifyNumber, SetPrecifyNumber] = useState(0);
  const [percentage, SetPercentage] = useState(0);
  const [percentageMutiply, SetPercentageMultiply] = useState(0)

return (
  <Container>
    <FormFunction
      ingridienteArray = {ingridienteArray}
      SetIngridienteArray = {SetIngridienteArray}
      percentage = {percentage}
      SetProductMenu = {SetProductMenu}
      SetProductValue = {SetProductValue}
      finalValue = {finalValue}
      ProductValue = {ProductValue}
      SetFinalValue = {SetFinalValue}
      SetPercentage = {SetPercentage}
      SetPrecifyNumber = {SetPrecifyNumber}
      percentageMutiply = {percentageMutiply}
      calculatePercentageWithoutEvent = {calculatePercentageWithoutEvent}
    />

      {
  ingridienteArray.map((e) => {
    return (
      <Ingredients color={e.color}>
        <p>{e.name}: {e.quantidade}{e.unity} </p>
        <p>R$ {e.finalValue}</p>
      </Ingredients>);
  })
}
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
    </Container >
  );
}
