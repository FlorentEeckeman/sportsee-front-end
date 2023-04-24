import { useState } from "react";
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
  const [user, setUser] = useState(12);
  return (
    <BodyDiv>
      <Header />
      <MainDiv>
        <NavBar setUser={setUser} user={user} />
        <Dashboard user={user} />
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
