import { Icon, IconProps } from './Icon';
const EnvelopeIcon = ({ ...props }: IconProps) => {
	return (
		<Icon {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				aria-hidden={true}
				role="presentation"
				focusable={false}
			>
				<path
					fill="currentColor"
					d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"
				/>
			</svg>
		</Icon>
	);
};
export { EnvelopeIcon };
