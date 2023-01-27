import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import {Container, Ingredients,
  CountContainer, ChooseContainer,
  ChooseContainer2, NameContainer,
  GrandMenu, DivisorMenu,
  PrecifyContainer} from './DashboardStyle.js';

export default function Dashboard() {
  const navigate = useNavigate();
  const [ingridienteArray, SetIngridienteArray] = useState([]);


  const [name, SetName] = useState('');
  const [value1, Setvalue1] = useState(0);
  const [value2, Setvalue2] = useState(0);
  const [finalValue, SetFinalValue] = useState(0.0);
  const [color, SetColor] = useState(true);
  const [grandMenu, SetGrandMenu] = useState(false);
  const [divisorMenu, SetDivisorMenu] = useState(false);
  const [grandUnity, SetGrandUnity] = useState("Kg");
  const [unity, SetUnity] = useState("g");
  const [ ProductMenu, SetProductMenu ] = useState(false);
  const [ ProductValue, SetProductValue ] = useState(0);
  const [ precifyNumber, SetPrecifyNumber ] = useState(0);
  const [ percentage, SetPercentage ] = useState(0);

  useEffect(() => {
  }, []);

  function calculate(n1, n2) {
    if(grandUnity === "1U"){
      const count = n1 * n2;
      SetFinalValue(count.toFixed(2));
      return
    }
    if(unity === "1U" || unity === "1Kg" || unity === "1L"){
      const count = n1 * n2;
      SetFinalValue(count.toFixed(2));
      return
    }
    const count = (n1 / 1000) * n2;
    SetFinalValue(count.toFixed(2));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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

  function calculateProduct(){
    SetProductMenu(true);
    let count = 0;
    for(let i = 0; i < ingridienteArray.length; i++){
      count = count + Number(ingridienteArray[i].finalValue);
    }
    console.log(count);
    console.log(ingridienteArray);
    let finalCount = count + Number(finalValue);
    SetProductValue(finalCount.toFixed(2));
  }
  function calculatePercentage(e){
    const finalnum = Number(ProductValue) + Number(finalValue);
    const percentage = finalnum / 100 * Number(e.target.value)
    const precifyNumber = finalnum + percentage;
    
    SetPercentage(percentage)
    SetPrecifyNumber(precifyNumber.toFixed(2));
  }
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <CountContainer>
          <input type="number" id="value1"
            name="value1"
            onChange={(e) => { Setvalue1(e.target.value); calculate(e.target.value, value2); }}
            className='Top'
            placeholder='Valor'>
          </input>

          <input type="number"
            id="value2"
            name="value2"
            onChange={(e) => { Setvalue2(e.target.value); calculate(value1, e.target.value); }}
            className='Bottom'
            placeholder='Qtd.'
          ></input>

          <ChooseContainer>
            <button type="button" onClick={(e) => { SetDivisorMenu(false); SetGrandMenu(!grandMenu); }}>{grandUnity}</button>
          </ChooseContainer>
          {grandMenu? 
          <GrandMenu>
            <button type="button" 
              onClick={()=> {
                SetGrandUnity("1Kg"); 
                SetUnity("1g"); 
                SetGrandMenu(false); 
                calculate(value1, value2)
              }}> Kg </button>
            <button type="button" 
              onClick={()=> {
                SetGrandUnity("1L"); 
                SetUnity("1ml"); 
                SetGrandMenu(false); 
                calculate(value1, value2)
              }}> L </button>
            <button type="button" 
              onClick={()=> {
                SetGrandUnity("1U"); 
                SetUnity("1u"); 
                SetGrandMenu(false); 
                calculate(value1, value2)
                }}>  U </button>
          </GrandMenu>: ""}

          <ChooseContainer2>
            <button type="button" onClick={(e) => { SetGrandMenu(false);SetDivisorMenu(!divisorMenu); }}>{unity}</button>
          </ChooseContainer2>
          {divisorMenu? 
          <DivisorMenu>
            <button type="button" 
              onClick={()=> {
                SetGrandUnity("1Kg"); 
                SetUnity("1Kg");
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1Kg </button>
              <button type="button" 
              onClick={()=> {
                SetGrandUnity("1U"); 
                SetUnity("1U"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1U </button>
               <button type="button" 
              onClick={()=> {
                SetGrandUnity("1L"); 
                SetUnity("1L"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
                }}> 1L </button>
            <button type="button" 
              onClick={()=> {
                SetGrandUnity("1Kg"); 
                SetUnity("1g"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1g </button>
                <button type="button" 
              onClick={()=> {
                SetGrandUnity("1L"); 
                SetUnity("1ml"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1ml </button>
            </DivisorMenu>: ""}

        </CountContainer>

        <NameContainer>
          <input placeholder='Nome'
            onChange={(e) => { SetName(e.target.value); }}
          ></input>
          <p>R$ {finalValue}</p>
        </NameContainer>

        <button type="submit" className='Submit'>+</button>

      </form>

      {ingridienteArray.map((e) => {
        return (
          <Ingredients color={e.color}>
            <p>{e.name}: {e.quantidade}{e.unity} </p>
            <p>R$ {e.finalValue}</p>
          </Ingredients>);
      })}
      {ProductMenu? 
      <PrecifyContainer>
          <div><p>Valor Estimado:</p><p>R$ {ProductValue}</p>  </div>
          <div><p>Porcentagem de Lucro:</p><input onChange={(e) => { calculatePercentage(e) }} type="number"></input>  </div>
          <div><p>Valor Final:</p><p>R$ {precifyNumber}</p>  </div>  
          <div><p>Lucro total</p><p>R$ {percentage}</p>  </div>    
        </PrecifyContainer>:
        ""
      }

    </Container>
  );
}
