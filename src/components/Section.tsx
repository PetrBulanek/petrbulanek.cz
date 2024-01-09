import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {}

const Section = ({ ...props }: SectionProps) => {
	return <section {...props} className="space-y-4 print:space-y-1" />;
};

export { Section };
