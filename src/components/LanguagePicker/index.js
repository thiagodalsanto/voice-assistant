import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";

import styles from './styles';

function CommandForm() {

  const [language, setLanguage] = useState('Portuguese');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Pick a Language:</Text>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={language}
            onValueChange={(value, index) => setLanguage(value)}
            mode="dialog"
            style={styles.picker}
          >

            <Picker.Item label="Portuguese" value="Portuguese"/>
            <Picker.Item label="English" value="English"/>
            <Picker.Item label="Spanish" value="Spanish"/>
          </Picker>
        </View>
      </View>
    </View>
  );
}

export default CommandForm;