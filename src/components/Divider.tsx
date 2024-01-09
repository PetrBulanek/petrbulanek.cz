import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

const Divider = ({ className, ...props }: DividerProps) => {
	return <hr {...props} className={clsx('border-t-slate-300', className)} />;
};

export { Divider };
