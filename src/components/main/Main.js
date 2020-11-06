

import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

const Main: () => React$Node = () => {
  return (
    <View style={styles.view}>
        <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "pink", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default Main;
