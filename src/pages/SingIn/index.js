import { useState, useContext } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import useSignIn from '../../hooks/api/useSignIn';
import UserContext from '../../contexts/UserContext';

export default function SingInPage({
    SetPageNumber
}) {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);

    async function HandleSubmit(event) {
        event.preventDefault();
        if (!email || !password) {
            return
        }
        try {
            const userData = await signIn(email, password);
            setUserData(userData);
            SetPageNumber(0);
            toast('Login realizado com sucesso!');
        } catch {
            toast('Não foi possível fazer o login!');
        }
        event.target.reset();
    }

    return (
        <>
            <SingInContainer>
                <form onSubmit={HandleSubmit}>
                    <p className='Title'>GRAPE</p>
                    <input placeholder='Email'
                        type="email"
                        id="Email"
                        name="Email"
                        onChange={(e) => SetEmail(e.target.value)}
                    ></input>
                    <input placeholder='senha'
                        type="password"
                        id="senha"
                        name="senha"
                        onChange={(e) => SetPassword(e.target.value)}
                    ></input>
                    <button>Entrar</button>
                    <p className='Login' onClick={() => { SetPageNumber(1) }}>não está inscrito? inscreva-se</p>
                </form>
            </SingInContainer>
        </>
    );
}

const SingInContainer = styled.div`
    width:100%;
    height: 93vh;
    background-color:#A17dee;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    form{
        width:400px;
        height:600px;
        border-radius: 10px;
        position:relative;
        background-color:#f7f7f7;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        box-shadow: rgba(255, 255, 255, 0.55) 0px 6px 12px -6px, rgba(0, 0, 0, 0.3) 0px 3px 7px -30px; 
        input{
            width:78%;
            height:50px;
            margin-top:20px;
            font-size:18px;
            border-radius: 10px;
            min-width:120px;
            background-color:#e4dbf7;
            border:none;
            outline:none;
            color:#A17dee;
            text-align:center;
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
            width:72%;
            height:50px;
            margin-top:20px;
            font-size:22px;
            background-color:#A17dee;
            border:none;
            outline:none;
            color:#f7f7f7;
            text-align:center;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -6px, rgba(0, 0, 0, 0.3) 0px 3px 7px -30px;    
        }
    }
    .Title{
        top:70px;
        font-size:44px;
        color:#A17dee;
        position:absolute;
        font-weight:bold;
    }
    .Login{
        bottom:70px;
        font-size:18px;
        position:absolute;
        color:#A17dee;
        :hover{
            cursor: pointer;
        } 
    }
`;