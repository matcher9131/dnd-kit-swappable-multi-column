export const getItemBgColor = (labelText: string): string => {
    return labelText.startsWith("A") ? "bg-red-300" : labelText.startsWith("B") ? "bg-green-300" : "bg-blue-300";
};
