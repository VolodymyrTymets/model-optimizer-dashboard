import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
  schema: `${process.env.VITE_API_URL}/graphql`,
  documents: ['src/api/**/*.{js,ts}', 'src/api/**/generated.graphql.tsx'],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    'src/api/generated.graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    'introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write',
  },
};

export default config;
