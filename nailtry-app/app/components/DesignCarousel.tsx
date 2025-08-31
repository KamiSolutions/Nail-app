import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PRESETS = ['#C2185B', '#E91E63', '#9C27B0', '#3F51B5', '#009688', '#FF5722'];

export default function DesignCarousel({ onPickPreset }: { onPickPreset: (c: string) => void }) {
  return (
    <View style={{ height: 72 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
        {PRESETS.map((c) => (
          <TouchableOpacity key={c} onPress={() => onPickPreset(c)} style={[styles.item, { backgroundColor: c }]}>
            <Text style={styles.dot}> </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { gap: 12, alignItems: 'center', paddingHorizontal: 8 },
  item: { width: 56, height: 56, borderRadius: 16 },
  dot: { color: '#0000' }
});
