export const user = {
    '/user': {
      post: {
        summary: 'Register a new user',
        operationId: 'registerUser',
        requestBody: {
          $ref: '#/components/requestBodies/RequestNewUser'
        },
        responses: {
          200: {
            $ref: '#/components/responses/SuccessfulUserResponse'
          }
        },
        security: [
          {}
        ]
      }
    },
    '/login': {
        post: {
          summary: 'Login a user',
          operationId: 'loginUser',
          requestBody: {
            $ref: '#/components/requestBodies/LoginUser'
          },
          responses: {
            200: {
              $ref: '#/components/responses/SuccessfulResponse'
            }
          },
          security: [
            {}
          ]
        }
    },
    '/logout': {
        post: {
          summary: 'Logout a user',
          operationId: 'logoutUser',
          responses: {
            200: {
              $ref: '#/components/responses/SuccessfulResponse'
            }
          },
          security: [
            {
              cookieAuth: []
            }
          ]
        }
      },
      '/auth-check': {
        get: {
          summary: 'Checks if user is logged in',
          operationId: 'authCheck',
          responses: {
            200: {
              $ref: '#/components/responses/SuccessfulResponse'
            }
          },
          security: [
            {
              cookieAuth: []
            }
          ]
        }
      }
};