import React from "react";
import './App.css';
import full from './icons/star-full.svg';
import empty from './icons/star.svg';

export default function InfoFigure(props) {
    const { product } = props;
    
    var num = product.price;
    var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(commas);

    return (
        <div key={product._id} className="card">
            <e href={`/$(product._id)`}>
                {/* <tel className="classless"></tel> */}
                <img className="card-pic" src={product.image_url}/>
                <img className="card-logo" src={product.brand_info.url}/>
                <pref className="precard-name">
                    <f className="card-name">{product.name}</f>
                </pref>
                <g className="card-pricetag">Price</g>
                <h className="card-price">฿{commas}</h>
                <i className="card-review">Reviews ({product.review.number} reviews)</i>
                <plie className="precard-rating">
                    <j>
                        {product.review.rating == 5 &&
                        <div  className="card-rating">
                            <img className="rating" src={full} alt="1"></img>
                            <img className="rating" src={full} alt="2"></img>
                            <img className="rating" src={full} alt="3"></img>
                            <img className="rating" src={full} alt="4"></img>
                            <img className="rating" src={full} alt="5"></img>
                        </div>
                        }
                        {product.review.rating == 4 &&
                        <div  className="card-rating">
                            <img className="rating" src={full} alt="1"></img>
                            <img className="rating" src={full} alt="2"></img>
                            <img className="rating" src={full} alt="3"></img>
                            <img className="rating" src={full} alt="4"></img>
                            <img className="rating" src={empty} alt="5"></img>
                        </div>
                        }
                        {product.review.rating == 3 &&
                        <div  className="card-rating">
                            <img className="rating" src={full} alt="1"></img>
                            <img className="rating" src={full} alt="2"></img>
                            <img className="rating" src={full} alt="3"></img>
                            <img className="rating" src={empty} alt="4"></img>
                            <img className="rating" src={empty} alt="5"></img>
                        </div>
                        }
                        {product.review.rating == 2 &&
                        <div  className="card-rating">
                            <img className="rating" src={full} alt="1"></img>
                            <img className="rating" src={full} alt="2"></img>
                            <img className="rating" src={empty} alt="3"></img>
                            <img className="rating" src={empty} alt="4"></img>
                            <img className="rating" src={empty} alt="5"></img>
                        </div>
                        }
                        {product.review.rating == 1 &&
                        <div  className="card-rating">
                            <img className="rating" src={full} alt="1"></img>
                            <img className="rating" src={empty} alt="2"></img>
                            <img className="rating" src={empty} alt="3"></img>
                            <img className="rating" src={empty} alt="4"></img>
                            <img className="rating" src={empty} alt="5"></img>
                        </div>
                        }
                        {product.review.rating == 0 &&
                        <div  className="card-rating">
                            <img className="rating" src={empty} alt="1"></img>
                            <img className="rating" src={empty} alt="2"></img>
                            <img className="rating" src={empty} alt="3"></img>
                            <img className="rating" src={empty} alt="4"></img>
                            <img className="rating" src={empty} alt="5"></img>
                        </div>
                        }
                    </j>
                </plie>
            </e>
        </div>
    )
  }