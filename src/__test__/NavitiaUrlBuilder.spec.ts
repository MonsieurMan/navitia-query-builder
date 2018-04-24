import { NavitiaUrlBuilder } from '../NavitiaUrlBuilder';

describe('NavitiaUrlBuilder', () => {
    it('should contain endpoint', () => {
        const endpoint = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .parseUrl();

        expect(endpoint).toEqual('https://test-endpoint.fr');
    });
    it('should contain version', () => {
        const version = new NavitiaUrlBuilder()
            .endpoint('https://endpoint.fr')
            .v1()
            .parseUrl();

        expect(version).toEqual('https://endpoint.fr/v1');
    });
});
