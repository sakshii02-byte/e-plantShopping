import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

// Plant data organized into categories
const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        name: "Lavender",
        image:
          "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500",
        description:
          "A fragrant plant known for its calming aroma and beautiful purple flowers.",
        cost: 15,
      },
      {
        name: "Rosemary",
        image:
          "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=500",
        description:
          "An aromatic herb commonly used in cooking and home gardens.",
        cost: 12,
      },
      {
        name: "Mint",
        image:
          "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500",
        description:
          "A refreshing herb with a pleasant fragrance, perfect for indoor growing.",
        cost: 8,
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
        description:
          "A popular succulent known for its easy care and traditional skincare uses.",
        cost: 10,
      },
      {
        name: "Snake Plant",
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
        description:
          "A hardy indoor plant with upright leaves that thrives with minimal care.",
        cost: 18,
      },
      {
        name: "Peace Lily",
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
        description:
          "An elegant houseplant with glossy green leaves and beautiful white blooms.",
        cost: 20,
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      {plantsArray.map((category) => (
        <section key={category.category} className="plant-category">
          <h2>{category.category}</h2>

          <div className="product-grid">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <h3>{plant.name}</h3>

                <p>{plant.description}</p>

                <p className="product-price">
                  <strong>Price: ${plant.cost}</strong>
                </p>

                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={Boolean(addedToCart[plant.name])}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;