const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

/** 处理jest只执行本次修改到的工具方法的测试用例 */
async function start() {
  /** 1. 获取git add 的文件的列表 */
  const addFiles = execSync('git diff --staged --diff-filter=ACMR --name-only').toString().split('\n');

  /** 2. 获取文件的绝对路径 */
  const diffFileList = addFiles.filter(Boolean).map(item => path.join(__dirname, item));

  /** 3. 获取src源码目录 */
  const srcPath = path.join(__dirname, './src');
  
  /** 4. 记录本次修改的函数方法 */
  const diffFileListMap = new Map();
  diffFileList.forEach(filePath => {
    if (filePath.includes(srcPath) && (filePath.endsWith('.ts') || filePath.endsWith('.tsx'))) {
      const relativePath = path.relative(srcPath, filePath);
      if (relativePath.includes('/')) {
        diffFileListMap.set(relativePath.split('/')[0], true);
      }
    }
  })

  /** 5. 找出需要执行的测试用例 */
  const diiffKeys = Array.from(diffFileListMap.keys());
  const list = (await Promise.all(diiffKeys.map(async item => {
    const testDir = path.join(srcPath, item, '__tests__');
    try {
      const files = await fs.readdir(testDir);
      return files.map(file => path.join(testDir, file));
    } catch (error) {
      return [];
    }
  }))).flat();

  /** 6. 执行测试用例 */
  if (list.length === 0) return;
  try {
    execSync(`npx jest --bail --findRelatedTests ${list.join(' ')}`, {
      cwd: __dirname,
      stdio: 'inherit'
    });
  } catch {
    process.exit(1);
  }
}

start();