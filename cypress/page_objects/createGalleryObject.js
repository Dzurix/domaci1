class CreateGallery {
    get Create_gallery() {
        return cy.get("a[href='/create']")
    }
    get Title() {
        return cy.get("#title")
    }
    get Description() {
        return cy.get("#description")
    }
    get Image_url() {
        return cy.get("input[placeholder='image url']")
    }

    get Add_image() {
        return cy.get("form > :nth-child(3) > :nth-child(3)")
    }

    get Submit() {
        return cy.get("form > :nth-child(4)")
    }




    createGallery(Description, Image_url){
        this.Title.type(this.Title)
        this.Description.type(Description)
        this.Image_url.type(Image_url)
        this.Submit.click()

      

    }
}

export const createGallery = new CreateGallery()