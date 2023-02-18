import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import * as useProductList from '../../hooks/api/useProductList';
import Product from './product';
export default function ProdudctList() {

    const [productList, SetProductList] = useState([])
    const [productListMenu, SetProductListMenu] = useState(true)
    const [loading, SetLoading] = useState(true);

    const { ListAllProducts } = useProductList.GetProductList()

    useEffect(() => {
      GetAllProducts()
    }, []);

    async function GetAllProducts(){
      try {
        SetLoading(true);
        const ProductData = await ListAllProducts();
        SetProductList(ProductData);
        SetLoading(false);
    } catch {
        SetLoading(false);
        toast('Não foi possível encontrar os produtos');
    } 
    }
    if(loading){
      return(  
        <Alert> tentando encontrar seus produtos... </Alert>
      )
    }
    if(productList.length >= 1){
      return (
        productList.map((e) => {
          return (
            <Product productList={e} />
           );
         }
       )

      )
    }else{
      return(  
        <Alert> você ainda não adicionou nenhum produto</Alert>
      )

    }

}

const Alert = styled.div`
height:90vh;
color:#8E65E3;
display:flex;
align-items:center;
justify-content:center;
`;