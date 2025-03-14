// describe('Swiper Gallery Test', function () {
//   it('Checks if second slide contains "United Kingdom"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if third slide contains "Paris"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.wait(2000);
//     cy.get('.swiper-slide-active').should('contain', 'Paris');
//   });
// });

describe('Swiper Gallery Test', function () {
  it('Checks if describtions of every slide are correct', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active p').should('contain', 'Italy');
    cy.get('.swiper-slide-active h1').should('contain', 'Rome');
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.get('.swiper-slide-active h1').should('contain', 'London');
    cy.get('.swiper-slide-active p').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active h1').should('contain', 'Paris');    
    cy.get('.swiper-slide-active p').should('contain', 'France');

  });
});