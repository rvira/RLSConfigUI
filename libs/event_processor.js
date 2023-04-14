const IdfyInstrumenter = require("../sinks");
const formatter = require("../libs/formatter");

// TODO: READ from env
const publish_enabled = process.env.ENABLE_RMQ_PUBLISH == "true";

// opts: params
/* - log (bool): Log to stdout (default `true`)
   - publish (bool): Publish log to event bus (default `false`)
   - async (bool): Publish in async (default `true`)
   - tags (map) : Tags associated with events (default `%{}`)
*/

/** Represents the EventProessor 
 * 
 *  @class EventProcessor
 */
class EventProcessor {
  /**
   * 
   * @param {*} type - The type of event
   * @param {*} event - The event object
   * @param {*} opts  - The options to configure the publishing of the event
   * @returns {boolean} True if success otherwise false
   */
  async publish(type, event, opts = {log: true, publish: false, async: true, tags: {}}) {
    if (opts.log) {
      console.log(event);
      if (!opts.publish) {
        return true;
      }
    } 
    // TODO: FROM ENV (check top of the file for any todo action)
    // if (!publish_enabled) {
    //   return true;  // returning tru as it's a success criteria
    // }
    if (opts.publish) {
      const rmqSink = new IdfyInstrumenter.sinks.RMQSink();
      event.timestamp = formatter.format_timestamp(event.timestamp, "publish");
      return rmqSink.publish(event, {}); // TODO: any headers.  Need to verify.
    }
    return true; // Everything is ok' 

  }
}

module.exports = new EventProcessor();