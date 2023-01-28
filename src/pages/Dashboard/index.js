import { useState } from 'react';
import {
  Container, Ingredients,
} from './DashboardStyle.js';
import { FormFunction } from './Form';
import {PrecifyFunction} from './PrecifyContainer';


export default function Dashboard() {

  const [ingridienteArray, SetIngridienteArray] = useState([]);
  const [finalValue, SetFinalValue] = useState(0.0);
  const [ProductMenu, SetProductMenu] = useState(false);
  const [ProductValue, SetProductValue] = useState(0);
  const [precifyNumber, SetPrecifyNumber] = useState(0);
  const [percentage, SetPercentage] = useState(0);

return (
  <Container>
    <FormFunction
      ingridienteArray = {ingridienteArray}
      SetIngridienteArray = {SetIngridienteArray}
      percentage = {percentage}
      SetProductMenu = {SetProductMenu}
      SetProductValue = {SetProductValue}
      finalValue = {finalValue}
      SetFinalValue = {SetFinalValue}
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
    />:
    ""
}
    </Container >
  );
}
