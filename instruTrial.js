const instrumenter = require("./instrumenter");
const formatter = require("./libs/formatter");

// const instrumenter = new IdfyInstrumenter.Default();

const event = {
  "app_vsn": "2.0",
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

const opts = {
  log: true,
  publish: false,
  async: true, 
  tags: {}
};


async function runDemo() {
  let result = await instrumenter.info({...event, component: "gst"}, {...opts, publish: true});
  console.log("Published: ", result);
  
  instrumenter.warn({...event, component: "itr"}, {...opts, log: false});
  
  let error = await instrumenter.error({
    component: "bsa",
    details: {
      exception_name: "form_submit_handle_event_error",
      exception_description: "Error occure in form-submit handle_event",
      exception_details: "exception goes here",
      stacktrace: "stacktrace goes here"
    }
  
  }, opts);

  console.log("ERROR: ", error);
  
  console.log(formatter.format_timestamp(new Date()));
  console.log(formatter.format_timestamp("2023-01-06"));
  console.log(formatter.format_timestamp("2023-01-06xx") == undefined);
  
  const e = {
    "event_value": "test value",
    "event_type": "test type"
  };
  
  instrumenter.warn(e, {});
}

module.exports = runDemo();
