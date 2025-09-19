import { MarkerTypes } from "./imarker-info";

export interface ISearchResult {
    id: string | null,
    type: MarkerTypes;
    title: string,
    description: string,
    street: string,
    postalCode: string,
    openingHours?: string,
    nextEvent?: string,
    link: string
}
