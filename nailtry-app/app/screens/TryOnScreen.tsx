import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAR } from '../hooks/useAR';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import ColorPicker from '../components/ColorPicker';
import DesignCarousel from '../components/DesignCarousel';

export default function TryOnScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { hasPermission } = useAR();
  const [selectedColor, setSelectedColor] = useState<string>('#C2185B');

  if (hasPermission === null) return <Text style={styles.msg}>Requesting camera permission…</Text>;
  if (hasPermission === false) return <Text style={styles.msg}>Camera access denied.</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {/* Placeholder preview for MVP (swap with real AR overlay later) */}
        <Image source={{ uri: 'https://picsum.photos/600/400' }} style={{ width: '100%', height: '100%' }} />
        <View style={[styles.swatch, { backgroundColor: selectedColor }]} />
      </View>

      <DesignCarousel onPickPreset={(c) => setSelectedColor(c)} />
      <ColorPicker value={selectedColor} onChange={setSelectedColor} />

      <TouchableOpacity
        style={styles.cta}
        onPress={() => nav.navigate('TechList')}
      >
        <Text style={styles.ctaText}>Match This Look Nearby</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 12, gap: 12 },
  preview: { flex: 1, borderRadius: 24, overflow: 'hidden', backgroundColor: '#eee' },
  swatch: { position: 'absolute', bottom: 16, right: 16, width: 48, height: 48, borderRadius: 12, borderWidth: 1, borderColor: '#00000020' },
  cta: { backgroundColor: '#111', padding: 16, borderRadius: 16, alignItems: 'center' },
  ctaText: { color: '#fff', fontWeight: '600' },
  msg: { padding: 20, textAlign: 'center' }
});
