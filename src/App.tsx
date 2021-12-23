// import { FC } from "react";
import { AppContainer } from "./styles/styles";
import AddNewItem from "./Components/AddNewItem";
import { Column } from "./Components/Column";
import Card from "./Components/Card";
function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
