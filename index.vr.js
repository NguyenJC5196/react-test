import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Animated
} from 'react-vr';
// import BouncingText from './componet/BouncingText';

export default class side_test extends React.Component {
  render() {
    return(
        <View>
          <Pano source={asset("chess-world.jpg")} />
          <View
            style={{
              flex: 1,
              width: 2,
              flexDirection: 'column',
              alignItems: 'stretch',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -5]}]
            }}
          >
          <BouncingText message="abcdef"/>
          </View>
        </View>
    );
  }
};

AppRegistry.registerComponent('side_test', () => side_test);
class BouncingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.spring(this.state.bounceValue, {
      toValue: 2,
      friction: 2.5,
      tension: 4
    }).start();
  }

  render() {
    return (
      <Animated.Text
        style={{
          layoutOrigin: [-2, -2],
          transform: [
            { translate: [0, 0, -1] },
            { scale: this.state.bounceValue }
          ]
        }}
      >
        {this.props.message}
      </Animated.Text>
    );
  }
}
class TextBoxs extends React.Component {
  render() {
    const US_states = { Arizona: "Arizona", NewHampshire: "New Hampshire", California: "California", Hawaii: "Hawaii", Texas: "Texas" };
    return <View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#CF3C7E" }}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>
            Arizona
          </Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#CF3C7E" }}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>
            New Hampshire
          </Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#CF3C7E" }}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>
            California
          </Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#CF3C7E" }}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>Hawaii</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#CF3C7E" }}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>Texas</Text>
        </View>
      </View>;
  }
};

class NestedMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "click me",
      showMessage: false
    };
    // setTimeout(() => {
    //   this.setState({ message: "from setTimeout()" });
    // }, 500);
  }
  render() {
    const showMessage = this.state.showMessage;
    return (
      <View>
        {showMessage ? (
          <VrButton 
            onClick={ ()=> this.handleClick()}>
            <Text
              style={{
                backgroundColor: "#777879",
                fontSize: 0.8,
                fontWeight: "400",
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: "center",
                textAlignVertical: "center",
                transform: [{ translate: [0, 0, -3] }]
              }}>
              {this.state.message}
            </Text>
          </VrButton>
        ):(
          <Text></Text>
        )}</View>
    );
  }
  handleClick() {
    this.setState({ message: "you just clicked me >.0 " });
  }
  componentWillMount(){
    console.log("will mount");
  }
  componentDidMount(){
    console.log("Did mount");
    // this.setState({ showMessage: false });
    
  }
};