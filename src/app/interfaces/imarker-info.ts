import { Marker } from "leaflet";
import { Reparaturbetrieb, Reparaturcafe } from "../api/models";

export enum MarkerTypes {
    Reparaturcafe = "Reparaturcafé", Reparaturbetrieb = "Handwerksbetrieb", Both = "Reparaturcafé/Handwerksbetrieb"
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
