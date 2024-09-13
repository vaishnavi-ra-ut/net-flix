const { GEMINI_API_KEY } = process.env;

const client = {
  chat: {
    completions: {
      create: async ({ messages, model }) => {
        const response = await fetch('https://api.gemini.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
          },
          body: JSON.stringify({ messages, model }),
        });

        return response.json();
      },
    },
  },
};

export default client;
