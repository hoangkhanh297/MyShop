

import React from 'react';
import { Text, View, StyleSheet, StatusBar, Navigator } from 'react-native';
import Authentication from './src/components/authentication/Authentication.js'
import ChangeInfo from './src/components/changeInfo/ChangeInfo.js'
import Main from './src/components/main/Main.js'
import OrderHistory from './src/components/orderHistory/OrderHistory.js'

StatusBar.setHidden(true);

const App: () => React$Node = () => {
  return (
    <Navigator
      initialRoute={{
        name: 'MAIN'
      }}
      renderScene={(route, navigator) => {
        switch (route.name) {
          case 'MAIN':
            return <Main></Main>;
          case 'CHANGE_INFO':
            return <ChangeInfo></ChangeInfo>;
          case 'AUTHENTICATION':
            return <Authentication></Authentication>;
          default:
            return <OrderHistory></OrderHistory>
        }
      }}
    >
      <View style={styles.view}>
        <View style={styles.text}>
          <Text>Welcome to my shop</Text>
        </View>
      </View>
    </Navigator>

  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default App;
