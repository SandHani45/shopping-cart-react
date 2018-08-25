import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Col, Row, Modal, Button, Header } from "react-bootstrap";
// reducers
import { changeProductQuantity } from "../../redux/actions";
//types
import { LOAD_JSONDATA, REMOVE_ITEM } from "../../redux/types";
//Components
import ViewCart from "../../components/ViewCart";
//DB Path
import cartList from "../../config/data.json";
//Css
import "../../App.css";
//Models
import ViewModal from "./../../components/Modals";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  //Load DB
  componentDidMount() {
    const { loadJson } = this.props;
    loadJson();
  }
  //get product id from edit model
  handleShow = id => {
    this.setState({
      show: true,
      id
    });
  };

  //close the model
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  //Change Quantity Event
  onChangeQuantity = (value, index) => {
    const { cartList, changeProductQuantity } = this.props;
    changeProductQuantity(index, value, cartList);
  };
  //Remove Event
  clickRemove = index => {
    const { removeData, cartList } = this.props;
    removeData(index, cartList);
  };

  render() {
    const { id, show } = this.state;
    const { cartList } = this.props;
    let totleItems = cartList.length;
    return (
      // cart header
      <Grid>
        <Row className="show-grid cart-header">
          <Col xs={3} md={8}>
            <p>{totleItems} ITEMS</p>
          </Col>
          <Col xs={3} md={1}>
            {"Size "}
          </Col>
          <Col xs={3} md={1}>
            {" QTY"}
          </Col>
          <Col xs={3} md={2}>
            {" "}
            <p className="float-right ">Price</p>
          </Col>
        </Row>
        {/* //end cart header */}
        {/* Model  */}
        <ViewModal show={show} id={id} onHide={this.handleClose} />
        {/*End  Model  */}
        <Row className="show-grid">
          <Col xs={12} md={12}>
            {cartList.map((data, key) => {
              return (
                <ViewCart
                  key={key}
                  data={data}
                  index={key}
                  handleShow={this.handleShow}
                  clickRemove={this.clickRemove}
                  onChangeQuantity={this.onChangeQuantity}
                />
              );
            })}
          </Col>
        </Row>
      </Grid>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeProductQuantity: (index, value, cartList) => {
      changeProductQuantity(index, value, cartList, dispatch);
    },
    removeData: (index, cartList) => {
      let datalist = cartList.filter((data, i) => (i == index ? false : true));
      dispatch({ type: REMOVE_ITEM, cartList: datalist });
    },
    loadJson: () => {
      dispatch({ type: LOAD_JSONDATA, cartList });
    }
  };
};

const mapStateToProps = state => {
  return {
    cartList: state.cartList.cartList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
