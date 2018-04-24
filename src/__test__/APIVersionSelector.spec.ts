import { NavitiaUrlBuilder } from '../NavitiaUrlBuilder';

describe('APIVersionSelector', () => {
    it('should contain version', () => {
        const version = new NavitiaUrlBuilder()
            .endpoint('https://endpoint.fr')
            .v1()
            .parseUrl();

        expect(version).toEqual('https://endpoint.fr/v1');
    });
});
