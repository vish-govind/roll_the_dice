import React, { JSXElementConstructor, useState } from "react";
import type { PropsWithChildren } from "react";
import {View,Text,StyleSheet, ImageSourcePropType, Image, Pressable} from "react-native"
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

//Included index.d.ts file to avoid ts errors . Declared ".png" as a module in ts 
import DiceOne from "./assets/One.png"
import DiceTwo from "./assets/Two.png"
import DiceThree from "./assets/Three.png"
import DiceFour from "./assets/Four.png"
import DiceFive from "./assets/Five.png"
import DiceSix from "./assets/Six.png"

//Declaring a type that will hold properties of a variable . Here it says imageUrl value should only return an image
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl} : DiceProps) : JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

//JSX.Element is explicitly mentioned to tell that the App component will return an JSX Element only
function App() : JSX.Element {
  const[diceImage , setdiceImage] = useState<ImageSourcePropType>(DiceOne)

  const roll_the_dice = () => {

    let randomNumber = Math.floor(Math.random() * 6) + 1 ;

    switch(randomNumber) {
      case 1:
        setdiceImage(DiceOne)
      break;
      case 2:
        setdiceImage(DiceTwo)
      break;
      case 3:
        setdiceImage(DiceThree)
      break;
      case 4:
        setdiceImage(DiceFour)
      break;
      case 5:
        setdiceImage(DiceFive)
      break;
      case 6:
        setdiceImage(DiceSix)
      break;
      default:
        setdiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
    
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}></Dice>
      <Pressable onPress={roll_the_dice}>
        <Text style={styles.buttontxt}>Roll the Dice</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create(
  {
    container:
    {
      flex : 1,
      alignItems :"center",
      justifyContent:"center"
    },
    diceImage:
    {
      height:200,
      width:200
    },
    buttontxt:
    {
      paddingHorizontal:30,
      paddingVertical:20,
      borderWidth: 2,
      borderRadius: 8,
      borderColor:"#000000",
      fontSize:16,
      fontWeight:"600"
    }
  }
);

export default App 