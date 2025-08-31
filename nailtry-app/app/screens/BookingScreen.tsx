import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';
import { useRoute } from '@react-navigation/native';

export default function BookingScreen() {
  const route = useRoute<any>();
  const techId = route.params?.techId;
  const [dateTime, setDateTime] = useState('2025-08-20T10:00:00');
  const [status, setStatus] = useState('');

  const createBooking = async () => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/bookings/`, {
        tech_id: techId,
        service_id: null,
        start_time: dateTime
      });
      setStatus('Booking created: #' + data.id);
    } catch (e) {
      setStatus('Failed to create booking.');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>Pick a time</Text>
      <TextInput value={dateTime} onChangeText={setDateTime} style={styles.input} />
      <TouchableOpacity onPress={createBooking} style={styles.cta}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Confirm</Text>
      </TouchableOpacity>
      {!!status && <Text style={{ marginTop: 12 }}>{status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#00000020', borderRadius: 12, padding: 12, marginTop: 12 },
  cta: { marginTop: 16, backgroundColor: '#111', padding: 16, borderRadius: 14, alignItems: 'center' }
});
