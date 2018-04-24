export abstract class URLSegment {
    constructor(
        private segment: string,
        private previous?: URLSegment,
    ) { }

    public parseUrl(): string {
        const previousSegment = this.previous ? this.previous.parseUrl() : '';
        return previousSegment + this.segment;
    }
}
