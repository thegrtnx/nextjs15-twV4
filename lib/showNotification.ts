import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning";
type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";

interface ToastOptions {
	type: ToastType;
	message: string;
	duration?: number; // Optional duration in milliseconds
	position?: ToastPosition;
}

export const showToast = ({ type, message, duration = 2000, position = "top-center" }: ToastOptions) => {
	const baseStyle = {
		color: "#fff",
	};

	// Define background colors for each type
	const backgroundColors: Record<ToastType, string> = {
		success: "#4CAF50", // Success color (green)
		error: "#FF5722", // Error color (red)
		info: "#2196F3", // Info color (blue)
		warning: "#FFC107", // Warning color (yellow-orange)
	};

	// Call the appropriate toast function based on the type with the duration and position
	switch (type) {
		case "success":
			toast.success(message, {
				duration,
				style: {
					...baseStyle,
					backgroundColor: backgroundColors.success,
				},
				position,
			});
			break;
		case "error":
			toast.error(message, {
				duration,
				style: {
					...baseStyle,
					backgroundColor: backgroundColors.error,
				},
				position,
			});
			break;
		case "info":
			toast(message, {
				duration,
				style: {
					...baseStyle,
					backgroundColor: backgroundColors.info,
				},
				position,
			});
			break;
		case "warning":
			toast(message, {
				duration,
				style: {
					...baseStyle,
					backgroundColor: backgroundColors.warning,
				},
				position,
			});
			break;
		default:
			console.warn("Invalid toast type");
	}
};
