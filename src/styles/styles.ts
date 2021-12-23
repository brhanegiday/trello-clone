import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba99;
  display: flex;
  //   flex-direction: row;
  min-height: 90vh;
  padding: 20px;
  width: 100%;
  overflow-x: auto;
  gap: 10px;
`;

export const ColumnContainer = styled.div`
background-color:#ebecf0;
width:300px;
min-height:40px,
margin-right:20px;
border-radius:3px;
padding:8px;
flex-grow:0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff00;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  font-family: "Nunito Sans";
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

// For input and Button
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #016aa7;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const NewItemInput = styled.textarea`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 88%;
  outline-color: rgba(134, 172, 213, 0.5);
`;
