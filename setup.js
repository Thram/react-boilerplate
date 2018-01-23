const { spawn } = require('child_process');
const inquirer = require('inquirer');

const GITHUB_URL = 'https://github.com';

const providerPrompt = {
  name: 'provider',
  message: `Input Provider Url (Default: ${GITHUB_URL}):`,
};

const ownerPrompt = {
  name: 'owner',
  message: 'Input Repository owner:',
};

const repoPrompt = {
  name: 'repository',
  message: 'Input Repository name:',
};

const setRemote = (provider = GITHUB_URL, owner, repository) =>
  new Promise((resolve, reject) => {
    const git = spawn('git', ['remote', 'set-url', 'origin', `${provider}/${owner}/${repository}`]);
    git.on('exit', resolve);
    git.on('error', reject);
  });

(async () => {
  const { provider } = await inquirer.prompt(providerPrompt);
  const { owner } = await inquirer.prompt(ownerPrompt);
  const { repository } = await inquirer.prompt(repoPrompt);
  await setRemote(provider, owner, repository);
  console.log('Setup done!');
})();
