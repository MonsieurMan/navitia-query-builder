import { DepartureParamsSelector } from './DepartureParamsSelector';
import { URLSegment } from './URLSegment';

export class APIPathBuilder extends URLSegment {
    /**
     * Select a stop area.
     * @param stopArea stop area code.
     * @example
     * const query = new NavitiaUrlBuilder()
     *  .endpoint('https://api.sncf.com')
     *  .v1()
     *  .coverage('sncf')
     *  .stopArea('OCE:SA:87713040');
     * // or
     *  .stopArea('stop_area:OCE:SA:87713040');
     */
    public stopArea(stopArea: string) {
        const stopCode = stopArea.startsWith('stop_area:')
            ? stopArea.slice(10)
            : stopArea;
        return new APIPathBuilder(`/stop_areas/stop_area:${stopCode}`, this);
    }

    /**
     * Select departure feature.
     */
    public departures() {
        return new DepartureParamsSelector('/departures?', this);
    }
}
