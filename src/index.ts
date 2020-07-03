// 事件容器类型
interface Ihandlers {
	[key: string]: Array<Function>;
}
/**
 *  发布-订阅模式-单例
 */
class Event {
	/**
	 * 实例对象
	 */
	private static _instance: Event;
	// 事件容器
	private handlers: Ihandlers = {};
	// 防止 new 调用
	private constructor() {}

	// 单例
	public static getInstance() {
		if (!Event._instance) {
			Event._instance = new Event();
		}
		return Event._instance;
	}

	// 事件添加方法，参数有事件名和事件方法
	public addEventListener(type: string, handler: Function) {
		// 首先判断handlers内有没有type事件容器，没有则创建一个新数组容器
		if (!(type in this.handlers)) {
			this.handlers[type] = [];
		}

		// 将事件存入
		this.handlers[type].push(handler);
	}

	// 触发事件两个参数（事件名，参数）
	public dispatchEvent(type: string, ...params: any) {
		// 若没有注册该事件则抛出错误
		if (!(type in this.handlers)) {
			return new Error("未注册该事件");
		}
		// 便利触发
		this.handlers[type].forEach((handler) => {
			handler(...params);
		});
	}

	// 事件移除参数（事件名，删除的事件，若无第二个参数则删除该事件的订阅和发布）
	public removeEventListener(type: string, handler: Function) {
		// 无效事件抛出
		if (!(type in this.handlers)) {
			return new Error("无效事件");
		}
		if (!handler) {
			// 直接移除事件
			delete this.handlers[type];
		} else {
			this.handlers[type] = this.handlers[type].filter(
				(ele: Function) => ele !== handler
			);

			// 移除事件
			if (this.handlers[type].length === 0) {
				delete this.handlers[type];
			}
		}
	}
}

export default Event;
