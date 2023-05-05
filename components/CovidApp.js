import React,{useReducer} from 'react';
import {View,TextInput,Text, TouchableOpacity, Alert} from 'react-native';
import MainUrl from '../config/Url'
import Load from './Load'
import reducer from '../Reducers/reducers'
import HomeDetails from './HomeDetails'
export default function CovidApp(){

const Loader = {
    flag: "",
    todayCases: "",
    cases: "",
    recovered: "",
    todayRecovered: "",
    tests: ""
  };
  const [state, dispatch] = useReducer(reducer, { country: "", data: Loader });
  return(
    <View>
       <TextInput placeholder='Enter the Country Name' style={{borderWidth:2, marginTop:30, color:'black', paddingLeft:70, margin:20, height:40}} onChangeText={(text)=>{dispatch({type:'country',data:text})}}/>
<TouchableOpacity onPress={async ()=>{
  Load(MainUrl(state.country),dispatch);
}} style={{backgroundColor:'red', alignItems:'center', alignSelf:'center'}}>
    <Text> Search </Text>
    </TouchableOpacity>


      {state.data.cases!==''?(<View>
      {state.data.cases!=='Not Available'?<HomeDetails Covid_Details={state.data}/>:<Text>No Data</Text>}</View>):<Text>Enter country name click on search</Text>}
    </View>
  )
}