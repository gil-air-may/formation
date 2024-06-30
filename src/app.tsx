import { styled } from "styled-components";
import { Button, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <MainBox>
      <Text fontSize="xl">Enter formation:</Text>

      <div>
        <Button>as Server</Button>
        <Button>as Client</Button>
      </div>

      <Text>Select a configuration for this machine</Text>
    </MainBox>
  );
};

export default App;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 24px);
`;
