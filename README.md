# Fitness Web Component

Simple Web Components for fitness cards and rings.

The components are built styled using [Tailwind](https://tailwindcss.com) and
the icons are from [Heroicons](https://heroicons.com). The design is based on
Apple Fitness.

This website is built using [Eleventy](https://www.11ty.dev).

## The Code

There are two main web components; a ring and a fully featured card.

```html
<fitness-ring>
</fitness-ring>

<fitness-card>
</fitness-card>
```

In this 11ty codebase, the components loop through the `fitness.json` dataset.

Each card component expects JSON data that looks like the following.

```json
{
    "date": "2023-09-25T00:00:00+00:00",
    "steps": 18935,
    "distance": 16254,
    "flights": 8,
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
