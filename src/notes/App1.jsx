import "./index.css";
import { Msg } from "../msg";
import fun,{dbl} from"../shared";
import { User } from "../User";


// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts

  // Logic Ends
  //  const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin","KATHI BOYS"];
  const objans=[{
    img:"https://wallpaperaccess.com/full/5658651.jpg",name:"Arjun"},
  {
    img:"https://globalzonetoday.com/wp-content/uploads/Monisha-Blessy.jpg",name:"Monish"
  },
{
  img:"https://cdn.123telugu.com/content/wp-content/uploads/2022/07/Legend-Saravanan.jpg",name:"Saravanan"
}]
  return (
     
    // UI Starts
    <div className="App">
      {/* prop - name */}
      {/* // 1 method */}
        {/* {objans.map((user) => (
        <User name={user.name} img={user.img} />
      ))} */}
      {objans.map(({name,img}) => (
        <User name={name} img={img} />
      ))}
      <section className="user-list-container">

        
      {/* <User
        img="https://wallpaperaccess.com/full/5658651.jpg"
        alt=""
        name="Arjun"
      />

      <User
        img="https://globalzonetoday.com/wp-content/uploads/Monisha-Blessy.jpg"
        name="Monish"
      />

      <User
        img="https://cdn.123telugu.com/content/wp-content/uploads/2022/07/Legend-Saravanan.jpg"
        name="Saravanan"
      /> */}
      </section>
    </div>
    
  );
}


