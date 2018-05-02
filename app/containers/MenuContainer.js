import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import {
  getUserSelectionType,
  getUserSelectionOrigin
} from "../store/selectionStore";

const mapStateToProps = state => ({
  userSelectionType: getUserSelectionType(state),
  userSelectionOrigin: getUserSelectionOrigin(state)
});

const mapDispatchToProps = dispatch => ({
  ask: val => {
    dispatch({ type: "ASK_FOR_DELIVERY", payload: val });
  },
  offer: val => {
    dispatch({ type: "OFFER_DELIVERY", payload: val });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
