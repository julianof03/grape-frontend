import styled from 'styled-components';

function PrecifyFunction({
    ProductValue,
    calculatePercentage,
    precifyNumber,
    percentage,
    SetPrecifyNumber,
    SetPercentage,
    finalValue
}){
    function calculatePercentage(e) {
        const percentage = (Number(ProductValue) + Number(finalValue)) / 100 * Number(e.target.value)
        const precifyNumber = (Number(ProductValue) + Number(finalValue)) + percentage;
      
        SetPercentage(percentage.toFixed(2))
        SetPrecifyNumber(precifyNumber.toFixed(2));
      }
    return(
    <PrecifyContainer>
      <div><p>Valor Estimado:</p><p>R$ {ProductValue}</p>  </div>
      <div><p>Porcentagem de Lucro:</p><input onChange={(e) => { calculatePercentage(e) }} type="number"></input>  </div>
      <div><p>Valor Final:</p><p>R$ {precifyNumber}</p>  </div>
      <div><p>Lucro total</p><p>R$ {percentage}</p>  </div>
    </PrecifyContainer>
    );
}

export { PrecifyFunction }

const PrecifyContainer = styled.div`
  width:40%;
  max-width:400px;
  min-width:250px;
  margin-top:40px;
  height:fit-content;
  background-color:red;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
  padding:10px;
  border-radius:15px;
  background-color:#AA80FE;
  color:#ede8f7;
  
  div{
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:10px;
    width:100%;
    height:30%;

  }
  input{
      background-color: #f7f7f7;
      border:none;
      width:40%;
      max-width:100px;
      padding-left:25px;
      height:50%;
      outline:none;
      background-color:#ede8f7;
      font-size:20px;
      border-radius: 10px 10px 10px 10px;
      ::placeholder{
        color:#a17dee;
      }
    }
    input:focus{
      border:none;
    }
`;