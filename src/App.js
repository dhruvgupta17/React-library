import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Img from 'react-optimized-image';
import Logo from './logo.png';
import Sidemenu from './Dashboard/sidemenu';
import 'bootstrap/dist/css/bootstrap.css';
function Posts(){
    const box = [
       {
        id:1,
        name :"web demo",
        img:"https://s3-ap-south-1.amazonaws.com/sleepycat-wordpress-test/wp-content/uploads/2020/05/28132254/animated-logo-new3.gif"
      },  
      {
        id:2,
        name :"faceBook",
        img:"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
      } ,
      ]
   
    const listitem = box.map((post)=> 
    <div>
      <h1>{post.id}</h1>
      <p>{post.name}</p>
      <img src={post.img}/>
    </div>
    )
    return(
      <div>
        {listitem}
      </div>
    ) 
  }


class App extends React.Component { 
 render() {
  return(
   <div id="mount">
   <Sidemenu/>
   {/* <Posts/> */}
   </div>
  );
 }
}
export default App