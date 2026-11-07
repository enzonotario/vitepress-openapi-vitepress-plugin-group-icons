import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import { theme, useOpenapi } from 'vitepress-openapi/client';
import 'vitepress-openapi/dist/style.css';
import 'virtual:group-icons.css'
import spec from '../../../public/openapi.json' with { type: 'json' }

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    useOpenapi({ spec });
    theme.enhanceApp({ app });
  },
} satisfies Theme;
