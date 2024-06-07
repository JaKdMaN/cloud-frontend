function middlewarePipline (context: any, middleware: any, index: number) {
  const nextMiddleware = middleware[index]

  if(!nextMiddleware) {
    return context.next
  }

  return async () => {
    const nextPipline = middlewarePipline(context, middleware, index + 1)
    await nextMiddleware({
      ...context,
      nextMiddleware: nextPipline,
    })
  }
}

export default middlewarePipline
