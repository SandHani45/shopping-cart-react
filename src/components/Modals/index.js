import React from "react";
import { Modal, FormControl, Col, Image, Row } from "react-bootstrap";
import { connect } from "react-redux";
//Components
import Button from "../Button";
//reducers
import { changeProductQuantity } from "../../redux/actions";
//css
import "../../App.css";

class ViewModal extends React.Component {
  constructor(props) {
    super(props);
  }
  onChangeQuantity = (value, index) => {
    const { changeProductQuantity, cartList } = this.props;
    changeProductQuantity(index, value, cartList);
  };
  render() {
    console.log(this.props);
    const { id, show, onHide, cartList } = this.props;
    if (!id) {
      return null;
    } else {
      const {
        p_name,
        p_quantity,
        p_style,
        p_price,
        p_image,
        c_currency
      } = cartList[id];
      return (
        <div>
          <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton />
            <Modal.Body>
              <Row>
                <Col xs={6} md={6}>
                  <Row>
                    <div className="text-center text-upper">
                      <h4>{p_name}</h4>
                      <p className="price">
                        <span className="currency"> {c_currency}</span>
                        {p_price}
                      </p>
                      <p className="upper">{p_style}</p>
                    </div>

                    <div className="colors text-center">
                      <Button text={" "} color="#A3D2A1" className={"mr-2"} />
                      <Button text={" "} color="#F9F8E6" className={"mr-2"} />
                      <Button text={" "} color="#1169BD" className={"mr-2"} />
                    </div>
                  </Row>
                  <Row>
                    <Col xs={6} md={6} className="mt-4">
                      <select className="form-control">
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="extra large">extra large</option>
                      </select>
                    </Col>
                    <Col xs={6} md={6} className="mt-4">
                      <FormControl
                        type="number"
                        value={p_quantity}
                        placeholder={"Quantity"}
                        onChange={e =>
                          this.onChangeQuantity(e.target.value, id)
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6} className="mt-4">
                      <Button
                        text={"SAVE"}
                        color="#1d1da9"
                        className={"btn btn-primary"}
                        onClick={onHide}
                        width="271"
                        height="39"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={6}>
                  <Image src={p_image} style={{ width: "100%" }} />
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartList: state.cartList.cartList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeProductQuantity: (index, value, cartList) => {
      changeProductQuantity(index, value, cartList, dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewModal);
