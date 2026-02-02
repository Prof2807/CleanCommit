import readline from 'readline';
import fs from 'fs';
import { execSync } from 'child_process';
import { runMainLogic } from './purifier.js';

const IGNORE_FILE = '.purecommit_ignore';

export function askSetup() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    if (!fs.existsSync('.husky') && !fs.existsSync(IGNORE_FILE)) {
        rl.question("Husky hook not found. Do you want to set PureCommit as a pre-commit hook? (y/n): ", (answer) => {
            if (answer.toLowerCase() === 'y') {
                try {
                    console.log("Setting up Husky...");
                    execSync("npx husky-init && npm install", {stdio: 'inherit'});
                    
                    fs.writeFileSync('.husky/pre-commit', '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx purecommit\n');
                    console.log('Setup complete! Your commits will now be purified automatically.');
                } catch (err) {
                    console.error("Setup failed but you can still use PureCommit manually.");
                    process.exit(1);
                }
            } else {
                fs.writeFileSync(IGNORE_FILE, 'User declined setup');
                console.log("No Problem. Continuing with manual run...");
            }
            rl.close();
            runMainLogic();
        });
    } else {
        rl.close();
        runMainLogic();
    }
}