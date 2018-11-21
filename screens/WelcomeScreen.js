import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Linking, Button } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
    { title: 'App: 1', text: 'facebook', uri: require('../assets/facebook.jpg'), url: 'https://www.facebook.com/shunto.kakii.7' },
    { title: 'App: 2', text: 'twitter', uri: require('../assets/twitter.jpg'), url: 'https://twitter.com/Kakki0310' },
    { title: 'App: 3', text: 'google', uri: require('../assets/google.jpg'), url: 'https://www.google.co.jp' },
  ];

class WelcomeScreen extends React.Component {
    renderSlides() {
        return SLIDE_DATA.map((slide, index) => {
            return (
                <View
                key={index}
                style={styles.container}
                >
                  <View style={{ 
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <Text style={styles.text}>{slide.title}</Text>
                    <Text style={styles.text}>{slide.text}</Text>
                  </View>
                  <TouchableOpacity
                    style={{ flex: 2 }}
                    onPress={this._handlePress}
                  >
                  <Image
                     style={{ flex: 2 }}
                     resizeMode="contain"
                     source={slide.uri}
                  />
                  </TouchableOpacity>
                  <View  style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                    <Text style={styles.text}>{index + 1} / 3</Text>
                  </View>
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              style={{ flex: 1 }}
            >
              {this.renderSlides()}
            </ScrollView>
        );
    }
    _handlePress = () => {
        Linking.openURL("https://respon.me");
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'skyblue', 
        width: SCREEN_WIDTH, 
        alignItems: 'center' 
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding: 5,
    },
});
export default WelcomeScreen;