class AuthLogin {
    get emailInput() {
        return cy.get("#email");
    }
    get passwordInput() {
        return cy.get("#userPassword");
    }
    get submitBtn() {
        return cy.get("button[type='submit']");
    }
    
    get addProfessorBtn () {
        return cy.get(".nav-link").eq(5);
    }

    login(email, password) {
        this.emailInput.clear().type(email);
        this.passwordInput.clear().type(password);
        this.submitBtn.click();

    }
}

export const authLogin = new AuthLogin();