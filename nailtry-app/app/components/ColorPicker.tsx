import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function ColorPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>Hex Color:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="#C2185B"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { fontWeight: '600' },
  input: { flex: 1, borderWidth: 1, borderColor: '#00000020', borderRadius: 12, padding: 12 }
});
