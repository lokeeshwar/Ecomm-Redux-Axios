import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {remove} from '../features/CartSlice'


export default function CartComp() {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const RemoveCart = (data) => {
    dispatch(remove(data))
  }

  const products = cartProduct.map((data) => {
    return (
      <div className="col-md-12" style={{ marginBottom: "10px" }} key={data.id}>
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
            <Button variant="danger" onClick={() => RemoveCart(data.id)}>Remove from Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>Cart Comp</h1>
      <div className="row">{products}</div>
    </>
  );
}
