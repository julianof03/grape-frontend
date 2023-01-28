import {
    NameContainer,
  } from './DashboardStyle.js';
  import { useState } from 'react';
  import {CountContainerFunction} from './CountContainer.js'

function FormFunction({
    SetIngridienteArray,
    finalValue,
    SetFinalValue,
    SetProductMenu,
    SetProductValue,
    ingridienteArray
}){
    const [name, SetName] = useState('');
    const [value1, Setvalue1] = useState(0);
    const [value2, Setvalue2] = useState(0);
    const [color, SetColor] = useState(true);
    const [unity, SetUnity] = useState("1g");
    const [grandUnity, SetGrandUnity] = useState("1Kg");

    const handleSubmit = (event) => {
        event.preventDefault();
        SetProductMenu(true);
        calculate(value1, value2);
        if (!name || !value1 || !value2) {
          return;
        }
        console.log(unity.substring(1));
        const sliceUnity = unity.substring(1);
        const newArray = {
          name,
          unity: sliceUnity,
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
      if (unity === "1U" || unity === "1Kg" || unity === "1L" || unity === grandUnity) {
        const count = n1 * n2;
        SetFinalValue(count.toFixed(2));
        return
      }
      const count = n1 / 1000 * n2;
      SetFinalValue(count.toFixed(2));
    }
    function calculateProduct() {
      SetProductMenu(true);
      let count = 0;
      for (let i = 0; i < ingridienteArray.length; i++) {
        count = count + Number(ingridienteArray[i].finalValue);
      }
      console.log(count);
      const finalCount = count + Number(finalValue);
      SetProductValue(Number(finalCount.toFixed(2)));
    }
      
    return(
    <form onSubmit={handleSubmit}>
       <CountContainerFunction
        Setvalue1 = { Setvalue1 }
        Setvalue2 = { Setvalue2 }
        value1 = { value1 }
        value2 = { value2 }
        calculate = { calculate }
        unity = { unity }
        finalValue = {finalValue}
        SetFinalValue = {SetFinalValue}
        SetUnity = { SetUnity }
        grandUnity = {grandUnity}
        SetGrandUnity = {SetGrandUnity}
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