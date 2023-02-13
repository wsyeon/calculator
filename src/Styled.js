import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MainBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 80vh;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(to top left, #a0a0ed, #f6ced4);
  box-shadow: 2px 5px 4px #b4a4a4;
`;

export const Inputs = styled.div`
  width: 80%;
  height: 10vh;
  border-radius: 0.5rem;
  background-color: #fff;
  font-size: 4rem;
  text-align: right;
  padding-right: 1.2rem;
`;

export const BtnBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 50vh;
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 60px;
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 1.3rem;
  border: none;
  margin-right: 8px;
  box-shadow: 3px 5px 3px #b5a8a8;
  font-size: 1.3rem;
  text-align: center;
  background: #d0dfe9;
  font-weight: bold;
  :hover {
    background-color: #7794aa;
    color: #fff
  }
`;