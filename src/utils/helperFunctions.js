import axios from 'axios';
import {imageBaseURL} from './constants';
import React from 'react';
import styles from '../screens/HomeScreen/style';
import {Card} from 'react-native-elements';
import {View, Text, Image} from 'react-native';
export const getData = async pageNumber => {
  try {
    const response = await axios.get(
      `http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${pageNumber}`,
    );

    return response?.data.results;
  } catch (error) {
    alert('try again later');
  }
  return [];
};

export const renderItems = item => {
  const posterURL = imageBaseURL + item.item.poster_path;
  return (
    <Card containerStyle={styles.container}>
      <View>
        <Image source={{uri: posterURL}} style={styles.posterStyle} />
        <View style={styles.movieDetailsWrapper}>
          <View style={styles.titleAndDateWrapper}>
            <Text style={styles.titleStyle}>{item.item.title}</Text>
            <Text>
              <Text style={styles.overviewHeadStyle}>Date : </Text>
              {item.item.release_date}
            </Text>
          </View>
          <Text>
            <Text style={styles.overviewHeadStyle}>Description : </Text>
            {item.item.overview}
          </Text>
        </View>
      </View>
    </Card>
  );
};
