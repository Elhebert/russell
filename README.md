# Russell

This is Russell, a light **ES6 javascript** module to create a scrollspy.

Why Russell ?
> It was a cinch with my Wilderness Explorer GPS

![russell](https://i.imgflip.com/160r3l.gif)

## Usage

Add the **russell.js** file to your index.(html|php).
```
<script src="/path/to/russell.js"></script>
```

Add `data-scroll` on the link that is going to be spying on the scroll.

```
<a data-scroll="anchor">My link</a>

...

<my-element id="#anchor">
</my-element>
```

When the page reach the matching section, the link will have the css class `current`.
You can thus, customize it.


## Options

### Offset
Add an offset to the element.

The offset will define the distance (in pixel) between the top of the page and the element.

Usage:
```
<my-element data-offset="50"></my-element>
```

## License
This script is published under the [MIT license](./LICENSE)
