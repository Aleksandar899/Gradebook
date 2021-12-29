/// <reference types="Cypress" />

import {authLogin} from "../page_objects/authLogin"
import { addProfessor } from "../page_objects/addProfessor";
const faker = require("faker");

describe('Gradebook login', () => {

    let validEmail = 'aleksandarloncar899@gmail.com';
    let validPass = 'Test123';

    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomImage: faker.image.imageUrl()
    }

    beforeEach('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gradebook.vivifyideas');
        authLogin.login(validEmail, validPass);
    });

    it('login with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook.vivifyideas.com/login',

        }).as("login");

        cy.url().should("contains", "/login");

        authLogin.login(validEmail, validPass);
        cy.url().should("contains", "/login");

    })

    it.only ('adding professor', ()=> {
        cy.intercept({
            method: 'GET',
            url: 'https://gradebook-api.vivifyideas.com/api/professors/create',

        }).as("addProfessor");

        cy.wait(1000);
        addProfessor.addProfessorBtn.click();

        addProfessor.createProfessor(
            userData.randomName, 
            userData.randomLastName,
            userData.randomImage 
        );

    })

});
