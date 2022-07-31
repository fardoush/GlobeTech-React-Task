// import React from 'react';


import React from 'react';
import ServiceData from './ServiceData';

const Card = (props) => {
  return (
    <>

<div className="col-lg-4 col-md-4 col-sm-12">

<div className="card">
<img src={props.img} alt="" className='img-fluid card-img-top'  />
<div class="card-body">
    <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{ props.paragraph}</p>

        <div className="service-button-holder">
          <a href="#cf" class="btn more-btn">{props.more}</a>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Card;
