import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BasePage } from '@/src/components/basePage'
import MarkdownIt from 'markdown-it';

// import Hamburger from './hamburger'
// import SupportFooter from './footer'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
  }
}

export default async function SinglePost({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  const tocMarker = '@@TOC@@';
  var postMarkdown = post.body.raw;
  postMarkdown += `\n\n${tocMarker}\n\n[[toc]]`;
  const md = new MarkdownIt().use(require('markdown-it-anchor'));
  md.use(require('markdown-it-table-of-contents'), {includeLevel:[1,2,3]});

  const htmlWithToc = md.render(postMarkdown);
  const parts = htmlWithToc.split(`<p>${tocMarker}</p>`);
  const articleHtml = parts[0];
  const tocHtml = parts[1];


  // const headings = [...parsedHtml.querySelectorAll('h1, h2')]
  // const parsedHeadings = headings.map(heading => {
  //   return {
  //     title: heading.innerText,
  //     depth: heading.nodeName.replace(/\D/g,''),
  //     id: heading.getAttribute('id')
  //   }
  // })
  // console.log(parsedHeadings)

  return (
    <BasePage>

      {/* Breadcrumbs */}
      {/* <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
            <span className="text-slate-500">{post.topic.name}</span>
            <svg className="h-3 w-3 shrink-0 fill-slate-400 mx-2" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path>
            </svg>
            <span className="text-slate-800 font-medium truncate">{post.title}</span>
          </div> */}

      <article className='my-16'>
        <h1 className="h3 text-slate-100 mb-4">{post.title}</h1>
        <div className='prose prose-li:my-0 prose-ul:my-0 prose-a:text-blue-500 prose-a:font-[550] prose-a:no-underline hover:prose-a:underline'>
        <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
        </div>
          <div>- - - - -</div>
        <div className="prose text-slate-300 font-[350] max-w-none prose-p:leading-normal prose-headings:text-slate-100 prose-a:text-blue-500 prose-a:font-[550] prose-a:no-underline hover:prose-a:underline">

          <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
        </div>
      </article>
          {/* <h1>Raw:</h1>
          <div className='text-white prose'>{htmlWithToc}</div> */}

      {/* <SupportFooter /> */}
    </BasePage>
  )
}
