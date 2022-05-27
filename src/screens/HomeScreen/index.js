import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, SafeAreaView} from 'react-native';

import {getData, renderItems} from '../../utils/helperFunctions';
export const HomeScreen = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData(pageNumber.toString()).then(data =>
      setMovies(prev => [...prev, ...data]),
    );
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };
  function renderFooter() {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={item => renderItems(item)}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};
