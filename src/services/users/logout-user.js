export const logoutUser = async (request, reply) => {
    request.session.delete();
    return {
      success: true
    };
};