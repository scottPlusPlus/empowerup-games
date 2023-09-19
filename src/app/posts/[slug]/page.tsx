import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BasePage } from '@/src/components/basePage'
import MarkdownIt from 'markdown-it';
import { BasePageNeutral } from '@/src/components/basePageNeutral';
import { GameHeader } from '@/src/components/GameHeader';
import { BaseWidth } from '@/src/components/BaseWidth';
import { numFromSearchParams, stringFromSearchParams } from '@/src/frontCode/routeUtils';

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


export default async function SinglePost({ params, searchParams }: {
  params: {
    topic: string,
    slug: string
  },
  searchParams: Record<string, unknown> | null
}) {
  const post = allPosts.find((post) => post.slug === params.slug);
  const ab =  numFromSearchParams(searchParams, "ab") ?? 0;

  if (!post){
    return notFound()
  } 

  const tocMarker = '@@TOC@@';
  var postMarkdown = post.body.raw;
  postMarkdown += `\n\n${tocMarker}\n\n[[toc]]`;
  const md = new MarkdownIt().use(require('markdown-it-anchor'));
  md.use(require('markdown-it-table-of-contents'), { includeLevel: [1, 2, 3] });

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

  function tocContent(){
    return (
      <div className='prose prose-li:my-0 prose-ul:my-0 prose-a:text-blue-500 prose-a:font-[550] prose-a:no-underline hover:prose-a:underline'>
        <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
      </div>
    )
  }

  function articleContent(){
    return (
      <article className='mt-8 mb-16'>
      <h1 className="h3 text-slate-100 mb-4">{post!.title}</h1>
      {/* <div className="prose text-slate-200 font-[350] max-w-none prose-p:leading-normal prose-headings:text-slate-100 prose-a:text-blue-500 prose-a:font-[550] prose-a:no-underline hover:prose-a:underline"> */}
      <div className="prose text-lg text-slate-200 max-w-none prose-p:leading-normal prose-headings:text-slate-100 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
      </div>
    </article>
    )
  }


  if (ab == 1){
    return (
      <BasePageNeutral>
        <GameHeader></GameHeader>
        <div className="flex relative">
  
        {/* Left Column (Fixed) */}
        <div className="w-1/4 h-screen fixed left-0 top-14 overflow-y-auto">
          {tocContent()}  
        </div>
        
        {/* Right Column (Scrollable) */}
        <div className="w-3/4 ml-auto p-4 overflow-y-auto">
          {articleContent()}
        </div>
      </div>
      </BasePageNeutral>
    )
  }

  //fallback with no toc
  return (
    <BasePageNeutral>
      <GameHeader></GameHeader>
      <div className="flex relative">

      {/* Left Column (Fixed) */}
      {/* <div className="w-1/4 h-screen fixed left-0 top-14 overflow-y-auto">
        {tocContent()}  
      </div> */}
      
      {/* Right Column (Scrollable) */}
      <div className="w-full ml-auto overflow-y-auto">
        {articleContent()}
      </div>
    </div>
    </BasePageNeutral>
  )
}
