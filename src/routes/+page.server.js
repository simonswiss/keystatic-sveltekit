import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export async function load() {
	const posts = await reader.collections.posts.all({ resolveLinkedFiles: true });

	if (posts) {
		return { posts };
	}

	error(404, 'Not found');
}
