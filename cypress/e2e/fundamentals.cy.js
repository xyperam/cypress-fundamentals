describe('Test Execute', () => {
  it('click the link "type" navigate to new url', () => {
    
    //visit the url
    cy.visit("https://example.cypress.io");
    //click the link
    cy.contains('type').click()
    //verify the url
    cy.url().should('include','/commands/actions')
    //input to input form & verify the value
    cy.get('.action-email').type('fake@email.com',{delay:100})
    cy.get('.action-email').should('have.value','fake@email.com')    
    // Ignore error checking prior to type
    // like whether the input is visible or disabled
    cy.get(".action-disabled")
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");

    cy.get('.action-focus').focus().should('have.class','focus')
    .prev().should('have.attr','style','color: orange;')

    cy.get('.action-blur').type('about to blur').blur()
    .should('have.class','error')
    .prev().should('have.attr','style','color: red;');
    //clear the text
    cy.get('.action-clear').type('clear this text',{delay:100}).clear()
    .should('have.value','')
    
    cy.get('.action-form').find('[type="text"]').type('HALFOFF',{delay:100})
    cy.get('.action-form').submit()
    //verify submitted
    cy.get('.action-form').submit()
    .next().should("contain", "Your form has been submitted!");
    
    //click
    cy.get('.action-btn').click()
    cy.get('#action-canvas').click()
    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get(".action-labels>.label").click({ multiple: true });
    cy.get(".action-opacity>.btn").click({ force: true });

    //double click
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')

    cy.get('.rightclick-action-div').rightclick().should('not.be.visible');
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })


})