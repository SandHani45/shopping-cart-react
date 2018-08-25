import React from "react";
import { Col, Row, Image, FormControl } from "react-bootstrap";
//Css
import "../../App.css";

const ViewCart = ({
  data,
  onChangeQuantity,
  handleShow,
  clickRemove,
  index
}) => {
  return (
    <div className="cart-border">
      <Row className="show-grid">
        <Col xs={8} md={8}>
          <Row>
            <Col xs={9} md={9}>
              <Row>
                <Col xs={6} md={6}>
                  <Image src={data.p_image} responsive />
                </Col>
                <Col xs={6} md={6}>
                  <h3 className="font-w60">{data.p_name}</h3>
                  <p className="p_style">
                    Style:
                    {data.p_style}
                  </p>
                  <p className="p_color">
                    Color:{" "}
                    <span className="bold">{data.p_selected_color.name}</span>
                  </p>
                  <div className="action-button">
                    <p
                      className="ml-2 border-right cursor"
                      onClick={() => handleShow(data.p_id)}
                    >
                      EDIT
                    </p>
                    <p
                      className="ml-2 border-right cursor"
                      onClick={() => clickRemove(index)}
                    >
                      X Remove
                    </p>
                    <p className="ml-2 cursor">Save for later</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={1}>
          {" "}
          <p>{data.p_selected_size.name}</p>
        </Col>
        <Col xs={3} md={1}>
          {" "}
          <FormControl
            type="number"
            value={data.p_quantity}
            placeholder={"Quantity"}
            onChange={e => onChangeQuantity(e.target.value, data.p_id)}
          />
        </Col>
        <Col xs={4} md={2}>
          {" "}
          <p className="float-right bold font-25">
            <span className="currency">{data.c_currency}</span>{" "}
            {data.p_price * data.p_quantity}
            .00
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ViewCart;
