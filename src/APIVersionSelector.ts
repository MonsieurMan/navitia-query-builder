import { APICoverageSelector } from './APICoverageSelector';
import { URLSegment } from './UrlSegment';

export class APIVersionSelector extends URLSegment {
    public v1() {
        return new APICoverageSelector('/v1', this);
    }
}
