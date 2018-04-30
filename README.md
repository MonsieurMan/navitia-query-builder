[![Build Status](https://travis-ci.org/MonsieurMan/navitia-query-builder.svg?branch=master)](https://travis-ci.org/MonsieurMan/navitia-query-builder)
[![Coverage Status](https://coveralls.io/repos/github/MonsieurMan/navitia-query-builder/badge.svg?branch=master)](https://coveralls.io/github/MonsieurMan/navitia-query-builder?branch=master)

# Navitia Query Builder
> This package is currently a WIP and the API **won't be stable** until **1.0**. 

This packace is an attempt at creating a better experience for querying navitia APIs from javascript and typescript.  
It simply helps you ~~*and your grandma*~~ in building a URL query via a fluent API that you can then use with your favorite http requesting tool.

**Features** :
- Fully immutable
- Simple usage
- Inline documentation for an immersive experience ~~*(better than doom)*~~

```typescript
import { NavitiaUrlBuilder } from 'navitia-query-builder'; // ikr, main class name doesn't match package name...
// Current API
const departures = new NavitiaUrlBuilder()
            .endpoint('https://test-endpoint.fr')
            .v1()
            .coverage('sncf')
            .stopArea('OCE:SA:87713040')
            .departures()
            .count(5)
            .parseUrl();
// https://test-endpoint.fr/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87713040/departures?count=5&
 
```
## TODO
- [ ] ? Minify package 
- [ ] Vscode debuging test with F5
- [ ] Full params for departure
- [ ] ? Extract parameters (count, depth, ...) into their own generic code 
- [ ] Better documentation
- [ ] ? Find a way to type supposed result
- [x] Make library fully immutable
- [x] Beta npm
- [x] Extract jest config from package.json
- [x] Travis
- [x] Coveralls