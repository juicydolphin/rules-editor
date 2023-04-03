const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "https://localhost:7223",
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
