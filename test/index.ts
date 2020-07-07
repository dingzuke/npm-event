import * as mocha from 'mocha';
import * as chai from 'chai';
import Event from "../src";
const expect = chai.expect;
const eventInstance = Event.getInstance();

describe('publish-subscribe-event test', () => {
  beforeEach(()=>{
    eventInstance.removeEventAll();
    expect(eventInstance.handlers).to.deep.equal({});
  })

  it('test1: publish subscribe' , () => {
    const callbackHandler = (params) => {
      expect(params).to.equal("test1 params info");
    }
    eventInstance.addEvent("my-message", callbackHandler);
    eventInstance.dispatchEvent("my-message", "test1 params info");
  });

  it('test2: removeEvent' , () => {
    const callbackHandler = (params) => {};
    eventInstance.addEvent("my-message", callbackHandler);
    eventInstance.removeEvent('my-message', callbackHandler);
    eventInstance.dispatchEvent("my-message", "test2 params info");
    expect(eventInstance.handlers['my-message']).to.equal(undefined);
  });

  it('test3: removeEventAll' , () => {
    const callbackHandler = (params) => {};
    eventInstance.addEvent("my-message", callbackHandler);
    eventInstance.removeEventAll();
    eventInstance.dispatchEvent("my-message", "test3 params info");
    expect(eventInstance.handlers).to.deep.equal({});
  });

});