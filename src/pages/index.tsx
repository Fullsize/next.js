import React from 'react';
import dynamic from 'next/dynamic';
import a from '@img/time.jpeg';
const Header=dynamic(()=>import('@/components/Header'));
function HomePage() {
  return (
		<div>
			<Header />
			<h1>Welcome to Next.js!2</h1>
			<img src={a} alt=""/>
		</div>
	)
}

export default HomePage;