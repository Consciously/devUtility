import { createTokenAuth } from '@octokit/auth-token';
import { Octokit } from '@octokit/rest';

export const handleGithubAuthentication = async githubToken => {
	const auth = createTokenAuth(githubToken);
	const authentication = await auth();

	const octokit = new Octokit({
		auth: authentication.token,
		userAgent: 'myApp v1.2.3'
	});

	const { data } = await octokit.rest.users.getAuthenticated();

	return data;
};
