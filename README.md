[![NPM version](https://img.shields.io/npm/v/publish-subscribe-event.svg)](https://www.npmjs.com/package/publish-subscribe-event)
## publish-subscribe-event

### Install
```
# with npm 
$ npm install --save publish-subscribe-event

# with yarn 
$ yarn add publish-subscribe-event --save
```
### Example
```
import Event from "publish-subscribe-event";

const eventInstance = Event.getInstance();

//  create receive event data
function recData(params) {
    console.log(params);
}

// add new event "my-message"
eventInstance.addEvent("my-message", recData);

// publish "my-message" event and params data
eventInstance.dispatchEvent("my-message", "your params...");


eventInstance.removeEvent("my-message", getData);
eventInstance.removeEventAll();

```