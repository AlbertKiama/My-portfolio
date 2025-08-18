import React from 'react';

type SEOProps = {
  title?: string;
  description?: string;
};

export function SEO({ title = 'Albert Kariuki — Full-Stack Developer', description = 'Portfolio website of Albert Kariuki showcasing services, skills, projects and blog.' }: SEOProps) {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}

