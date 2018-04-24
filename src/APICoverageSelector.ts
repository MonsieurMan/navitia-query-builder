import { APIPathBuilder } from './APIPathBuilder';
import { URLSegment } from './UrlSegment';

export class APICoverageSelector extends URLSegment {
    public coverage(coverage: string) {
        return new APIPathBuilder(`/coverage/${coverage}`, this);
    }
}
