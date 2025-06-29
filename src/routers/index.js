import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from "../pages/Tela_inicial";
import Login from "../pages/Tela_login";
import Cadastro from "../pages/Tela_cadastro";
import Usuarios from "../pages/Usuarios";
import Principal from "../pages/Tela_principal";
import Perfil from "../pages/Tela_perfil_usuario";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Usuarios"
        component={Usuarios}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
