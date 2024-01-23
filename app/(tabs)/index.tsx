import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabPage() {
  return (
    <View>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/bookings">Bookings</Link>
      <Link href="/listing/1337">Listing details</Link>
      <Text>Explore Page</Text>
    </View>
  );
}
