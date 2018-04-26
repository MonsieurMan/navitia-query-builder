/**
 * Represents an url segment.
 * This is currently the base object of the library.
 */
export abstract class URLSegment {
    /**
     * Creates a new URL segment.
     * @param segment The new piece of url to add.
     * @param previous Previous segment to build on top of.
     */
    constructor(
        private segment: string,
        private previous?: URLSegment,
    ) { }

    /**
     * Returns the full built url.
     */
    public parseUrl(): string {
        const previousSegment = this.previous ? this.previous.parseUrl() : '';
        return previousSegment + this.segment;
    }
}
