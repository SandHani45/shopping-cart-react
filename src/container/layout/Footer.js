import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import Button from "../../components/Button";
class Footer extends Component {
  render() {
    const { cartList } = this.props;
    let subtotal = 0;
    let aj100 = 15;
    cartList.map(cart => {
      let price = cart.p_price * cart.p_quantity;
      subtotal = subtotal + price;
    });
    let estimatedPrice = subtotal > 5 ? subtotal - aj100 : 0;

    return (
      <div className="container">
        <div className="show-grid cart-header row">
          <div className="col-md-6 col-xs-3">
            <div className="row mt-4">
              <div className="col-md-12">
                <p>Need help or have a question</p>
                <p>
                  Call customer service at <br /> 1800-189-200
                </p>
                <a href="#">chat with one of our</a> <br />
                <a href="#">see return and exchnage policy</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
            <div className="row cart-border">
              <div className="col-md-6">
                <p className="mg">{"Enter promotion code or Gift Card"}</p>
              </div>
              <div className="col-md-6 action-button">
                <input type="text" className="form-control" value="AJ100" />
                <button>{"APPLY"}</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="mg font-size">{"SUB TOTLE"}</p>
              </div>
              <div className="col-md-6 action-button flex-end">
                <p className="float-right bold font-size">{"$ " + subtotal}</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <p className="mg font-size">{"Promotion Code AJ100 APPLIED"}</p>
              </div>
              <div className="col-md-6 action-button flex-end">
                <p className="float-right bold font-size">{"$ " + aj100}</p>
              </div>
            </div>
            <div className="row border">
              <div className="col-md-6">
                <p className="mg font-size">
                  {"Estimted Shipping *"} <br />{" "}
                  <small className="small">Your qulity for free</small>
                </p>
              </div>
              <div className="col-md-6 action-button flex-end">
                <p className="float-right bold">{"Free"}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="mg font-size">
                  {"Estimted TOTAL "} <br />{" "}
                  <small className="small">Tax will be applied </small>
                </p>
              </div>
              <div className="col-md-6 action-button flex-end">
                <p className="float-right bold font-size">
                  {" "}
                  {"$ " + estimatedPrice}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="mg font-size" />
              </div>
              <div className="col-md-6 action-button">
                <a href="" className="mr-2">
                  CONTINUE SHOPPING
                </a>
                <Button
                  className={"btn btn-primary"}
                  width={"100"}
                  height={"30"}
                  text={"CHECK OUT"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartList: state.cartList.cartList
  };
};

export default connect(mapStateToProps)(Footer);
