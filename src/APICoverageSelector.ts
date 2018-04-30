import { APIPathBuilder } from './APIPathBuilder';
import { URLSegment } from './URLSegment';

export class APICoverageSelector extends URLSegment {
    /**
     * Selects the coverage to use.
     * @param coverage Coverage to use for the query.
     * @example
     * const query = new NavitiaUrlBuilder()
     *    .endpoint('https://api.sncf.com')
     *    .v1()
     *    .coverage('sncf');
     */
    public coverage(coverage: string) {
        return new APIPathBuilder(`/coverage/${coverage}`, this);
    }
}
