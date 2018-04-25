# Navitia Query Builder
This packace is an attempt at creating a better experience to query navitia APIs from javascript and typescript.  
> This is currently a WIP
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
- [ ] Travis
- [ ] Coveralls
- [ ] Vscode test with F5
- [ ] Full params for departure
- [ ] Extract parameters (count, depth, ...) into their own generic class
- [ ] Beta npm
- [ ] Minimal doc
- [ ] Add types ? 