module.exports = {
  'lint-staged': {
    '*.{ts,js,tsx,json}': [
      'npm run clean', 'npm run check', 'npm run compile', 'npm run test',
      'git add'
    ]
  }
};
// currently in planning
