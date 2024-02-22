import React from "react";

const Home = (props) => {
  
  return (
    <div className="container">
      <h1>Welcome to Home page</h1>
      <div className="info">
        <h3>Name: {props.data.name}</h3>
        <h3>Email:{props.data.email} </h3>
        <h3>Age: {props.data.age} </h3>
        <h3>Address: {props.data.address}</h3>
       
      </div>
    </div>
  );
};

export default Home;
