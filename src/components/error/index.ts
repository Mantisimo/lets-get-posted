
export type RouteError = {
  message?: string;
  statusText?: string;
};

// Type guard for RouteError
export function isRouteError(error: any): error is RouteError {
  return error && typeof error === 'object' && ('message' in error || 'statusText' in error);
}
