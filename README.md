# Fitness Web Component

Simple Web Components for fitness cards and rings.

The the items in this demo are built using
[Fitness Visualisations](https://github.com/trovster/fitness-visualisations)
Web Components.

This website is built using [Eleventy](https://www.11ty.dev).

## The Code

There are two main web components; a ring and a fully featured card.

```html
<fitness-ring
    move-total="item.move.total" move-goal="item.move.goal"
    exercise-total="item.exercise.total" exercise-goal="item.exercise.goal"
    stand-total="item.stand.total" move-goal="item.stand.goal"
></fitness-ring>

<fitness-card
    steps="item.steps" distance="item.distance" flights="item.flights"
    move-total="item.move.total" move-goal="item.move.goal"
    exercise-total="item.exercise.total" exercise-goal="item.exercise.goal"
    stand-total="item.stand.total" move-goal="item.stand.goal"
></fitness-card>
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
