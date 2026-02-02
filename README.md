<div align="center">
  <h1>🚀 PureCommit</h1>
  <p><b>Purify your commits without losing your local debug flow.</b></p>
  
  <p>
    <img src="https://img.shields.io/npm/v/purecommit?style=for-the-badge&color=blue" alt="NPM Version" />
    <img src="https://img.shields.io/npm/l/purecommit?style=for-the-badge&color=green" alt="License" />
    <img src="https://img.shields.io/npm/dt/purecommit?style=for-the-badge&color=orange" alt="Downloads" />
  </p>
  <hr />
</div>

<p align="center">
  PureCommit is a <b>"Non-Destructive"</b> CLI tool that automatically strips <code>console.log</code> statements and <code>// debug</code> comments from your <b>git commits</b>, while keeping them intact in your local files.
</p>

<div align="center">
  <p><i>Keep your production code clean without sacrificing your local debugging experience.</i></p>
</div>

---

### ✨ Features

<table width="100%">
  <tr>
    <td>🛡️ <b>Safe-Purification</b></td>
    <td>Only cleans the "Staged" version of your files. Your local workspace remains untouched.</td>
  </tr>
  <tr>
    <td>🧹 <b>Zero-Tolerance</b></td>
    <td>Automatically detects and removes all <code>console.log(...)</code> and lines containing <code>// debug</code>.</td>
  </tr>
  <tr>
    <td>🏷️ <b>The "Keep" Tag</b></td>
    <td>Add <code>// keep</code> to the end of any line to bypass the filter and keep it in production.</td>
  </tr>
  <tr>
    <td>🐶 <b>Husky Ready</b></td>
    <td>Built-in setup to run automatically on every <code>git commit</code>.</td>
  </tr>
</table>

---

### 🛠 How It Works & Edge Cases

PureCommit is designed to be highly flexible. It uses smart regex to ensure it doesn't accidentally delete code you actually need.

#### **1. Case Insensitivity**
The tool doesn't care about your casing. 
- `// DEBUG`, `// Debug`, and `// debug` are all treated the same and removed.
- `// KEEP`, `// Keep`, and `// keep` all successfully preserve your logs.

#### **2. Flexible Spacing**
Whether you write `//debug` or `//   debug`, PureCommit will find it and clean it.

#### **3. The Rules in Action:**

| Code Example | Action | Result in Commit |
| :--- | :--- | :--- |
| `console.log("Check this");` | ❌ **Remove** | *Deleted* |
| `const x = 5; // DEBUG This is just a number` | ❌ **Remove** | `const x = 5;` |
| `console.info("Vital Info"); // keep` | ✅ **Keep** | `console.info("Vital Info");` |
| `// TODO: fix this debug log` | 🛡️ **Ignore** | *Stays exactly as is* |

---

<section id="installation">
  <h3>📦 Installation & Setup</h3>
  <p>Choose the method that best fits your workflow:</p>

  <div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
    <h4 style="margin-top: 0;">1️⃣ Run Instantly (No Install)</h4>
    <p>Test PureCommit on any repository immediately using <code>npx</code>:</p>
    <pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npx purecommit</code></pre>
  </div>

  <div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
    <h4 style="margin-top: 0;">2️⃣ Local Project Setup</h4>
    <p>Add PureCommit as a development dependency to your project:</p>
    <pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npm install purecommit --save-dev</code></pre>
  </div>

  <div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
    <h4 style="margin-top: 0;">3️⃣ Automatic Mode (Recommended)</h4>
    <p>Automate your workflow by setting up the <b>Pre-commit Hook</b>. Simply run:</p>
    <pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npx purecommit</code></pre>
    <p>If a hook is not detected, PureCommit will prompt you:</p>
    <blockquote style="border-left: 4px solid #afb8c1; padding-left: 16px; color: #656d76;">
      <i>"Husky hook not found. Do you want to set PureCommit as a pre-commit hook? (y/n)"</i>
    </blockquote>
    <p>Type <kbd>y</kbd> to ensure your commits are purified automatically every time you commit.</p>
  </div>
</section>
