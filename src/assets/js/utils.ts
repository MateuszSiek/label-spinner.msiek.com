
export interface UrlParams {
    list?: string[];
    mute?: boolean;
    title?: string;
    embedded?: boolean;
    removeWinner?: boolean;
  }
  
  export function getUrlParams(): UrlParams {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
  
    const list = searchParams.get('list')?.split(',');
    const mute = searchParams.get('mute') === 'true';
    const title = searchParams.get('title') || undefined;
    const embedded = searchParams.get('embedded') === 'true';
    const removeWinner = searchParams.get('removeWinner') === 'true';
  
    return {list, mute, title, embedded, removeWinner};
  }
  
  export function setUrlParam(key: keyof UrlParams, value: string | boolean | undefined) {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
  
    console.log(key, value);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value.toString());
    }
  
    url.search = searchParams.toString();
    window.history.replaceState({}, '', url.toString());
  }
  
  export {};