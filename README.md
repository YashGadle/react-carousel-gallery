# React Carousel Gallery

A carousel to use for a gallery usecase.

## Preview

![](https://media.giphy.com/media/YNzGMBlbDjo9n2DGb9/giphy.gif)

### Tools used

1. Used IntersectionObserver API.
2. Used a separate image component for changing layout from 'portrait' to 'landscape'

### Note

This is a very basic component for now. Will improve it and also add some test cases.

### TODOs,

1. Add buttons to let user scroll (Currently gesture scroll is enabled).
2. Make the component more generic to take props from outside components.
3. If possible make the transition go proportional to the amount of intersection of the visible image. So the image gradually scales to its maximum value once it is fully visible.

### Usage

```bash
import { Carousel } from 'react-carousel-gallery'

const images = [...];

const Demo = props => {
    return (
        <div>
            <Carousel images={images} imageHeight={600} imageWidth={600} />
        </div>
    );
};
```
