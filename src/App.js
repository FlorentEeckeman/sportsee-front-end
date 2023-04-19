import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import styled from "styled-components";

/**
 * main component of react app
 * @returns {object}
 */
function App() {
  return (
    <BodyDiv>
      <Header />
      <MainDiv>
        <NavBar />
        <Dashboard />
      </MainDiv>
    </BodyDiv>
  );
}
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
export default App;
