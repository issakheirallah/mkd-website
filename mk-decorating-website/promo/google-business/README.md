# Google Business Profile — promo image pack

Six branded promo images, built to the MK Decorating design system (Montserrat, navy / teal palette, geometric triangle logo, navy-tinted shadows).

All sources are HTML — open any `.html` file in a browser to preview live. PNGs are rendered at **@2x device pixel ratio** so they look crisp on high-DPI displays.

## Files

| # | File | Dimensions (@1x / @2x) | Suggested Google Business slot |
|---|---|---|---|
| 01 | `01-logo-square.png` | 720 × 720 (1440 × 1440) | **Logo** (main profile logo) |
| 02 | `02-cover-photo.png` | 1080 × 608 (2160 × 1216) | **Cover photo** (banner across the top) |
| 03 | `03-square-services.png` | 1080 × 1080 (2160 × 2160) | Photo / **Post** — "What we do" overview |
| 04 | `04-square-areas.png` | 1080 × 1080 (2160 × 2160) | Photo / **Post** — "Working across London" |
| 05 | `05-square-quote-cta.png` | 1080 × 1080 (2160 × 2160) | Photo / **Post** — "Request a quote" call-to-action |
| 06 | `06-square-tagline.png` | 1080 × 1080 (2160 × 2160) | Photo / **Post** — brand tagline |

The squares also work cleanly on Instagram, Facebook, and LinkedIn posts.

## Re-rendering

Edit any `.html` (or `_shared.css` for global tweaks), then re-render the whole pack:

```
cd mk-decorating-website
node promo/google-business/render.mjs
```

PNGs overwrite in place.

## Editing tips

- All copy and colours live in the HTML files; no design tool needed.
- Brand colours and fonts are imported from `_shared.css`.
- To add a new template: copy any HTML file, change the markup, then add an entry to the `TEMPLATES` array in `render.mjs` with the target dimensions.

## Notes for uploading to Google Business Profile

- Google compresses uploaded images. Uploading the @2x size gives Google more pixels to work with so the final result stays crisp.
- The recommended cover-photo aspect ratio is **16:9** — `02-cover-photo` is exactly that.
- The logo slot expects a square — `01-logo-square` is sized for it.
- Photos and posts accept squares freely; rotate through the four promo squares (03 – 06) for fresh content.
