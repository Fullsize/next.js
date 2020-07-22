import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { inject } from 'mobx-react';
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
      <button onClick={() => props.setName('1111')}>修改名字</button>
      {/* <div styleName="banner">
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
      </div> */}
    </div>
  );
}
export default inject((stores: any) => ({
  name: stores.userStore.name,
  setName: stores.userStore.setName,
}))(HomePage);
