export type Post = {
    id: string,
    title: string,
    date: string
}

export type PostWithContent = {
    contentHtml: string
} & Post;