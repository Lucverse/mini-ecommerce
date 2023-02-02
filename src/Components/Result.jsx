import { useSelector } from "react-redux";

var myStyle = {
  width: "500px",
  margin: "50px auto",
  padding: "50px",
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius:'10px'
};
function Result(props) {
  let data = useSelector((store) => {
    return store; 
  })

  return (
    <div style={myStyle}>
      <h1>Result Component</h1>
      <h4>Name : {data.name}</h4>
      <h4>City : {data.city}</h4>
    </div>
  );
}

export default Result;
