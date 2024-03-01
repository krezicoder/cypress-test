describe('template spec', () => {
  for (let i = 0; i < 10000; i++) {
  it('passes', () => {
    // run this test 1000 times
    
      cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSdE53ktRa6fK7k4LOMqpuO8AQICBPLZ9nQJu5xgoUqpJRaiRw/viewform')
      // Wait for the form to load
      cy.get('form')
      // randomly wait between 300ms and 800ms seconds
      cy.wait(200 + Math.random() * 200)
      // scroll to the bottom of the page
      cy.scrollTo('bottom')
      // click on the first element with text Choose
      cy.get('[role="listbox"]').eq(0).click()
      // wait for 1 sec
      // randomly wait between 0.3 and 0.8 seconds
      cy.wait(200 + Math.random() * 100)
  
      // click on div with data-value="Airbase"
      cy.get('[data-value="Airbase"]').eq(1).click({force: true})
  
      // click on the second choose select dropdown
      cy.get('[role="listbox"]').eq(1).click()
      // wait for 50ms sec
      cy.wait(50)
      // click on div with data-value="Airbase"
      cy.get('[data-value="Airbase"]').eq(2).click({force: true})
      // wait for 50ms
      cy.wait(50)
      // Click on the text Submit
      cy.get('span').contains('Submit').click()
  
      // Wait for page load
      cy.wait(200)
    }
  )
}})