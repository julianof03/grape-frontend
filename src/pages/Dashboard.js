import { useContext } from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [ingridienteArray, SetIngridienteArray] = useState([]);

  const [finalValue, SetFinalValue] = useState(0.0);
  const [name, SetName] = useState('');
  const [value1, Setvalue1] = useState(0);
  const [value2, Setvalue2] = useState(0);
  const [color, SetColor] = useState(true);
  const [grandMenu, SetGrandMenu] = useState(false);
  const [divisorMenu, SetDivisorMenu] = useState(false);
  const [grandUnity, SetGrandUnity] = useState("Kg");
  const [unity, SetUnity] = useState("g");

  const ListArray = {
  Kg:{
    Grand: "Kg",
    divisor:"g",
    },
  L:{
    Grand: "L",
    divisor:"ml",
  },
  U:{
    Grand: "U",
    divisor:"U",
  },
  }
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

    event.target.reset();
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
                SetUnity("g"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1g </button>
                <button type="button" 
              onClick={()=> {
                SetUnity("l"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
              }}> 1ml </button>
            <button type="button" 
              onClick={()=> {
                SetUnity("u"); 
                SetDivisorMenu(false); 
                calculate(value1, value2)
                }}>  1u </button>
            </DivisorMenu>: ""}

        </CountContainer>

        <NameContainer>
          <input placeholder='Nome'
            onChange={(e) => { SetName(e.target.value); }}
          ></input>
          <p>{finalValue}</p>
        </NameContainer>

        <button type="submit" className='Submit'></button>

      </form>

      {ingridienteArray.map((e) => {
        return (
          <Ingredients color={e.color}>
            <p>{e.name}: {e.quantidade}{e.unity} </p>
            <p>R$ {e.finalValue}</p>
          </Ingredients>);
      })}

    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  display:flex;
  position:relative;
  flex-direction:column;
  align-items:center;
  overflow-y: auto;

  form{
    width:50%;
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
  .Submit{
      position:absolute;
      right:-15%;
      height:25px;
      width:25px;
      border-radius: 5px 5px 5px 5px;
      border:none;
      background-color:#a17dee;
      color:#f7f7f7;
  }
`;
const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  min-width:330px;
  max-width:500px;
  padding:20px;
  border-radius:10px 10px 10px 10px;
  width:50%;
  margin-top:30px;
  background-color: ${(props) => {
    if (props.color) {
      return "#8E65E3";
    } else {
      return "#C6A3FC";
    }
  }};
  color: ${(props) => {
    if (props.color) {
      return "#F7F7F7";
    } else {
      return "#FFFFFF";
    }
  }};
`;
const CountContainer = styled.div`
  display: flex;
  position:relative;
  flex-direction:column;
  align-items: center;
  justify-content: left;
  background-color: #f7f7f7;
  margin-left:4%;
  width:36%;
  height:94px;
  border-radius:12PX;
  min-width: 150px;
    input{
      background-color: #f7f7f7;
      border:none;
      width:100%;
      height:50%;
      outline:none;
      min-width:fit-content;
    }
    input:focus{
      border:none;
    }
    .Top{
      background-color:#ede8f7;
      font-size:20px;
      padding-left:30%;
      border-radius: 10px 10px 0px 0px;
      ::placeholder{
        color:#a17dee;
      }
    }
    .Bottom{
      padding-left:14%;
      font-size:18px;
      border-radius: 0px 0px 10px 10px;
      padding-left:45px;
      ::placeholder{
        color:#b291fa;
      }
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
    }
`;
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
      padding-left:32%;
      font-size:18px;
      border-radius: 10px 10px 10px 10px;
      min-width:120px;
      ::placeholder{
        color:#b291fa;
      }
    }
    p{
      color:#f7f7f7;
      margin-bottom:9px;
    }
`;
const GrandMenu = styled.div`
  width:25px;
  height:80px;
  background-color:#E4DBF7;
  position:absolute;
  right:-25px;
  top:6px;
  display:flex;
  border-radius: 0px 10px 10px 0px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  button{
    color:#9975e6;
    display:flex;
    border:none;
    border-radius: 5px;
    background-color:#E4DBF7;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 90%;
    height:25px;
  }
`;
const DivisorMenu = styled.div`
  width:25px;
  height:135px;
  background-color:#E4DBF7;
  position:absolute;
  right:-25px;
  top:46px;
  display:flex;
  border-radius: 0px 10px 10px 10px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  button{
    color:#9975e6;
    display:flex;
    border:none;
    border-radius: 5px;
    background-color:#E4DBF7;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:25px;
  }
`;