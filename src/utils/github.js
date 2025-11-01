export async function fetchRepo(user, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${user}/${repo}`)
    if (!res.ok) throw new Error('GitHub API error')
    const data = await res.json()
    return {
      name: data.name,
      description: data.description,
      stars: data.stargazers_count,
      url: data.html_url,
      language: data.language,
      topics: data.topics ?? [],
    }
  } catch (e) {
    return null
  }
}
