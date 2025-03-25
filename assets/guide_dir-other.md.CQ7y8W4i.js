import{_ as i,c as t,o as a,a4 as s}from"./chunks/framework.CblLbO68.js";const p=JSON.parse('{"title":"其他","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/dir-other.md","filePath":"guide/dir-other.md","lastUpdated":1742880542000}'),l={name:"guide/dir-other.md"};function o(n,e,r,d,h,u){return a(),t("div",null,e[0]||(e[0]=[s('<h1 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h1><h2 id="vscode" tabindex="-1">.vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;.vscode&quot;">​</a></h2><p>.vscode 文件夹的作用</p><ul><li>个性化设置: 允许你为当前项目设置特定的代码格式、语言特性、调试配置等。</li><li>提高开发效率: 通过预设一些配置，可以加快开发速度，减少重复操作。</li><li>团队协作: 可以将项目特定的配置共享给团队成员，保持团队开发环境的一致性。</li></ul><h3 id="settings-json" tabindex="-1">settings.json <a class="header-anchor" href="#settings-json" aria-label="Permalink to &quot;settings.json&quot;">​</a></h3><p>settings.json 文件是 VS Code 的核心配置文件，用于配置项目级别的设置，例如</p><ul><li>代码格式化规则</li><li>语言特性</li><li>编辑器主题</li><li>代码片段</li><li>界面布局</li></ul><h3 id="extensions-json" tabindex="-1">extensions.json <a class="header-anchor" href="#extensions-json" aria-label="Permalink to &quot;extensions.json&quot;">​</a></h3><p>列出了项目所推荐安装的扩展</p><h2 id="husky" tabindex="-1">.husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;.husky&quot;">​</a></h2><p><code>.husky</code> 文件夹是 Git 仓库中一个特殊的目录，用于配置 Git 钩子。Git 钩子 是在 Git 执行特定操作（如提交、推送等）时自动触发的脚本。 通过在 .husky 目录下配置脚本，我们可以实现对 Git 工作流的自定义，例如：</p><ul><li>代码格式化: 确保代码风格统一，提高代码可读性。</li><li>Lint 检查: 发现潜在的代码问题，提高代码质量。</li><li>测试运行: 在提交前运行测试用例，确保代码的正确性。</li><li>构建: 自动构建项目，方便部署。</li></ul><p><strong>.husky 文件夹的结构</strong></p><p>.husky 文件夹中通常包含一些脚本文件，这些脚本文件的文件名对应着不同的 Git 钩子。例如：</p><ul><li>pre-commit: 在提交之前执行</li><li>pre-push: 在推送之前执行</li><li>commit-msg: 在提交时检查提交信息</li></ul>',15)]))}const _=i(l,[["render",o]]);export{p as __pageData,_ as default};
