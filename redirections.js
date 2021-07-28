/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

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