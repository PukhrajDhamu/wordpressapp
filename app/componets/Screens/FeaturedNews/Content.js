import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Content extends React.Component{
  render() {
    const { title, excerpt, better_featured_image } = this.props.NewsData;

    return (
      <SafeAreaView style={styles.scrollView}>
        <ScrollView>
          
            <View style={styles.item}>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('NewsPost')} >
              <Image
                style={styles.stretch}
                source={{ uri: better_featured_image.media_details.sizes.medium.source_url }}
              />
               </TouchableOpacity>
              <Text style={styles.news} >
                {title.rendered}
              </Text>
              <Text>{excerpt.rendered}</Text>
            </View>
         
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {

    marginHorizontal: 0,
  },
  news: {
    marginTop: 30,
  },
  logo: {
    width: 66,
    height: 58,
  },
  stretch: {
    width: 300,
    height: 200,
  },
});
