export const CREATED_TIME_ASC = 'createdTime-asc';
export const CREATED_TIME_DESC = 'createdTime-desc';
export const TITLE_ASC = 'title-asc';
export const TITLE_DESC = 'title-desc';
export const IS_DONE_ASC = 'isDone-asc';
export const IS_DONE_DESC = 'isDone-desc';

export const sortingOptions = [
    {
        value: CREATED_TIME_ASC,
        label: 'From oldest to newest',
    },
    {
        value: CREATED_TIME_DESC,
        label: 'From newest to oldest',
    },
    {
        value: TITLE_ASC,
        label: 'Title a-z',
    },
    {
        value: TITLE_DESC,
        label: 'Title z-a',
    },
    {
        value: IS_DONE_ASC,
        label: 'Done last',
    },
    {
        value: IS_DONE_DESC,
        label: 'Done first',
    },
];
