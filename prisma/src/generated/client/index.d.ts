
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model authors
 */

export type authors = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model books
 */

export type books = {
  id: number
  title: string
  stock: number
  isbn: string
  imageUrl: string | null
  pages: number
  authorId: number
  genreId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model customers
 */

export type customers = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  lastPaymentDate: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model genres
 */

export type genres = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model rentals
 */

export type rentals = {
  id: number
  bookId: number
  customerId: number
  statusId: number
  dateRented: Date | null
  dateReturned: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model statuses
 */

export type statuses = {
  id: number
  status: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model users
 */

export type users = {
  id: number
  userName: string
  password: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.authors.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.authors`: Exposes CRUD operations for the **authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.authorsDelegate<GlobalReject>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<GlobalReject>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<GlobalReject>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<GlobalReject>;

  /**
   * `prisma.rentals`: Exposes CRUD operations for the **rentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rentals.findMany()
    * ```
    */
  get rentals(): Prisma.rentalsDelegate<GlobalReject>;

  /**
   * `prisma.statuses`: Exposes CRUD operations for the **statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.statuses.findMany()
    * ```
    */
  get statuses(): Prisma.statusesDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.29.1
   * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    authors: 'authors',
    books: 'books',
    customers: 'customers',
    genres: 'genres',
    rentals: 'rentals',
    statuses: 'statuses',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model authors
   */


  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
    max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorsSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorsMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorsAvgAggregateInputType = {
    id?: true
  }

  export type AuthorsSumAggregateInputType = {
    id?: true
  }

  export type AuthorsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorsAggregateArgs = {
    /**
     * Filter which authors to aggregate.
     * 
    **/
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     * 
    **/
    orderBy?: Enumerable<authorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: AuthorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: AuthorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }


    
    
  export type AuthorsGroupByArgs = {
    where?: authorsWhereInput
    orderBy?: Enumerable<authorsOrderByInput>
    by: Array<AuthorsScalarFieldEnum>
    having?: authorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _avg?: AuthorsAvgAggregateInputType
    _sum?: AuthorsSumAggregateInputType
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }


  export type AuthorsGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends AuthorsGroupByArgs> = Promise<
    Array<
      PickArray<AuthorsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]> 
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      > 
    >


  export type authorsSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | booksFindManyArgs
  }

  export type authorsInclude = {
    books?: boolean | booksFindManyArgs
  }

  export type authorsGetPayload<
    S extends boolean | null | undefined | authorsArgs,
    U = keyof S
      > = S extends true
        ? authors
    : S extends undefined
    ? never
    : S extends authorsArgs | authorsFindManyArgs
    ?'include' extends U
    ? authors  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'books'
        ? Array < booksGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof authors ?authors [P]
  : 
          P extends 'books'
        ? Array < booksGetPayload<S['select'][P]>>  : never
  } 
    : authors
  : authors


  type authorsCountArgs = Merge<
    Omit<authorsFindManyArgs, 'select' | 'include'> & {
      select?: AuthorsCountAggregateInputType | true
    }
  >

  export interface authorsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Authors that matches the filter.
     * @param {authorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, authorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'authors'> extends True ? CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>> : CheckSelect<T, Prisma__authorsClient<authors | null >, Prisma__authorsClient<authorsGetPayload<T> | null >>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, authorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'authors'> extends True ? CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>> : CheckSelect<T, Prisma__authorsClient<authors | null >, Prisma__authorsClient<authorsGetPayload<T> | null >>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authorsFindManyArgs>(
      args?: SelectSubset<T, authorsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<authors>>, PrismaPromise<Array<authorsGetPayload<T>>>>

    /**
     * Create a Authors.
     * @param {authorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
    **/
    create<T extends authorsCreateArgs>(
      args: SelectSubset<T, authorsCreateArgs>
    ): CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>>

    /**
     * Create many Authors.
     *     @param {authorsCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const authors = await prisma.authors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authorsCreateManyArgs>(
      args?: SelectSubset<T, authorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authors.
     * @param {authorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
    **/
    delete<T extends authorsDeleteArgs>(
      args: SelectSubset<T, authorsDeleteArgs>
    ): CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>>

    /**
     * Update one Authors.
     * @param {authorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authorsUpdateArgs>(
      args: SelectSubset<T, authorsUpdateArgs>
    ): CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>>

    /**
     * Delete zero or more Authors.
     * @param {authorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authorsDeleteManyArgs>(
      args?: SelectSubset<T, authorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authorsUpdateManyArgs>(
      args: SelectSubset<T, authorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authors.
     * @param {authorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
    **/
    upsert<T extends authorsUpsertArgs>(
      args: SelectSubset<T, authorsUpsertArgs>
    ): CheckSelect<T, Prisma__authorsClient<authors>, Prisma__authorsClient<authorsGetPayload<T>>>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorsCountArgs>(
      args?: Subset<T, authorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__authorsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends booksFindManyArgs = {}>(args?: Subset<T, booksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<books>>, PrismaPromise<Array<booksGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * authors findUnique
   */
  export type authorsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * Throw an Error if a authors can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which authors to fetch.
     * 
    **/
    where: authorsWhereUniqueInput
  }


  /**
   * authors findFirst
   */
  export type authorsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * Throw an Error if a authors can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which authors to fetch.
     * 
    **/
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     * 
    **/
    orderBy?: Enumerable<authorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     * 
    **/
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     * 
    **/
    distinct?: Enumerable<AuthorsScalarFieldEnum>
  }


  /**
   * authors findMany
   */
  export type authorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * Filter, which authors to fetch.
     * 
    **/
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     * 
    **/
    orderBy?: Enumerable<authorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     * 
    **/
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthorsScalarFieldEnum>
  }


  /**
   * authors create
   */
  export type authorsCreateArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * The data needed to create a authors.
     * 
    **/
    data: XOR<authorsCreateInput, authorsUncheckedCreateInput>
  }


  /**
   * authors createMany
   */
  export type authorsCreateManyArgs = {
    data: Enumerable<authorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * authors update
   */
  export type authorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * The data needed to update a authors.
     * 
    **/
    data: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
    /**
     * Choose, which authors to update.
     * 
    **/
    where: authorsWhereUniqueInput
  }


  /**
   * authors updateMany
   */
  export type authorsUpdateManyArgs = {
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    where?: authorsWhereInput
  }


  /**
   * authors upsert
   */
  export type authorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * The filter to search for the authors to update in case it exists.
     * 
    **/
    where: authorsWhereUniqueInput
    /**
     * In case the authors found by the `where` argument doesn't exist, create a new authors with this data.
     * 
    **/
    create: XOR<authorsCreateInput, authorsUncheckedCreateInput>
    /**
     * In case the authors was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
  }


  /**
   * authors delete
   */
  export type authorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
    /**
     * Filter which authors to delete.
     * 
    **/
    where: authorsWhereUniqueInput
  }


  /**
   * authors deleteMany
   */
  export type authorsDeleteManyArgs = {
    where?: authorsWhereInput
  }


  /**
   * authors without action
   */
  export type authorsArgs = {
    /**
     * Select specific fields to fetch from the authors
     * 
    **/
    select?: authorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: authorsInclude | null
  }



  /**
   * Model books
   */


  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
    max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    pages: number | null
    authorId: number | null
    genreId: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
    stock: number | null
    pages: number | null
    authorId: number | null
    genreId: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    title: string | null
    stock: number | null
    isbn: string | null
    imageUrl: string | null
    pages: number | null
    authorId: number | null
    genreId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    stock: number | null
    isbn: string | null
    imageUrl: string | null
    pages: number | null
    authorId: number | null
    genreId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    stock: number
    isbn: number
    imageUrl: number
    pages: number
    authorId: number
    genreId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
    stock?: true
    pages?: true
    authorId?: true
    genreId?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
    stock?: true
    pages?: true
    authorId?: true
    genreId?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    stock?: true
    isbn?: true
    imageUrl?: true
    pages?: true
    authorId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    stock?: true
    isbn?: true
    imageUrl?: true
    pages?: true
    authorId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    stock?: true
    isbn?: true
    imageUrl?: true
    pages?: true
    authorId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BooksAggregateArgs = {
    /**
     * Filter which books to aggregate.
     * 
    **/
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     * 
    **/
    orderBy?: Enumerable<booksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }


    
    
  export type BooksGroupByArgs = {
    where?: booksWhereInput
    orderBy?: Enumerable<booksOrderByInput>
    by: Array<BooksScalarFieldEnum>
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }


  export type BooksGroupByOutputType = {
    id: number
    title: string
    stock: number
    isbn: string
    imageUrl: string | null
    pages: number
    authorId: number
    genreId: number
    createdAt: Date
    updatedAt: Date
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = Promise<
    Array<
      PickArray<BooksGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], BooksGroupByOutputType[P]> 
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      > 
    >


  export type booksSelect = {
    id?: boolean
    title?: boolean
    stock?: boolean
    isbn?: boolean
    imageUrl?: boolean
    pages?: boolean
    authorId?: boolean
    genreId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authors?: boolean | authorsArgs
    genres?: boolean | genresArgs
    rentals?: boolean | rentalsFindManyArgs
  }

  export type booksInclude = {
    authors?: boolean | authorsArgs
    genres?: boolean | genresArgs
    rentals?: boolean | rentalsFindManyArgs
  }

  export type booksGetPayload<
    S extends boolean | null | undefined | booksArgs,
    U = keyof S
      > = S extends true
        ? books
    : S extends undefined
    ? never
    : S extends booksArgs | booksFindManyArgs
    ?'include' extends U
    ? books  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'authors'
        ? authorsGetPayload<S['include'][P]> :
        P extends 'genres'
        ? genresGetPayload<S['include'][P]> :
        P extends 'rentals'
        ? Array < rentalsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof books ?books [P]
  : 
          P extends 'authors'
        ? authorsGetPayload<S['select'][P]> :
        P extends 'genres'
        ? genresGetPayload<S['select'][P]> :
        P extends 'rentals'
        ? Array < rentalsGetPayload<S['select'][P]>>  : never
  } 
    : books
  : books


  type booksCountArgs = Merge<
    Omit<booksFindManyArgs, 'select' | 'include'> & {
      select?: BooksCountAggregateInputType | true
    }
  >

  export interface booksDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends booksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, booksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'books'> extends True ? CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>> : CheckSelect<T, Prisma__booksClient<books | null >, Prisma__booksClient<booksGetPayload<T> | null >>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends booksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, booksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'books'> extends True ? CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>> : CheckSelect<T, Prisma__booksClient<books | null >, Prisma__booksClient<booksGetPayload<T> | null >>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends booksFindManyArgs>(
      args?: SelectSubset<T, booksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<books>>, PrismaPromise<Array<booksGetPayload<T>>>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
    **/
    create<T extends booksCreateArgs>(
      args: SelectSubset<T, booksCreateArgs>
    ): CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>>

    /**
     * Create many Books.
     *     @param {booksCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const books = await prisma.books.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends booksCreateManyArgs>(
      args?: SelectSubset<T, booksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
    **/
    delete<T extends booksDeleteArgs>(
      args: SelectSubset<T, booksDeleteArgs>
    ): CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends booksUpdateArgs>(
      args: SelectSubset<T, booksUpdateArgs>
    ): CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends booksDeleteManyArgs>(
      args?: SelectSubset<T, booksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends booksUpdateManyArgs>(
      args: SelectSubset<T, booksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
    **/
    upsert<T extends booksUpsertArgs>(
      args: SelectSubset<T, booksUpsertArgs>
    ): CheckSelect<T, Prisma__booksClient<books>, Prisma__booksClient<booksGetPayload<T>>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__booksClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    authors<T extends authorsArgs = {}>(args?: Subset<T, authorsArgs>): CheckSelect<T, Prisma__authorsClient<authors | null >, Prisma__authorsClient<authorsGetPayload<T> | null >>;

    genres<T extends genresArgs = {}>(args?: Subset<T, genresArgs>): CheckSelect<T, Prisma__genresClient<genres | null >, Prisma__genresClient<genresGetPayload<T> | null >>;

    rentals<T extends rentalsFindManyArgs = {}>(args?: Subset<T, rentalsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<rentals>>, PrismaPromise<Array<rentalsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * books findUnique
   */
  export type booksFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * Throw an Error if a books can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which books to fetch.
     * 
    **/
    where: booksWhereUniqueInput
  }


  /**
   * books findFirst
   */
  export type booksFindFirstArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * Throw an Error if a books can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which books to fetch.
     * 
    **/
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     * 
    **/
    orderBy?: Enumerable<booksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     * 
    **/
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     * 
    **/
    distinct?: Enumerable<BooksScalarFieldEnum>
  }


  /**
   * books findMany
   */
  export type booksFindManyArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * Filter, which books to fetch.
     * 
    **/
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     * 
    **/
    orderBy?: Enumerable<booksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     * 
    **/
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BooksScalarFieldEnum>
  }


  /**
   * books create
   */
  export type booksCreateArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * The data needed to create a books.
     * 
    **/
    data: XOR<booksCreateInput, booksUncheckedCreateInput>
  }


  /**
   * books createMany
   */
  export type booksCreateManyArgs = {
    data: Enumerable<booksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * books update
   */
  export type booksUpdateArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * The data needed to update a books.
     * 
    **/
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     * 
    **/
    where: booksWhereUniqueInput
  }


  /**
   * books updateMany
   */
  export type booksUpdateManyArgs = {
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    where?: booksWhereInput
  }


  /**
   * books upsert
   */
  export type booksUpsertArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * The filter to search for the books to update in case it exists.
     * 
    **/
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     * 
    **/
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }


  /**
   * books delete
   */
  export type booksDeleteArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
    /**
     * Filter which books to delete.
     * 
    **/
    where: booksWhereUniqueInput
  }


  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs = {
    where?: booksWhereInput
  }


  /**
   * books without action
   */
  export type booksArgs = {
    /**
     * Select specific fields to fetch from the books
     * 
    **/
    select?: booksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: booksInclude | null
  }



  /**
   * Model customers
   */


  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
    max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    lastPaymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    lastPaymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    lastPaymentDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    lastPaymentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    lastPaymentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    lastPaymentDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs = {
    /**
     * Filter which customers to aggregate.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }


    
    
  export type CustomersGroupByArgs = {
    where?: customersWhereInput
    orderBy?: Enumerable<customersOrderByInput>
    by: Array<CustomersScalarFieldEnum>
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }


  export type CustomersGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Promise<
    Array<
      PickArray<CustomersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CustomersGroupByOutputType[P]> 
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      > 
    >


  export type customersSelect = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    lastPaymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentals?: boolean | rentalsFindManyArgs
  }

  export type customersInclude = {
    rentals?: boolean | rentalsFindManyArgs
  }

  export type customersGetPayload<
    S extends boolean | null | undefined | customersArgs,
    U = keyof S
      > = S extends true
        ? customers
    : S extends undefined
    ? never
    : S extends customersArgs | customersFindManyArgs
    ?'include' extends U
    ? customers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'rentals'
        ? Array < rentalsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof customers ?customers [P]
  : 
          P extends 'rentals'
        ? Array < rentalsGetPayload<S['select'][P]>>  : never
  } 
    : customers
  : customers


  type customersCountArgs = Merge<
    Omit<customersFindManyArgs, 'select' | 'include'> & {
      select?: CustomersCountAggregateInputType | true
    }
  >

  export interface customersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, customersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'customers'> extends True ? CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>> : CheckSelect<T, Prisma__customersClient<customers | null >, Prisma__customersClient<customersGetPayload<T> | null >>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, customersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'customers'> extends True ? CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>> : CheckSelect<T, Prisma__customersClient<customers | null >, Prisma__customersClient<customersGetPayload<T> | null >>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends customersFindManyArgs>(
      args?: SelectSubset<T, customersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<customers>>, PrismaPromise<Array<customersGetPayload<T>>>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends customersCreateArgs>(
      args: SelectSubset<T, customersCreateArgs>
    ): CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>>

    /**
     * Create many Customers.
     *     @param {customersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends customersCreateManyArgs>(
      args?: SelectSubset<T, customersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends customersDeleteArgs>(
      args: SelectSubset<T, customersDeleteArgs>
    ): CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customersUpdateArgs>(
      args: SelectSubset<T, customersUpdateArgs>
    ): CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customersDeleteManyArgs>(
      args?: SelectSubset<T, customersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customersUpdateManyArgs>(
      args: SelectSubset<T, customersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends customersUpsertArgs>(
      args: SelectSubset<T, customersUpsertArgs>
    ): CheckSelect<T, Prisma__customersClient<customers>, Prisma__customersClient<customersGetPayload<T>>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__customersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    rentals<T extends rentalsFindManyArgs = {}>(args?: Subset<T, rentalsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<rentals>>, PrismaPromise<Array<rentalsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Throw an Error if a customers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers findFirst
   */
  export type customersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Throw an Error if a customers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     * 
    **/
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers findMany
   */
  export type customersFindManyArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers create
   */
  export type customersCreateArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The data needed to create a customers.
     * 
    **/
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }


  /**
   * customers createMany
   */
  export type customersCreateManyArgs = {
    data: Enumerable<customersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * customers update
   */
  export type customersUpdateArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The data needed to update a customers.
     * 
    **/
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs = {
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    where?: customersWhereInput
  }


  /**
   * customers upsert
   */
  export type customersUpsertArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The filter to search for the customers to update in case it exists.
     * 
    **/
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     * 
    **/
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }


  /**
   * customers delete
   */
  export type customersDeleteArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter which customers to delete.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs = {
    where?: customersWhereInput
  }


  /**
   * customers without action
   */
  export type customersArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
  }



  /**
   * Model genres
   */


  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
    max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenresAggregateArgs = {
    /**
     * Filter which genres to aggregate.
     * 
    **/
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     * 
    **/
    orderBy?: Enumerable<genresOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }


    
    
  export type GenresGroupByArgs = {
    where?: genresWhereInput
    orderBy?: Enumerable<genresOrderByInput>
    by: Array<GenresScalarFieldEnum>
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }


  export type GenresGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Promise<
    Array<
      PickArray<GenresGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GenresGroupByOutputType[P]> 
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      > 
    >


  export type genresSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | booksFindManyArgs
  }

  export type genresInclude = {
    books?: boolean | booksFindManyArgs
  }

  export type genresGetPayload<
    S extends boolean | null | undefined | genresArgs,
    U = keyof S
      > = S extends true
        ? genres
    : S extends undefined
    ? never
    : S extends genresArgs | genresFindManyArgs
    ?'include' extends U
    ? genres  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'books'
        ? Array < booksGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof genres ?genres [P]
  : 
          P extends 'books'
        ? Array < booksGetPayload<S['select'][P]>>  : never
  } 
    : genres
  : genres


  type genresCountArgs = Merge<
    Omit<genresFindManyArgs, 'select' | 'include'> & {
      select?: GenresCountAggregateInputType | true
    }
  >

  export interface genresDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends genresFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, genresFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'genres'> extends True ? CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>> : CheckSelect<T, Prisma__genresClient<genres | null >, Prisma__genresClient<genresGetPayload<T> | null >>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends genresFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, genresFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'genres'> extends True ? CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>> : CheckSelect<T, Prisma__genresClient<genres | null >, Prisma__genresClient<genresGetPayload<T> | null >>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends genresFindManyArgs>(
      args?: SelectSubset<T, genresFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<genres>>, PrismaPromise<Array<genresGetPayload<T>>>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
    **/
    create<T extends genresCreateArgs>(
      args: SelectSubset<T, genresCreateArgs>
    ): CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>>

    /**
     * Create many Genres.
     *     @param {genresCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genres = await prisma.genres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends genresCreateManyArgs>(
      args?: SelectSubset<T, genresCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
    **/
    delete<T extends genresDeleteArgs>(
      args: SelectSubset<T, genresDeleteArgs>
    ): CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends genresUpdateArgs>(
      args: SelectSubset<T, genresUpdateArgs>
    ): CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends genresDeleteManyArgs>(
      args?: SelectSubset<T, genresDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends genresUpdateManyArgs>(
      args: SelectSubset<T, genresUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
    **/
    upsert<T extends genresUpsertArgs>(
      args: SelectSubset<T, genresUpsertArgs>
    ): CheckSelect<T, Prisma__genresClient<genres>, Prisma__genresClient<genresGetPayload<T>>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__genresClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends booksFindManyArgs = {}>(args?: Subset<T, booksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<books>>, PrismaPromise<Array<booksGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * Throw an Error if a genres can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which genres to fetch.
     * 
    **/
    where: genresWhereUniqueInput
  }


  /**
   * genres findFirst
   */
  export type genresFindFirstArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * Throw an Error if a genres can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which genres to fetch.
     * 
    **/
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     * 
    **/
    orderBy?: Enumerable<genresOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     * 
    **/
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     * 
    **/
    distinct?: Enumerable<GenresScalarFieldEnum>
  }


  /**
   * genres findMany
   */
  export type genresFindManyArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * Filter, which genres to fetch.
     * 
    **/
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     * 
    **/
    orderBy?: Enumerable<genresOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     * 
    **/
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GenresScalarFieldEnum>
  }


  /**
   * genres create
   */
  export type genresCreateArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * The data needed to create a genres.
     * 
    **/
    data: XOR<genresCreateInput, genresUncheckedCreateInput>
  }


  /**
   * genres createMany
   */
  export type genresCreateManyArgs = {
    data: Enumerable<genresCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * genres update
   */
  export type genresUpdateArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * The data needed to update a genres.
     * 
    **/
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     * 
    **/
    where: genresWhereUniqueInput
  }


  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs = {
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    where?: genresWhereInput
  }


  /**
   * genres upsert
   */
  export type genresUpsertArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * The filter to search for the genres to update in case it exists.
     * 
    **/
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     * 
    **/
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }


  /**
   * genres delete
   */
  export type genresDeleteArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
    /**
     * Filter which genres to delete.
     * 
    **/
    where: genresWhereUniqueInput
  }


  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs = {
    where?: genresWhereInput
  }


  /**
   * genres without action
   */
  export type genresArgs = {
    /**
     * Select specific fields to fetch from the genres
     * 
    **/
    select?: genresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: genresInclude | null
  }



  /**
   * Model rentals
   */


  export type AggregateRentals = {
    _count: RentalsCountAggregateOutputType | null
    count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
    max: RentalsMaxAggregateOutputType | null
  }

  export type RentalsAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    customerId: number | null
    statusId: number | null
  }

  export type RentalsSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    customerId: number | null
    statusId: number | null
  }

  export type RentalsMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    customerId: number | null
    statusId: number | null
    dateRented: Date | null
    dateReturned: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalsMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    customerId: number | null
    statusId: number | null
    dateRented: Date | null
    dateReturned: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalsCountAggregateOutputType = {
    id: number
    bookId: number
    customerId: number
    statusId: number
    dateRented: number
    dateReturned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalsAvgAggregateInputType = {
    id?: true
    bookId?: true
    customerId?: true
    statusId?: true
  }

  export type RentalsSumAggregateInputType = {
    id?: true
    bookId?: true
    customerId?: true
    statusId?: true
  }

  export type RentalsMinAggregateInputType = {
    id?: true
    bookId?: true
    customerId?: true
    statusId?: true
    dateRented?: true
    dateReturned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalsMaxAggregateInputType = {
    id?: true
    bookId?: true
    customerId?: true
    statusId?: true
    dateRented?: true
    dateReturned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalsCountAggregateInputType = {
    id?: true
    bookId?: true
    customerId?: true
    statusId?: true
    dateRented?: true
    dateReturned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalsAggregateArgs = {
    /**
     * Filter which rentals to aggregate.
     * 
    **/
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     * 
    **/
    orderBy?: Enumerable<rentalsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rentals
    **/
    _count?: true | RentalsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | RentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: RentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: RentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: RentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: RentalsMaxAggregateInputType
  }

  export type GetRentalsAggregateType<T extends RentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateRentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentals[P]>
      : GetScalarType<T[P], AggregateRentals[P]>
  }


    
    
  export type RentalsGroupByArgs = {
    where?: rentalsWhereInput
    orderBy?: Enumerable<rentalsOrderByInput>
    by: Array<RentalsScalarFieldEnum>
    having?: rentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalsCountAggregateInputType | true
    _avg?: RentalsAvgAggregateInputType
    _sum?: RentalsSumAggregateInputType
    _min?: RentalsMinAggregateInputType
    _max?: RentalsMaxAggregateInputType
  }


  export type RentalsGroupByOutputType = {
    id: number
    bookId: number
    customerId: number
    statusId: number
    dateRented: Date | null
    dateReturned: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
  }

  type GetRentalsGroupByPayload<T extends RentalsGroupByArgs> = Promise<
    Array<
      PickArray<RentalsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RentalsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RentalsGroupByOutputType[P]> 
            : GetScalarType<T[P], RentalsGroupByOutputType[P]>
        }
      > 
    >


  export type rentalsSelect = {
    id?: boolean
    bookId?: boolean
    customerId?: boolean
    statusId?: boolean
    dateRented?: boolean
    dateReturned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | booksArgs
    customers?: boolean | customersArgs
    statuses?: boolean | statusesArgs
  }

  export type rentalsInclude = {
    books?: boolean | booksArgs
    customers?: boolean | customersArgs
    statuses?: boolean | statusesArgs
  }

  export type rentalsGetPayload<
    S extends boolean | null | undefined | rentalsArgs,
    U = keyof S
      > = S extends true
        ? rentals
    : S extends undefined
    ? never
    : S extends rentalsArgs | rentalsFindManyArgs
    ?'include' extends U
    ? rentals  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'books'
        ? booksGetPayload<S['include'][P]> :
        P extends 'customers'
        ? customersGetPayload<S['include'][P]> :
        P extends 'statuses'
        ? statusesGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof rentals ?rentals [P]
  : 
          P extends 'books'
        ? booksGetPayload<S['select'][P]> :
        P extends 'customers'
        ? customersGetPayload<S['select'][P]> :
        P extends 'statuses'
        ? statusesGetPayload<S['select'][P]> : never
  } 
    : rentals
  : rentals


  type rentalsCountArgs = Merge<
    Omit<rentalsFindManyArgs, 'select' | 'include'> & {
      select?: RentalsCountAggregateInputType | true
    }
  >

  export interface rentalsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Rentals that matches the filter.
     * @param {rentalsFindUniqueArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rentalsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rentalsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'rentals'> extends True ? CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>> : CheckSelect<T, Prisma__rentalsClient<rentals | null >, Prisma__rentalsClient<rentalsGetPayload<T> | null >>

    /**
     * Find the first Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindFirstArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rentalsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rentalsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'rentals'> extends True ? CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>> : CheckSelect<T, Prisma__rentalsClient<rentals | null >, Prisma__rentalsClient<rentalsGetPayload<T> | null >>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rentals.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rentals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalsWithIdOnly = await prisma.rentals.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rentalsFindManyArgs>(
      args?: SelectSubset<T, rentalsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<rentals>>, PrismaPromise<Array<rentalsGetPayload<T>>>>

    /**
     * Create a Rentals.
     * @param {rentalsCreateArgs} args - Arguments to create a Rentals.
     * @example
     * // Create one Rentals
     * const Rentals = await prisma.rentals.create({
     *   data: {
     *     // ... data to create a Rentals
     *   }
     * })
     * 
    **/
    create<T extends rentalsCreateArgs>(
      args: SelectSubset<T, rentalsCreateArgs>
    ): CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>>

    /**
     * Create many Rentals.
     *     @param {rentalsCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rentals = await prisma.rentals.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rentalsCreateManyArgs>(
      args?: SelectSubset<T, rentalsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Rentals.
     * @param {rentalsDeleteArgs} args - Arguments to delete one Rentals.
     * @example
     * // Delete one Rentals
     * const Rentals = await prisma.rentals.delete({
     *   where: {
     *     // ... filter to delete one Rentals
     *   }
     * })
     * 
    **/
    delete<T extends rentalsDeleteArgs>(
      args: SelectSubset<T, rentalsDeleteArgs>
    ): CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>>

    /**
     * Update one Rentals.
     * @param {rentalsUpdateArgs} args - Arguments to update one Rentals.
     * @example
     * // Update one Rentals
     * const rentals = await prisma.rentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rentalsUpdateArgs>(
      args: SelectSubset<T, rentalsUpdateArgs>
    ): CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>>

    /**
     * Delete zero or more Rentals.
     * @param {rentalsDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rentalsDeleteManyArgs>(
      args?: SelectSubset<T, rentalsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rentals = await prisma.rentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rentalsUpdateManyArgs>(
      args: SelectSubset<T, rentalsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Rentals.
     * @param {rentalsUpsertArgs} args - Arguments to update or create a Rentals.
     * @example
     * // Update or create a Rentals
     * const rentals = await prisma.rentals.upsert({
     *   create: {
     *     // ... data to create a Rentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rentals we want to update
     *   }
     * })
    **/
    upsert<T extends rentalsUpsertArgs>(
      args: SelectSubset<T, rentalsUpsertArgs>
    ): CheckSelect<T, Prisma__rentalsClient<rentals>, Prisma__rentalsClient<rentalsGetPayload<T>>>

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rentals.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends rentalsCountArgs>(
      args?: Subset<T, rentalsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalsAggregateArgs>(args: Subset<T, RentalsAggregateArgs>): PrismaPromise<GetRentalsAggregateType<T>>

    /**
     * Group by Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalsGroupByArgs['orderBy'] }
        : { orderBy?: RentalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for rentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rentalsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends booksArgs = {}>(args?: Subset<T, booksArgs>): CheckSelect<T, Prisma__booksClient<books | null >, Prisma__booksClient<booksGetPayload<T> | null >>;

    customers<T extends customersArgs = {}>(args?: Subset<T, customersArgs>): CheckSelect<T, Prisma__customersClient<customers | null >, Prisma__customersClient<customersGetPayload<T> | null >>;

    statuses<T extends statusesArgs = {}>(args?: Subset<T, statusesArgs>): CheckSelect<T, Prisma__statusesClient<statuses | null >, Prisma__statusesClient<statusesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * rentals findUnique
   */
  export type rentalsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * Throw an Error if a rentals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which rentals to fetch.
     * 
    **/
    where: rentalsWhereUniqueInput
  }


  /**
   * rentals findFirst
   */
  export type rentalsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * Throw an Error if a rentals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which rentals to fetch.
     * 
    **/
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     * 
    **/
    orderBy?: Enumerable<rentalsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     * 
    **/
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     * 
    **/
    distinct?: Enumerable<RentalsScalarFieldEnum>
  }


  /**
   * rentals findMany
   */
  export type rentalsFindManyArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * Filter, which rentals to fetch.
     * 
    **/
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     * 
    **/
    orderBy?: Enumerable<rentalsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rentals.
     * 
    **/
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RentalsScalarFieldEnum>
  }


  /**
   * rentals create
   */
  export type rentalsCreateArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * The data needed to create a rentals.
     * 
    **/
    data: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
  }


  /**
   * rentals createMany
   */
  export type rentalsCreateManyArgs = {
    data: Enumerable<rentalsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * rentals update
   */
  export type rentalsUpdateArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * The data needed to update a rentals.
     * 
    **/
    data: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
    /**
     * Choose, which rentals to update.
     * 
    **/
    where: rentalsWhereUniqueInput
  }


  /**
   * rentals updateMany
   */
  export type rentalsUpdateManyArgs = {
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyInput>
    where?: rentalsWhereInput
  }


  /**
   * rentals upsert
   */
  export type rentalsUpsertArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * The filter to search for the rentals to update in case it exists.
     * 
    **/
    where: rentalsWhereUniqueInput
    /**
     * In case the rentals found by the `where` argument doesn't exist, create a new rentals with this data.
     * 
    **/
    create: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
    /**
     * In case the rentals was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
  }


  /**
   * rentals delete
   */
  export type rentalsDeleteArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
    /**
     * Filter which rentals to delete.
     * 
    **/
    where: rentalsWhereUniqueInput
  }


  /**
   * rentals deleteMany
   */
  export type rentalsDeleteManyArgs = {
    where?: rentalsWhereInput
  }


  /**
   * rentals without action
   */
  export type rentalsArgs = {
    /**
     * Select specific fields to fetch from the rentals
     * 
    **/
    select?: rentalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: rentalsInclude | null
  }



  /**
   * Model statuses
   */


  export type AggregateStatuses = {
    _count: StatusesCountAggregateOutputType | null
    count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
    max: StatusesMaxAggregateOutputType | null
  }

  export type StatusesAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusesSumAggregateOutputType = {
    id: number | null
  }

  export type StatusesMinAggregateOutputType = {
    id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatusesMaxAggregateOutputType = {
    id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatusesCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StatusesAvgAggregateInputType = {
    id?: true
  }

  export type StatusesSumAggregateInputType = {
    id?: true
  }

  export type StatusesMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatusesMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatusesCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatusesAggregateArgs = {
    /**
     * Filter which statuses to aggregate.
     * 
    **/
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<statusesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusesCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | StatusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusesAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: StatusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusesSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: StatusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusesMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: StatusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusesMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: StatusesMaxAggregateInputType
  }

  export type GetStatusesAggregateType<T extends StatusesAggregateArgs> = {
        [P in keyof T & keyof AggregateStatuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatuses[P]>
      : GetScalarType<T[P], AggregateStatuses[P]>
  }


    
    
  export type StatusesGroupByArgs = {
    where?: statusesWhereInput
    orderBy?: Enumerable<statusesOrderByInput>
    by: Array<StatusesScalarFieldEnum>
    having?: statusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusesCountAggregateInputType | true
    _avg?: StatusesAvgAggregateInputType
    _sum?: StatusesSumAggregateInputType
    _min?: StatusesMinAggregateInputType
    _max?: StatusesMaxAggregateInputType
  }


  export type StatusesGroupByOutputType = {
    id: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
  }

  type GetStatusesGroupByPayload<T extends StatusesGroupByArgs> = Promise<
    Array<
      PickArray<StatusesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StatusesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StatusesGroupByOutputType[P]> 
            : GetScalarType<T[P], StatusesGroupByOutputType[P]>
        }
      > 
    >


  export type statusesSelect = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentals?: boolean | rentalsFindManyArgs
  }

  export type statusesInclude = {
    rentals?: boolean | rentalsFindManyArgs
  }

  export type statusesGetPayload<
    S extends boolean | null | undefined | statusesArgs,
    U = keyof S
      > = S extends true
        ? statuses
    : S extends undefined
    ? never
    : S extends statusesArgs | statusesFindManyArgs
    ?'include' extends U
    ? statuses  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'rentals'
        ? Array < rentalsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof statuses ?statuses [P]
  : 
          P extends 'rentals'
        ? Array < rentalsGetPayload<S['select'][P]>>  : never
  } 
    : statuses
  : statuses


  type statusesCountArgs = Merge<
    Omit<statusesFindManyArgs, 'select' | 'include'> & {
      select?: StatusesCountAggregateInputType | true
    }
  >

  export interface statusesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Statuses that matches the filter.
     * @param {statusesFindUniqueArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statusesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, statusesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'statuses'> extends True ? CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>> : CheckSelect<T, Prisma__statusesClient<statuses | null >, Prisma__statusesClient<statusesGetPayload<T> | null >>

    /**
     * Find the first Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesFindFirstArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statusesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, statusesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'statuses'> extends True ? CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>> : CheckSelect<T, Prisma__statusesClient<statuses | null >, Prisma__statusesClient<statusesGetPayload<T> | null >>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.statuses.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.statuses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusesWithIdOnly = await prisma.statuses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statusesFindManyArgs>(
      args?: SelectSubset<T, statusesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<statuses>>, PrismaPromise<Array<statusesGetPayload<T>>>>

    /**
     * Create a Statuses.
     * @param {statusesCreateArgs} args - Arguments to create a Statuses.
     * @example
     * // Create one Statuses
     * const Statuses = await prisma.statuses.create({
     *   data: {
     *     // ... data to create a Statuses
     *   }
     * })
     * 
    **/
    create<T extends statusesCreateArgs>(
      args: SelectSubset<T, statusesCreateArgs>
    ): CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>>

    /**
     * Create many Statuses.
     *     @param {statusesCreateManyArgs} args - Arguments to create many Statuses.
     *     @example
     *     // Create many Statuses
     *     const statuses = await prisma.statuses.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statusesCreateManyArgs>(
      args?: SelectSubset<T, statusesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Statuses.
     * @param {statusesDeleteArgs} args - Arguments to delete one Statuses.
     * @example
     * // Delete one Statuses
     * const Statuses = await prisma.statuses.delete({
     *   where: {
     *     // ... filter to delete one Statuses
     *   }
     * })
     * 
    **/
    delete<T extends statusesDeleteArgs>(
      args: SelectSubset<T, statusesDeleteArgs>
    ): CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>>

    /**
     * Update one Statuses.
     * @param {statusesUpdateArgs} args - Arguments to update one Statuses.
     * @example
     * // Update one Statuses
     * const statuses = await prisma.statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statusesUpdateArgs>(
      args: SelectSubset<T, statusesUpdateArgs>
    ): CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>>

    /**
     * Delete zero or more Statuses.
     * @param {statusesDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statusesDeleteManyArgs>(
      args?: SelectSubset<T, statusesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const statuses = await prisma.statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statusesUpdateManyArgs>(
      args: SelectSubset<T, statusesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Statuses.
     * @param {statusesUpsertArgs} args - Arguments to update or create a Statuses.
     * @example
     * // Update or create a Statuses
     * const statuses = await prisma.statuses.upsert({
     *   create: {
     *     // ... data to create a Statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statuses we want to update
     *   }
     * })
    **/
    upsert<T extends statusesUpsertArgs>(
      args: SelectSubset<T, statusesUpsertArgs>
    ): CheckSelect<T, Prisma__statusesClient<statuses>, Prisma__statusesClient<statusesGetPayload<T>>>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.statuses.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusesCountArgs>(
      args?: Subset<T, statusesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusesAggregateArgs>(args: Subset<T, StatusesAggregateArgs>): PrismaPromise<GetStatusesAggregateType<T>>

    /**
     * Group by Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusesGroupByArgs['orderBy'] }
        : { orderBy?: StatusesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__statusesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    rentals<T extends rentalsFindManyArgs = {}>(args?: Subset<T, rentalsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<rentals>>, PrismaPromise<Array<rentalsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * statuses findUnique
   */
  export type statusesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * Throw an Error if a statuses can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which statuses to fetch.
     * 
    **/
    where: statusesWhereUniqueInput
  }


  /**
   * statuses findFirst
   */
  export type statusesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * Throw an Error if a statuses can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which statuses to fetch.
     * 
    **/
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<statusesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     * 
    **/
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     * 
    **/
    distinct?: Enumerable<StatusesScalarFieldEnum>
  }


  /**
   * statuses findMany
   */
  export type statusesFindManyArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * Filter, which statuses to fetch.
     * 
    **/
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<statusesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     * 
    **/
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StatusesScalarFieldEnum>
  }


  /**
   * statuses create
   */
  export type statusesCreateArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * The data needed to create a statuses.
     * 
    **/
    data: XOR<statusesCreateInput, statusesUncheckedCreateInput>
  }


  /**
   * statuses createMany
   */
  export type statusesCreateManyArgs = {
    data: Enumerable<statusesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * statuses update
   */
  export type statusesUpdateArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * The data needed to update a statuses.
     * 
    **/
    data: XOR<statusesUpdateInput, statusesUncheckedUpdateInput>
    /**
     * Choose, which statuses to update.
     * 
    **/
    where: statusesWhereUniqueInput
  }


  /**
   * statuses updateMany
   */
  export type statusesUpdateManyArgs = {
    data: XOR<statusesUpdateManyMutationInput, statusesUncheckedUpdateManyInput>
    where?: statusesWhereInput
  }


  /**
   * statuses upsert
   */
  export type statusesUpsertArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * The filter to search for the statuses to update in case it exists.
     * 
    **/
    where: statusesWhereUniqueInput
    /**
     * In case the statuses found by the `where` argument doesn't exist, create a new statuses with this data.
     * 
    **/
    create: XOR<statusesCreateInput, statusesUncheckedCreateInput>
    /**
     * In case the statuses was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<statusesUpdateInput, statusesUncheckedUpdateInput>
  }


  /**
   * statuses delete
   */
  export type statusesDeleteArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
    /**
     * Filter which statuses to delete.
     * 
    **/
    where: statusesWhereUniqueInput
  }


  /**
   * statuses deleteMany
   */
  export type statusesDeleteManyArgs = {
    where?: statusesWhereInput
  }


  /**
   * statuses without action
   */
  export type statusesArgs = {
    /**
     * Select specific fields to fetch from the statuses
     * 
    **/
    select?: statusesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: statusesInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    userName: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type usersSelect = {
    id?: boolean
    userName?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof users ?users [P]
  : 
     never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuthorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    stock: 'stock',
    isbn: 'isbn',
    imageUrl: 'imageUrl',
    pages: 'pages',
    authorId: 'authorId',
    genreId: 'genreId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    lastPaymentDate: 'lastPaymentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const RentalsScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    customerId: 'customerId',
    statusId: 'statusId',
    dateRented: 'dateRented',
    dateReturned: 'dateReturned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalsScalarFieldEnum = (typeof RentalsScalarFieldEnum)[keyof typeof RentalsScalarFieldEnum]


  export const StatusesScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StatusesScalarFieldEnum = (typeof StatusesScalarFieldEnum)[keyof typeof StatusesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type authorsWhereInput = {
    AND?: Enumerable<authorsWhereInput>
    OR?: Enumerable<authorsWhereInput>
    NOT?: Enumerable<authorsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    books?: BooksListRelationFilter
  }

  export type authorsOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authorsWhereUniqueInput = {
    id?: number
  }

  export type authorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<authorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<authorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<authorsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type booksWhereInput = {
    AND?: Enumerable<booksWhereInput>
    OR?: Enumerable<booksWhereInput>
    NOT?: Enumerable<booksWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    stock?: IntFilter | number
    isbn?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    pages?: IntFilter | number
    authorId?: IntFilter | number
    genreId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    authors?: XOR<AuthorsRelationFilter, authorsWhereInput>
    genres?: XOR<GenresRelationFilter, genresWhereInput>
    rentals?: RentalsListRelationFilter
  }

  export type booksOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    stock?: SortOrder
    isbn?: SortOrder
    imageUrl?: SortOrder
    pages?: SortOrder
    authorId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksWhereUniqueInput = {
    id?: number
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<booksScalarWhereWithAggregatesInput>
    OR?: Enumerable<booksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<booksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    stock?: IntWithAggregatesFilter | number
    isbn?: StringWithAggregatesFilter | string
    imageUrl?: StringNullableWithAggregatesFilter | string | null
    pages?: IntWithAggregatesFilter | number
    authorId?: IntWithAggregatesFilter | number
    genreId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type customersWhereInput = {
    AND?: Enumerable<customersWhereInput>
    OR?: Enumerable<customersWhereInput>
    NOT?: Enumerable<customersWhereInput>
    id?: IntFilter | number
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    lastPaymentDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rentals?: RentalsListRelationFilter
  }

  export type customersOrderByInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    lastPaymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersWhereUniqueInput = {
    id?: number
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<customersScalarWhereWithAggregatesInput>
    OR?: Enumerable<customersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<customersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    lastPaymentDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type genresWhereInput = {
    AND?: Enumerable<genresWhereInput>
    OR?: Enumerable<genresWhereInput>
    NOT?: Enumerable<genresWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    books?: BooksListRelationFilter
  }

  export type genresOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type genresWhereUniqueInput = {
    id?: number
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: Enumerable<genresScalarWhereWithAggregatesInput>
    OR?: Enumerable<genresScalarWhereWithAggregatesInput>
    NOT?: Enumerable<genresScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type rentalsWhereInput = {
    AND?: Enumerable<rentalsWhereInput>
    OR?: Enumerable<rentalsWhereInput>
    NOT?: Enumerable<rentalsWhereInput>
    id?: IntFilter | number
    bookId?: IntFilter | number
    customerId?: IntFilter | number
    statusId?: IntFilter | number
    dateRented?: DateTimeNullableFilter | Date | string | null
    dateReturned?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    books?: XOR<BooksRelationFilter, booksWhereInput>
    customers?: XOR<CustomersRelationFilter, customersWhereInput>
    statuses?: XOR<StatusesRelationFilter, statusesWhereInput>
  }

  export type rentalsOrderByInput = {
    id?: SortOrder
    bookId?: SortOrder
    customerId?: SortOrder
    statusId?: SortOrder
    dateRented?: SortOrder
    dateReturned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rentalsWhereUniqueInput = {
    id?: number
  }

  export type rentalsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rentalsScalarWhereWithAggregatesInput>
    OR?: Enumerable<rentalsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rentalsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bookId?: IntWithAggregatesFilter | number
    customerId?: IntWithAggregatesFilter | number
    statusId?: IntWithAggregatesFilter | number
    dateRented?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateReturned?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type statusesWhereInput = {
    AND?: Enumerable<statusesWhereInput>
    OR?: Enumerable<statusesWhereInput>
    NOT?: Enumerable<statusesWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rentals?: RentalsListRelationFilter
  }

  export type statusesOrderByInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statusesWhereUniqueInput = {
    id?: number
  }

  export type statusesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<statusesScalarWhereWithAggregatesInput>
    OR?: Enumerable<statusesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<statusesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    userName?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type usersOrderByInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: number
    userName?: string
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userName?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type authorsCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateManyWithoutAuthorsInput
  }

  export type authorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutAuthorsInput
  }

  export type authorsCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksCreateInput = {
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authors: authorsCreateNestedOneWithoutBooksInput
    genres: genresCreateNestedOneWithoutBooksInput
    rentals?: rentalsCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    authorId: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorsUpdateOneRequiredWithoutBooksInput
    genres?: genresUpdateOneRequiredWithoutBooksInput
    rentals?: rentalsUpdateManyWithoutBooksInput
  }

  export type booksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutBooksInput
  }

  export type booksCreateManyInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    authorId: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateManyWithoutCustomersInput
  }

  export type customersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutCustomersInput
  }

  export type customersCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customersUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateManyWithoutGenresInput
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutGenresInput
  }

  export type genresCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type genresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateInput = {
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books: booksCreateNestedOneWithoutRentalsInput
    customers: customersCreateNestedOneWithoutRentalsInput
    statuses: statusesCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateInput = {
    id?: number
    bookId: number
    customerId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsUpdateInput = {
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateOneRequiredWithoutRentalsInput
    customers?: customersUpdateOneRequiredWithoutRentalsInput
    statuses?: statusesUpdateOneRequiredWithoutRentalsInput
  }

  export type rentalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateManyInput = {
    id?: number
    bookId: number
    customerId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsUpdateManyMutationInput = {
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusesCreateInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsCreateNestedManyWithoutStatusesInput
  }

  export type statusesUncheckedCreateInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutStatusesInput
  }

  export type statusesUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateManyWithoutStatusesInput
  }

  export type statusesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutStatusesInput
  }

  export type statusesCreateManyInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusesUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    userName: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    userName: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    userName: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BooksListRelationFilter = {
    every?: booksWhereInput
    some?: booksWhereInput
    none?: booksWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type AuthorsRelationFilter = {
    is?: authorsWhereInput
    isNot?: authorsWhereInput
  }

  export type GenresRelationFilter = {
    is?: genresWhereInput
    isNot?: genresWhereInput
  }

  export type RentalsListRelationFilter = {
    every?: rentalsWhereInput
    some?: rentalsWhereInput
    none?: rentalsWhereInput
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type BooksRelationFilter = {
    is?: booksWhereInput
    isNot?: booksWhereInput
  }

  export type CustomersRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type StatusesRelationFilter = {
    is?: statusesWhereInput
    isNot?: statusesWhereInput
  }

  export type booksCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<booksCreateWithoutAuthorsInput>, Enumerable<booksUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutAuthorsInput>
    createMany?: booksCreateManyAuthorsInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
  }

  export type booksUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<booksCreateWithoutAuthorsInput>, Enumerable<booksUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutAuthorsInput>
    createMany?: booksCreateManyAuthorsInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type booksUpdateManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<booksCreateWithoutAuthorsInput>, Enumerable<booksUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutAuthorsInput>
    upsert?: Enumerable<booksUpsertWithWhereUniqueWithoutAuthorsInput>
    createMany?: booksCreateManyAuthorsInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
    set?: Enumerable<booksWhereUniqueInput>
    disconnect?: Enumerable<booksWhereUniqueInput>
    delete?: Enumerable<booksWhereUniqueInput>
    update?: Enumerable<booksUpdateWithWhereUniqueWithoutAuthorsInput>
    updateMany?: Enumerable<booksUpdateManyWithWhereWithoutAuthorsInput>
    deleteMany?: Enumerable<booksScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type booksUncheckedUpdateManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<booksCreateWithoutAuthorsInput>, Enumerable<booksUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutAuthorsInput>
    upsert?: Enumerable<booksUpsertWithWhereUniqueWithoutAuthorsInput>
    createMany?: booksCreateManyAuthorsInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
    set?: Enumerable<booksWhereUniqueInput>
    disconnect?: Enumerable<booksWhereUniqueInput>
    delete?: Enumerable<booksWhereUniqueInput>
    update?: Enumerable<booksUpdateWithWhereUniqueWithoutAuthorsInput>
    updateMany?: Enumerable<booksUpdateManyWithWhereWithoutAuthorsInput>
    deleteMany?: Enumerable<booksScalarWhereInput>
  }

  export type authorsCreateNestedOneWithoutBooksInput = {
    create?: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorsCreateOrConnectWithoutBooksInput
    connect?: authorsWhereUniqueInput
  }

  export type genresCreateNestedOneWithoutBooksInput = {
    create?: XOR<genresCreateWithoutBooksInput, genresUncheckedCreateWithoutBooksInput>
    connectOrCreate?: genresCreateOrConnectWithoutBooksInput
    connect?: genresWhereUniqueInput
  }

  export type rentalsCreateNestedManyWithoutBooksInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutBooksInput>, Enumerable<rentalsUncheckedCreateWithoutBooksInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutBooksInput>
    createMany?: rentalsCreateManyBooksInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type rentalsUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutBooksInput>, Enumerable<rentalsUncheckedCreateWithoutBooksInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutBooksInput>
    createMany?: rentalsCreateManyBooksInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type authorsUpdateOneRequiredWithoutBooksInput = {
    create?: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorsCreateOrConnectWithoutBooksInput
    upsert?: authorsUpsertWithoutBooksInput
    connect?: authorsWhereUniqueInput
    update?: XOR<authorsUpdateWithoutBooksInput, authorsUncheckedUpdateWithoutBooksInput>
  }

  export type genresUpdateOneRequiredWithoutBooksInput = {
    create?: XOR<genresCreateWithoutBooksInput, genresUncheckedCreateWithoutBooksInput>
    connectOrCreate?: genresCreateOrConnectWithoutBooksInput
    upsert?: genresUpsertWithoutBooksInput
    connect?: genresWhereUniqueInput
    update?: XOR<genresUpdateWithoutBooksInput, genresUncheckedUpdateWithoutBooksInput>
  }

  export type rentalsUpdateManyWithoutBooksInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutBooksInput>, Enumerable<rentalsUncheckedCreateWithoutBooksInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutBooksInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutBooksInput>
    createMany?: rentalsCreateManyBooksInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutBooksInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutBooksInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type rentalsUncheckedUpdateManyWithoutBooksInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutBooksInput>, Enumerable<rentalsUncheckedCreateWithoutBooksInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutBooksInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutBooksInput>
    createMany?: rentalsCreateManyBooksInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutBooksInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutBooksInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type rentalsCreateNestedManyWithoutCustomersInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutCustomersInput>, Enumerable<rentalsUncheckedCreateWithoutCustomersInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutCustomersInput>
    createMany?: rentalsCreateManyCustomersInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type rentalsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutCustomersInput>, Enumerable<rentalsUncheckedCreateWithoutCustomersInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutCustomersInput>
    createMany?: rentalsCreateManyCustomersInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type rentalsUpdateManyWithoutCustomersInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutCustomersInput>, Enumerable<rentalsUncheckedCreateWithoutCustomersInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutCustomersInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutCustomersInput>
    createMany?: rentalsCreateManyCustomersInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutCustomersInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutCustomersInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type rentalsUncheckedUpdateManyWithoutCustomersInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutCustomersInput>, Enumerable<rentalsUncheckedCreateWithoutCustomersInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutCustomersInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutCustomersInput>
    createMany?: rentalsCreateManyCustomersInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutCustomersInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutCustomersInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type booksCreateNestedManyWithoutGenresInput = {
    create?: XOR<Enumerable<booksCreateWithoutGenresInput>, Enumerable<booksUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutGenresInput>
    createMany?: booksCreateManyGenresInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
  }

  export type booksUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<Enumerable<booksCreateWithoutGenresInput>, Enumerable<booksUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutGenresInput>
    createMany?: booksCreateManyGenresInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
  }

  export type booksUpdateManyWithoutGenresInput = {
    create?: XOR<Enumerable<booksCreateWithoutGenresInput>, Enumerable<booksUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutGenresInput>
    upsert?: Enumerable<booksUpsertWithWhereUniqueWithoutGenresInput>
    createMany?: booksCreateManyGenresInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
    set?: Enumerable<booksWhereUniqueInput>
    disconnect?: Enumerable<booksWhereUniqueInput>
    delete?: Enumerable<booksWhereUniqueInput>
    update?: Enumerable<booksUpdateWithWhereUniqueWithoutGenresInput>
    updateMany?: Enumerable<booksUpdateManyWithWhereWithoutGenresInput>
    deleteMany?: Enumerable<booksScalarWhereInput>
  }

  export type booksUncheckedUpdateManyWithoutGenresInput = {
    create?: XOR<Enumerable<booksCreateWithoutGenresInput>, Enumerable<booksUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<booksCreateOrConnectWithoutGenresInput>
    upsert?: Enumerable<booksUpsertWithWhereUniqueWithoutGenresInput>
    createMany?: booksCreateManyGenresInputEnvelope
    connect?: Enumerable<booksWhereUniqueInput>
    set?: Enumerable<booksWhereUniqueInput>
    disconnect?: Enumerable<booksWhereUniqueInput>
    delete?: Enumerable<booksWhereUniqueInput>
    update?: Enumerable<booksUpdateWithWhereUniqueWithoutGenresInput>
    updateMany?: Enumerable<booksUpdateManyWithWhereWithoutGenresInput>
    deleteMany?: Enumerable<booksScalarWhereInput>
  }

  export type booksCreateNestedOneWithoutRentalsInput = {
    create?: XOR<booksCreateWithoutRentalsInput, booksUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: booksCreateOrConnectWithoutRentalsInput
    connect?: booksWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutRentalsInput = {
    create?: XOR<customersCreateWithoutRentalsInput, customersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: customersCreateOrConnectWithoutRentalsInput
    connect?: customersWhereUniqueInput
  }

  export type statusesCreateNestedOneWithoutRentalsInput = {
    create?: XOR<statusesCreateWithoutRentalsInput, statusesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: statusesCreateOrConnectWithoutRentalsInput
    connect?: statusesWhereUniqueInput
  }

  export type booksUpdateOneRequiredWithoutRentalsInput = {
    create?: XOR<booksCreateWithoutRentalsInput, booksUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: booksCreateOrConnectWithoutRentalsInput
    upsert?: booksUpsertWithoutRentalsInput
    connect?: booksWhereUniqueInput
    update?: XOR<booksUpdateWithoutRentalsInput, booksUncheckedUpdateWithoutRentalsInput>
  }

  export type customersUpdateOneRequiredWithoutRentalsInput = {
    create?: XOR<customersCreateWithoutRentalsInput, customersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: customersCreateOrConnectWithoutRentalsInput
    upsert?: customersUpsertWithoutRentalsInput
    connect?: customersWhereUniqueInput
    update?: XOR<customersUpdateWithoutRentalsInput, customersUncheckedUpdateWithoutRentalsInput>
  }

  export type statusesUpdateOneRequiredWithoutRentalsInput = {
    create?: XOR<statusesCreateWithoutRentalsInput, statusesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: statusesCreateOrConnectWithoutRentalsInput
    upsert?: statusesUpsertWithoutRentalsInput
    connect?: statusesWhereUniqueInput
    update?: XOR<statusesUpdateWithoutRentalsInput, statusesUncheckedUpdateWithoutRentalsInput>
  }

  export type rentalsCreateNestedManyWithoutStatusesInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutStatusesInput>, Enumerable<rentalsUncheckedCreateWithoutStatusesInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutStatusesInput>
    createMany?: rentalsCreateManyStatusesInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type rentalsUncheckedCreateNestedManyWithoutStatusesInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutStatusesInput>, Enumerable<rentalsUncheckedCreateWithoutStatusesInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutStatusesInput>
    createMany?: rentalsCreateManyStatusesInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
  }

  export type rentalsUpdateManyWithoutStatusesInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutStatusesInput>, Enumerable<rentalsUncheckedCreateWithoutStatusesInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutStatusesInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutStatusesInput>
    createMany?: rentalsCreateManyStatusesInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutStatusesInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutStatusesInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type rentalsUncheckedUpdateManyWithoutStatusesInput = {
    create?: XOR<Enumerable<rentalsCreateWithoutStatusesInput>, Enumerable<rentalsUncheckedCreateWithoutStatusesInput>>
    connectOrCreate?: Enumerable<rentalsCreateOrConnectWithoutStatusesInput>
    upsert?: Enumerable<rentalsUpsertWithWhereUniqueWithoutStatusesInput>
    createMany?: rentalsCreateManyStatusesInputEnvelope
    connect?: Enumerable<rentalsWhereUniqueInput>
    set?: Enumerable<rentalsWhereUniqueInput>
    disconnect?: Enumerable<rentalsWhereUniqueInput>
    delete?: Enumerable<rentalsWhereUniqueInput>
    update?: Enumerable<rentalsUpdateWithWhereUniqueWithoutStatusesInput>
    updateMany?: Enumerable<rentalsUpdateManyWithWhereWithoutStatusesInput>
    deleteMany?: Enumerable<rentalsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type booksCreateWithoutAuthorsInput = {
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    createdAt?: Date | string
    updatedAt?: Date | string
    genres: genresCreateNestedOneWithoutBooksInput
    rentals?: rentalsCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutAuthorsInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutAuthorsInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutAuthorsInput, booksUncheckedCreateWithoutAuthorsInput>
  }

  export type booksCreateManyAuthorsInputEnvelope = {
    data: Enumerable<booksCreateManyAuthorsInput>
    skipDuplicates?: boolean
  }

  export type booksUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: booksWhereUniqueInput
    update: XOR<booksUpdateWithoutAuthorsInput, booksUncheckedUpdateWithoutAuthorsInput>
    create: XOR<booksCreateWithoutAuthorsInput, booksUncheckedCreateWithoutAuthorsInput>
  }

  export type booksUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: booksWhereUniqueInput
    data: XOR<booksUpdateWithoutAuthorsInput, booksUncheckedUpdateWithoutAuthorsInput>
  }

  export type booksUpdateManyWithWhereWithoutAuthorsInput = {
    where: booksScalarWhereInput
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyWithoutBooksInput>
  }

  export type booksScalarWhereInput = {
    AND?: Enumerable<booksScalarWhereInput>
    OR?: Enumerable<booksScalarWhereInput>
    NOT?: Enumerable<booksScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    stock?: IntFilter | number
    isbn?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    pages?: IntFilter | number
    authorId?: IntFilter | number
    genreId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type authorsCreateWithoutBooksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authorsUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authorsCreateOrConnectWithoutBooksInput = {
    where: authorsWhereUniqueInput
    create: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
  }

  export type genresCreateWithoutBooksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type genresUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type genresCreateOrConnectWithoutBooksInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutBooksInput, genresUncheckedCreateWithoutBooksInput>
  }

  export type rentalsCreateWithoutBooksInput = {
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customers: customersCreateNestedOneWithoutRentalsInput
    statuses: statusesCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutBooksInput = {
    id?: number
    customerId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsCreateOrConnectWithoutBooksInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutBooksInput, rentalsUncheckedCreateWithoutBooksInput>
  }

  export type rentalsCreateManyBooksInputEnvelope = {
    data: Enumerable<rentalsCreateManyBooksInput>
    skipDuplicates?: boolean
  }

  export type authorsUpsertWithoutBooksInput = {
    update: XOR<authorsUpdateWithoutBooksInput, authorsUncheckedUpdateWithoutBooksInput>
    create: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
  }

  export type authorsUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorsUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresUpsertWithoutBooksInput = {
    update: XOR<genresUpdateWithoutBooksInput, genresUncheckedUpdateWithoutBooksInput>
    create: XOR<genresCreateWithoutBooksInput, genresUncheckedCreateWithoutBooksInput>
  }

  export type genresUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUpsertWithWhereUniqueWithoutBooksInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutBooksInput, rentalsUncheckedUpdateWithoutBooksInput>
    create: XOR<rentalsCreateWithoutBooksInput, rentalsUncheckedCreateWithoutBooksInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutBooksInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutBooksInput, rentalsUncheckedUpdateWithoutBooksInput>
  }

  export type rentalsUpdateManyWithWhereWithoutBooksInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutRentalsInput>
  }

  export type rentalsScalarWhereInput = {
    AND?: Enumerable<rentalsScalarWhereInput>
    OR?: Enumerable<rentalsScalarWhereInput>
    NOT?: Enumerable<rentalsScalarWhereInput>
    id?: IntFilter | number
    bookId?: IntFilter | number
    customerId?: IntFilter | number
    statusId?: IntFilter | number
    dateRented?: DateTimeNullableFilter | Date | string | null
    dateReturned?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type rentalsCreateWithoutCustomersInput = {
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books: booksCreateNestedOneWithoutRentalsInput
    statuses: statusesCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutCustomersInput = {
    id?: number
    bookId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsCreateOrConnectWithoutCustomersInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutCustomersInput, rentalsUncheckedCreateWithoutCustomersInput>
  }

  export type rentalsCreateManyCustomersInputEnvelope = {
    data: Enumerable<rentalsCreateManyCustomersInput>
    skipDuplicates?: boolean
  }

  export type rentalsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutCustomersInput, rentalsUncheckedUpdateWithoutCustomersInput>
    create: XOR<rentalsCreateWithoutCustomersInput, rentalsUncheckedCreateWithoutCustomersInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutCustomersInput, rentalsUncheckedUpdateWithoutCustomersInput>
  }

  export type rentalsUpdateManyWithWhereWithoutCustomersInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutRentalsInput>
  }

  export type booksCreateWithoutGenresInput = {
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authors: authorsCreateNestedOneWithoutBooksInput
    rentals?: rentalsCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutGenresInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutGenresInput, booksUncheckedCreateWithoutGenresInput>
  }

  export type booksCreateManyGenresInputEnvelope = {
    data: Enumerable<booksCreateManyGenresInput>
    skipDuplicates?: boolean
  }

  export type booksUpsertWithWhereUniqueWithoutGenresInput = {
    where: booksWhereUniqueInput
    update: XOR<booksUpdateWithoutGenresInput, booksUncheckedUpdateWithoutGenresInput>
    create: XOR<booksCreateWithoutGenresInput, booksUncheckedCreateWithoutGenresInput>
  }

  export type booksUpdateWithWhereUniqueWithoutGenresInput = {
    where: booksWhereUniqueInput
    data: XOR<booksUpdateWithoutGenresInput, booksUncheckedUpdateWithoutGenresInput>
  }

  export type booksUpdateManyWithWhereWithoutGenresInput = {
    where: booksScalarWhereInput
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyWithoutBooksInput>
  }

  export type booksCreateWithoutRentalsInput = {
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authors: authorsCreateNestedOneWithoutBooksInput
    genres: genresCreateNestedOneWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutRentalsInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    authorId: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksCreateOrConnectWithoutRentalsInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutRentalsInput, booksUncheckedCreateWithoutRentalsInput>
  }

  export type customersCreateWithoutRentalsInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customersUncheckedCreateWithoutRentalsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    lastPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customersCreateOrConnectWithoutRentalsInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutRentalsInput, customersUncheckedCreateWithoutRentalsInput>
  }

  export type statusesCreateWithoutRentalsInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusesUncheckedCreateWithoutRentalsInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusesCreateOrConnectWithoutRentalsInput = {
    where: statusesWhereUniqueInput
    create: XOR<statusesCreateWithoutRentalsInput, statusesUncheckedCreateWithoutRentalsInput>
  }

  export type booksUpsertWithoutRentalsInput = {
    update: XOR<booksUpdateWithoutRentalsInput, booksUncheckedUpdateWithoutRentalsInput>
    create: XOR<booksCreateWithoutRentalsInput, booksUncheckedCreateWithoutRentalsInput>
  }

  export type booksUpdateWithoutRentalsInput = {
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorsUpdateOneRequiredWithoutBooksInput
    genres?: genresUpdateOneRequiredWithoutBooksInput
  }

  export type booksUncheckedUpdateWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUpsertWithoutRentalsInput = {
    update: XOR<customersUpdateWithoutRentalsInput, customersUncheckedUpdateWithoutRentalsInput>
    create: XOR<customersCreateWithoutRentalsInput, customersUncheckedCreateWithoutRentalsInput>
  }

  export type customersUpdateWithoutRentalsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusesUpsertWithoutRentalsInput = {
    update: XOR<statusesUpdateWithoutRentalsInput, statusesUncheckedUpdateWithoutRentalsInput>
    create: XOR<statusesCreateWithoutRentalsInput, statusesUncheckedCreateWithoutRentalsInput>
  }

  export type statusesUpdateWithoutRentalsInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusesUncheckedUpdateWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateWithoutStatusesInput = {
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books: booksCreateNestedOneWithoutRentalsInput
    customers: customersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutStatusesInput = {
    id?: number
    bookId: number
    customerId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsCreateOrConnectWithoutStatusesInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutStatusesInput, rentalsUncheckedCreateWithoutStatusesInput>
  }

  export type rentalsCreateManyStatusesInputEnvelope = {
    data: Enumerable<rentalsCreateManyStatusesInput>
    skipDuplicates?: boolean
  }

  export type rentalsUpsertWithWhereUniqueWithoutStatusesInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutStatusesInput, rentalsUncheckedUpdateWithoutStatusesInput>
    create: XOR<rentalsCreateWithoutStatusesInput, rentalsUncheckedCreateWithoutStatusesInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutStatusesInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutStatusesInput, rentalsUncheckedUpdateWithoutStatusesInput>
  }

  export type rentalsUpdateManyWithWhereWithoutStatusesInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutRentalsInput>
  }

  export type booksCreateManyAuthorsInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateWithoutAuthorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: genresUpdateOneRequiredWithoutBooksInput
    rentals?: rentalsUpdateManyWithoutBooksInput
  }

  export type booksUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutBooksInput
  }

  export type booksUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateManyBooksInput = {
    id?: number
    customerId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsUpdateWithoutBooksInput = {
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: customersUpdateOneRequiredWithoutRentalsInput
    statuses?: statusesUpdateOneRequiredWithoutRentalsInput
  }

  export type rentalsUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUncheckedUpdateManyWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateManyCustomersInput = {
    id?: number
    bookId: number
    statusId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsUpdateWithoutCustomersInput = {
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateOneRequiredWithoutRentalsInput
    statuses?: statusesUpdateOneRequiredWithoutRentalsInput
  }

  export type rentalsUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksCreateManyGenresInput = {
    id?: number
    title: string
    stock: number
    isbn: string
    imageUrl?: string | null
    pages: number
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorsUpdateOneRequiredWithoutBooksInput
    rentals?: rentalsUpdateManyWithoutBooksInput
  }

  export type booksUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutBooksInput
  }

  export type rentalsCreateManyStatusesInput = {
    id?: number
    bookId: number
    customerId: number
    dateRented?: Date | string | null
    dateReturned?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rentalsUpdateWithoutStatusesInput = {
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateOneRequiredWithoutRentalsInput
    customers?: customersUpdateOneRequiredWithoutRentalsInput
  }

  export type rentalsUncheckedUpdateWithoutStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    dateRented?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateReturned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}