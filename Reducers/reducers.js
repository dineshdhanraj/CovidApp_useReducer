export default function reducer(state,action){

  switch(action.type){
    case 'data':
    return {...state,data:action.data};
    case 'country':
    return {...state,country:action.data};
    default:
    throw new Error();
  }
}