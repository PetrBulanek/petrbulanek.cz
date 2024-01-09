import { AsChild } from '@/app/types/AsChild';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface MutedProps extends HTMLAttributes<HTMLSpanElement>, AsChild {}

const Muted = ({ asChild, className, ...props }: MutedProps) => {
	const Comp = asChild ? Slot : 'span';

	return <Comp {...props} className={clsx('text-gray-500', className)} />;
};

export { Muted };
