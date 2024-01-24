import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const headers = {
        'X-RapidAPI-Key': '5f79407f38msh9020a07569122f1p159fbajsnae9091af8bf2',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}

/**
 * Calcula la tarifa de alquiler diaria de un automóvil.
 * 
 * @param {number} city_mpg - El consumo de combustible en la ciudad del automóvil.
 * @param {number} year - El año de fabricación del automóvil.
 * @returns {string} - La tarifa de alquiler diaria del automóvil, redondeada al número entero más cercano.
 */

export const calculateCarRent = (city_mpg: number, year: number): string => {
    const basePricePerDay = 50; // Precio base de alquiler por día en dólares
    const mileageFactor = 0.1; // Tarifa adicional por milla recorrida
    const ageFactor = 0.05; // Tarifa adicional por año de antigüedad del vehículo

    // Calcular tarifa adicional según kilometraje y edad
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calcular la tarifa total de alquiler por día
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, model, year } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}