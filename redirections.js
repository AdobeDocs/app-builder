(() => {
  const identifier = '#!AdobeDocs/project-firefly/master/';
  if (window.location.hash.startsWith(identifier)) {
    const newLocation = window.location.hash
      .replace('#!AdobeDocs/project-firefly/master/', '')
      .replace('overview/what_is.md', 'overview/how_it_works.md')
      .replace('getting_started/setup.md', 'getting_started.md')
      .replace('guides/architecture_overview.md', 'guides.md')
      .replace('guides/exc_app/overview.md', 'guides/exc_app.md')
      .replace('guides/security_overview.md', 'guides/security.md')
      .replace('guides/understanding_authentication.md', 'guides/security/understanding_authentication.md')
      .replace('guides/ci_cd_for_firefly_apps.md', 'guides/deployment/ci_cd_for_firefly_apps.md')
      .replace('faq.md', 'overview/faq.md')
      .replace('reference_documentation.md', 'guides/reference_documentation.md')
      .replace('contribution_guides.md', 'guides/contribution_guides.md')
      .replace('support.md', 'overview/community.md')
      .replace('.md', '/');
    
    if (!['README/', 'overview/'].includes(newLocation)) {
      window.location.href = decodeURIComponent(window.location.href.split('#')[0].replace('overview/', newLocation));
    }
  }
})();