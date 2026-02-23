import type { FC } from "react";

interface Props {
    mobilBanner: string;
    desktopBanner: string;
}

export const BannerImage: FC<Props> = ({ mobilBanner, desktopBanner }) => {
    return (
        <picture className='w-full h-full block'>
            <source media='(max-width:767px)' srcSet={mobilBanner} />
            <img src={desktopBanner} alt="Banner" className='w-full h-full object-cover' />
        </picture>
    )
}
