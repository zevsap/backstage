/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FetchFunction, FetchMiddleware } from './types';

const DEFAULT_HEADER_NAME = 'backstage-token';

/**
 * A fetch middleware, whose signed-in state can change throughout its lifetime
 * and injects a Backstage token header accordingly.
 *
 * @public
 */
export class IdentityAwareFetchMiddleware implements FetchMiddleware {
  private headerName = DEFAULT_HEADER_NAME;
  private tokenFunction: (() => Promise<string | undefined>) | undefined;

  /**
   * {@inheritdoc FetchMiddleware.apply}
   */
  apply(next: FetchFunction): FetchFunction {
    return async (input, init) => {
      // Making sure to read this field from the surrounding class dynamically
      // on each fetch call, since it might change as the user logs in and out.
      const tokenFunction = this.tokenFunction;

      if (typeof tokenFunction !== 'function') {
        return next(input, init);
      }

      const token = await tokenFunction();
      if (typeof token !== 'string') {
        return next(input, init);
      }

      const request = new Request(input, init);
      request.headers.set(this.headerName, token);
      return next(request);
    };
  }

  /**
   * Changes the header name from the default value to a custom one.
   */
  setHeaderName(name: string): IdentityAwareFetchMiddleware {
    this.headerName = name;
    return this;
  }

  /**
   * Marks the session as signed in.
   *
   * @param tokenFunction - Optionally returns a Backstage token
   */
  setSignedIn(
    tokenFunction: (() => Promise<string | undefined>) | undefined,
  ): void {
    this.tokenFunction = tokenFunction;
  }

  /**
   * Marks the session as signed out.
   */
  setSignedOut(): void {
    this.tokenFunction = undefined;
  }
}
