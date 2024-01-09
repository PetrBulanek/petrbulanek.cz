import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, ...props }: ContainerProps) => {
	return <div {...props} className={clsx('container', className)} />;
};

export { Container };
