import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { spawn } from 'node:child_process';
import { TsCheckExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<TsCheckExecutorSchema> = async (
  options,
  context: ExecutorContext,
) => {
  const projectName = context.projectName;
  console.log(`Running TypeScript check for project: ${projectName}`);

  if (!projectName) {
    console.error('No project name found in context.');
    return { success: false };
  }

  const projectRoot = context.projectsConfigurations.projects[projectName].root;

  return new Promise((resolve) => {
    const child = spawn(
      'pnpm',
      ['tsc', '--noEmit', '-p', `${projectRoot}/tsconfig.json`],
      {
        stdio: 'inherit',
        shell: true,
      }
    );

    child.on('close', (code) => {
      if (code === 0) {
        console.log('TypeScript check completed successfully.');
        resolve({ success: true });
      } else {
        console.error(`TypeScript check failed with exit code ${code}`);
        resolve({ success: false });
      }
    });
  });
};

export default runExecutor;
