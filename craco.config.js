const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@theme': path.resolve(__dirname, 'src/lib/theme'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@views': path.resolve(__dirname, 'src/views')
    }
  }
}
