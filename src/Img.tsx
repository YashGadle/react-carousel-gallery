import React from 'react';

export interface Props {
	url: string;
	index: number;
	width: string | number;
	height: string | number;
}

export const Img: React.FC<Props> = props => {
	const [, setImageType] = React.useState('landscape');
	const { url, width, height, index } = props;

	const addObserver = (img: HTMLImageElement) => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				console.log(entry);
				const x = document.getElementById('image-container-' + index);

				if (entry.intersectionRatio === 1) {
					x.style.transform = 'scale(1.2)';
				} else x.style.transform = 'scale(1)';
			});
		});

		observer.observe(img);
	};

	return (
		<div
			id={'image-container-' + index}
			style={{
				display: 'flex',
				flex: 'none',
				justifyContent: 'center',
				maxWidth: width,
				maxHeight: height,
				scrollSnapAlign: 'center',
				padding: '0 3rem',
				borderRadius: '8px',
				transition: '0.5s',
			}}
		>
			<img
				id={'img'}
				alt="Gallery-Image"
				src={url}
				style={{
					opacity: 1,
					transition: '0.5s opacity',
					maxWidth: '100%',
					maxHeight: '100%',
					objectFit: 'contain',
					borderRadius: '8px',
				}}
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
