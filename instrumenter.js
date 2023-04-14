/** Your class description */
const { randomUUID } = require('crypto'); // Added in: node v14.17.0
const eventProcessor = require("./libs/event_processor");

/** Your class description */
class IdfyInstrumenter {
  constructor() {
    this.event = {
      "app_vsn": "1.0",
      "eid": undefined,
      "timestamp": new Date().toISOString(), // Date should be in ISO format
      "x_request_id": null,
      "event_source": null,
      "log_level": null,
      "service_category": null,
      "ou_id": null,
      "correlation_id": null, //e['correlation_id'],
      "reference_id": null,
      "reference_type": null,
      "component": null,
      "service": null,
      "event_type": null,
      "event_value": null,
      "log_version": null,
      "details": null,
      "tags": null
    };
  }

  async info(event, opts) {
    return await this.publish("info", event, opts);
  }

  async warn(event, opts) {
    return await this.publish("warn", event, opts);
  }

  async error(event, opts) {
    return await this.publish("error", event, opts);
  }

  // The dispatcher method
  async publish(type, e, opts) {
    const merged_event = {...this.event, ...e};
    merged_event.eid = randomUUID();
    return await eventProcessor.publish(type, merged_event, opts);
  }
}

// const IdfyInstrumenter = {
//   Default:  Instrumenter
// }

module.exports =  new IdfyInstrumenter();