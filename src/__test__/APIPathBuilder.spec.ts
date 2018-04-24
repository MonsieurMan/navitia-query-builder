import { NavitiaUrlBuilder } from '../NavitiaUrlBuilder';

describe('APIPathBuilder', () => {
    it('should add stop area', () => {
        const version = new NavitiaUrlBuilder()
            .endpoint('https://endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .parseUrl();

        expect(version).toEqual('https://endpoint.fr/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87713040');
    });
});
