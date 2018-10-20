import React from "react";


const User = (props) => {
    let data = props.user.login
  return (
    <div className="user-container">
      <div className="avatar">
        <img alt="avatar" src="" />


      </div>
     <div className="info">
        <div><span>Name: </span>{data.name}</div>
        <div><span>Lastname: </span>{data.lastname}</div>
        <div><span>Email: </span>{data.email}</div>

     </div>


    </div>
  );
};

export default User;
