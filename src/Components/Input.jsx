import { useState } from "react";
import { myAction } from "../Action/myAction";
import {CityAction } from '../Action/CityAction';
import { useDispatch } from "react-redux";
var myStyle = {
  width: "500px",
  margin: "50px auto",
  padding: "50px",
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius:'10px'
};
function Input(props) {
  var dispatch = useDispatch();
  const [state, setState] = useState("");
  const [city, setCity] = useState('');

  const SendDataToAction = () => {
    myAction(state);
    CityAction(city, dispatch);
  };
  return (
    <div style={myStyle}>
      <h1>Input Component</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <br/>
      <input
      type='text'
      placeholder="Enter City"
      onChange={(e)=>{
        setCity(e.target.value);
      }}
      />
      <br />
      <button onClick={SendDataToAction}>Send Data to Redux</button>
    </div>
  );
}

export default Input;
