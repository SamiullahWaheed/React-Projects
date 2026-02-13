import React from "react";
import { useParams } from "react-router-dom";
import Cardsdata from "./CardData";
import Table from "react-bootstrap/Table";

const CardDetails = () => {
  const { id } = useParams(); // Get the card's id from the URL
  const data = Cardsdata.find((ele) => ele.id === parseInt(id)); // Find the card's data

  if (!data) 
  {
    return <h2 className="text-center">Item not found!</h2>;
  }

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>

      <section className="container mt-3">
        <div className="iteamsdetails">
          <div className="items_img">
            <img src={data.imgdata} alt={data.rname} />
          </div>

          <div className="details">
            <Table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>: {data.rname}
                    </p>
                    <p>
                      <strong>Price</strong>: Rs {data.price}
                    </p>
                    <p>
                      <strong>Dishes</strong>: {data.address}
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating</strong>:{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {data.rating} ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review</strong>: <span>{data.somedata}</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
