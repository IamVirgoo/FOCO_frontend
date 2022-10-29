module.exports = {
    async headers() {
      return [
        {
          source: '/api/v1',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: '*'
            }
          ],
        }
      ]
    },
  };