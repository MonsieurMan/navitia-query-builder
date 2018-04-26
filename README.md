[![Build Status](https://travis-ci.org/MonsieurMan/navitia-query-builder.svg?branch=master)](https://travis-ci.org/MonsieurMan/navitia-query-builder)
[![Coverage Status](https://coveralls.io/repos/github/MonsieurMan/navitia-query-builder/badge.svg?branch=master)](https://coveralls.io/github/MonsieurMan/navitia-query-builder?branch=master)

# Navitia Query Builder
This packace is an attempt at creating a better experience to query navitia APIs from javascript and typescript.  
## Disclaimer
This package is currently a WIP and the API **won't be stable** until **1.0**


```typescript
// Current API
const departures = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .departure()
            .count(5)
            .parseUrl();
// https://test-endpoint.fr/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87713040/departures?count=5&
 
```
## TODO
- [x] Beta npm
- [ ] Make library fully immutable
- [ ] ? Minify package 
- [ ] Extract jest config from package.json
- [ ] Travis
- [ ] Coveralls
- [ ] Vscode test with F5
- [ ] Full params for departure
- [ ] Extract parameters (count, depth, ...) into their own generic class
- [ ] Minimal doc
- [ ] ? Add types 