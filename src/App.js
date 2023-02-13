import React, { useState } from 'react';
import { Main, Inputs, BtnBorder, Button, MainBorder, BtnRow } from './Styled';

const App = () => {
  const [number, setNumber] = useState([]); // 화면상 보여지는 배열
  const [allNumbers, setAllNumbers] = useState([]); // eval() 쓰기위해 기호까지 다 받는 배열
  const [result, setResult] = useState(''); // eval 쓴 후 받을 배열
  const [click, setClick] = useState(false); // 숫자 눌렀을 경우는 number, = 눌렀을 경우 result 보여주기위한 수단
  
  const onClickNum = (e)=> {
    const { target: { name } } = e;
    setClick(false);

    if(result.length === 1) {
      result.pop();
    }

    setNumber([...number, name]);
    setAllNumbers([...allNumbers, name]);
    console.log(allNumbers)
  };

  const calculate = e=> {
    const { target: { name } } = e;
    setClick(false);
    setNumber(number.filter((data, idx)=> data === idx));
    setAllNumbers([...allNumbers, name]);
    if (name === '=') {
      setClick(true);
      setResult([...result, eval(allNumbers.join(''))]);
      setAllNumbers((prev)=> "");
      console.log(allNumbers.join(''))
    }
  };

  return (
    <div>
      <Main>
        <MainBorder>
          <Inputs>{click ? parseFloat(result) : number}</Inputs>
          <BtnBorder>
            <BtnRow>
              <Button name='7' onClick={onClickNum}>7</Button>
              <Button name='8' onClick={onClickNum}>8</Button>
              <Button name='9' onClick={onClickNum}>9</Button>
              <Button name='/' onClick={calculate}>%</Button>
            </BtnRow>
            <BtnRow>
              <Button name='4' onClick={onClickNum}>4</Button>
              <Button name='5' onClick={onClickNum}>5</Button>
              <Button name='6' onClick={onClickNum}>6</Button>
              <Button name='-' onClick={calculate}>-</Button>
            </BtnRow>
            <BtnRow>
              <Button name='1' onClick={onClickNum}>1</Button>
              <Button name='2' onClick={onClickNum}>2</Button>
              <Button name='3' onClick={onClickNum}>3</Button>
              <Button name='*' onClick={calculate}>X</Button>
            </BtnRow>
            <BtnRow>
              <Button name='0' onClick={onClickNum}>0</Button>
              <Button name='.' onClick={onClickNum}>.</Button>
              <Button name='+' onClick={calculate}>+</Button>
              <Button name='=' onClick={calculate}>=</Button>
            </BtnRow>
          </BtnBorder>
        </MainBorder>
      </Main>
    </div>
  );
};

export default App;
