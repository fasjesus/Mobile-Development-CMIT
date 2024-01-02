import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

// import google from "../../assets/icons/calendar.png";
const google = require("../../assets/icons/calendar.png");

export function Home() {
  return (
    <LinearGradient
      colors={["rgba(61, 0, 0, 0.8)", "#f80000"]}
      style={styles.container}
    >
      <StatusBar style="auto" />

      <Text style={styles.label}>Login: </Text>
      <TextInput style={styles.input} placeholder="Digite seu login" />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.google}>
        <FontAwesome name="google" color="#000" size={24} />
        <Text style={styles.googleText}>Login com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.google, styles.facebook]}>
        <FontAwesome name="facebook-square" color="#fff" size={24} />
        <Text style={[styles.googleText, styles.facebookText]}>
          Login com Facebook
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    backgroundColor: "#dadada80",
    width: "100%",
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  label: {
    display: "flex",
    alignSelf: "flex-start",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#dfd",
    padding: 16,
    width: "100%",
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#607060",
  },
  buttonText: {
    fontWeight: "700",
    color: "#607060",
    textTransform: "uppercase",
  },
  separator: {
    marginVertical: 16,
    height: 2,
    width: "80%",
    backgroundColor: "#ddd",
  },
  google: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    gap: 8,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  googleText: {
    fontWeight: "500",
    fontSize: 16,
  },
  facebook: {
    backgroundColor: "#212176",
  },
  facebookText: {
    color: "#fff",
  },
});