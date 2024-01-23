import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ListingDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>ListingDetailsPage: {id}</Text>
    </View>
  );
}
