import React, { useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router';
import styled from 'styled-components';

const RecipeCard = ({ recipe }) => {
  const [showFullIngredients, setShowFullIngredients] = useState(false);
  const MAXINGREDIENTSLENGTH = 150;

  const toggleIngredients = () => {
    setShowFullIngredients(!showFullIngredients);
  };

  const displayIngredients = () => {
    if (recipe.ingredients.length <= MAXINGREDIENTSLENGTH || showFullIngredients) {
      return recipe.ingredients;
    }
    return `${recipe.ingredients.substring(0, MAXINGREDIENTSLENGTH)}...`;
  };
  return (
    <Zoom delay={200}>
      <StyledWrapper>
        <div className="card">
          <div className="content">
            <div className='back'>
              <p>{recipe.title}</p>
            </div>
            <div className="back">
              <div className="back-content">
                <img className='h-full w-full' src={recipe.image} alt="" />
                <div className="description absolute bottom-3 space-y-2">
                  <div className="title">
                    <p className="title">
                      {recipe.title}
                    </p>

                  </div>
                  <p className="card-footer">
                    {recipe.time} minute &nbsp; | &nbsp; {recipe.likes} people Like this
                  </p>
                  <div className='text-end mt-2'>
                    <Link to={`/recipedetails/${recipe._id}`} ><small className="badge text-white">View Details</small></Link>
                  </div>
                </div>

              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle">
                </div>
                <div className="circle" id="right">
                </div>
                <div className="circle" id="bottom">
                </div>
              </div>
              <div className="front-content">
                <small className="badge">{recipe.cuisine}</small>
                <div className="description">
                  <p>ingredients</p>
                  <p className='card-footer'>{displayIngredients()}
                    {recipe.ingredients.length > MAXINGREDIENTSLENGTH && (
                      <button
                        onClick={toggleIngredients}
                        className="text-blue-400 hover:text-blue-300 ml-1 text-xs"
                      >
                        {showFullIngredients ? 'See Less' : 'See More'}
                      </button>
                    )}</p>
                  <div className='text-end mt-2'>
                    <Link to={`/recipedetails/${recipe._id}`} ><small className="badge text-white">View Details</small></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </StyledWrapper>
    </Zoom>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    height: 260px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1500ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

   .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 10px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -1000ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }`;

export default RecipeCard;
