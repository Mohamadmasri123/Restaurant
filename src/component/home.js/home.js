import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import prideImg from "./../../assets/1.png"
import ingredients from "./../../assets/3.png"
import Data from "../../Data";
import UncontrolledExample from "./../slider/slider"
import Footer from "./../footer/footer";

const Home= ()=>{
    const blogitem = Data.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <h5>{item.title}</h5>
                    <span> {item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button><a href="#"> order now</a></button>
            </div>
        )
    })

return(
    <Fragment>
    <Header/>
    <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>1287+</h2>
                    <h6>SAVINGS</h6>
                </div>
                <div className="col-md-3">
                    <h2>5786+</h2>
                    <h6>PHOTOS</h6>
                </div>
                <div className="col-md-3">
                    <h2>1440+</h2>
                    <h6>ROCKETS</h6>
                </div>
                <div className="col-md-3">
                    <h2>7110+</h2>
                    <h6>GLOBES</h6>
                </div>
                      
            </div>
        </div>
    </section>
    <section className="pride">
        <div className="container">
             <div className="row">
                <div className="col-md-6">
                <img src={prideImg}  title="imgprid" />
                </div>
                <div className="col-md-6">
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button><a href="#"> learn More</a> </button>
                </div>
             </div>
        </div>
    </section>
    <section className="ingredients">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li> purus a odio finibus bibendum.</li>
                    </ul>
                    <button>
                        <a href="#" >learn More</a>
                        </button>
                </div>
                <div className="col-md-6">
                    <img  src={ingredients} />
                </div>
            </div>
        </div>
    </section>
    <section className="paralex">
        <div className="container">
            <div className="row">
                <div className="col-lg-12  col-md-12">
                <h2>When a man's stomach is full it makes no <br/>  difference whether he is rich or poor .</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>  finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <a href="#"> Watch OUR Story</a>
                </div>
            </div>
        </div>


    </section>
    <section className="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12  col-md-12  center">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>

                <div className="row">
                    {blogitem}
                </div>
            </div>
        </div>
    </section>
    <section>
            <UncontrolledExample/>

    </section>

    <section className="question">
          <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="center">Frequently Asked Questions</h2>
                </div>
                <div className="col-md-6">
               <div>
                <h4> 
                    <span>~</span>  Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div> 
                <div>
                    <h4><span>~</span>Can I order your products online?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div> 
                </div>
                <div className="col-md-6">
                <div>
                    <h4><span>~</span>Do you bake breads containing animal fats or products?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div> 
                <div>
                    <h4><span>~</span> Do you bake breads containing animal fats or products?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div> 
                
                 </div>

            </div>
        </div>
    </section>
    <section className="Baked">
    <div className="container">
            <div className="row">
                <div className="col-6">
                <h4>Baked fresh daily by bakers with passion.</h4>
                </div>   
                <div className="col-6">
                 <button>   <a href="#">learn more</a></button>
                 
                 </div>

            </div>
        </div>
    </section>
    <section className="Subscribe ">
    <div className="container">
            <div className="row">
                <div className="col-lg-12  col-md-12">
                    <h2>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h2>
                    <p>Limited time offer for this month. No credit card required.</p>
                </div>
                <div className="col-9">
                <input type="email"  value="Email Address here " className="inpute"/> 
                </div>   
                <div className="col-2">
                 <button>   <a href="#">Subscribe</a></button>
                 
                 </div>
            </div>
                </div>
    </section>
    <section>
        <Footer/>
    </section>

    </Fragment>
    );

}
export default  Home;