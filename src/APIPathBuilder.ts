import { DepartureParamsSelector } from './DepartureParamsSelector';
import { URLSegment } from './UrlSegment';

export class APIPathBuilder extends URLSegment {
    public stopArea(stopArea: string) {
        return new APIPathBuilder(`/stop_areas/stop_area:${stopArea}`, this);
    }
    public departure() {
        return new DepartureParamsSelector('/departures?', this);
    }
}
