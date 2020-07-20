// 文档   https://www.swiper.com.cn/api/start/new.html
import React, { ReactElement, useEffect, useRef, Children, cloneElement } from 'react'
import Swiper, { SwiperOptions } from 'swiper/bundle';
import classnames from 'classnames';
import 'swiper/swiper-bundle.css';

interface Props extends SwiperOptions {
	children?: ReactElement | ReactElement[];
	styleName?: string;
}
function ReactSwiper(props: Props) {
	const { children, styleName } = props;
	const swiperRef = useRef(null);
	// 添加className
	const renderContent = (e: ReactElement) => {
		const slideClassNames = ["swiper-slide", e.props.className];
		return cloneElement(e, {
			...e.props,
			className: slideClassNames.join(' ').trim()
		});
	}

	// 获取class
	const getClassName = (el) => {
		if (typeof el === 'string') {
			return el.split('.').join(' ').trim();
		} else if (el instanceof HTMLElement) {
			return el.className;
		}

		return '';
	}
	// 分页器
	const renderPagination = (pagination) => pagination ? <div className={getClassName(pagination.el)} /> : null;
	// 左右按钮
	const renderNavigation = (el) => el ? <div className={getClassName(el)} /> : null;

	// 滚动条
	const renderScrollBar=(el)=>el ? <div className={getClassName(el)} /> : null;
	useEffect(() => {
		new Swiper(swiperRef.current, props)
	}, [])
	return (
		<div ref={swiperRef} className={classnames("swiper-container", styleName)}>
			<div className="swiper-wrapper">
				{Children.map(children, renderContent)}
			</div>
			{/* 分页器 */}
			{props.pagination?.el && renderPagination(props.pagination)}
			{/* 前进后退按钮 */}
			{props.navigation?.prevEl && renderNavigation(props.navigation?.prevEl)}
			{props.navigation?.nextEl && renderNavigation(props.navigation?.nextEl)}
			{/* 滚动条 */}
			{props.scrollbar?.el&&renderScrollBar(props.scrollbar?.el)}
		</div>
	)
}
export default ReactSwiper;