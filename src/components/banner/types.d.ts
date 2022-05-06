import { TypeButton } from '@types/global';

export interface TypesBanner {
	title?: string;
	subtitle?: string;
	description: string;
	background?: string;
	image?: string;
	alt?: string;
	titleWorks?: string;
	orientation: string;
	buttonOne?: {
		color: string;
		title: string;
		url: string;
		type: TypeButton;
	};
	buttonTwo?: {
		color: string;
		title: string;
		url: string;
		type: TypeButton;
	};
}

export interface TypesBannerBackground extends TypesBanner {
	imageDesktop: string;
	items?: Array<
		Object<{
			title: 'string';
		}>
	>;
}

export interface TypesBannerItems extends TypesBanner {
	subDescription: string;
	image: string;
	alt: string;
	items?: Array<
		Object<{
			title: 'string';
		}>
	>;
}

export interface TypesBannerSlider extends Array<TypesBanner> {}

// props
export interface Props {
	data: TypesBanner;
}

export interface PropsBackground {
	data: TypesBannerBackground;
}

export interface PropsItems {
	data: TypesBannerItems;
}
export interface PropsSlider {
	items: TypesBannerSlider;
}
