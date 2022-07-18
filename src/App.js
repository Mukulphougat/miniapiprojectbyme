import './App.css';
import './cardStyle.css';
import {useState} from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);
  const [changed, setChanged] = useState(false);
  const [key, setKey] = useState(0);
  const [newData, setNewData] = useState({});

  async function getReq() {
    const res = await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020");
    setData(res.data.results)
  }
  function setChange(curr,index){
    console.log(index)
    console.log(curr)
    setChanged(true)
    setKey(index)
    setNewData(curr)
  }
  return (
      <div className="App">
        <div className={"navbar"}>
          <div className={"navbar-item"}>
            <div className={"product"}>Product</div>
            <div>Download</div>
            <div>Pricing</div>
          </div>
          {/*<input type={"text"} placeholder={"Enter Name"} onChange={(e) => setItem(e.target.value)}/>*/}
        </div>
        {/*<h1>{item}</h1>*/}
        <button onClick={() => getReq()} className={"buttons"}>Get</button>
        <div>
          {
            changed ?
                <Card data={newData} key={key}/>
                :
                <h1>Click On Get Button..</h1>
          }
        </div>
        <div className={"containers"}>
          {

            // eslint-disable-next-line array-callback-return
            data.map((curr, index) => {
              return (
                  <div className={"card-container"} onClick={() => setChange(curr,index)} key={index}>
                    <div className={"c-details"}>{curr.gender}.{curr.nat}</div>
                    <div className={"c-details"}>{curr.name.title+" "+curr.name.first+" "+curr.name.last}</div>
                    <div className={"c-details"}>{curr.email}</div>
                  </div>
              )
            })
          }

        </div>
      </div>
  );
}

export default App;
