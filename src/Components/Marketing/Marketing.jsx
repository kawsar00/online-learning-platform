import React from 'react';

const Marketing = (props) => {
  const { title, picture, mentor, price, star } = props.marketingCourse
  return (
    <div className="col-md-4">
      <div className="single-item my-4">
        <div className="card p-2 card-shadow">
          <img className="card-img-top" src={picture} alt={title} />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <span><small>{mentor}</small></span><br />
            <span className="price font-weight-bold">${price}</span>   <span className="text-muted"><del>$120</del></span>
            <span className="rating">4.6 </span><img className="star" src={star} alt="" />
            <br />
            <button className="btn btn-sm btn-primary w-100 my-2"
              onClick={() => props.addToCart(props.marketingCourse)}>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;