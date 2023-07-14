export const blog = {
    '/blog': {
        post: {
          summary: 'Create a blog',
          operationId: 'createBlogPage',
          requestBody: {
            description: 'THe request body for todo',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BlogRequestRequiredObject'
                }
              }
            },
            required: true
          },
          responses: {
            200: {
              description: 'A blog object',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/BlogObject'
                  }
                }
              }
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