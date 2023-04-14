const formatter = {};

formatter.format_timestamp = format_timestamp;

// Returns undefined if date format is invalid
function format_timestamp(dateTime = undefined, for_type = "log") {
  try {
    return new Date(dateTime).toISOString();
  } catch (e) {
    return undefined;
  }
}

module.exports = formatter;