import Icon from "../Icon/Icon";

export default function ProgressBar({
	totalAmount,
	progressValue,
	pin = false,
	color = "#1c9b56",
}: {
	totalAmount: number;
	progressValue: number;
	pin?: boolean;
	color?: string;
}) {
	const value = ((progressValue * 100) / totalAmount).toFixed();

	return (
		<div className="progressBarWrapper w-full py-4 rounded-2large">
			<div className="progressBar w-full rounded-2large bg-[linear-gradient(-45deg,_grey_25%,_transparent_25.1%,_transparent_50%,_grey_50.1%,_grey_75%,_transparent_75.1%,_transparent_0)] bg-[length:20px_20px]">
				<div
					className="progressBarFill block h-6 rounded-2large transition-[width_500ms_ease-in-out] relative "
					style={{ width: `${value}%`, backgroundColor: color }}
				>
					{pin && (
						<div className="absolute rounded-2large backdrop-blur-sm bg-white/30 border hover:h-12 hover:w-12 h-10 w-10 hover:top-[-.7rem] hover:right-[-.7rem] top-[-.5rem] right-[-.5rem] items-center justify-center flex clickable">
							<Icon size={20} name="elipsis" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
