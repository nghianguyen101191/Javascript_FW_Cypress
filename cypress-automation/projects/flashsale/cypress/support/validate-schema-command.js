import Ajv from "ajv";
import { definitionsHelper } from "../schema/schema-definitions";

const getSchemaError = (getAjvError) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

export const validateSchema = (schema, response) => {
  const ajv = new Ajv();
  //const validate = ajv.addSchema(definitionsHelper).compile(schema);
  const validate = ajv.addSchema(schema).compile(schema);

  const valid = validate(response);

  if (!valid) {
    getSchemaError(validate.errors).then((schemaError) => {
      throw new Error(schemaError);
    });
  } else {
    cy.log("Schema validated!");
  }
};
