
export const useGetColors = () => {
    const getInvestedColor = (color: string) => {
        return color === 'primary' ? 'secondary.light' : 'primary.light';
    }

    const getColor = (color: string) => {
        return `${color}.dark`;
    }

    return {
        getInvestedColor,
        getColor
    }
}
