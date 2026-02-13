import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {} from "react-redux"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardData";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Store/cartSlice.jsx";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const send = (element) => {
    dispatch(addToCart(element));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>
      <div className="row d-flex justify-content-center align-item-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
                key={id}
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem", cursor: "pointer" }}
                  className="mt-3"
                  onClick={() => navigate(`/details/${element.id}`)}
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : Rs {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;