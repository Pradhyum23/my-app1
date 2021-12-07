import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './components/DJButton';
import AppHeader from './components/AppHeader';



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Image source={require("./assets/Krishna photo.webp")}/>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="file:///C:/Users/chand/Downloads/Shri-Krishna-Aarti-Satish-Jaggi.mp3"
            text="Krishna ji ki aarti"
            bgcolor="lightBlue"
          />
          </View>
          <Image source={require("./assets\ganesh-ji-ki-photo.jpeg")}/>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="file:///C:/Users/chand/Downloads/Sukhakarta%20Dukhaharta%20-%20Ganpati%20Aarti.mp3"
            text="Ganpati ji Aarti"
            bgcolor="orange"
          />
          </View>
          <Image source={require("./assets/shiv-photo.jpeg")}/>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="file:///C:/Users/chand/Downloads/Jai-Shiv-Omkara---Shiv-Aarti-Shankar-Mahadevan.mp3"
            text="Shiv ji ki Aarti"
            bgcolor="red"
          />
          </View>
          <Image source={require("./assets/hanuman.jpeg")}/>
          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="file:///C:/Users/chand/Downloads/Jai-Hanuman-Gyan-Gun-Sagar--Theme--Subrat-Sinha.mp3"
            text="Hanuman ji ki Aarti"
            bgcolor="aqua"
          />
          </View>
          <Image source={require("./assets/amba-mata-photo.jpeg")}/>
          <View style={styles.musicButtonContainer}>
           <DJButton
            uri="file:///C:/Users/chand/Downloads/Jai-Ambe-Gauri-Aarti--Anuradha-Paudwal.mp3"
            text="Mata ji ki Aarti"
            bgcolor="pink"
          />
        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:20
  },
   musicButtonContainer : {
    
    justifyContent:'center', 
    alignItems:'center',
   
  },
  stopButton :{
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:2,
    borderColor : 'rgba(0,0,0,0.3)',
  }
});

