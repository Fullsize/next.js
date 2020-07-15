import {useStaticRendering} from 'mobx-react';
import RootStore from './root';
const isServer = typeof window === 'undefined';
useStaticRendering(isServer);
let store: any = null
export function initializeStore(initialState={}){
	if (isServer) {
    return new RootStore(initialState)
  }
  if (store === null) {
    store = new RootStore(initialState)
  }
  return store
}