import { useMediaQuery, useTheme } from "@mui/material"

type configType = 'photo' | 'video' | 'default';
export const useNumColsImgList = (type: configType) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const config: any = {
        photo: {
            sm: 2,
            md: 3,
            lg: 4
        },
        video: {
            sm: 1,
            md: 2,
            lg: 3
        },
        default: {
            sm: 1,
            md: 2,
            lg: 4
        }
    }

    const currentCongif = config[type] || config.default;

    const getCols = () => {
        if (isMobile) return currentCongif.sm;
        if (isTablet) return currentCongif.md;
        return currentCongif.lg;
    };

    return {
        getCols
    }
}