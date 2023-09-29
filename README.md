# Fitness Web Component

Simple Web Components for fitness cards and rings.

The components are built styled using [Tailwind](https://tailwindcss.com) and
the icons are from [Heroicons](https://heroicons.com). The design is based on
Apple Fitness.

This website is built using [Eleventy](https://www.11ty.dev).

## The Code

The components loop through the `fitness.json` dataset.

Each component expects a JSON payload shape that looks like the following.

```json
{
    "date": "2023-09-25T00:00:00+00:00",
    "step_count": 18935,
    "distance": 16254,
    "flights_climbed": 8,
    "move": {
        "total": 500,
        "goal": 750
    },
    "exercise": {
        "total": 30,
        "goal": 60
    },
    "stand": {
        "total": 8,
        "goal": 10
    }
}
```
