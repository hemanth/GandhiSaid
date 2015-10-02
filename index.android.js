/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var GandhiSaid = require('./quotes.json');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

var GandhiSays = React.createClass({
  getInitialState: function() {
    return {quote: ''};
  },
  componentWillMount: function() {
    this._setQuote();
  },
  render: function() {
    return (
      <View style={styles.container} onTouchStart={this._setQuote}>
        <Text style={styles.quote}>
            {this.state.quote}
        </Text>
        <Image style={styles.signature} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mahatma-Gandhi-Signature-Transparent.png'}}/>
      </View>
    );
  },
  _setQuote: function() {
     this.setState({
      quote: GandhiSaid[Math.floor(Math.random() * GandhiSaid.length)]
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  quote: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'Cochin'
  },
  signature: {
    height: 30,
    width: 100
  }
});

AppRegistry.registerComponent('GandhiSays', () => GandhiSays);
