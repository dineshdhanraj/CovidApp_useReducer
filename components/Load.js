import Service from '../service/Service'
export default async function Load(url,dispatch){
const result = await Service(url);
if(result.country){
  const Holder={
recovered: result.recovered,
      todayRecovered: result.todayRecovered,
      tests: result.tests,
      flag: result.countryInfo.flag,
      todayCases: result.todayCases,
      cases: result.cases
  };
  dispatch({type:'data', data:Holder});
}
else
{
  const Holder={
    cases:'Not Available',
  };
  dispatch({type:'data',data:Holder});
}
}