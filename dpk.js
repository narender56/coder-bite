const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Initialize a default value
  let candidate = TRIVIAL_PARTITION_KEY;

  // If partitionKey exist, assign partitionKey as string the candidate
  if (event?.partitionKey) {
    candidate = typeof event.partitionKey === "string" ? event.partitionKey : JSON.stringify(event.partitionKey);

    // Check if partitionKey has more than 256 characters, create a hex hash
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    };
  } else if (event) {
    // if partitionKey doesn't exist and event exist, then convert event as hash and assign to candidate
    candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }

  return candidate;
};