
export const useGetColors = () => {
    const getInvestedColor = (color: string) => {
        return color === 'primary' ? 'secondary.main' : 'primary.main';
    }

    const getColor = (color: string) => {
        return `${color}.main`;
    }

    return {
        getInvestedColor,
        getColor
    }
}
