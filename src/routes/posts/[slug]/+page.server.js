import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const post = await reader.collections.posts.read(params.slug, { resolveLinkedFiles: true });

	if (post) {
		return post;
	}

	error(404, 'Not found');
}
