// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

console.log('ENV', process.env);

module.exports = withNx({
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    SOMETHING: 'value',
  },
});
