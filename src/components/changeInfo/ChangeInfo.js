

import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

const ChangeInfo: () => React$Node = () => {
  return (
    <View style={styles.view}>
        <Text>Change Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "violet", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default ChangeInfo;
