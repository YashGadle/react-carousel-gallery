import React from 'react';

import classnames from 'classnames';

export interface Props {
	url: string;
	index: number;
	width: string | number;
	height: string | number;
}

export const Img: React.FC<Props> = props => {
	const [imageType, setImageType] = React.useState('landscape');
	const { url, width, height, index } = props;

	const addObserver = (img: HTMLImageElement) => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					console.log(entry);
					const x = document.getElementById(
						'image-container-' + index
					);

					if (entry.intersectionRatio === 1) {
						x.style.transform = 'scale(1.2)';
					}
					else
						x.style.transform = 'scale(1)'
				});
			},
		);

		observer.observe(img);
	};

	return (
		<div
			id={'image-container-' + index}
			className={classnames({
				'carousel-image-portrait': imageType === 'portrait',
				'carousel-image-landscape': imageType === 'landscape',
			})}
			style={{
				width: imageType === 'landscape' ? width : '',
				height: imageType === 'portrait' ? height : '',
			}}
		>
			<img
				id={'img'}
				alt="Gallery-Image"
				src={url}
				style={{
					opacity: 0.5, transition: '0.5s opacity',
					width: imageType === 'landscape' ? '100%' : 'fit-content',
					height: imageType === 'portrait' ? '100%' : 'fit-content',}}
				onLoad={e => {
					const {
						naturalHeight,
						naturalWidth,
					} = e.target as HTMLImageElement;
					if (naturalWidth < naturalHeight) setImageType('portrait');
					else setImageType('landscape');

					addObserver(e.target as HTMLImageElement);
				}}
			/>
		</div>
	);
};
