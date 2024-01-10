import { HTMLAttributes } from 'react';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const SectionHeading = ({ ...props }: SectionHeadingProps) => {
	return (
		<h2 {...props} className="text-2xl font-semibold uppercase tracking-widest print:text-xl print:leading-tight" />
	);
};

export { SectionHeading };
