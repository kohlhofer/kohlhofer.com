---
title: I made a set of vintage tape illustrations to go with my music
date: 2020-08-22
background: paper
path: /blog/vintage-tape-illustrations
---

import Cassette from "../components/cassette"

I support independent electronic artists by occasionally buying music they release on cassettes. These runs can be as small as 20 tapes or even one-offs. To me this is not about the unique audio quality of tape. If anything I enjoy the sense of nostalgia they provide.  The act of choosing and listening to music on this old fashioned medium is very deliberate. In a sense you are paying homage to the artist–or at least that is how I feel when I get up to flip a record/tape or carefully choose my next adventure.

I release some of my own music as [longer form mixes](/tg/1) that require a similar commitment albeit in digital form. A set of vintage tape illustrations to go with each mix seemed a fitting visual metaphor. Here is an example:


<Cassette label="This tape is for you" cover="2" />


I will be expanding [the collection](/tape-collection/) as I make and share more music. Read on if you care about the details and [contact me](/contact) if you are interested in using them for your own projects. 

Since I knew I would be making more of these I create myself a little template in sketch. There are just 3 custom elements for each cassette design: the body color, the outline color, and the label.

Each tape shares: spools of tape, the cut out window, subtle shadows, details like highlights and screws.  

This makes it easy to create and export new designs as single files that are then dynamically rendered on top of the animated reels. All that happens in a small self contained react component that one can easily re-use. I may decide to open source it. To render a cassette like the one above you simply add the following one liner to your page: 

    <Cassette cover="1" label="cool name for this tape" />

If you do not set the cover attribute it will pick a random one. It was easy and obvious to animate the reels but it would be nice to make it tie to music controls (play, stop, fast forward, etc) and even indicate the position in the track with the size of the spools.. One day I may make it more dynamic but right now they just spin on endlessly. 
