import makeStore from './store';
import startServer from './server';
import data from '../../mock/entries.json'
export const store = makeStore();
store.dispatch({
	type:"SET_ENTRIES",
	entries: require('../../mock/entries.json')
});
store.dispatch({type:"NEXT"})
startServer(store);