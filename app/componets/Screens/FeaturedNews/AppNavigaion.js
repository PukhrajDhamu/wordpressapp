import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FeaturedNewss from './FeaturedNewss';
import Post from './Post';

export default class AppNavigaion extends React.Component {
  render(){

      this.props.navigation.setOptions({
          headerBackTitle: '',
          headerShown: false,
      })
  return (
    <View>
      
      <FeaturedNewss/>
      {/* <Post/> */}
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    color: "red",
   
  }
});
