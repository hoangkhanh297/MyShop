

import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

const OrderHistory: () => React$Node = () => {
  return (
    <View style={styles.view}>
        <Text>OrderHistory</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default OrderHistory;
