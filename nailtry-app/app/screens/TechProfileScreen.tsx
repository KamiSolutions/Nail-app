import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export default function TechProfileScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<any>();
  const id = route.params?.id;
  const [tech, setTech] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${API_BASE_URL}/techs/${id}/`);
      setTech(data);
    })();
  }, [id]);

  if (!tech) return <Text style={{ padding: 20 }}>Loading…</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.title}>{tech.salon_name || tech.full_name || 'Nail Tech'}</Text>
      <Text style={{ marginVertical: 8 }}>{tech.bio ?? ''}</Text>
      <TouchableOpacity
        style={styles.cta}
        onPress={() => nav.navigate('Booking', { techId: String(id) })}
      >
        <Text style={{ color: '#fff', fontWeight: '700' }}>Book</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '800' },
  cta: { marginTop: 16, backgroundColor: '#111', padding: 16, borderRadius: 14, alignItems: 'center' }
});
