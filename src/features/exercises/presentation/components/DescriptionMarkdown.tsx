import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface DescriptionMarkdownProps {
  content: string
}

export function DescriptionMarkdown({ content }: DescriptionMarkdownProps) {
  return (
    <div
      className="
        [&_h1]:mb-2 [&_h1]:mt-4 [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-zinc-100
        [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-zinc-100
        [&_h3]:mb-1 [&_h3]:mt-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-zinc-200
        [&_p]:mb-3 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-zinc-300
        [&_strong]:font-semibold [&_strong]:text-zinc-100
        [&_em]:italic [&_em]:text-zinc-400
        [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5
        [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5
        [&_li]:text-sm [&_li]:leading-7 [&_li]:text-zinc-300
        [&_blockquote]:mb-3 [&_blockquote]:border-l-4 [&_blockquote]:border-emerald-700 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-zinc-400
        [&_code]:rounded [&_code]:bg-zinc-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-emerald-400
        [&_pre]:mb-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-zinc-700 [&_pre]:bg-zinc-900 [&_pre]:p-4
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-zinc-300
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
