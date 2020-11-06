const fixtures = require('./fixtures')
const httpStatusCodes = require('../lib/httpStatusCodes')
const { expect } = require('chai')

const { client } = require('./setup/supertestServer')

function hasTutorialKeys(res) {
  const keys = ['title', 'description']
  keys.map(key => { if (!res.body[key]) throw new Error(`Response missing ${key}`) })
}


describe('Tutorials API', () => {
  it('POST /api/tutorials creates a new tutorial', async () => (
    await client
    .post('/api/tutorials')
    .send(fixtures.firstTutorial)
    .expect(httpStatusCodes.OK)
    .expect(hasTutorialKeys)
      .then(response => {
        fixtures.firstTutorial = resp.body
      })
  ))
})