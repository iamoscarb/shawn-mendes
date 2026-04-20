import { Card, CardContent, Container } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { Tour } from "../../../interfaces/tour.interface"

interface Props {
    tourData: Tour[]
}

const dateFormat = (date: Date) => {
    return {
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
        year: date.getFullYear()
    }
}

export const TourTable = ({ tourData }: Props) => {
    return (
        <Container maxWidth="lg" className="pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {tourData.map((date) => (
                    <CardContent className="rounded-lg"
                        sx={{
                            backgroundColor: 'info.dark',
                            boxSizing: 'border-box',
                            border: '2px solid transparent',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                borderColor: 'info.main',
                                transform: 'translate(-2px)',
                            }
                        }}>
                        <div className="flex items-center justify-center gap-3">
                            {/* Date Block */}
                            <Card className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 min-w-[70px]"
                                sx={{ backgroundColor: 'info.main' }}>
                                <span className="text-2xl font-bold leading-none">{dateFormat(date.date).day}</span>
                                <span className="text-xs uppercase font-semibold tracking-wider">
                                    {dateFormat(date.date).month}
                                </span>
                                <span className="text-xs opacity-80">{dateFormat(date.date).year}</span>
                            </Card>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <LocationOnIcon
                                        sx={{ fontSize: 16, color: "info.main" }}
                                    />
                                    <h3 className="font-semibold text-foreground text-sm truncate">
                                        {date.place.toUpperCase()}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-xs mb-3">
                                    {date.city.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                ))}
            </div>
        </Container >
    )
}