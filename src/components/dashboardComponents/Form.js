import styled from 'styled-components';
import { useState } from 'react';
import { CountContainerFunction } from './CountContainer.js'
import { NameMenu } from './NameMenu/NameMenu.js'

function FormFunction({
  SetIngridienteArray,
  finalValue,
  SetFinalValue,
  SetProductMenu,
  calculatePercentageWithoutEvent,
  ProductValue,
  percentageMutiply,
  SetPercentage,
  SetPrecifyNumber,
  ProductMenu,
  calculateProduct
}) {
  const [name, SetName] = useState('');
  const [unity, SetUnity] = useState("1g");
  const [grandUnity, SetGrandUnity] = useState("1Kg");
  const [value1, Setvalue1] = useState(0);
  const [value2, Setvalue2] = useState(0);
  const [color, SetColor] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !value1 || !value2) return
    calculate(value1, value2);
    const sliceUnity = unity.substring(1);
    const newArray = {
      name,
      unity: sliceUnity,
      quantidade: value2,
      finalValue,
      color
    }

    SetProductMenu(true);
    SetColor(!color);

    Setvalue1(0);
    Setvalue2(0);
    SetFinalValue(0);
    calculateProduct();

    SetIngridienteArray(ingridienteArray => [...ingridienteArray, newArray]);

    const newPercentage = calculatePercentageWithoutEvent({ ProductValue, finalValue, percentageMutiply });
    SetPercentage(newPercentage.percentage);
    SetPrecifyNumber(newPercentage.precifyNumber)

    event.target.reset();
  }

  function calculate(n1, n2) {
    if (unity === "1U" || unity === "1Kg" || unity === "1L" || unity === grandUnity) {
      const count = n1 * n2;
      SetFinalValue(count.toFixed(2));
      return
    }
    const count = n1 / 1000 * n2;
    SetFinalValue(count.toFixed(2));
  }

  return (
    <>
      <NameMenu
        ProductMenu={ProductMenu}
        SetProductMenu={SetProductMenu}
        SetIngridienteArray={SetIngridienteArray}
        SetPrecifyNumber={SetPrecifyNumber}
        SetPercentage={SetPercentage}
      />
      <form onSubmit={handleSubmit}>
        <CountContainerFunction
          value1={value1}
          value2={value2}
          Setvalue1={Setvalue1}
          Setvalue2={Setvalue2}
          calculate={calculate}
          unity={unity}
          grandUnity={grandUnity}
          SetUnity={SetUnity}
          SetGrandUnity={SetGrandUnity}
          finalValue={finalValue}
          SetFinalValue={SetFinalValue}
        />
        <NameContainer>
          <input placeholder='ingrediente'
            onChange={(e) => { SetName(e.target.value); }}
          ></input>
          <p>R$ {finalValue}</p>
        </NameContainer>
        <button type="submit" className='Submit'>+</button>
      </form>
    </>
  );
}
export { FormFunction }
const NameContainer = styled.div`
  width:36%;
  height:94px;
  margin-right:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
    input{
      background-color: #f7f7f7;
      border:none;
      width:100%;
      height:50%;
      outline:none;
      color:#A17dee;
      text-align:center;
      font-size:18px;
      border-radius: 10px 10px 10px 10px;
      min-width:120px;
      ::placeholder{
        color:#b291fa;
      }
    }
    p{
      color:#f7f7f7;
      margin-top:0px;
      margin-bottom:9px;
    }
`;