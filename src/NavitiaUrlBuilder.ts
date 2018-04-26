import { APIVersionSelector } from './ApiVersionSelector';

/**
 * Entry point to build a query URL.
 */
export class NavitiaUrlBuilder {
    /**
     * Select the API endpoint.
     * @param endpoint API endpoint
     *
     * @example
     * const builder = new NavitiaUrlBuilder()
     *  .endpoint('https://api.sncf.com');
     */
    public endpoint(endpoint: string) {
        return new APIVersionSelector(endpoint);
    }
}
