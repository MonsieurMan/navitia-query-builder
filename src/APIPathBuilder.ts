import { DepartureParamsSelector } from './DepartureParamsSelector';
import { URLSegment } from './UrlSegment';

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
     */
    public stopArea(stopArea: string) {
        return new APIPathBuilder(`/stop_areas/stop_area:${stopArea}`, this);
    }

    /**
     * Select departure feature.
     */
    public departures() {
        return new DepartureParamsSelector('/departures?', this);
    }
}
