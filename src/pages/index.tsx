import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import a from '@svg/smiling.svg';
import { inject } from 'mobx-react';
import Swiper from 'swiper';
import './index.css'
import 'swiper/swiper-bundle.css';
const Header = dynamic(() => import('@/components/Header'));
function HomePage(props: any) {
	let bannerRef = useRef(null);
	useEffect(() => {
		new Swiper(bannerRef.current,{
			autoplay:true
		});
		console.log(props.name)
	}, [])
	return (
		<div>
			<Header />
			<div  styleName="banner" className="swiper-container" ref={bannerRef}>
				<div   className="swiper-wrapper">
					<div styleName="banner-item" className="swiper-slide">
						<img src="/img/1.jpg" alt="" />
					</div>
					<div styleName="banner-item" className="swiper-slide">
						<img src="/img/2.jpg" alt="" />
					</div>
					<div styleName="banner-item" className="swiper-slide">
						<img src="/img/3.jpg" alt="" />
					</div>
				</div>
			</div>

		</div>
	)
}
export default inject((stores: any) => ({
	name: stores.userStore.name
}))(HomePage);