const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');

function main(baseRef, compareRef, path) {
  try {
    const baseSha = execSync(`git rev-parse ${baseRef}`).toString().trim();
    const compareSha = execSync(`git rev-parse ${compareRef}`).toString().trim();
    const diff = execSync(`git diff ${baseSha} ${compareSha} -- ${path}`).toString().trim();

    return diff === '';
  } catch (error) {
    core.setFailed(error.message);
  }
}

try {
  const baseRef = core.getInput('base_ref') || github.context.ref;
  const compareRef = core.getInput('compare_ref') || 'HEAD';
  const path = core.getInput('path') || '.';

  const isSame = main(baseRef, compareRef, path);

  core.setOutput('has_changes', !isSame);
} catch (error) {
  core.setFailed(error.message);
}
