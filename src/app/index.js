import makeStore from './store';
import startServer from './server';

export const store = makeStore();
store.dispatch({type:"SET_ENTRIES", entries: ['Trainspotting', '65DaysofStatic']});
store.dispatch({type:"NEXT"})
startServer(store);