import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  const data = [
    { id: 1, name: "mukesh", position: "web dev" },
    { id: 2, name: "suresh", position: "android expert" },
    { id: 3, name: "ramesh", position: "ML expert" },
    { id: 4, name: "hitesh", position: "web dev" },
    { id: 5, name: "hitesh", position: "web dev" },
    { id: 6, name: "hitesh", position: "web dev" },
    { id: 7, name: "hitesh", position: "web dev" },
    { id: 8, name: "hitesh", position: "web dev" },
    { id: 9, name: "hitesh", position: "web dev" },
    { id: 10, name: "hitesh", position: "web dev" },
    { id: 11, name: "hitesh", position: "web dev" },
    { id: 12, name: "hitesh", position: "web dev" },
    { id: 13, name: "hitesh", position: "web dev" },
    { id: 14, name: "hitesh", position: "web dev" },
    { id: 15, name: "hitesh", position: "web dev" },
  ];
  const renderList = item => {
    return (
      <Card style={styles.mycard}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={item => `${item.id}`}
      />
      <FAB
        onPress={() => console.log("Pressed")}
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
