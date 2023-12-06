import React from 'react';
import { Button, PermissionsAndroid, ToastAndroid, View } from 'react-native';


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};


function App() : JSX.Element {

  return (
    <View>
        <Button onPress={showToast} title='Button One' color='red' ></Button>
        <Button onPress={requestCameraPermission} title='Permission' color='blue'></Button>
    </View>
  );
}

function showToast() {
  ToastAndroid.show("Clicked Performed",ToastAndroid.SHORT);
}

// const requestCameraPermission = async () =>{
//     try {
//       const grandted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//         title : "Cool Photo App Camera Permission" ,
//         message : 'Cool Photo App needs access to your camera ' +
//         'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//         },
//       );
//       if (grandted === PermissionsAndroid.RESULTS.GRANTED) {
//           console.log("You can use the camera'");
//       }else{
//         console.log('Camera permission denied');
//       }
//     } catch (error) {
//       console.warn(error);
//     }
// };

export default App;

