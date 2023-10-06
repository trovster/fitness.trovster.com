# Fitness Web Component

Simple Web Components for fitness cards and activity rings.

The items in this demo are built using
[Fitness Visualisations](https://github.com/trovster/fitness-visualisations)
Web Components.

This website is built using [Eleventy](https://www.11ty.dev), styled using
[Tailwind](https://tailwindcss.com) and the icons are from
[Heroicons](https://heroicons.com).

## The Code

There are two main web components; a ring and a fully featured card.

```html
<fitness-ring
    calories-total="item.move.total" calories-goal="item.move.goal"
    minutes-total="item.exercise.total" minutes-goal="item.exercise.goal"
    hours-total="item.stand.total" hours-goal="item.stand.goal"
></fitness-ring>

<fitness-card
    date="item.date"
    replayable="true"
    steps="item.steps" distance="item.distance" flights="item.flights"
    calories-total="item.move.total" calories-goal="item.move.goal"
    minutes-total="item.exercise.total" minutes-goal="item.exercise.goal"
    hours-total="item.stand.total" hours-goal="item.stand.goal"
>
    <div slot="calories">Move</div>
    <div slot="minutes">Exercise</div>
    <div slot="hours">Stand</div>
    <svg slot="label-calories">…</svg>
    <svg slot="label-minutes">…</svg>
    <svg slot="label-hours">…</svg>
</fitness-card>
```

In this [Eleventy](https://www.11ty.dev) codebase, the components loop through
the `fitness.json` dataset. Each card component expects JSON data that looks
like the following.

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
