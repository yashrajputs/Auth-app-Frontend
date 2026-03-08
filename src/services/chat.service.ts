import axios from "axios";

const baseURL = "http://localhost:8081/api/v1";

export const sendMessagesToServer = async (message: string, conversationId: string): Promise<string> => {
  const response = await axios.post(`${baseURL}/helpdesk`, message, {
    headers: {
      ConversationId: conversationId,
    },
  });

  return response.data;
};
