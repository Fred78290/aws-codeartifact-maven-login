const core = require('@actions/core');
const exec = require('@actions/exec');
const io = require('@actions/io');

async function cleanup() {
  const path = core.getInput('settings-xml-path', { required: true });
  await io.rmRF(path);
}

module.exports = cleanup;

if (require.main === module) {
  cleanup();
}
