import type { ReactElement, ReactNode } from "react"
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip';

interface Props {
    children: ReactElement;
    title: ReactNode;
}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip describeChild {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1]
    },
}));

export const CustomTooltip = ({ children, title }: Props) => {
    return (
        <BootstrapTooltip title={title} describeChild slotProps={{
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -14],
                        },
                    },
                ],
            },
        }}>
            {children}
        </BootstrapTooltip>
    )
}
