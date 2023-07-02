import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import Article from './components/Article';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3dc769d887394842b713f56ec36f9691";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          News App
        </Text>
      </View>
    );
  };

  const Articles = () => {
    const articles = data?.articles ?? [];

    const articleComponents = articles.map((article, index) => (
      <View key={index} style={styles.articleWrapper}>
        <Article
          title={article.title}
          author={article.author}
          description={article.description}
          urlToImage={article.urlToImage}
        />
      </View>
    ));

    return (
      <ScrollView style={styles.container}>
        {articleComponents}
      </ScrollView>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Articles />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90FFDC',
  },

  header: {
    width: '100%',
    height: '10%',
    padding: 15,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },

  title: {
    fontSize: 34,
  },

  articleWrapper: {
    backgroundColor: 'black',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 15,
    marginBottom: 10, // Add margin bottom to create space between articles
  },
});
