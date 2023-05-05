import {View, Text} from 'react-native'


export default function Home({Covid_Details}){
  return(
    <View>
    <Text>Cases: {Covid_Details.cases}</Text>
    <Text>Tests: {Covid_Details.tests}</Text>
    <Text>Flag: {Covid_Details.flag}</Text>
    <Text>Recovered: {Covid_Details.recovered}</Text>
    </View>
  )
}