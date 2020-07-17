import React from 'react';
import dynamic from 'next/dynamic';
import a from '@svg/smiling.svg';
import { inject } from 'mobx-react';
const Header = dynamic(() => import('@/components/Header'));
function HomePage(props: any) {
	return (
		<div>
			<Header />
			<h1>{props.name}</h1>
			<img src={a} alt=""/>
		</div>
	)
}

export default inject((stores: any) => ({
	name: stores.userStore.name
}))(HomePage);