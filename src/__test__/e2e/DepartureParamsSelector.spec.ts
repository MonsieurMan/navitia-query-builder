import { NavitiaUrlBuilder } from '../../NavitiaUrlBuilder';

describe('Full usage', () => {
    it('should return a fully parameterized url', () => {
        const endpoint = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .departures()
            .count(5)
            .fromDateTime(new Date('10 April 1998 00:00 UTC'))
            .untilDateTime(new Date('11 April 1998 00:00 UTC'))
            .parseUrl();

        expect(endpoint)
            .toEqual('https://test-endpoint.fr'
                + '/v1'
                + '/coverage/sncf'
                + '/stop_areas/stop_area:OCE:SA:87713040'
                + '/departures?'
                + 'count=5&'
                + 'from_datetime=1998-04-10T00:00:00.000Z&'
                + 'until_datetime=1998-04-11T00:00:00.000Z&');
    });
});
