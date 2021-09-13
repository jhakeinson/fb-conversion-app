import Content from './Content';

export default interface CustomData {
    value?: number;
    currency?: string;
    content_name: string;
    content_type?: string;
    content_category?: string;
    content_ids?: Array<string>;
    contents?: Array<Content>;
}
