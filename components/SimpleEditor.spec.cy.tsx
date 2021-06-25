import { mount } from "@cypress/react"
import SimpleEditor from "./SimpleEditor"

describe("<SimpleEditor />", () => {
  it("should support resizing on enter", () => {
    mount(<SimpleEditor code={`
module.exports = {
  "props": ["color"]
}`} language="js"/>)
    cy.get("textarea").type('{enter}').then(textarea$ => {
      expect(textarea$.height()).to.equal(120)
    })

    cy.get("textarea").type('let a = 2').then(textarea$ => {
      expect(textarea$.height()).to.equal(120)
    })
  })
})