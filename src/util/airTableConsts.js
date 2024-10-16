export const BASE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
export const AUTHORIZATION = `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`;
