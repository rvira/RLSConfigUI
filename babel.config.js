module.exports = { 
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        [
          'module-name-mapper',
          {
            moduleNameMapper: {
                "\\.(css|less|scss)$": "identity-obj-proxy"
            }
          }
        ]
      ]
}
