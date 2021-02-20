import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import SearchWorker from 'worker-loader!./search.worker.js'

function useSearch(query) {
  const latestQuery = React.useRef(query)
  const workerRef = React.useRef()

  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          rawBody
        }
      }
      allSitePage {
        nodes {
          path
          context {
            mdxId
          }
        }
      }
    }
  `)

  const mdxNodes = data.allMdx.nodes.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
  }, { });

  const list = React.useMemo(
    () =>
      data.allSitePage.nodes.filter(node => {
        return (node.context && node.context.mdxId && mdxNodes[node.context.mdxId] != null);
      }).map(node => {
        const mdxNode = mdxNodes[node.context.mdxId];

        const obj =
        {
          path: node.path,
          title: mdxNode.frontmatter.title,
          rawBody: mdxNode.rawBody
        };
        return obj;
      }),
    [data],
  )

  const [results, setResults] = React.useState(list)

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.query && data.results && data.query === latestQuery.current) {
      setResults(data.results)
    }
  }, [])

  React.useEffect(() => {
    const worker = new SearchWorker()
    worker.addEventListener('message', handleSearchResults)
    worker.postMessage({list})
    workerRef.current = worker

    return () => {
      workerRef.current.terminate()
    }
  }, [list, handleSearchResults])

  React.useEffect(() => {
    latestQuery.current = query
    if (query && workerRef.current) {
      workerRef.current.postMessage({query: query})
    } else {
      setResults(list)
    }
  }, [query, list])

  return results
}

export default useSearch
