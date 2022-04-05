import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './Card.css'

const Card = () => {

    const [name, setName] = useState("");
  const [large, setLarge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
 


  const randomUser =() =>{
    var config = {
        method: 'get',
        url: 'https://randomuser.me/api',
        headers: { }
      };
      
    axios(config)
    .then(function (res) {
    setName(res.data.results[0].name);
    setLarge(res.data.results[0].picture.large);
    setEmail(res.data.results[0].email);
    setPhone(res.data.results[0].phone);
    setCity(res.data.results[0].location.city);
    setAge(res.data.results[0].dob.age);
    setDate(res.data.results[0].registered.date);
    setGender(res.data.results[0].gender);
    setCountry(res.data.results[0].location.country);
  
        })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
      randomUser();
      
  },[]);

  return (
      <>
   <div className="center">
<div className="card green">
  <div className="additional">
    <div className="user-card">
      
     
      <svg style={{ backgroundImage: `url(${large})` }} width="110" height="110"   role="img"  className="center">
       
       
       
      </svg>
    </div>
    <div className="more-info">
      <h1>Informations</h1>
      <div className="coords">
        <span>Email: </span>
        <span>{email}</span>
      </div>
      <div className="coords">
      <span>Register Date: </span>
      <span>{date.slice(0,10)}</span>
      </div>

      <div className="coords">
      <span>Phone Number: </span>
      <span>{phone}</span>
      </div>


      <div className="stats">
        <div>
          <div className="title">Age</div>
          <i className="fa fa-trophy"></i>
          <div className="value">{age}</div>
        </div>
        <div>
          <div className="title">Gender</div>
          <i className="fa fa-gamepad"></i>
          <div className="value">{gender}</div>
        </div>
       
       
      </div>
    </div>
  </div>
  <div className="general">
    <h1>{name.title} {name.first} {name.last}</h1>
    <p>City : {city}</p>
    <p>Country : {country}</p>
    
    
    
    <span className="more">Mouse over the card for more info</span>
  </div>
</div>

</div>

<div class="buttons">
  <div class="container">
     
  </div>
</div>


    </>
    
  )
}

export default Card