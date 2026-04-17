import type { Tour } from "../interfaces/tour.interface";
import { TourData } from "../shared/data/TourData"

const tourData = TourData;

export const getToursAction = async (): Promise<Tour[]> => {
    await new Promise((res) => setTimeout(res, 1000));
    const tour = tourData;

    if (!tour) {
        throw new Error('Tours couldnt be gotten');
    }

    return tour;
}
