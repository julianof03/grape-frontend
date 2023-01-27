import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  height: fit-content;
  min-height:800px;
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
      background-color:#8057d3;
      font-size:22px;
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
  height:131px;
  background-color:#E4DBF7;
  position:absolute;
  right:-25px;
  top:46px;
  display:flex;
  border-radius: 0px 10px 15px 15px;
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
export {
    Container, Ingredients,
    CountContainer, ChooseContainer,
    ChooseContainer2, NameContainer,
    GrandMenu, DivisorMenu,
    PrecifyContainer
}