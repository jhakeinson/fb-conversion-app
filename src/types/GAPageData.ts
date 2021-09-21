
export default interface GAPageData<T extends string = string> {
    title: T;
    href: T;
    path: T;
    hash?: T;
    search_string?: T;
    screen_width?: T;
    screen_height?: T;
}
