import { withLeadingSlash } from 'ufo'

interface Page {
  id: number
  slug: string
  full_path: string
  content: string
}

export default cachedEventHandler(async (event) => {
  const { baseURL } = useRuntimeConfig(event).oldBackend
  const slug = getRouterParam(event, 'slug')

  const { data } = await $fetch<{ data: Page[] }>('/pages', {
    baseURL,
    query: {
      fields: ['id', 'slug', 'full_path', 'content'],
      filter: {
        full_path: { _eq: withLeadingSlash(slug) },
      },
    },
  })

  if (!data.length) {
    createError({ statusCode: 404, statusMessage: 'Page not found' })
  }
  else {
    return {
      content: data[0].content,
      id: data[0].id,
    }
  }
}, {
  maxAge: 60 * 15,
})
