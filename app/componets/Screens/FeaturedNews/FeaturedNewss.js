import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import NewsPost from './NewsPost';
import { getApi } from '../../Services/Api';

export default class FeaturedNewss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsData: []
    }
    this.api = getApi();
  }
  componentDidMount() {
    if (!this.api) return;
    this.api.get(`/wp-json/wp/v2/posts`)
      .then(res => this.setState({
        NewsData: res.data,
      }))
  }
  render() {
    const { NewsData, } = this.state;
    return (
      <ScrollView>
        {NewsData.map(NewsData => (
       <View> <TouchableOpacity onPress={ () => this.props.navigation.navigate('NewsPost', { id: NewsPost.id })} >
              <Image
                style={styles.stretch}
                source={{ uri: NewsData.better_featured_image.media_details.sizes.medium.source_url }}
              />
               </TouchableOpacity>
          <Text style={styles.title}>{NewsData.title.rendered}
        </Text>
       
        <Text>{NewsData.excerpt.rendered}
        </Text>
        </View>
        ))}
      {/* <View>
        {NewsData.map(NewsData => (
          <Content key={NewsData.id} NewsData={NewsData} />
        ))}
      </View> */}
      </ScrollView>
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
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  title:{
    fontWeight: "bold",
    marginVertical: 10,
  }
});
