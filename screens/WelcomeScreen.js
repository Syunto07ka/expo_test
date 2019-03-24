import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Linking } from 'react-native';
   
const SCREEN_WIDTH = Dimensions.get('window').width;
var SLIDE_DATA = [
    { title: 'App: 1', text: 'twitter', image: require('../assets/twitter.jpg'), uri: "https://twitter.com/Kakki0310" },

    { title: 'App: 2', text: 'facebook', image: require('../assets/facebook.jpg'), uri: "https://www.facebook.com/shunto.kakii.7" },

    { title: 'App: 3', text: 'google', image: require('../assets/google.jpg'), uri: "https://google.jp" },

    { title: 'App: 4', text: 'respon', image: require('../assets/google.jpg'), uri: "https://respon.me"},

  ];

class WelcomeScreen extends React.Component {
    _handlePress = (url) => {
        Linking.openURL(url).catch(err => error('URLを開けませんでした。', err));
    };
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
                    }}>
                    <View>
                    <Text style={styles.text}>{slide.title}</Text>
                    <Text style={styles.text}>{slide.text}</Text>
                    </View>
                  </View>
                  <Text
                   style={{ flex: 2 }}
                   onPress={() => {
                    this._handlePress(slide.uri);
                   }}>
                    <Image
                     style={styles.image}
                     resizeMode="contain"
                     source={slide.image}
                    />
                    </Text>
                  <View  style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                    <Text style={styles.text}>
                    {index + 1} / 4
                    </Text>
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
    image: {
        width: 350,
        height: 390,
    }
});
export default WelcomeScreen;