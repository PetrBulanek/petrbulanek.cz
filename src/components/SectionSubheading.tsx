import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

const sectionSubheading = cva('font-semibold text-green-700', {
	variants: {
		size: {
			sm: 'text-lg leading-snug print:leading-tight',
			md: 'text-xl print:text-lg print:leading-tight',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

interface SectionSubheadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof sectionSubheading> {}

const SectionSubheading = ({ size, className, ...props }: SectionSubheadingProps) => {
	return <h3 {...props} className={clsx(sectionSubheading({ size }), className)} />;
};

export { SectionSubheading };
