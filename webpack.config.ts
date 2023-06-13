import path from 'path';

import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWerbpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
  locales: path.resolve(__dirname, 'public', 'locales'),
  buildLocales: path.resolve(__dirname, 'build', 'locales'),
};

const mode = 'development';
const isDev = mode === 'development'; 
const PORT = 4000;

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev,
  port: PORT,
})

export default config;