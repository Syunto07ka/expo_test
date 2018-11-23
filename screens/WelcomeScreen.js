import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
    { title: 'App: 1', text: 'twitter', image: require('../assets/twitter.jpg'), uri: "https://twitter.com/Kakki0310" },

    { title: 'App: 2', text: 'facebook', image: require('../assets/facebook.jpg'), uri: "https://www.facebook.com/shunto.kakii.7" },

    { title: 'App: 3', text: 'google', image: require('../assets/google.jpg'), uri: "https://respon.me" },

    { title: 'App: 4', text: 'respon', image: require('../assets/google.jpg'), uri: "https://www.lancers.jp"},

  ];

class WelcomeScreen extends React.Component {
    //_handlePress = (url) => {
        //keepURL = url;
        //console.log(keepURL);
        //url = "";
        //Linking.openURL(keepURL).catch(err => console.error('URLを開けませんでした。', err));
    //};
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
                    onPress={() => {
                        console.log(index)
                    }}
                  >
                  <Image
                     style={{ flex: 2 }}
                     resizeMode="contain"
                     source={slide.image}
                  />
                  </TouchableOpacity>
                  <View  style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                    <Text style={styles.text}>{index + 1} / 4</Text>
                    <Text>{slide.uri}</Text>
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
});
export default WelcomeScreen;