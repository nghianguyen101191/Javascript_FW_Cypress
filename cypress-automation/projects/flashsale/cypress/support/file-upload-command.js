
export const uploadFileRequest = (fileToUpload, uniqueName, aliasName, planId) => {
    const data = new FormData();
  
    data.append("hasHeader", "true");
    data.append("name", uniqueName);
    data.append('id', planId);
    data.append('min_slot_rm_day', 2)
  
    cy.server()
      .route({
        method: "POST",
        url: "https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/",
      })
      .as(aliasName)
      .window()
      .then((win) => {
        cy.fixture(fileToUpload, "binary")
          .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
          .then((blob) => {
            const xhr = new win.XMLHttpRequest();
  
            data.set("user-file", blob, fileToUpload);
  
            xhr.open("POST", "https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/");
  
            xhr.setRequestHeader("Authorization", 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjk4LCJ1c2VybmFtZSI6InRyaW5naGlhLm5ndXllbiIsImV4cCI6MTYyOTQ2ODE5MSwiZW1haWwiOiJ0cmluZ2hpYS5uZ3V5ZW5Ac2hvcGVlLmNvbSJ9.5WA__tXHagM9Jn_kTw8y5wDRJW29aa7eDBByQCupFS8');
  
            xhr.send(data);
          });
      });
  };