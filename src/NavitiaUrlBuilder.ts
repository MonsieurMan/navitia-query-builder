import { APIVersionSelector } from './ApiVersionSelector';

export class NavitiaUrlBuilder {
    public endpoint(endpoint: string) {
        return new APIVersionSelector(endpoint);
    }
}
