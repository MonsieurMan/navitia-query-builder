import { URLSegment } from './UrlSegment';

export class DepartureParamsSelector extends URLSegment {

    /**
     * Add count param to the query.
     * @param count Maximum number of results to include.
     */
    public count(count: number) {
        return new DepartureParamsSelector(`count=${count}&`, this);
    }

    /**
     * Add from_date_time param to the query.
     * @param fromDateTime Minimum date time before which results will not be included.
     */
    public fromDateTime(fromDateTime: Date) {
        return new DepartureParamsSelector(`from_date_time=${fromDateTime.toISOString()}&`, this);
    }

    /**
     * Add until_date_time param to the query.
     * @param untilDateTime Maximum date time after which results will not be included.
     */
    public untilDateTime(untilDateTime: Date) {
        return new DepartureParamsSelector(`until_date_time=${untilDateTime.toISOString()}&`, this);
    }
}
