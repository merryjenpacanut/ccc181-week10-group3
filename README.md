# CCC181 Week 10: CampusConnect Mobile-First Login Page

React + TypeScript starter for the Week 10 group activity. The page is already
built. Your group's job is the **mobile-first CSS** and the **GitHub teamwork**.

## Run it

```bash
npm install
npm run dev          # open the local URL it prints
npm run dev:phone    # same, but your phone (same Wi-Fi) can open the Network URL
npm run build        # must finish with no errors before you submit
```

## Rules

- Edit only the CSS files in `src/styles/` (one member = one file). Do not edit `reset.css`.
- Plain CSS only. No Tailwind, Bootstrap, Material UI, styled-components, or any UI library.
- Phone styles first (no media query), then `min-width` queries only. Never `max-width`.
- Do not edit the `.tsx` files or rename classes. If you must, tell the group first.

## Group information (fill in)

| Item | Your answer |
| --- | --- |
| Group number | Group - 3 |
| Section | IT3 - B |
| Repository URL | https://github.com/merryjenpacanut/ccc181-week10-group3 |

## Members (each member fills in their own row in their own commit)

| Member | Name | GitHub username | CSS file | What I did |
| --- | --- | --- | --- | --- |
| 1 (leader) | Merry Jen M. Pacanut | merryjenpacanut | `base.css` | Wrote the phone layout, 768px padding, 1024px two-column grid and 1280px centered container; added the viewport tag |
| 2 | Emmalyn L. Rosales| marshm3llow | `nav.css` | Wrote the navbar with Flexbox (links stacked on phone, one row from 768px) and the footer with Grid (one column, three columns from 1024px), with 48px tap targets and hover and focus styles  |
| 3 | Aisa Mae B. Nale | aisamaenale-cloud | `form.css` | Wrote the login form with Flexbox: stacked full-width fields with 48px inputs and 16px text, Show button beside the password input, checkbox and Forgot password side by side from 768px, two bottom buttons side by side, card centered at max-width 32rem, larger padding and title from 1024px |

## Experiment 0: the page without the viewport tag

What did the page look like in DevTools phone mode **before** adding the viewport meta tag?
What changed **after** adding it?

> (Before adding the viewport tag, the page looked so small and very zoomed out that I can't even read the text. After adding the viewport tag the page is filled the phone screen and the text become readable, the layout also fit in the screen.)

## DevTools test results

| Width | What must be true | Pass? |
| --- | --- | --- |
| 360 px | 1 column. Nav links stacked and 48px tall. Options and buttons stacked. Footer in 1 column. No sideways scrollbar. | Yes |
| 768 px | Nav in one row (brand left, links right). Checkbox and link in one row. Two buttons side by side. | |
| 1024 px | Brand panel and login card side by side. Footer in 3 columns. Heading is larger. | Yes |
| 1280 px | Content centered and stops at 1200px. | Yes |

### Breakpoints I observed

Using **Show media queries** and dragging slowly from 360 px to 1280 px, the layout changed at these exact widths:

> The layout changed at exactly 768px, 1024px and 1280px.
> At 768px, the nav links moved into one row with the brand on the left, the checkbox and the Forgot password link sat in one row, and the two bottom buttons went side by side.
> At 1024px, the brand panel and the login card moved side by side, the footer changed to three columns, the heading became larger, and the list of perks appeared.
> At 1280px, the content stopped growing at 1200px and stayed centered.
> No width between 360px and 1280px looked broken, and no sideways scrollbar appeared.

Screenshots are in `screenshots/` as `360.png`, `768.png`, `1024.png`, `1280.png`.

## What our group learned (leader writes this last)

> We learned that mobile-first means writing the phone layout first and then using min-width media queries to add changes as the screen gets wider, so each breakpoint only adds to the layout instead of undoing it. Without the viewport meta tag, our page looked tiny and zoomed out on the phone, and after adding it the page used the real phone width, so the media queries could work. We used CSS Grid for the page layout and the footer, and Flexbox for the navbar and the form, which made it easy to turn a stacked column into a row at 768px and 1024px. We also made sure every tap target was at least 48px tall and that each hover style also had a focus style. On the GitHub side, we learned to work on our own branches, open pull requests, and have a different teammate review them. We also ran into problems such as a rejected push, a deleted branch and a reverted pull request, and we fixed them by checking the Git log, restoring the file from the right branch and pulling main after every merge.
