import React from 'react';

const IframeVideo = ({ url }) => {
	return (
		<iframe
			src={url}
			className='lazy'
			layout='fixed'
			width='560'
			height='315'
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		/>
	);
};

export default IframeVideo;
