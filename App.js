import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen({navigation}) {
 const [colorArray, setColorArray] = useState([]);
 
 const numCol = 4;

function addColor() {
   setColorArray([
     ...colorArray,
     {
       red: Math.floor(Math.random() * 256),
       green: Math.floor(Math.random() * 256),
       blue: Math.floor(Math.random() * 256),
       id: `${colorArray.length}`,
     },
   ]);
 }

 function resetButton(){
 setColorArray([]);
 }


function renderItem({item}) {
  return <BlockRGB red={item.red} green={item.green} blue={item.blue}/>;
}
 
 return (
   <View style={styles.container}>
   <TouchableOpacity 
        style={{ height:40, justifyContent: "center" }} 
            onPress={resetButton}
            >
      <Text style={{color:"blue"}}>Reset</Text>
      </TouchableOpacity>


         <TouchableOpacity 
        style={{ height:40, justifyContent: "center" }} 
            onPress={addColor}
            >
      <Text style={{color:"red"}}>Add Colour</Text>
      </TouchableOpacity>

     <FlatList style={styles.list} data={colorArray} renderItem={renderItem} numColumns={4} />
   </View>
 );
}

function DetailsScreen({ route }) {
 return <Text>Er... more stuff here soon?</Text>;
}

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Colour List" component={HomeScreen} />
       <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
 },
 list: {
   width: "100%",
 },
});
