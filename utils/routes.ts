const githubPagesBase = '/toadkiller-site';

const getBasePath = (pathname: string) => {
  if (pathname === githubPagesBase || pathname.startsWith(`${githubPagesBase}/`)) {
    return githubPagesBase;
  }

  return '';
};

export const getRoutePath = (pathname = window.location.pathname) => {
  const basePath = getBasePath(pathname);
  const pathWithoutBase = basePath ? pathname.slice(basePath.length) || '/' : pathname;

  return pathWithoutBase.replace(/\/$/, '') || '/';
};

export const getRouteHref = (path: string) => {
  const basePath = getBasePath(window.location.pathname);
  return `${basePath}${path}`;
};
