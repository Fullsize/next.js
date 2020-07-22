import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Swiper from '@/container/swiper';
import './index.css';

const Header = dynamic(() => import('@/components/Header'));
function HomePage(props: any) {
  const params = {
    autoplay: true,
  };
  useEffect(() => {
    console.log(props.name);
  }, []);
  return (
    <div>
      <Header />
      {props.name}
      <div styleName="banner">
        <Swiper {...params}>
          <div styleName="banner-item">
            <img src="/img/1.jpg" alt="" />
          </div>
          <div styleName="banner-item">
            <img src="/img/2.jpg" alt="" />
          </div>
          <div styleName="banner-item">
            <img src="/img/3.jpg" alt="" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
HomePage.getInitialProps = ({ mobxStore }) => {
  return {
    name: mobxStore.userStore.name,
  };
};
export default HomePage;
