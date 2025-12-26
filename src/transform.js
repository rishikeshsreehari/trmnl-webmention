function transform(input) {
  const mentions = input.children || [];
  
  // Just compress data, no counting
  const compactMentions = mentions.slice(0, 100).map(m => ({
    author: {
      name: m.author?.name || '',
      url: m.author?.url || ''
    },
    url: m.url,
    'wm-received': m['wm-received'],
    'wm-target': m['wm-target'],
    'wm-property': m['wm-property']
  }));
  
  return {
    children: compactMentions,
    name: input.name
  };
}