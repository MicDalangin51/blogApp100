export const comment = {
    '/blog/:blogId/comment': {
      post: {
        summary: 'Add a comment on blog',
        operationId: 'addComment',
        parameters: [
          {
            $ref: '#/components/parameters/BlogParameterId'
          }
        ],
        requestBody: {
          description: 'THe request body for comment',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CommentRequestRequiredObject'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentObject'
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
    },
    '/blog/:blogId/comment/:commentId': {
      put: {
        summary: 'Update a comment',
        operationId: 'updateOwnComment',
        parameters: [
          {
            $ref: '#/components/parameters/BlogParameterId'
          },
          {
  
            $ref: '#/components/parameters/CommentParameterId'
          }
        ],
        requestBody: {
          description: 'The request body for comment',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CommentRequestObject'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentObject'
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
      },
      delete: {
        summary: 'Delete a comment',
        operationId: 'deleteOwnComment',
        parameters: [
          {
            $ref: '#/components/parameters/BlogParameterId'
          },
          {
  
            $ref: '#/components/parameters/CommentParameterId'
          }
        ],
        responses: {
          200: {
            description: 'successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean'
                    }
                  }
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