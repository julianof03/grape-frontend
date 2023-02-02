import { useState } from "react";
import styled from "styled-components";
import Topbar from '../Topbar';

export default function SingUpPage({
    SetPageNumber
}) {
    const [name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [passWord, SetPassWord] = useState("");
    const [secondPassWord, SetSecondPassWord] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !Email || !passWord || !secondPassWord) {
          return
        }
        const body = {
            name,
            Email, 
            passWord,
            secondPassWord
        }
        
        event.target.reset();
    }

return (
    <>
    <Topbar  SetPageNumber = {SetPageNumber}></Topbar>  
        <SingUpContainer>   
            
            <form onSubmit={handleSubmit}>
                <p className='Title'>GRAPE</p>
                <input placeholder='Nome'
                    type="Nome" 
                    id="Nome"
                    name="Nome"
                    onChange={(e) => SetName(e.target.value)}
                    ></input>
                <input placeholder='Email'
                    type="email" 
                    id="Email"
                    name="Email"
                    onChange={(e) => SetEmail(e.target.value)}
                    ></input>
                <input placeholder='senha'
                    type="password" 
                    id="password"
                    name="password"
                    onChange={(e) => SetPassWord(e.target.value)}
                    ></input>
                <input placeholder='Repita sua senha'
                    type="password" 
                    id="Secondpassword"
                    name="Secondpassword"
                    onChange={(e) => SetSecondPassWord(e.target.value)}
                    ></input>
                <button>Inscrever-se</button>
                <p className='Login' onClick={() => {SetPageNumber(2)}}>Ja está inscrito? faça login</p>
            </form>
        </SingUpContainer>
    </>
);
}

const SingUpContainer = styled.div`
    width:100%;
    height: 93vh;
    background-color:#A17dee;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    form{
        position:relative;
        border-radius: 10px;
        background-color:#f7f7f7;
        width:400px;
        height:600px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        box-shadow: rgba(255, 255, 255, 0.55) 0px 6px 12px -6px, rgba(0, 0, 0, 0.3) 0px 3px 7px -30px; 
        input{
            margin-top:20px;
            background-color:#e4dbf7;
            border:none;
            width:78%;
            height:50px;
            outline:none;
            color:#A17dee;
            text-align:center;
            font-size:18px;
            border-radius: 10px;
            min-width:120px;
            box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -6px, rgba(0, 0, 0, 0.3) 0px 3px 7px -30px;
            :focus{
                ::placeholder{
                font-size:18px;
                color:#e4dbf7;
            }
            } 
            ::placeholder{
                font-size:18px;
                color:#b291fa;
            }
        }
        button{
            margin-top:20px;
            background-color:#A17dee;
            font-size:22px;
            border:none;
            width:72%;
            height:50px;
            outline:none;
            color:#f7f7f7;
            text-align:center;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -6px, rgba(0, 0, 0, 0.3) 0px 3px 7px -30px;    
        }
    }
    .Title{
        position:absolute;
        top:70px;
        font-weight:bold;
        font-size:44px;
        color:#A17dee;
    }
    .Login{
        position:absolute;
        bottom:70px;
        font-size:18px;
        color:#A17dee;
        :hover{
            cursor: pointer;
      } 
    }
`;