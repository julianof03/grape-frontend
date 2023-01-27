import { useState } from 'react';
import {
  Container, Ingredients,
  PrecifyContainer
} from './DashboardStyle.js';
import { FormFunction } from './Form';


export default function Dashboard() {

  const [ingridienteArray, SetIngridienteArray] = useState([]);
  const [finalValue, SetFinalValue] = useState(0.0);
  const [ProductMenu, SetProductMenu] = useState(false);
  const [ProductValue, SetProductValue] = useState(0);
  const [precifyNumber, SetPrecifyNumber] = useState(0);
  const [percentage, SetPercentage] = useState(0);

  

function calculatePercentage(e) {
  const percentage = (Number(ProductValue) + Number(finalValue)) / 100 * Number(e.target.value)
  const precifyNumber = (Number(ProductValue) + Number(finalValue)) + percentage;

  SetPercentage(percentage.toFixed(2))
  SetPrecifyNumber(precifyNumber.toFixed(2));
}

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
    <PrecifyContainer>
      <div><p>Valor Estimado:</p><p>R$ {ProductValue}</p>  </div>
      <div><p>Porcentagem de Lucro:</p><input onChange={(e) => { calculatePercentage(e) }} type="number"></input>  </div>
      <div><p>Valor Final:</p><p>R$ {precifyNumber}</p>  </div>
      <div><p>Lucro total</p><p>R$ {percentage}</p>  </div>
    </PrecifyContainer> :
    ""
}
    </Container >
  );
}
