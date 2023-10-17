describe("Tests GameList functions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const addGame = () => {
    cy.get("[data-testid=add-game-button]").click();
  }

  const hasNoRows = () => {
    cy.get("[data-testid=no-games-list-item]").should("exist")
  }

  const hasRows = (numberRows: number) => {
    cy.get("[data-testid=games-list-item]").should("have.length", numberRows);
  }

  const deleteGame = () => {
    cy.get("[data-testid=delete-game-button]").click();
  }

  it("See's no games on initial load", () => {
    hasNoRows()
  });

  it("Adds a game", () => {
    hasNoRows()
    addGame()
    hasRows(1)
  });
  
  it("Adds two games", () => {
    hasNoRows()
    addGame()
    addGame()
    hasRows(2)
  });

  it("Deletes a game", () => {
    hasNoRows()
    addGame()
    hasRows(1)
    deleteGame()
    hasRows(0)
  });
});