import { notifications } from "@mantine/notifications";

export const useNotifications = () => {
	return (notification) => {
		switch (notification.type) {
			case "success":
				return notifications.show({
					title: "Success",
					message: notification.message,
					color: "green",
					icon: notification.icon ?? null,
					autoClose: notification.time ?? 2000,
				});
			case "error":
				return notifications.show({
					title: "Oops",
					message: notification.message,
					color: "red",
					icon: notification.icon ?? null,
					autoClose: notification.time ?? 2000,
				});
		}
	};
};
