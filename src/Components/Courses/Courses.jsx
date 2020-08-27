import React from 'react';
import './Courses.css';
import webDesign from '../../fakeData/webDesign'
import webDevelopment from '../../fakeData/webDevelopment'
import graphicDesign from '../../fakeData/graphicDesign'
import DigitalMarketing from '../../fakeData/DigitalMarketing'
import { useState } from 'react';
import WebDesign from '../WebDesign/WebDesign';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import GraphicDesign from '../GraphicDesign/GraphicDesign';
import Marketing from '../Marketing/Marketing';
import Cart from '../Cart/Cart';

const Courses = () => {
  // get fakeData
  const [design] = useState(webDesign)
  const [development] = useState(webDevelopment)
  const [graphic] = useState(graphicDesign)
  const [marketing] = useState(DigitalMarketing)

  const [cart, setCart] = useState([])
  // button click handler function
  const addToCart = (course) => {
    const newCart = [...cart, course]
    setCart(newCart)
  }
  //get total price
  const totalPrice = cart.reduce((total, current) => total + current.price, 0);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 row border-right">
{/* ********************** web design component start ****************** */}
          <div id="webDesign" className="col-md-12 my-4 text-center"><h1>Web <span className="text-danger">design</span></h1> <hr />
          </div>
          {design.map(DesignCourse => <WebDesign DesignCourse={DesignCourse} addToCart={addToCart} key={DesignCourse.id}></WebDesign>)}
{/* ********************** web design component end ****************** */}

          <div id="development" className="col-md-12 my-4 text-center"><h1>Web <span className="text-danger">Development</span></h1> <hr />
          </div>
          {development.map(devCourse => <WebDevelopment devCourse={devCourse} addToCart={addToCart} key={devCourse.id}></WebDevelopment>)}
{/* ******************* web development component end **************** */}

          <div id="graphic" className="col-md-12 my-4 text-center"><h1>Graphic <span className="text-danger">design</span></h1> <hr />
          </div>
          {graphic.map(graphicCourse => <GraphicDesign graphicCourse={graphicCourse} addToCart={addToCart} key={graphicCourse.id}></GraphicDesign>)}
{/* ******************** graphic design component end ***************** */}

          <div id="marketing" className="col-md-12 my-4 text-center"><h1>Digital <span className="text-danger">Marketing</span></h1> <hr />
          </div>
          {marketing.map(marketingCourse => <Marketing marketingCourse={marketingCourse} addToCart={addToCart} key={marketingCourse.id}></Marketing>)}
        </div>
{/* ****************** digital marketing component start ************** */}

{/* **************** cart area all component goes here ************** */}
        <div className="col-md-3 ml-auto">
          <div className="col-md-12 my-4 text-center"><h2>Course <span className="text-primary">Summary</span></h2>
            <hr />
          </div>
          <h4 className="text-center mb-4">Total Enrolled: <span className="text-danger font-weight-bold ">{cart.length}</span> </h4>
          <button type="button" className="btn btn-primary btn-block mb-4">
            Total Price <span className="badge badge-light">${totalPrice.toFixed(2)}</span>
          </button>
          <ul className="list-group">
            {cart.map(cart => <Cart cart={cart} key={cart.id}></Cart>)}
          </ul>
        </div>
      </div>
    </div>    
  );
};

export default Courses;