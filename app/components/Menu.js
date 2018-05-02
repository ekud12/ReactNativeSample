import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import FadeInView from "./animated-containers/FadeInView";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnOffer: "Offer",
      btnAsk: "Ask"
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => this.props.ask(1)}
        >
          <FadeInView>
            <Icon name="aircraft-take-off" size={100} color="#000" />
          </FadeInView>
        </TouchableOpacity>

        <Text>
          {" "}
          you Chose to :
          {this.props.userSelectionType}, from :{this.props.userSelectionOrigin}
        </Text>

        <TouchableOpacity
          style={styles.btnView}
          onPress={() => this.props.offer(2)}
        >
          <FadeInView>
            <Icon name="aircraft-landing" size={100} color="#000" />
          </FadeInView>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {},
  wrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    alignItems: "stretch",
    height: "100%"
  },
  btnView: {
    flex: 0.5,
    justifyContent: "space-around",
    alignItems: "center",
    opacity: 1,
    backgroundColor: "white",
    margin: 65,
    elevation: 7
  },
  btnText: {
    color: "white",
    fontFamily: "montserrat-semibold",
    fontSize: 30
  }
});
