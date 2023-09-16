import React from 'react';
import MarkdownIt from 'markdown-it';


interface MarkdownRendererProps {
  markdown: string;
}

export default function MarkdownRenderer(props:MarkdownRendererProps) {
  const md = new MarkdownIt().use(require('markdown-it-anchor'));
  const parsedHtml = md.render(props.markdown);
  return <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />;
};

