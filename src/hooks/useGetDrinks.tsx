import { coldDrinks } from "../constants/coldDrinks";
import { hotDrinks } from "../constants/hotDrinks";

export default function useGetDrinks(type: string) {
    const drinks = type === 'cold' ? coldDrinks : hotDrinks;

    const categories = Object.keys(drinks);

    return { categories, drinks };
}