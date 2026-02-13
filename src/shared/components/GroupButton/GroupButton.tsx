import { Button } from "@mui/material"
import type { FC } from "react";
import { platformIcons } from "../../Icons/platformIcons";

interface LinkInt {
    key: string;
    platform: string;
    link: string;
}

interface Props {
    services: LinkInt[];
    onButtonClicked: (service: string) => void;
}

export const GroupButton: FC<Props> = ({ services, onButtonClicked }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-around gap-4 lg:gap-5 md:mt-5">
            {
                services.map((service) => (
                    <Button variant='contained' color='inherit' key={service.key} onClick={() => onButtonClicked(service.link)}
                        startIcon={platformIcons[service.key]}>
                    </Button>
                ))
            }
        </div>
    )
}

