import Head from 'next/head'
import MarkdownSampleShort from '../components/MarkdownSampleShort.mdx'

export default function Index() {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Tailwind CSS Typography</title>
      </Head>
      <div className="grid grid-cols-2">
        <div className="bg-white dark:bg-slate-900">
          <article className="py-12 px-4 format format-slate format-red dark:format-invert mx-auto format-headings:text-green-400">
            <h1>Slate</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-slate-900">
          <article className="py-12 px-4 format format-slate format-invert mx-auto">
            <h1>Slate</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-50">
          <article className="py-12 px-4 format format-gray mx-auto">
            <h1>Gray</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-gray format-invert mx-auto">
            <h1>Gray</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-zinc-50">
          <article className="py-12 px-4 format format-zinc mx-auto">
            <h1>Zinc</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-zinc-900">
          <article className="py-12 px-4 format format-zinc format-invert mx-auto">
            <h1>Zinc</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-neutral-50">
          <article className="py-12 px-4 format format-neutral mx-auto">
            <h1>Neutral</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-neutral-900">
          <article className="py-12 px-4 format format-neutral format-invert mx-auto">
            <h1>Neutral</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-stone-50">
          <article className="py-12 px-4 format format-stone mx-auto">
            <h1>Stone</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-stone-900">
          <article className="py-12 px-4 format format-stone format-invert mx-auto">
            <h1>Stone</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-red mx-auto">
            <h1>Red Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-red format-invert mx-auto">
            <h1>Red Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-orange mx-auto">
            <h1>Orange Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-orange format-invert mx-auto">
            <h1>Orange Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-amber mx-auto">
            <h1>Amber Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-amber format-invert mx-auto">
            <h1>Amber Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-yellow mx-auto">
            <h1>Yellow Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-yellow format-invert mx-auto">
            <h1>Yellow Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-lime mx-auto">
            <h1>Lime Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-lime format-invert mx-auto">
            <h1>Lime Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-green mx-auto">
            <h1>Green Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-green format-invert mx-auto">
            <h1>Green Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-emerald mx-auto">
            <h1>Emerald Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-emerald format-invert mx-auto">
            <h1>Emerald Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-teal mx-auto">
            <h1>Teal Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-teal format-invert mx-auto">
            <h1>Teal Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-cyan mx-auto">
            <h1>Cyan Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-cyan format-invert mx-auto">
            <h1>Cyan Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-sky mx-auto">
            <h1>Sky Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-sky format-invert mx-auto">
            <h1>Sky Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-blue mx-auto">
            <h1>Blue Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-blue format-invert mx-auto">
            <h1>Blue Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-indigo mx-auto">
            <h1>Indigo Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-indigo format-invert mx-auto">
            <h1>Indigo Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-violet mx-auto">
            <h1>Violet Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-violet format-invert mx-auto">
            <h1>Violet Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-purple mx-auto">
            <h1>Purple Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-purple format-invert mx-auto">
            <h1>Purple Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-fuchsia mx-auto">
            <h1>Fuchsia Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-fuchsia format-invert mx-auto">
            <h1>Fuchsia Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-pink mx-auto">
            <h1>Pink Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-pink format-invert mx-auto">
            <h1>Pink Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-white">
          <article className="py-12 px-4 format format-rose mx-auto">
            <h1>Rose Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-gray-900">
          <article className="py-12 px-4 format format-rose format-invert mx-auto">
            <h1>Rose Links</h1>
            <MarkdownSampleShort />
          </article>
        </div>
      </div>
    </div>
  )
}

export const config = {
  unstable_runtimeJS: false,
}
