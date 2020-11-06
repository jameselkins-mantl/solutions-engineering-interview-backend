const { join } = require('path')

const TEST_DIR = join(__dirname, 'app/tests')
const SETUP_DIR = join(TEST_DIR, 'app/tests/setup')

module.exports = {
  verbose: false,
  recursive: true,
  diff: true,
  // colors: false,
  // reporter: 'nyan',
  reporter: 'list',
  bail: true,
  // exit: true,
  // bail: 1, // exit after a single failed test
  // roots: [TEST_DIR],
  file: [
    join(SETUP_DIR, 'setup.js'),
    join(TEST_DIR, 'sanity.spec.js')
  ]
}
