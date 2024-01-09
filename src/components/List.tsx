import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
	simpleInPrint?: boolean;
}

const List = ({ simpleInPrint, ...props }: ListProps) => {
	return (
		<ul
			{...props}
			className={clsx(
				'list-disc space-y-2 pl-4',
				simpleInPrint
					? 'print:list-none print:space-y-0 print:pl-0 print:after:inline-block print:[&>li:not(:last-child)]:after:pr-1 print:[&>li:not(:last-child)]:after:content-[","] print:[&>li]:inline-block'
					: 'print:space-y-1'
			)}
		/>
	);
};

export { List };
