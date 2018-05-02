import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "../store/selectionStore.js";
import PickerContainer from "../containers/PickerContainer.js";
import MenuContainer from "../containers/MenuContainer.js";
import LinearGradient from "react-native-linear-gradient";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = { lgsettings: ["#16222A", "#3A6073"] };
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.AppContainer}>
          <StatusBar
            backgroundColor={this.state.lgsettings[0]}
            barStyle="light-content"
          />
          <LinearGradient
            colors={this.state.lgsettings}
            style={styles.linearGradient}
          >
            <MenuContainer />
          </LinearGradient>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  AppContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  }
});
