describe('PokeAPI Berry and Berry Flavor Endpoints', function() {
    const baseUrl = 'https://pokeapi.co/api/v2/berry';
    const flavorUrl = 'https://pokeapi.co/api/v2/berry-flavor';

    it('Verify get a valid response for a berry by ID', function() {
        cy.request(`${baseUrl}/1`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'cheri');
        });
    });

    it('Verify get an error for an invalid berry ID', function() {
        cy.request({
            url: `${baseUrl}/99999`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('Verify get a valid response for a berry by name', function() {
        cy.request(`${baseUrl}/cheri`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
        });
    });

    it('Verify get an error for an invalid berry name', function() {
        cy.request({
            url: `${baseUrl}/invalidberry`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('Verify get a valid response for a berry flavor by name', function() {
        cy.request(`${flavorUrl}/spicy`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'spicy');
        });
    });

    it('Verify get the berry with the highest potency for spicy flavor', function() {
        cy.request(`${flavorUrl}/spicy`).then((response) => {
            expect(response.status).to.eq(200);
            const berries = response.body.berries;
            let highestPotencyBerry = berries.reduce((max, berry) => max.potency > berry.potency ? max : berry);

            cy.request(`${baseUrl}/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
                expect(berryResponse.status).to.eq(200);
                expect(berryResponse.body).to.have.property('name', highestPotencyBerry.berry.name);
            });
        });
    });
});