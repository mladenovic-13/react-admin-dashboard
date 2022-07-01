import React from "react";
import { Container } from "./style";

interface Props {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    img: string;
  };
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <h1 className="cardTitle">Personal Informations</h1>
      <div className="wrapper">
        <div className="imgWrapper">
          <img className="img" src={user.img} alt="User" />
        </div>
        <div className="infoWrapper">
          <h1 className="name">{user.name}</h1>
          <div className="info">
            <p className="type">Email:</p>
            <p className="text">{user.email}</p>
          </div>
          <div className="info">
            <p className="type">Phone:</p>
            <p className="text">{user.phone}</p>
          </div>
          <div className="info">
            <p className="type">Address:</p>
            <p className="text">{user.address}</p>
          </div>
          <div className="info">
            <p className="type">Country:</p>
            <p className="text">{user.country}</p>
          </div>
        </div>
        <span className="edit">Edit</span>
      </div>
    </Container>
  );
};

export default UserCard;
