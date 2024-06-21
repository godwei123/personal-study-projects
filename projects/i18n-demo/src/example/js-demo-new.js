const a = 'Hello, world!';
const b = "i18n.t('\u4F60\u597D\uFF0C\u4E16\u754C')";
const c = "i18n.t('hello\uFF0C\u4E16\u754C')";
if (a === b) {
  console.log('a===b');
} else {
  console.log("i18n.t('a\u4E0Eb\u4E0D\u76F8\u7B49')");
}