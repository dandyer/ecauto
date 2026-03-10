export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://ecmobileauto.com/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
