import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TechCard({ tech, onPress }: { tech: any; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{tech.salon_name || tech.full_name || 'Nail Tech'}</Text>
      <Text style={styles.sub}>Rating: {tech.avg_rating ?? '—'}</Text>
      <Text numberOfLines={2} style={styles.bio}>{tech.bio ?? ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#00000012', marginBottom: 12, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: '700' },
  sub: { color: '#555', marginTop: 4 },
  bio: { color: '#333', marginTop: 8 }
});
