import { View, Text } from 'react-native'
import { PieChart } from 'react-native-chart-kit'

export function Chart({ data }) {
  <View>
    <PieChart
      data={data.price_current}
      width={200}
      height={200}
      chartConfig={{
        backgroundColor: '#03051E'
      }}
    >
    </PieChart>
  </View>
}