import { URLSegment } from './UrlSegment';

export class DepartureParamsSelector extends URLSegment {
    public count(count: number) {
        return new DepartureParamsSelector(`count=${count}&`, this);
    }
    public fromDateTime(fromDateTime: Date) {
        return new DepartureParamsSelector(`from_date_time=${fromDateTime.toISOString()}&`, this);
    }
    public untilDateTime(untilDateTime: Date) {
        return new DepartureParamsSelector(`until_date_time=${untilDateTime.toISOString()}&`, this);
    }
}
