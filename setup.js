const { spawn } = require('child_process');
const inquirer = require('inquirer');

const GITHUB_URL = 'https://github.com';

const repoPrompt = {
  name: 'repository',
  message: 'Input GitHub Repository name',
};
const ownerPrompt = {
  name: 'owner',
  message: 'Input Repository owner',
};

const setRemote = (owner, repository) =>
  new Promise((resolve, reject) => {
    const git = spawn('git', [
      'remote',
      'set-url',
      'origin',
      `${GITHUB_URL}/${owner}/${repository}`,
    ]);
    git.on('exit', resolve);
    git.on('error', reject);
  });

(async () => {
  const { repository } = await inquirer.prompt(repoPrompt);
  const { owner } = await inquirer.prompt(ownerPrompt);
  await setRemote(owner, repository);
  console.log('Setup done!');
})();
