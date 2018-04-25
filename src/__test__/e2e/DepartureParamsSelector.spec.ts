import { NavitiaUrlBuilder } from '../../NavitiaUrlBuilder';

describe('Full usage', () => {
    it('should return a fully parameterized url', () => {
        const endpoint = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .departure()
            .count(5)
            .fromDateTime(new Date('10/04/1998'))
            .parseUrl();

        expect(endpoint)
            .toEqual('https://test-endpoint.fr'
                + '/v1'
                + '/coverage/sncf'
                + '/stop_areas/stop_area:OCE:SA:87713040'
                + '/departures?'
                + 'count=5&'
                + 'from_date_time=1998-10-03T22:00:00.000Z&');
    });
});
