/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const createConfig = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
  }

  // development only config
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }

  return nextConfig
}

export default createConfig
