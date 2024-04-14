import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/CartSlice";

export default function ShopComp() {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (data) => {
    const isProductInCart = cartitem.find((item) => item.id === data.id);
    if (!isProductInCart) {
      dispatch(add(data));
    }
  };

  const products = apiData.map((data) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }} key={data.id}>
        <Card className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={data.image}
              style={{ width: "100px", height: "130px", marginTop: "10px" }}
            />
          </div>

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            {/* <Card.Text>
              {data.description}
            </Card.Text> */}
            <Card.Text>INR : {data.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addToCart(data)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h1> ShopComp </h1>

      {/* {JSON.stringify(apiData)} */}
      <div className="row">{products}</div>
    </div>
  );
}
