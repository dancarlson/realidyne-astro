export const SITE = {
	name: 'Realidyne',

	origin: 'https://relidyne.com',
	basePathname: '/',

	title: 'Realidyne — In a multiverse of posibilities',
	description: 'At Realidyne, we aim to inspire action by moving hearts, minds and mountains. And we love what we do because the path ahead is ours to forge.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

	facebook: "https://www.facebook.com/realidyne/",
	twitter: "https://twitter.com/realidyne",
	linkedin: "https://www.linkedin.com/company/realidyne/",
	instagram: "https://www.instagram.com/realidyne/",
	phone: "1-866-375-5147",
	email: "info@realidyne.com",
	address: "",
};

export const WORK = {
	disabled: false,
	postsPerPage: 4,

	work: {
		disabled: false,
		pathname: 'work', // work main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
