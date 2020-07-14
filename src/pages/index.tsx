import React from 'react';
import dynamic from 'next/dynamic';

const Header=dynamic(()=>import('@/components/Header'));
function HomePage() {
  return (
		<div>
			<Header />
			<h1>Welcome to Next.js!2</h1>
			<img src="/img/timg.jpeg" alt=""/>
		</div>
	)
}

export default HomePage;