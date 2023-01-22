import { useContext } from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const [inputNumber, SetInputNumber] = useState(0);
    const [ingridienteArray, SetIngridienteArray] = useState([]);
  
    useEffect(() => {
    }, []);
    function inputUp() {
      const numx = inputNumber;
      const array = ingridienteArray;
      SetIngridienteArray(ingridienteArray => [...ingridienteArray, numx+1]);
      SetInputNumber(numx+1);
      console.log(array);
    }
    function inputDown() {
      const numx = inputNumber;
      SetInputNumber(numx-1);
      SetIngridienteArray(numx+1);
    }
  return (
      <Container>
        <button onClick={inputUp}></button>
        <button onClick={inputDown}></button>
        <h1>{inputNumber}</h1>
        <h1>{ingridienteArray.length}</h1>
        <form>
            <CountContainer>
            <input className='Top' placeholder='Valor'>
              
            </input>
            <input className='Bottom' placeholder='Quantidade'></input>
              <ChooseContainer>
                <button>1Kg</button>
              </ChooseContainer>
              <ChooseContainer2>
                <button>g</button>
              </ChooseContainer2>
            </CountContainer>
            <input></input>
          <p></p>
        </form>
      {ingridienteArray.map(() => {
            return(
              <Ingredients>
                <p>ingrediente</p>
              </Ingredients>);
          })}
      </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  overflow-y: auto;

  form{
    width:50%;
    height:60%;
    min-height:125px;
    max-width:500px;
    background-color:#A17dee;
    border-radius:20px;
    display:flex;
    align-items:center;
    flex-direction:center;
  }
  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 95px;
  width:25px;
  background-color: red;
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
input{
  background-color: #f7f7f7;
  border:none;
  width:100%;
  height:50%;
  outline:none;
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
button{
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
button{
  background-color:#ede8f7;
  color:#a17dee;
  font-size:14px;
  width:100%;
  height:100%;
  border: none;
  border-radius: 0px 0px 10px 0px;
}
`;