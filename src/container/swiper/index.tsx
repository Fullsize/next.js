import React,{ ReactElement, useEffect,useRef ,Children,cloneElement} from 'react'
import Swiper, { SwiperOptions } from 'swiper/bundle';
import classnames from 'classnames';
import 'swiper/swiper-bundle.css';

interface Props extends SwiperOptions {
	children?: ReactElement | ReactElement[];
	styleName?:string;
}
function ReactSwiper(props: Props) {
	const {children,styleName}=props;
	const swiperRef=useRef(null);
	// 添加className
	const renderContent=(e:ReactElement)=>{
		const slideClassNames = ["swiper-slide", e.props.className];
		return cloneElement(e, {
      ...e.props,
      className: slideClassNames.join(' ').trim()
    });
	}
	useEffect(()=>{
		console.log(22,props)
		new Swiper(swiperRef.current,props)
	},[])
	return (
		<div ref={swiperRef} className={classnames("swiper-container",styleName)}>
			<div className="swiper-wrapper">
				{Children.map(children,renderContent)}
			</div>
		</div>
	)
}
export default ReactSwiper;