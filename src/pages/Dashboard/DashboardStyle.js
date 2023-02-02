import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  padding-top:90px;
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
      :hover{
            cursor: pointer;
      }
  }
  .message{
    color:#A17dee;
    margin-top:105px;
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
      color:#A17dee;
      text-align:center;
      font-size:18px;
      border-radius: 10px 10px 10px 10px;
      min-width:120px;
      ::placeholder{
        color:#b291fa;
      }
    }
    p{
      color:#f7f7f7;
      margin-top:0px;
      margin-bottom:9px;
    }
`;
export {
    Container, Ingredients,
    NameContainer
}