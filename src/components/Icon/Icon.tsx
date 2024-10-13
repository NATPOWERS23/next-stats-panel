import { icons } from "@/constants/icons";
import React, { type FC } from "react";

interface IconProps {
	name?: string;
	size?: number;
	color?: string;
	className?: string;
}

function getIconPath(name: string | undefined): string | null {
	return name ? icons[name] : null;
}

const Icon: FC<IconProps> = ({
	name,
	size = 24,
	color = "currentColor",
	className,
}) => {
	const iconPath = getIconPath(name);

	if (!iconPath) {
		console.error(`Icon with name "${name}" not found.`);
		return null;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth="1.5"
			stroke={color}
			role="img"
			aria-label={`${name}-label`}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
		</svg>
	);
};

export default Icon;
