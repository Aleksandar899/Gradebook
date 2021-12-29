class AddProfessor {

get navBarBtn() {
    return cy.get(".navbar-collapse").eq(0);
}

get addProfessorBtn () {
    return cy.get(".nav-link").eq(5);
}

get professorFirstName() {
    return cy.get(".form-control").eq(0);
}

get professorLastName(){
    return cy.get(".form-control").eq(1);
}

get addImage(){
    return cy.get("button[type='Add Image']")
}
get submitBtn() {
    return cy.get("button[type='Submit']");
}

createProfessor (firstName, lastName, image) {
    this.professorFirstName.clear().type(firstName);
    this.professorLastName.clear().type(lastName);
    this.addImage.click().type(image);
    this.submitBtn.click();

}

}

export const addProfessor = new AddProfessor();