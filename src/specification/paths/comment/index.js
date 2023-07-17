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
                  $ref: '#/components/schemas/CommentRequestRequiredObject'
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