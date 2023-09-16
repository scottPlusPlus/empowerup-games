import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponents = {}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <Component components={{ ...mdxComponents }} />
  )
}
