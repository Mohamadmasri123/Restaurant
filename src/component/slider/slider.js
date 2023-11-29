import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import simab from "./../../assets/simab.jpg"
import john from "./../../assets/john.jpg"
import maccy from"./../../assets/maccy.jpg"
import "./slider.css" 


function UncontrolledExample() {
return(


<Carousel className="Carousel">
<Carousel.Item className="item"> 
  <img src={simab} className="img1"/>
  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
   <span> simab Khadi -  mobile application </span>
</Carousel.Item>
<Carousel.Item className="item" >
<img src={john} className="img2"/>
    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
   <span> Johnthan Doe - UX Designer</span>
</Carousel.Item>
<Carousel.Item className="item">
<img src={maccy} className="img3" />
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live far from the countries Vokalia.Separated they live far ""</p>
    <span>Maccy Doe - Front End</span>
  
</Carousel.Item>
</Carousel>)}


export default UncontrolledExample;