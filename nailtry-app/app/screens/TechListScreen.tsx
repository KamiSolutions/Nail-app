import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TechCard from '../components/TechCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { API_BASE_URL } from '../constants/api';

export default function TechListScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/techs/`);
        setItems(data.results ?? data);
      } catch (e) {
        setItems([]);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <FlatList
        data={items}
        keyExtractor={(it) => String(it.id)}
        renderItem={({ item }) => (
          <TechCard
            tech={item}
            onPress={() => nav.navigate('TechProfile', { id: String(item.id) })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No techs nearby yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  empty: { textAlign: 'center', marginTop: 40, color: '#666' }
});
