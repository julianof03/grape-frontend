import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import useIngredient from '../../hooks/api/useIngredient';
export default function Ingredients({
    ingridienteArray,
    SetIngridienteArray,
    calculateProduct,
    SetPrecifyNumber,
    SetPercentage,
    SetProductMenu,
}) {

    const [productList, SetProductList] = useState([])

    useEffect(() => {
      GetAllProducts()
    }, []);
    function DeleteIngredient(i){
        ingridienteArray.splice(i,1)
        SetIngridienteArray([...ingridienteArray]);
        
        calculateProduct();
        SetPrecifyNumber(0);
        SetPercentage(0);
        if(ingridienteArray.length === 0){
          SetProductMenu(false);
       }
    }

    async function GetAllProducts(){
      try {
        const ProductData = await useIngredient();
        SetProductList(ProductData);
        toast('produtos encontrados com sucesso!');
    } catch {
        toast('Não foi possível encontrar os produtos');
    } 
    }

    return(
        ingridienteArray.map((e, i) => {
            return (
                <IngredientContainer key={i} color={e.color}>
                  <p>{e.name}: {e.quantidade}{e.unity} </p>
                  <p>R$ {e.finalValue}</p>
                  <button onClick={()=> {DeleteIngredient(i);}}>x</button>
                </IngredientContainer>
            );
    }))
}

const IngredientContainer = styled.div`
  height: 65px;
  min-width:330px;
  max-width:500px;
  width:50%;
  margin-top:30px;
  padding:20px 50px 20px 20px;
  border-radius:10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:relative;
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
  button{
    right:15px;
    position:absolute;
    background-color:${(props) => {
        if (props.color) {
        return "#8E65E3";
        } else {
        return "#C6A3FC";
        }
    }};
    border-style:none;
    color: red;
    font-size:11px;
    :hover{
        font-size:18px;
        cursor: pointer;
    }
  }
`;
