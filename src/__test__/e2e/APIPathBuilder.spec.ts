import { NavitiaUrlBuilder } from '../../NavitiaUrlBuilder';

describe(`APIPathBuilder`, () => {
    it(`should add 'stop_area:' if missing`, () => {
        const endpoint = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .parseUrl();

        expect(endpoint)
            .toEqual('https://test-endpoint.fr'
                + '/v1'
                + '/coverage/sncf'
                + '/stop_areas/stop_area:OCE:SA:87713040');
    });
    it(`should not add 'stop_area:' if already present`, () => {
        const endpoint = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('stop_area:OCE:SA:87713040')
            .parseUrl();

        expect(endpoint)
            .toEqual('https://test-endpoint.fr'
                + '/v1'
                + '/coverage/sncf'
                + '/stop_areas/stop_area:OCE:SA:87713040');
    });
});
