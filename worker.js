export default {
  async fetch(request, env) {
    try {
      // Cloudflare Assets binding serves static assets and handles SPA fallback automatically
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};

