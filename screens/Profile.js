import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Profile = () => {
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:8758986520");
    } else {
      Linking.openURL("telprompt:8758986520");
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={{ height: "20%" }} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 140, height: 140, borderRadius: 70, marginTop: -50 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          }}
        />
      </View>
      <View style={{ alignItems: "center", margin: 15 }}>
        <Title>Suresh Verma</Title>
        <Text style={{ fontSize: 15 }}>Web Developer</Text>
      </View>
      <Card
        style={styles.mycard}
        onPress={() => {
          Linking.openURL("mailto:sureshverma@email.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.mytext}>sureshverma@email.com</Text>
        </View>
      </Card>
      <Card style={styles.mycard} onPress={() => openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.mytext}>8758986520</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.mytext}>120,000</Text>
        </View>
      </Card>
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
        <Button icon="account-edit" mode="contained" theme={theme}>
          Edit
        </Button>
        <Button icon="delete" mode="contained" theme={theme}>
          Fire Employee
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#006aff",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mycard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  mytext: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
});

export default Profile;
