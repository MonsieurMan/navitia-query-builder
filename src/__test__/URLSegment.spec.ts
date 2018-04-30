import { URLSegment } from '../URLSegment';

class TestSegment extends URLSegment { }

describe('URLSegment', () => {
    it('should be chainable and parse full url', () => {
        const firstSegment = new TestSegment('a');
        const secondSegment = new TestSegment('b', firstSegment);

        expect(firstSegment.parseUrl()).toEqual('a');
        expect(secondSegment.parseUrl()).toEqual('ab');
    });
});
