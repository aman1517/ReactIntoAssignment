import logo from './logo.svg';
import './App.css';

function App() {
  const mobile=["Andoride","Blackbery","Iphone","WindoPhone"]
  const MM=["Sumgung","HTC","MicroMax","Apple"]
  return(
  <div>
     <h2>Mobile Operating System</h2> 
      <ul>
      
          {
              mobile.map((el,i)=>{
                  return <li>{el}</li>
              })
          }
      </ul>
      <h2>Mobile Manufactures</h2>
      <ul>
    
      
          {
              MM.map((el,i)=>{
                  return <li>{el}</li>
              })
          }
          </ul>
  </div>
  );
}

export default App;
