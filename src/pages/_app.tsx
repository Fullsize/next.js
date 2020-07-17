import React from 'react';
import App, { AppContext } from 'next/app';
import { Provider } from 'mobx-react';
import { initializeStore } from '../stores/index';

// main.tsx
export default function MyApp(props: any) {
  const { Component, pageProps,initialMobxState } = props;
  const isServer = typeof window === 'undefined';
  const mobxStore=isServer ? initialMobxState : initializeStore(initialMobxState)
  return (
    <Provider {...mobxStore}><Component {...pageProps} /></Provider>
  )
}
MyApp.getInitialProps = async (appContext: AppContext): Promise<any> => {
  const ctx: any = appContext.ctx;
  ctx.mobxStore = initializeStore()
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    initialMobxState: ctx.mobxStore
  }
}
