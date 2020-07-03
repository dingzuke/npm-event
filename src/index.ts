/**
 * interface event container type
 */
interface Ihandlers {
	[key: string]: Array<Function>;
}
/**
 *  publish-subscribe-event with singleto
 */
class Event {
	/**
	 *  static instance Event
	 */
	private static _instance: Event;
	/**
	 * event container 
	 */
	private handlers: Ihandlers = {};
	/**
	 * forbid new Event
	 */
	private constructor() {}

	/**
	 *  getInstance singleto
	 */
	public static getInstance() {
		if (!Event._instance) {
			Event._instance = new Event();
		}
		return Event._instance;
	}

	/**
	 * Register new events
	 * @param type 
	 * @param handler 
	 */
	public addEvent(type: string, handler: Function) {

		if (!(type in this.handlers)) {
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	}

	/**
	 * dispatch event
	 * @param type 
	 * @param params 
	 */
	public dispatchEvent(type: string, ...params: any) {

		if (!(type in this.handlers)) {
			return new Error("unregistered event");
		}

		this.handlers[type].forEach((handler) => {
			handler(...params);
		});
	}

	/**
	 * Event remove
	 * @param type 
	 * @param handler 
	 */
	public removeEvent(type: string, handler: Function) {
		if (!(type in this.handlers)) {
			return new Error("Invalid event");
		}
		if (!handler) {
			delete this.handlers[type];
		} else {
			this.handlers[type] = this.handlers[type].filter(
				(ele: Function) => ele !== handler
			);
			if (this.handlers[type].length === 0) {
				delete this.handlers[type];
			}
		}
	}
	/**
	 * Remove all events
	 */
	public removeEventAll() {
		this.handlers = {}
	}
}

export default Event;
