import {defineConfig, globalIgnores} from 'eslint/config'
import github from 'eslint-plugin-github'

export default defineConfig([
  globalIgnores([
    '**/dist/',
    '**/lib/',
    '**/node_modules/',
    'eslint.config.mjs',
    '.pnp.cjs',
    '.pnp.loader.mjs'
  ]),
  github.getFlatConfigs().internal,
  github.getFlatConfigs().recommended,
  ...github.getFlatConfigs().typescript,
  {
    settings: {
      'import/resolver': {
        typescript: true
      }
    },
    rules: {
      'i18n-text/no-en': 0
    }
  }
])
