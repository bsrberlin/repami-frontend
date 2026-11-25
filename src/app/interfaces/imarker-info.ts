import { Marker } from "leaflet";
import { Reparaturbetrieb, Reparaturcafe } from "../api/models";

export enum MarkerTypes {
    Reparaturcafe = "Reparaturcafé", Reparaturbetrieb = "Handwerksbetrieb", Gewerbebetrieb = "Reparaturbetrieb", Both = "Reparaturcafé/Handwerksbetrieb"
}

// a Reparaturbetrieb whose Registerart contains *only* "Gewerberegister" is displayed as "Reparaturbetrieb".
export function getBetriebMarkerType(betrieb: Reparaturbetrieb | undefined): MarkerTypes {
    let registerart: unknown = betrieb?.Registerart;
    if (typeof registerart === 'string') {
        try {
            registerart = JSON.parse(registerart);
        } catch {
            registerart = [];
        }
    }
    return Array.isArray(registerart) && registerart.length === 1 && registerart[0] === 'Gewerberegister'
        ? MarkerTypes.Gewerbebetrieb
        : MarkerTypes.Reparaturbetrieb;
}

export interface IMarkerInfo {
    reparaturcafes: {
        marker: Marker,
        cafe: Reparaturbetrieb | Reparaturcafe | undefined
    }[],
    reparaturbetriebe: {
        marker: Marker,
        betrieb: Reparaturbetrieb | Reparaturcafe | undefined
    }[]
}
