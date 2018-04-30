import { APICoverageSelector } from './APICoverageSelector';
import { URLSegment } from './URLSegment';

export class APIVersionSelector extends URLSegment {
    /**
     * Select the V1 version of the API.
     */
    public v1() {
        return new APICoverageSelector('/v1', this);
    }
}
