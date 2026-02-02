PureCommit
Purify your commits without losing your local debug flow.

PureCommit is a "Non-Destructive" CLI tool that automatically strips console.log statements and 
// debug comments from your git commits, while keeping them intact in your local files.

Keep your production code clean without sacrificing your local debugging experience.


Features:
Safe-Purification: Only cleans the "Staged" version of your files. Your local workspace remains untouched.

Zero-Tolerance Cleaning: Automatically detects and removes all console.log(...) and lines containing // debug.

The "Keep" Tag: Need a specific log to reach production? Add // keep to the end of the line to bypass the filter.

Husky Integration: Simple setup to run automatically on every git commit.


How It Works:
PureCommit intercepts your files as they are being committed.
It creates a "purified" version of your code for the repository while leaving your actual physical files on your computer alone.

The Rules:
Purified: console.log("Testing..."); ➔ Removed from commit

Purified: const x = 10; // debug: check value ➔ Removed from commit

Preserved: console.log("App Started"); // keep ➔ Kept in commit (and the // keep tag is stripped for a clean look!)


Installation & Setup:
1. Run it instantly
You can test it on any repository without installing:

Bash:
npx purecommit

2. Project Setup:
Install it as a dev dependency:

Bash:
npm install purecommit --save-dev

3. Automatic Mode (Recommended)
Run the command:

Bash:
npx purecommit

If you don't have a Git Hook set up, PureCommit will ask:
Husky hook not found. Do you want to set PureCommit as a pre-commit hook? (y/n)
Type y to automate your purification!

Contributing
If you have ideas for better regex patterns or new features:

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewRule).

Commit your Changes (git commit -m 'Add NewRule').

Push to the Branch (git push origin feature/NewRule).

Open a Pull Request.


License
Distributed under the MIT License. See LICENSE for more information.

Created by Aman Raj
