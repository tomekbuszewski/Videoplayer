# Video player

## Live version available at [tb-videoplayer.surge.sh](http://tb-videoplayer.surge.sh/)

## Description
Video player mimicking HTML5 video element. It accepts single source (video file) and an array of "highlights" (points of interest in a given movie). Works well on mobile devices as well as on desktops. 

Thanks to `video` elements being used, it can be steered using MacBook Pro's Touch Bar (only on Safari).

Component controls the playback (play/pause), can seek on the timeline, can display highlights on the timeline and navigate through them. When the video is playing, controls disappear, but can be brought back on hovering in their areas (center and bottom of the file).

## How to use
Component accepts three props:

- `src<string>`, which is an url for the video asset;
- `highlights<Object[]>`, which is an array of objects `{ time: number, caption?: string, image?: string }`;
- `controls<boolean>`, debug prop that will show the native HTML5 controls, defaults to `false`.

Example:

	const highlights = [
	  {
	    time: 100, // time in seconds or as string
	    caption: 'Lorem ipsum',
	  },
	  {
	    time: '02:00', // two minutes
	    caption: 'Dolor sit',
	    image: 'https://www.fillmurray.com/300/200',
	  },
	  {
	    time: '01:00:00', // one hour, there is no "days" handling
	    caption: 'Amet',
	  },
	];
	
	<Video
	  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
	  highlights={highlights}
	/>

Just like I mentioned in the code, for the sake of brevity and limited access to various video types, I limited this demo to one source. Normally it would be an array of objects `{ src: string, type: string }`, for example:

	[
		{ src: 'https://...', type: 'video/mp4' },
		{ src: 'https://...', type: 'video/ogg' },
	]


## How to run
First, install the whole thing:

	yarn install

To run it locally, you can use Storybook:

	yarn storybook/run

It will create a server that will serve stories about components and containers. The main component is `Video` inside `Molecules`.

If you only want to see the `Video` frame, follow [this link](http://localhost:6006/iframe.html?selectedKind=Molecules&selectedStory=Video) after running Storybook.

You can also build it using Webpack:

	yarn build/prod

This will create JS and HTML files inside `public` directory. The `index.html` file can be run from the directory (opened in the browser) and it works. I didn't prepare any server for it though.

## Development
Hot Module Reloading is applied, you can access it using

	yarn hmr/run

This will create you a server with HMR to use. Whole app is bound to it, as long as its root is the `App` component.

Storybook is also implemented, and I recommend creating new components from there. Super easy to run and comfortable to work and test, especially using knobs.

Lastly, I brought a little script that lies within `@scripts`. It's something similar to Angular's CLI, it creates components' boilerplates. Running 

	yarn component/create

brings up prompt for name and type of components. Generating stateless creates a directory in `components` with `index.js` (component), `index.styles.js` (styles) and `index.test.js` (test). Generating stateful one will create a directory in `containers` consisting of `index.js` (component written using class) and `index.test.js`. Please note that this script is purely a result of experimentation and its code doesn't represent the desired quality (read: it's dirty and ugly).

## Code
Application is built using client-side React. It doesn't work on the server (which is obvious) and without JavaScript (which is even more obvious).

Most of the code lies within `src` directory, where you can find `components`, `containers` and `services`. About those directories:

- `components` houses the **visual** part of the app, so called "dumb" (or functional, given the fact that they are written using function notation) components. They don't have any logic, aren't bound to anything and don't do anything on their own. 
- `containers` are where the **logic** lives. Since this isn't a large project, most of this logic is kept within `Video` container, which -- due to usage of `ref` -- also consists minimal amount of view. But apart from that - there shouldn't be anything more in `render` method than returning previously imported `View` from `components`.
- `services` are vanilla js functions that provide simple methods used in various places. Since they aren't bound to anything in particular, they reside here.

Apart from that, you can find `templates` directory with a single HTML file in it. Webpack uses it to generate an exemplary file to show this component in action.

---

About the code itself, I used Flow when applicable. Nowadays I am using TypeScript, but since I don't really know whether you guys like it or not, I've chosen the safe path here.

Code is commented when applicable as well. I didn't write any description for visual components, because writing

	/**
	 * Button component
	 * @prop {string} label
	 * returns {JSX}
	 */
 
Doesn't really make sense, when you have your props defined and return type clearly described (if returns anything more that what if would by default).

Tests are written for most of the logic and snapshots are also done. Coverage isn't 100%, but I don't really think that testing framework functionalities is up to the developer. And testing whether `onClick` works as expected is exactly that. I also admit that I haven't properly tested `video` behavior, but again - this isn't my element, I just use the API provided by the browser. I tested if this API integrates with my application well.

Last, but not least, for styling, I used JSS. This is because of many reasons, but main are: I really like it. Yes, I miss Emmett and editor support for (S)CSS, but writing styles using JavaScript functions and objects is far more entertaining and interesting than using mixins and boring ol' CSS. Plus, I found out that introducing JSS works well in a senior team, it given the developers more challenge and possibilities. Using functional paradigms vs. using weird SCSS functions found on the Internet. This one's easy. 

---

In terms of architecture, I am a huge fan of mentioned earlier separation of concerns within React application. That's why I always try to separate class components and view functions. The former ones have their own methods, state and can be bound with any state manager you choose. The latter are purely functional, without any logic whatsoever. The great thing about it is, you can split the work, give the logic to more experienced person, while the view can be done by someone who's learning the ropes. Plus, this also makes changing logic very simple. You can change your container's logic however you want, and as long as you keep your outgoing data in the same shape as before, the view won't even have to regenerate its snapshot.

Another thing you may notice is usage of aliases. I really don't like using `import Something from '../../../../components/Someting;'`. It's long, prone to errors and time-consuming. That's why I assign my most used directories to simple aliases, for example:

- `@src` maps `src`, no matter how deep you use it, so even in `src/Container/Menu/MenuItem/index.js` using `import Trigger from '@src/Components/Trigger` will be resolved.
- `@assets` maps `assets`. Importing SVG icons from depths of a project may be a chore, so using `import ArrowIcon from '@assets/arrow-icon.svg';` is super-comfortable.

Most IDEs can be configured to respect Webpack's aliases. IntelliJ has this functionality out of the box.

Full map of aliases can be seen in `webpack.config.js#30`.

Webpack is used for bundling. I've separated vendors, since I think this is a good practice when creating SPA with dynamically loaded components. I know here this isn't the case, but still, I like to think ahead. 

---

I always write long readmes.

---

Tomek Buszewski,  
tomek.buszewski@gmail.com