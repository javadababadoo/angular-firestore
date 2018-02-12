export type Credentials = {
  /**
   * Secret or Signed JWT. Please, caution where you store this sensitive information!
   */
  secret: string;
};

/**
 * This is the interface containing the attributes for the keycloak configuration in case
 * you don't specify a keycloak.json file in your project.
 */
export interface KeycloakConfig {
  /**
   * Keycloak server url, for example: http://localhost:8080/auth
   */
  url: string;
  /**
   * Realm name, ie.: myrealm
   */
  realm: string;
  /**
   * Client ID, ie.: myapp
   */
  clientId: string;
  /**
   * The credentials object contains the secret property that should be used depending on
   * which flow and access type was chosen.
   */
  credentials?: Credentials;
}
