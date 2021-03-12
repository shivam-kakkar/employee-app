import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("http://6e70fc8d4d01.ngrok.io/")
      .then(res => res.json())
      .then(results => {
        setData(results);
        setLoading(false);
      })
      .catch(err => {
        Alert.alert("Something went wrong");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderList = item => {
    return (
      <Card style={styles.mycard} onPress={() => navigation.navigate("Profile", { item })}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{
              uri: item.picture,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={item => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />

      <FAB
        onPress={() => navigation.navigate("Create")}
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "#0073ff" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    flexDirection: "row",
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
