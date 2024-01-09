import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
	size?: 24;
}

const SIZES = {
	24: 'icon-24',
};

const Icon = ({ size = 24, className, ...props }: IconProps) => {
	return <span {...props} className={clsx('icon inline-flex align-middle', SIZES[size], className)} />;
};

export { Icon };
