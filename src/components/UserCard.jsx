import React, { Component } from "react";
import "./UserCard.css";

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      imageUrl: "./logo192.png",
    };
  }

  getRandomCard = () => {
    fetch(" https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        console.log(user);
        this.setState({
          imageUrl: user.picture.large,
          userName: `${user.name.first} ${user.name.last}`,
          userEmail: `${user.email}`,
          userPhone: `${user.phone}`,
          userState: `${user.location.country}`,
          userAddress: `${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state}`,
          userBirthday: `${user.dob.date}`,
          userAge: `${user.dob.age}`,
          isVisible: true,
        });
      });
  };

  handleClick = () => {
    this.getRandomCard();
  };

  render() {
    let innerClass = "userCard";

    if (this.state.isVisible) {
      innerClass += " visible";
    }

    return (
      <div className="container">
        <div>
          <button className="userButton" onClick={this.handleClick}>
            Generate Random User
          </button>
        </div>
        <div className={innerClass}>
          <div className="imageDiv">
            <img className="userPicture" src={this.state.imageUrl} alt="" />
          </div>
          <div className="contentDiv">
            <div class="grid-container">
              <div class="item1">
                <p>Name:</p>
              </div>
              <div class="item2">
                <h3>{this.state.userName}</h3>
              </div>
              <div class="item3">
                <p>Country:</p>
              </div>
              <div class="item4">
                <h4>{this.state.userState}</h4>
              </div>
              <div class="item5">
                <p>Address:</p>
              </div>
              <div class="item6">
                <p>{this.state.userAddress}</p>
              </div>
              <div class="item7">
                <p>Email:</p>
              </div>
              <div class="item8">
                <p>{this.state.userEmail}</p>
              </div>
              <div class="item9">
                <p>Phone:</p>
              </div>
              <div class="item10">
                <p>{this.state.userPhone}</p>
              </div>
              <div class="item11">
                <p>Age:</p>
              </div>
              <div class="item12">
                <p>{this.state.userAge}</p>
              </div>
              <div class="item13">
                <p>DOB:</p>
              </div>
              <div class="item14">
                <p>{this.state.userBirthday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
