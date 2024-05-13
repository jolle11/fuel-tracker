const useNumberFormat = () => {
	return (input) => Math.abs(Number(input)).toFixed(2).replace(".", ",");
};

export default useNumberFormat;
