import { execSync } from 'child_process';
import fs from 'fs';
import chalk from 'chalk';

export function runMainLogic() {
    try {
        const output = execSync('git diff --staged --name-only --diff-filter=d', { encoding: 'utf-8' });
        let files = output.split('\n').filter(file => file.trim() !== '');
        
        if (files.length === 0) {
            console.log(chalk.yellow("No staged files to purify."));
            return;
        }

        let purified = 0;
        for (const file of files) {
            if (fs.existsSync(file)) {
                const originalContent = fs.readFileSync(file, 'utf-8');
                const deletePattern = /^[ \t]*(?:console\.log\(.*?\);?|.*\/\/\s*debug.*)(?![ \t]*\/\/\s*keep).*$/gmi;
                const stripKeepPattern = /[ \t]*\/\/\s*keep/gi;
                const cleanedContent = originalContent
                    .replace(deletePattern, '')      
                    .replace(stripKeepPattern, '');  
                if (originalContent !== cleanedContent) {
                    const blobHash = execSync('git hash-object -w --stdin', {
                        input: cleanedContent,
                        encoding: 'utf-8'
                    }).trim();
                    execSync(`git update-index --add --cacheinfo 100644 ${blobHash} "${file}"`);
                    purified++;
                };
            };
        };
        if (purified > 0) {
            console.log(chalk.green.bold(`Purified ${purified} file(s) from your files`))
        };
    } catch (err) {
        console.error(chalk.red("PureCommit Error: "), err);
        if (err.stderr) console.error(err.stderr.toString());
        process.exit(1);
    };
};