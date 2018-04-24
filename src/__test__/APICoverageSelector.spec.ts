import { NavitiaUrlBuilder } from '../NavitiaUrlBuilder';

describe('APICoverageSelector', () => {
    it('should add coverage', () => {
        const version = new NavitiaUrlBuilder()
            .endpoint('https://endpoint.fr')
            .v1()
            .coverage('sncf')
            .parseUrl();

        expect(version).toEqual('https://endpoint.fr/v1/coverage/sncf');
    });
});
