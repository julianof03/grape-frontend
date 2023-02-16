import styled from 'styled-components';
import { toast } from 'react-toastify';
import {PostProduct} from '../../../hooks/api/useProduct';
import {PostIngredient} from '../../../hooks/api/useIngredient';
import { useState } from 'react';
function NameMenu({
  ProductMenu,
  ingridienteArray,
  SetProductMenu,
  SetIngridienteArray,
  precifyNumber,
  SetPrecifyNumber,
  SetPercentage,
}) {
  const [ProductName, SetProductName] = useState("");

  const { CreateProduct } = PostProduct();
  const { CreateIngredient } = PostIngredient();

  
async function HandleSubmit() {

    if (!ProductName) {
      return
    }
    try {
      const productValue =  precifyNumber;
      const productName = ProductName;
      const productData = await CreateProduct(productName, productValue);

      ingridienteArray.map(async (e) => {
        const amount = Number(e.quantidade);
        try {
          const body = {
            ingredientName: e.name,
            price: e.finalValue,
            productId: productData.id,
            amount,
            mesure: e.unity,
          }
          await CreateIngredient(body)
        } catch {
          toast('Não foi possível salvar o ingrediente!');
          return
        }
      });
      SetIngridienteArray([]);
      SetProductMenu(false);
      SetProductName("");
      SetPrecifyNumber(0);
      SetPercentage(0);

      toast('Produto salvo com sucesso');

    } catch {
      toast('Não foi possível salvar o produto!');
    }
  }
  return(
    <NameContainer>
      <input onChange={(e) => SetProductName(e.target.value)} placeholder='Nome'></input>
      {ProductMenu ? <button onClick={()=> HandleSubmit()}>Salvar Produto</button> : ""}
    </NameContainer>
  );
}
export { NameMenu }

const NameContainer = styled.div`
  width:88%;
  min-width:290px;
  max-width:460px;
  height:30px;
  margin-left:18px;
  border-radius:15px 15px 0px 0px;
  height:fit-content;
  background-color: #A17dee;
  display: flex;
  position:relative;
  flex-direction:column;
  align-items: center;
  position:relative;
  justify-content: center;
    input{
      min-height:28px;
      width:10%;
      height:70%;
      margin:5px;
      border-radius:5px;
      border:none;
      outline:none;
      color:#A17dee;
      background-color: #f7f7f7;
      min-width:fit-content;
      text-align:center;
      :focus{
        border:none;
      }
      ::placeholder{
        text-align:center;
        color:#b291fa;
      }
    }
    button{
        width:120px;
        height:20px;
        right:20px;
        top:8px;
        border-radius:5px;
        color:#8057d3;
        background-color: #ede8f7;
        border-style:none;
        :hover{
            cursor: pointer;
        }
      }
    
`;