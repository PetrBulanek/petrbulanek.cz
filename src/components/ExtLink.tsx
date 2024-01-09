import { LinkHTMLAttributes } from 'react';

interface ExtLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {}

const ExtLink = ({ ...props }: ExtLinkProps) => {
	return <a {...props} target="_blank" rel="noopener noreferrer" />;
};

export { ExtLink };
