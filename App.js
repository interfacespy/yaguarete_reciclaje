import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Alianzas from "./src/screens/Alianzas";
import Contacto from "./src/screens/Contacto";
import ImpactoAmbiental from "./src/screens/ImpactoAmbiental";
import ImpactoSocial from "./src/screens/ImpactoSocial";
import LoginPage from "./src/screens/LoginPage";
import MaterialesReciclamos from "./src/screens/MaterialesReciclamos";
import Nosotros from "./src/screens/Nosotros";
import Portada from "./src/screens/Portada";
import Programas from "./src/screens/Programas";
import PuntosCompraPage from "./src/screens/PuntosCompraPage";
import RegistroPage from "./src/screens/RegistroPage";
import Simulador from "./src/screens/Simulador";
import Home from "./src/screens/Home";
import CambiarPassword from "./src/components/CambiarPassword";

const Drawer = createDrawerNavigator();

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Inicio" component={Portada} />
          <Drawer.Screen name="Quienes Somos" component={Nosotros} />
          <Drawer.Screen name="Puntos de Compras" component={PuntosCompraPage} />
          <Drawer.Screen
            name="Materiales que Reciclamos"
            component={MaterialesReciclamos}
          />
          <Drawer.Screen name="Programas" component={Programas} />
          <Drawer.Screen name="Alianzas" component={Alianzas} />
          <Drawer.Screen
            name="Impacto Ambiental"
            component={ImpactoAmbiental}
          />
          <Drawer.Screen name="Impacto Social" component={ImpactoSocial} />
          <Drawer.Screen name="Simulador" component={Simulador} />
          <Drawer.Screen name="Contacto" component={Contacto} />
          <Drawer.Screen name="Iniciar Sesión" component={LoginPage} />
          <Drawer.Screen name="Registrate" component={RegistroPage} />
          <Drawer.Screen
            name="Cambiar Contraseña"
            component={CambiarPassword}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    ) : (
      <AppLoading />
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "open-sans-700": require("./src/assets/fonts/open-sans-700.ttf"),
      "open-sans-regular": require("./src/assets/fonts/open-sans-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
});
