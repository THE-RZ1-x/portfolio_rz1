const GITHUB_API_BASE = 'https://api.github.com';

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    const data = await response.json();
    return data.map(repo => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      updatedAt: repo.updated_at
    }));
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

export const fetchRepoCollaborators = async (username, repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repoName}/contributors`);
    if (!response.ok) throw new Error('Failed to fetch collaborators');
    const data = await response.json();
    return data.map(contributor => ({
      name: contributor.login,
      avatar: contributor.avatar_url,
      profile: contributor.html_url,
      contributions: contributor.contributions
    }));
  } catch (error) {
    console.error('Error fetching collaborators:', error);
    return [];
  }
};

export const fetchUserStats = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) throw new Error('Failed to fetch user stats');
    const data = await response.json();
    return {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      createdAt: data.created_at
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return null;
  }
};

// Environment variables (Vite)
export const GITHUB_CONFIG = {
  username: import.meta.env.VITE_GITHUB_USERNAME || 'your-username',
  token: import.meta.env.VITE_GITHUB_TOKEN
};
