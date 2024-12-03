import './App.css'
import Test from "./Test"

function App() {

// let age = 20;
// let name = "john";

let users = [
  { id: 1, name: "john", age: 20},
  { id: 2, name: "jane", age: 25},
  { id: 3, name: "bob", age: 30},
  { id: 4, name: "boba", age: 35}

]
  //js kodlari

  return (
    // html kodlari
    <>
      {
        // <p>name:{name}</p>
        // <p style={{fontSize:"30px"}}>age:{age}</p>
      }

      <ul>
        {users.map((user,) => {
          return (
            <li key={user.id}>
              name: {user.name} - age: {user.age}
            
            </li>
          );
        })}
      </ul>
      <Test/>
    </>
  )
}

export default App;
