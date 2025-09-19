import { Reparaturbetrieb, Reparaturcafe } from "../api/models";

export interface ICafeBetrieb {
    reparaturcafes: (Reparaturcafe | undefined)[],
    reparaturbetriebe: (Reparaturbetrieb | undefined)[]
}
