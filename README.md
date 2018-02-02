Majic is a tournament manager powered by ClojureScript and Reagent.

## Development

```bash
rlwrap lein figwheel
sensible-browser http://localhost:3449/
```

## Release

```bash
lein cljsbuild once
sensible-browser resources/public/majic.html
```