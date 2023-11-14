import { html } from '@esbuilder/html';
import autoprefixer from 'autoprefixer';
import { BuildOptions } from 'esbuild';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

import { esbuildCssPlugin } from './scripts/utils';

export function makeConfig(entryPoints: string[], outDir: string, isHtml?: boolean) {
  const config: BuildOptions = {
    entryPoints,
    outdir: outDir,
    bundle: true,
    sourcemap: false,
    minify: false,
    target: ['chrome99', 'firefox102', 'safari16', 'edge113'],
    loader: {
      '.png': 'dataurl',
      '.webp': 'dataurl',
      '.jpeg': 'dataurl',
      '.svg': 'dataurl',
      '.json': 'json',
    },
    plugins: [
      esbuildCssPlugin({
        plugins: [
          tailwindcss,
          autoprefixer,
          postcssImport(),
        ],
        inject: isHtml,
      }),
    ],
  }

  if (isHtml) {
    config.plugins?.push(
      html(),
    )
  }

  return config;
}
