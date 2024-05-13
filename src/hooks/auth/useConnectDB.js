export const useConnectDB = async () => {
	const PocketBase = await import("pocketbase");
	const url = import.meta.env.VITE_POCKETHOST_URL;
	return new PocketBase.default(url);
};
