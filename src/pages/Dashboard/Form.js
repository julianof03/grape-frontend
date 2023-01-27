import {
    NameContainer,
  } from './DashboardStyle.js';
  import { useState } from 'react';
  import {CountContainerFunction} from './CountContainer.js'

function FormFunction({
    ingridienteArray,
    SetIngridienteArray,
    percentage,
    finalValue,
    SetFinalValue,
    SetProductMenu,
    SetProductValue
}){
    const [name, SetName] = useState('');
    const [value1, Setvalue1] = useState(0);
    const [value2, Setvalue2] = useState(0);
    const [color, SetColor] = useState(true);
    const [unity, SetUnity] = useState("g");

    const handleSubmit = (event) => {
        event.preventDefault();
        calculate(value1, value2);
        if (!name || !value1 || !value2) {
          return;
        }
        const newArray = {
          name,
          unity,
          quantidade: value2,
          finalValue,
          color
        }
      
        SetColor(!color);
        SetIngridienteArray(ingridienteArray => [...ingridienteArray, newArray]);
        SetFinalValue(0);
        Setvalue1(0);
        Setvalue2(0);
        calculateProduct();
        event.target.reset();
      }
      function calculate(n1, n2) {
        console.log(Number(n1), Number(n2));
        if (unity === "1U" || unity === "1Kg" || unity === "1L") {
          const count = Number(n1) * Number(n2);
          SetFinalValue(Number(count.toFixed(2)));
          return
        }
        const count = (Number(n1) / 1000) * Number(n2);
        SetFinalValue(Number(count.toFixed(2)));
      }
      
      function calculateProduct() {
        SetProductMenu(true);
        let count = 0;
        for (let i = 0; i < ingridienteArray.length; i++) {
          count = count + Number(ingridienteArray[i].finalValue);
        }
        const finalCount = count + Number(finalValue);
        SetProductValue(Number(finalCount.toFixed(2)));
      }

    return(
    <form onSubmit={handleSubmit}>
       <CountContainerFunction
        Setvalue1 = {Setvalue1}
        Setvalue2 = {Setvalue2}
        value1 = {value1}
        value2 = {value2}
        calculate = {calculate}
        unity = {unity}
        SetUnity = {SetUnity}
       />
  
        <NameContainer>
          <input placeholder='Nome'
            onChange={(e) => { SetName(e.target.value); }}
          ></input>
          <p>R$ {finalValue}
  
          </p>
        </NameContainer>
  
        <button type="submit" className='Submit'>+</button>
  
    </form>);
}
export {FormFunction}