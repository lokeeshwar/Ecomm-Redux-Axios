import { React, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/CartSlice";
import { getProducts } from "../features/ShopSlice";
import Alert from "react-bootstrap/Alert";

export default function ShopComp() {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);
  const { data: apiData, status } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <h3>loading......</h3>;
  }

  if (status === "error") {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong!!! Try Again Later
      </Alert>
    );
  }

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
              src={data.images[0]}
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
            />
          </div>

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
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
      <div className="row">{products}</div>
    </div>
  );
}
