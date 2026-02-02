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
<hr />
<h3 align="center">📦 Installation & Setup</h3>
<p align="center">Choose the method that best fits your workflow:</p>

<div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
<h4 style="margin-top: 0;">1️⃣ Run Instantly (No Install)</h4>
<p>Test PureCommit on any repository immediately without adding it to your <code>package.json</code>:</p>
<pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npx purecommit</code></pre>
</div>

<div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
<h4 style="margin-top: 0;">2️⃣ Global Installation</h4>
<p>Install it globally to use the <code>purecommit</code> command anywhere:</p>
<pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npm install -g purecommit</code></pre>
<p>Once installed globally, you can simply run:</p>
<pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>purecommit</code></pre>
</div>

<div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #d0d7de;">
<h4 style="margin-top: 0;">3️⃣ Automatic Mode (Recommended)</h4>
<p>Automate your workflow by setting up a <b>Pre-commit Hook</b>. Run the tool in your project folder:</p>
<pre style="background-color: #0d1117; color: #e6edf3; padding: 12px; border-radius: 6px; overflow: auto;"><code>npx purecommit</code></pre>
<p>When prompted with:</p>
<blockquote style="border-left: 4px solid #afb8c1; padding-left: 16px; color: #656d76; background: #fff; padding: 10px; margin: 10px 0;">
<i>"Husky hook not found. Do you want to set PureCommit as a pre-commit hook? (y/n)"</i>
</blockquote>
<table width="100%" style="border-collapse: collapse; margin-top: 10px;">
<tr>
<td style="padding: 10px; border: 1px solid #d0d7de;"><b>If you choose <kbd>y</kbd></b></td>
<td style="padding: 10px; border: 1px solid #d0d7de;"><b>Automation:</b> PureCommit will run quietly every time you <code>git commit</code>. No manual steps required.</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #d0d7de;"><b>If you choose <kbd>n</kbd></b></td>
<td style="padding: 10px; border: 1px solid #d0d7de;"><b>Manual:</b> You must run <code>npx purecommit</code> (or just <code>purecommit</code> if installed globally) whenever you want to purify your staged changes.</td>
</tr>
</table>
<p align="center" style="font-size: 0.85em; color: #cf222e; margin-top: 15px;">
⚠️ <b>Important:</b> Automatic setup requires an initialized Git repository. Run <code>git init</code> first if testing in a new folder.
</p>
</div>
</section>

---
