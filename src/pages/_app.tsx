import App, { AppContext } from 'next/app';
import { Provider } from 'mobx-react';
import { initializeStore } from '../stores/index';
import 'antd/dist/antd.css';
// main.tsx
export default function MyApp(props: any) {
  const { Component, pageProps } = props;
  const isServer = typeof window === 'undefined';
  const mobxStore=isServer ? props.initialMobxState : initializeStore(props.initialMobxState)
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
