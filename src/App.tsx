import React from 'react';

import { Img } from './Img';

import './styles.css';

export interface Props {
	images: string[];
	imageWidth: number;
	imageHeight: number;
}

export const Carousel: React.FC<Props> = props => {
	const [support, setSupport] = React.useState(true);
	const { images, imageHeight, imageWidth } = props;

	React.useEffect(() => {
		if ('IntersectionObserver' in window) {
			setSupport(true);
		} else {
			setSupport(false);
		}
	}, []);

	return support ? (
		<div
			id="carousel"
			style={{
				position: 'relative',
				display: 'flex',
				height: '100%',
				alignItems: 'center',
				overflowX: 'scroll',
				scrollSnapType: 'x mandatory',
				padding: '2rem 0',
				scrollBehavior: 'smooth',
				scrollbarColor: 'transparent',
			}}
		>
			{[null, ...images, null].map((image, index) =>
				image ? (
					<Img
						key={image}
						url={image}
						width={imageWidth}
						height={imageHeight}
						index={index}
					/>
				) : (
					<div
						key={index}
						style={{
							minWidth: '20rem',
							height: imageHeight,
							position: 'relative',
						}}
					></div>
				)
			)}
		</div>
	) : (
		<strong>Unsupported API - 'IntersectionObserver'</strong>
	);
};
