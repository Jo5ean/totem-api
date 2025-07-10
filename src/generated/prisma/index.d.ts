
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Facultad
 * 
 */
export type Facultad = $Result.DefaultSelection<Prisma.$FacultadPayload>
/**
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Examen
 * 
 */
export type Examen = $Result.DefaultSelection<Prisma.$ExamenPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Aula
 * 
 */
export type Aula = $Result.DefaultSelection<Prisma.$AulaPayload>
/**
 * Model TotemData
 * 
 */
export type TotemData = $Result.DefaultSelection<Prisma.$TotemDataPayload>
/**
 * Model ActaExamen
 * 
 */
export type ActaExamen = $Result.DefaultSelection<Prisma.$ActaExamenPayload>
/**
 * Model SectorFacultad
 * 
 */
export type SectorFacultad = $Result.DefaultSelection<Prisma.$SectorFacultadPayload>
/**
 * Model CarreraTotem
 * 
 */
export type CarreraTotem = $Result.DefaultSelection<Prisma.$CarreraTotemPayload>
/**
 * Model ExamenTotem
 * 
 */
export type ExamenTotem = $Result.DefaultSelection<Prisma.$ExamenTotemPayload>
/**
 * Model AulaConfiguracion
 * 
 */
export type AulaConfiguracion = $Result.DefaultSelection<Prisma.$AulaConfiguracionPayload>
/**
 * Model ConfiguracionVisual
 * 
 */
export type ConfiguracionVisual = $Result.DefaultSelection<Prisma.$ConfiguracionVisualPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Facultads
 * const facultads = await prisma.facultad.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Facultads
   * const facultads = await prisma.facultad.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facultad`: Exposes CRUD operations for the **Facultad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facultads
    * const facultads = await prisma.facultad.findMany()
    * ```
    */
  get facultad(): Prisma.FacultadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examen`: Exposes CRUD operations for the **Examen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examen
    * const examen = await prisma.examen.findMany()
    * ```
    */
  get examen(): Prisma.ExamenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aula`: Exposes CRUD operations for the **Aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aula.findMany()
    * ```
    */
  get aula(): Prisma.AulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.totemData`: Exposes CRUD operations for the **TotemData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TotemData
    * const totemData = await prisma.totemData.findMany()
    * ```
    */
  get totemData(): Prisma.TotemDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actaExamen`: Exposes CRUD operations for the **ActaExamen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActaExamen
    * const actaExamen = await prisma.actaExamen.findMany()
    * ```
    */
  get actaExamen(): Prisma.ActaExamenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectorFacultad`: Exposes CRUD operations for the **SectorFacultad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectorFacultads
    * const sectorFacultads = await prisma.sectorFacultad.findMany()
    * ```
    */
  get sectorFacultad(): Prisma.SectorFacultadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carreraTotem`: Exposes CRUD operations for the **CarreraTotem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarreraTotems
    * const carreraTotems = await prisma.carreraTotem.findMany()
    * ```
    */
  get carreraTotem(): Prisma.CarreraTotemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examenTotem`: Exposes CRUD operations for the **ExamenTotem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamenTotems
    * const examenTotems = await prisma.examenTotem.findMany()
    * ```
    */
  get examenTotem(): Prisma.ExamenTotemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aulaConfiguracion`: Exposes CRUD operations for the **AulaConfiguracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AulaConfiguracions
    * const aulaConfiguracions = await prisma.aulaConfiguracion.findMany()
    * ```
    */
  get aulaConfiguracion(): Prisma.AulaConfiguracionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracionVisual`: Exposes CRUD operations for the **ConfiguracionVisual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfiguracionVisuals
    * const configuracionVisuals = await prisma.configuracionVisual.findMany()
    * ```
    */
  get configuracionVisual(): Prisma.ConfiguracionVisualDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Facultad: 'Facultad',
    Carrera: 'Carrera',
    Examen: 'Examen',
    SyncLog: 'SyncLog',
    Estudiante: 'Estudiante',
    Aula: 'Aula',
    TotemData: 'TotemData',
    ActaExamen: 'ActaExamen',
    SectorFacultad: 'SectorFacultad',
    CarreraTotem: 'CarreraTotem',
    ExamenTotem: 'ExamenTotem',
    AulaConfiguracion: 'AulaConfiguracion',
    ConfiguracionVisual: 'ConfiguracionVisual'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facultad" | "carrera" | "examen" | "syncLog" | "estudiante" | "aula" | "totemData" | "actaExamen" | "sectorFacultad" | "carreraTotem" | "examenTotem" | "aulaConfiguracion" | "configuracionVisual"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Facultad: {
        payload: Prisma.$FacultadPayload<ExtArgs>
        fields: Prisma.FacultadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          findFirst: {
            args: Prisma.FacultadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          findMany: {
            args: Prisma.FacultadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>[]
          }
          create: {
            args: Prisma.FacultadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          createMany: {
            args: Prisma.FacultadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacultadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          update: {
            args: Prisma.FacultadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          deleteMany: {
            args: Prisma.FacultadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          aggregate: {
            args: Prisma.FacultadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultad>
          }
          groupBy: {
            args: Prisma.FacultadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultadCountArgs<ExtArgs>
            result: $Utils.Optional<FacultadCountAggregateOutputType> | number
          }
        }
      }
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Examen: {
        payload: Prisma.$ExamenPayload<ExtArgs>
        fields: Prisma.ExamenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          findFirst: {
            args: Prisma.ExamenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          findMany: {
            args: Prisma.ExamenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>[]
          }
          create: {
            args: Prisma.ExamenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          createMany: {
            args: Prisma.ExamenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExamenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          update: {
            args: Prisma.ExamenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          deleteMany: {
            args: Prisma.ExamenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenPayload>
          }
          aggregate: {
            args: Prisma.ExamenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamen>
          }
          groupBy: {
            args: Prisma.ExamenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamenCountArgs<ExtArgs>
            result: $Utils.Optional<ExamenCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Aula: {
        payload: Prisma.$AulaPayload<ExtArgs>
        fields: Prisma.AulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findFirst: {
            args: Prisma.AulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findMany: {
            args: Prisma.AulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          create: {
            args: Prisma.AulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          createMany: {
            args: Prisma.AulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          update: {
            args: Prisma.AulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          deleteMany: {
            args: Prisma.AulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          aggregate: {
            args: Prisma.AulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAula>
          }
          groupBy: {
            args: Prisma.AulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaCountArgs<ExtArgs>
            result: $Utils.Optional<AulaCountAggregateOutputType> | number
          }
        }
      }
      TotemData: {
        payload: Prisma.$TotemDataPayload<ExtArgs>
        fields: Prisma.TotemDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TotemDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TotemDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          findFirst: {
            args: Prisma.TotemDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TotemDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          findMany: {
            args: Prisma.TotemDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>[]
          }
          create: {
            args: Prisma.TotemDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          createMany: {
            args: Prisma.TotemDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TotemDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          update: {
            args: Prisma.TotemDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          deleteMany: {
            args: Prisma.TotemDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TotemDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TotemDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotemDataPayload>
          }
          aggregate: {
            args: Prisma.TotemDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTotemData>
          }
          groupBy: {
            args: Prisma.TotemDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TotemDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TotemDataCountArgs<ExtArgs>
            result: $Utils.Optional<TotemDataCountAggregateOutputType> | number
          }
        }
      }
      ActaExamen: {
        payload: Prisma.$ActaExamenPayload<ExtArgs>
        fields: Prisma.ActaExamenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActaExamenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActaExamenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          findFirst: {
            args: Prisma.ActaExamenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActaExamenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          findMany: {
            args: Prisma.ActaExamenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>[]
          }
          create: {
            args: Prisma.ActaExamenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          createMany: {
            args: Prisma.ActaExamenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActaExamenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          update: {
            args: Prisma.ActaExamenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          deleteMany: {
            args: Prisma.ActaExamenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActaExamenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActaExamenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaExamenPayload>
          }
          aggregate: {
            args: Prisma.ActaExamenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActaExamen>
          }
          groupBy: {
            args: Prisma.ActaExamenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActaExamenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActaExamenCountArgs<ExtArgs>
            result: $Utils.Optional<ActaExamenCountAggregateOutputType> | number
          }
        }
      }
      SectorFacultad: {
        payload: Prisma.$SectorFacultadPayload<ExtArgs>
        fields: Prisma.SectorFacultadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFacultadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFacultadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          findFirst: {
            args: Prisma.SectorFacultadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFacultadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          findMany: {
            args: Prisma.SectorFacultadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>[]
          }
          create: {
            args: Prisma.SectorFacultadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          createMany: {
            args: Prisma.SectorFacultadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SectorFacultadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          update: {
            args: Prisma.SectorFacultadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          deleteMany: {
            args: Prisma.SectorFacultadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorFacultadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectorFacultadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorFacultadPayload>
          }
          aggregate: {
            args: Prisma.SectorFacultadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectorFacultad>
          }
          groupBy: {
            args: Prisma.SectorFacultadGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorFacultadGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorFacultadCountArgs<ExtArgs>
            result: $Utils.Optional<SectorFacultadCountAggregateOutputType> | number
          }
        }
      }
      CarreraTotem: {
        payload: Prisma.$CarreraTotemPayload<ExtArgs>
        fields: Prisma.CarreraTotemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraTotemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraTotemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          findFirst: {
            args: Prisma.CarreraTotemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraTotemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          findMany: {
            args: Prisma.CarreraTotemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>[]
          }
          create: {
            args: Prisma.CarreraTotemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          createMany: {
            args: Prisma.CarreraTotemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarreraTotemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          update: {
            args: Prisma.CarreraTotemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          deleteMany: {
            args: Prisma.CarreraTotemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraTotemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarreraTotemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraTotemPayload>
          }
          aggregate: {
            args: Prisma.CarreraTotemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarreraTotem>
          }
          groupBy: {
            args: Prisma.CarreraTotemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraTotemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraTotemCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraTotemCountAggregateOutputType> | number
          }
        }
      }
      ExamenTotem: {
        payload: Prisma.$ExamenTotemPayload<ExtArgs>
        fields: Prisma.ExamenTotemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamenTotemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamenTotemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          findFirst: {
            args: Prisma.ExamenTotemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamenTotemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          findMany: {
            args: Prisma.ExamenTotemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>[]
          }
          create: {
            args: Prisma.ExamenTotemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          createMany: {
            args: Prisma.ExamenTotemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExamenTotemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          update: {
            args: Prisma.ExamenTotemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          deleteMany: {
            args: Prisma.ExamenTotemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamenTotemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamenTotemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamenTotemPayload>
          }
          aggregate: {
            args: Prisma.ExamenTotemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamenTotem>
          }
          groupBy: {
            args: Prisma.ExamenTotemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamenTotemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamenTotemCountArgs<ExtArgs>
            result: $Utils.Optional<ExamenTotemCountAggregateOutputType> | number
          }
        }
      }
      AulaConfiguracion: {
        payload: Prisma.$AulaConfiguracionPayload<ExtArgs>
        fields: Prisma.AulaConfiguracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaConfiguracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaConfiguracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          findFirst: {
            args: Prisma.AulaConfiguracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaConfiguracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          findMany: {
            args: Prisma.AulaConfiguracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>[]
          }
          create: {
            args: Prisma.AulaConfiguracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          createMany: {
            args: Prisma.AulaConfiguracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AulaConfiguracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          update: {
            args: Prisma.AulaConfiguracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          deleteMany: {
            args: Prisma.AulaConfiguracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaConfiguracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AulaConfiguracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaConfiguracionPayload>
          }
          aggregate: {
            args: Prisma.AulaConfiguracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAulaConfiguracion>
          }
          groupBy: {
            args: Prisma.AulaConfiguracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaConfiguracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaConfiguracionCountArgs<ExtArgs>
            result: $Utils.Optional<AulaConfiguracionCountAggregateOutputType> | number
          }
        }
      }
      ConfiguracionVisual: {
        payload: Prisma.$ConfiguracionVisualPayload<ExtArgs>
        fields: Prisma.ConfiguracionVisualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracionVisualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracionVisualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracionVisualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracionVisualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          findMany: {
            args: Prisma.ConfiguracionVisualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>[]
          }
          create: {
            args: Prisma.ConfiguracionVisualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          createMany: {
            args: Prisma.ConfiguracionVisualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfiguracionVisualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          update: {
            args: Prisma.ConfiguracionVisualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracionVisualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracionVisualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfiguracionVisualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionVisualPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionVisualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracionVisual>
          }
          groupBy: {
            args: Prisma.ConfiguracionVisualGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionVisualGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracionVisualCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionVisualCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    facultad?: FacultadOmit
    carrera?: CarreraOmit
    examen?: ExamenOmit
    syncLog?: SyncLogOmit
    estudiante?: EstudianteOmit
    aula?: AulaOmit
    totemData?: TotemDataOmit
    actaExamen?: ActaExamenOmit
    sectorFacultad?: SectorFacultadOmit
    carreraTotem?: CarreraTotemOmit
    examenTotem?: ExamenTotemOmit
    aulaConfiguracion?: AulaConfiguracionOmit
    configuracionVisual?: ConfiguracionVisualOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FacultadCountOutputType
   */

  export type FacultadCountOutputType = {
    carreras: number
    sectores: number
    syncLogs: number
  }

  export type FacultadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carreras?: boolean | FacultadCountOutputTypeCountCarrerasArgs
    sectores?: boolean | FacultadCountOutputTypeCountSectoresArgs
    syncLogs?: boolean | FacultadCountOutputTypeCountSyncLogsArgs
  }

  // Custom InputTypes
  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultadCountOutputType
     */
    select?: FacultadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountCarrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountSectoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorFacultadWhereInput
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
  }


  /**
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    carrerasTotem: number
    examenes: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrerasTotem?: boolean | CarreraCountOutputTypeCountCarrerasTotemArgs
    examenes?: boolean | CarreraCountOutputTypeCountExamenesArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountCarrerasTotemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraTotemWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamenWhereInput
  }


  /**
   * Count Type ExamenCountOutputType
   */

  export type ExamenCountOutputType = {
    actasExamen: number
  }

  export type ExamenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actasExamen?: boolean | ExamenCountOutputTypeCountActasExamenArgs
  }

  // Custom InputTypes
  /**
   * ExamenCountOutputType without action
   */
  export type ExamenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenCountOutputType
     */
    select?: ExamenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamenCountOutputType without action
   */
  export type ExamenCountOutputTypeCountActasExamenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActaExamenWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    actasExamen: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actasExamen?: boolean | EstudianteCountOutputTypeCountActasExamenArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountActasExamenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActaExamenWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    examenes: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | AulaCountOutputTypeCountExamenesArgs
  }

  // Custom InputTypes
  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: AulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Facultad
   */

  export type AggregateFacultad = {
    _count: FacultadCountAggregateOutputType | null
    _avg: FacultadAvgAggregateOutputType | null
    _sum: FacultadSumAggregateOutputType | null
    _min: FacultadMinAggregateOutputType | null
    _max: FacultadMaxAggregateOutputType | null
  }

  export type FacultadAvgAggregateOutputType = {
    id: number | null
    sector: number | null
  }

  export type FacultadSumAggregateOutputType = {
    id: number | null
    sector: number | null
  }

  export type FacultadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    sector: number | null
    sheetId: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    sector: number | null
    sheetId: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultadCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    sector: number
    sheetId: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacultadAvgAggregateInputType = {
    id?: true
    sector?: true
  }

  export type FacultadSumAggregateInputType = {
    id?: true
    sector?: true
  }

  export type FacultadMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    sector?: true
    sheetId?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultadMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    sector?: true
    sheetId?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultadCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    sector?: true
    sheetId?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacultadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facultad to aggregate.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facultads
    **/
    _count?: true | FacultadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultadMaxAggregateInputType
  }

  export type GetFacultadAggregateType<T extends FacultadAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultad[P]>
      : GetScalarType<T[P], AggregateFacultad[P]>
  }




  export type FacultadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultadWhereInput
    orderBy?: FacultadOrderByWithAggregationInput | FacultadOrderByWithAggregationInput[]
    by: FacultadScalarFieldEnum[] | FacultadScalarFieldEnum
    having?: FacultadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultadCountAggregateInputType | true
    _avg?: FacultadAvgAggregateInputType
    _sum?: FacultadSumAggregateInputType
    _min?: FacultadMinAggregateInputType
    _max?: FacultadMaxAggregateInputType
  }

  export type FacultadGroupByOutputType = {
    id: number
    nombre: string
    codigo: string | null
    sector: number | null
    sheetId: string | null
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: FacultadCountAggregateOutputType | null
    _avg: FacultadAvgAggregateOutputType | null
    _sum: FacultadSumAggregateOutputType | null
    _min: FacultadMinAggregateOutputType | null
    _max: FacultadMaxAggregateOutputType | null
  }

  type GetFacultadGroupByPayload<T extends FacultadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultadGroupByOutputType[P]>
            : GetScalarType<T[P], FacultadGroupByOutputType[P]>
        }
      >
    >


  export type FacultadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    sector?: boolean
    sheetId?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    sectores?: boolean | Facultad$sectoresArgs<ExtArgs>
    syncLogs?: boolean | Facultad$syncLogsArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultad"]>



  export type FacultadSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    sector?: boolean
    sheetId?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacultadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "sector" | "sheetId" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["facultad"]>
  export type FacultadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    sectores?: boolean | Facultad$sectoresArgs<ExtArgs>
    syncLogs?: boolean | Facultad$syncLogsArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FacultadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facultad"
    objects: {
      carreras: Prisma.$CarreraPayload<ExtArgs>[]
      sectores: Prisma.$SectorFacultadPayload<ExtArgs>[]
      syncLogs: Prisma.$SyncLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string | null
      sector: number | null
      sheetId: string | null
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facultad"]>
    composites: {}
  }

  type FacultadGetPayload<S extends boolean | null | undefined | FacultadDefaultArgs> = $Result.GetResult<Prisma.$FacultadPayload, S>

  type FacultadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultadCountAggregateInputType | true
    }

  export interface FacultadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facultad'], meta: { name: 'Facultad' } }
    /**
     * Find zero or one Facultad that matches the filter.
     * @param {FacultadFindUniqueArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultadFindUniqueArgs>(args: SelectSubset<T, FacultadFindUniqueArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facultad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultadFindUniqueOrThrowArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultadFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facultad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindFirstArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultadFindFirstArgs>(args?: SelectSubset<T, FacultadFindFirstArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facultad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindFirstOrThrowArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultadFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facultads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facultads
     * const facultads = await prisma.facultad.findMany()
     * 
     * // Get first 10 Facultads
     * const facultads = await prisma.facultad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultadWithIdOnly = await prisma.facultad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultadFindManyArgs>(args?: SelectSubset<T, FacultadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facultad.
     * @param {FacultadCreateArgs} args - Arguments to create a Facultad.
     * @example
     * // Create one Facultad
     * const Facultad = await prisma.facultad.create({
     *   data: {
     *     // ... data to create a Facultad
     *   }
     * })
     * 
     */
    create<T extends FacultadCreateArgs>(args: SelectSubset<T, FacultadCreateArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facultads.
     * @param {FacultadCreateManyArgs} args - Arguments to create many Facultads.
     * @example
     * // Create many Facultads
     * const facultad = await prisma.facultad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultadCreateManyArgs>(args?: SelectSubset<T, FacultadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facultad.
     * @param {FacultadDeleteArgs} args - Arguments to delete one Facultad.
     * @example
     * // Delete one Facultad
     * const Facultad = await prisma.facultad.delete({
     *   where: {
     *     // ... filter to delete one Facultad
     *   }
     * })
     * 
     */
    delete<T extends FacultadDeleteArgs>(args: SelectSubset<T, FacultadDeleteArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facultad.
     * @param {FacultadUpdateArgs} args - Arguments to update one Facultad.
     * @example
     * // Update one Facultad
     * const facultad = await prisma.facultad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultadUpdateArgs>(args: SelectSubset<T, FacultadUpdateArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facultads.
     * @param {FacultadDeleteManyArgs} args - Arguments to filter Facultads to delete.
     * @example
     * // Delete a few Facultads
     * const { count } = await prisma.facultad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultadDeleteManyArgs>(args?: SelectSubset<T, FacultadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facultads
     * const facultad = await prisma.facultad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultadUpdateManyArgs>(args: SelectSubset<T, FacultadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facultad.
     * @param {FacultadUpsertArgs} args - Arguments to update or create a Facultad.
     * @example
     * // Update or create a Facultad
     * const facultad = await prisma.facultad.upsert({
     *   create: {
     *     // ... data to create a Facultad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facultad we want to update
     *   }
     * })
     */
    upsert<T extends FacultadUpsertArgs>(args: SelectSubset<T, FacultadUpsertArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadCountArgs} args - Arguments to filter Facultads to count.
     * @example
     * // Count the number of Facultads
     * const count = await prisma.facultad.count({
     *   where: {
     *     // ... the filter for the Facultads we want to count
     *   }
     * })
    **/
    count<T extends FacultadCountArgs>(
      args?: Subset<T, FacultadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultadAggregateArgs>(args: Subset<T, FacultadAggregateArgs>): Prisma.PrismaPromise<GetFacultadAggregateType<T>>

    /**
     * Group by Facultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadGroupByArgs} args - Group by arguments.
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
      T extends FacultadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultadGroupByArgs['orderBy'] }
        : { orderBy?: FacultadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FacultadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facultad model
   */
  readonly fields: FacultadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facultad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carreras<T extends Facultad$carrerasArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$carrerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectores<T extends Facultad$sectoresArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$sectoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncLogs<T extends Facultad$syncLogsArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$syncLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facultad model
   */
  interface FacultadFieldRefs {
    readonly id: FieldRef<"Facultad", 'Int'>
    readonly nombre: FieldRef<"Facultad", 'String'>
    readonly codigo: FieldRef<"Facultad", 'String'>
    readonly sector: FieldRef<"Facultad", 'Int'>
    readonly sheetId: FieldRef<"Facultad", 'String'>
    readonly activa: FieldRef<"Facultad", 'Boolean'>
    readonly createdAt: FieldRef<"Facultad", 'DateTime'>
    readonly updatedAt: FieldRef<"Facultad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facultad findUnique
   */
  export type FacultadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad findUniqueOrThrow
   */
  export type FacultadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad findFirst
   */
  export type FacultadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facultads.
     */
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad findFirstOrThrow
   */
  export type FacultadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facultads.
     */
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad findMany
   */
  export type FacultadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultads to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad create
   */
  export type FacultadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The data needed to create a Facultad.
     */
    data: XOR<FacultadCreateInput, FacultadUncheckedCreateInput>
  }

  /**
   * Facultad createMany
   */
  export type FacultadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facultads.
     */
    data: FacultadCreateManyInput | FacultadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facultad update
   */
  export type FacultadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The data needed to update a Facultad.
     */
    data: XOR<FacultadUpdateInput, FacultadUncheckedUpdateInput>
    /**
     * Choose, which Facultad to update.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad updateMany
   */
  export type FacultadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facultads.
     */
    data: XOR<FacultadUpdateManyMutationInput, FacultadUncheckedUpdateManyInput>
    /**
     * Filter which Facultads to update
     */
    where?: FacultadWhereInput
    /**
     * Limit how many Facultads to update.
     */
    limit?: number
  }

  /**
   * Facultad upsert
   */
  export type FacultadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The filter to search for the Facultad to update in case it exists.
     */
    where: FacultadWhereUniqueInput
    /**
     * In case the Facultad found by the `where` argument doesn't exist, create a new Facultad with this data.
     */
    create: XOR<FacultadCreateInput, FacultadUncheckedCreateInput>
    /**
     * In case the Facultad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultadUpdateInput, FacultadUncheckedUpdateInput>
  }

  /**
   * Facultad delete
   */
  export type FacultadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter which Facultad to delete.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad deleteMany
   */
  export type FacultadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facultads to delete
     */
    where?: FacultadWhereInput
    /**
     * Limit how many Facultads to delete.
     */
    limit?: number
  }

  /**
   * Facultad.carreras
   */
  export type Facultad$carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    cursor?: CarreraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Facultad.sectores
   */
  export type Facultad$sectoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    where?: SectorFacultadWhereInput
    orderBy?: SectorFacultadOrderByWithRelationInput | SectorFacultadOrderByWithRelationInput[]
    cursor?: SectorFacultadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectorFacultadScalarFieldEnum | SectorFacultadScalarFieldEnum[]
  }

  /**
   * Facultad.syncLogs
   */
  export type Facultad$syncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    cursor?: SyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * Facultad without action
   */
  export type FacultadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
  }


  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
    facultadId: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
    facultadId: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    facultadId: number | null
    nombre: string | null
    codigo: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    facultadId: number | null
    nombre: string | null
    codigo: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    facultadId: number
    nombre: number
    codigo: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
    facultadId?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
    facultadId?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    facultadId?: true
    nombre?: true
    codigo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    facultadId?: true
    nombre?: true
    codigo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    facultadId?: true
    nombre?: true
    codigo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    facultadId: number
    nombre: string
    codigo: string
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultadId?: boolean
    nombre?: boolean
    codigo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    carrerasTotem?: boolean | Carrera$carrerasTotemArgs<ExtArgs>
    examenes?: boolean | Carrera$examenesArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>



  export type CarreraSelectScalar = {
    id?: boolean
    facultadId?: boolean
    nombre?: boolean
    codigo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facultadId" | "nombre" | "codigo" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    carrerasTotem?: boolean | Carrera$carrerasTotemArgs<ExtArgs>
    examenes?: boolean | Carrera$examenesArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      facultad: Prisma.$FacultadPayload<ExtArgs>
      carrerasTotem: Prisma.$CarreraTotemPayload<ExtArgs>[]
      examenes: Prisma.$ExamenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facultadId: number
      nombre: string
      codigo: string
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
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
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultad<T extends FacultadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultadDefaultArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrerasTotem<T extends Carrera$carrerasTotemArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$carrerasTotemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examenes<T extends Carrera$examenesArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$examenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly facultadId: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
    readonly codigo: FieldRef<"Carrera", 'String'>
    readonly activa: FieldRef<"Carrera", 'Boolean'>
    readonly createdAt: FieldRef<"Carrera", 'DateTime'>
    readonly updatedAt: FieldRef<"Carrera", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.carrerasTotem
   */
  export type Carrera$carrerasTotemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    where?: CarreraTotemWhereInput
    orderBy?: CarreraTotemOrderByWithRelationInput | CarreraTotemOrderByWithRelationInput[]
    cursor?: CarreraTotemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreraTotemScalarFieldEnum | CarreraTotemScalarFieldEnum[]
  }

  /**
   * Carrera.examenes
   */
  export type Carrera$examenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    where?: ExamenWhereInput
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    cursor?: ExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamenScalarFieldEnum | ExamenScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Examen
   */

  export type AggregateExamen = {
    _count: ExamenCountAggregateOutputType | null
    _avg: ExamenAvgAggregateOutputType | null
    _sum: ExamenSumAggregateOutputType | null
    _min: ExamenMinAggregateOutputType | null
    _max: ExamenMaxAggregateOutputType | null
  }

  export type ExamenAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
    aulaId: number | null
    cantidadInscriptos: number | null
  }

  export type ExamenSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    aulaId: number | null
    cantidadInscriptos: number | null
  }

  export type ExamenMinAggregateOutputType = {
    id: number | null
    carreraId: number | null
    aulaId: number | null
    nombreMateria: string | null
    fecha: Date | null
    hora: Date | null
    tipoExamen: string | null
    monitoreo: string | null
    materialPermitido: string | null
    observaciones: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    asignacionAuto: boolean | null
    criterioAsignacion: string | null
    modalidadExamen: string | null
    requierePc: boolean | null
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
  }

  export type ExamenMaxAggregateOutputType = {
    id: number | null
    carreraId: number | null
    aulaId: number | null
    nombreMateria: string | null
    fecha: Date | null
    hora: Date | null
    tipoExamen: string | null
    monitoreo: string | null
    materialPermitido: string | null
    observaciones: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    asignacionAuto: boolean | null
    criterioAsignacion: string | null
    modalidadExamen: string | null
    requierePc: boolean | null
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
  }

  export type ExamenCountAggregateOutputType = {
    id: number
    carreraId: number
    aulaId: number
    nombreMateria: number
    fecha: number
    hora: number
    tipoExamen: number
    monitoreo: number
    materialPermitido: number
    observaciones: number
    activo: number
    createdAt: number
    updatedAt: number
    asignacionAuto: number
    criterioAsignacion: number
    modalidadExamen: number
    requierePc: number
    cantidadInscriptos: number
    fechaUltConsulta: number
    _all: number
  }


  export type ExamenAvgAggregateInputType = {
    id?: true
    carreraId?: true
    aulaId?: true
    cantidadInscriptos?: true
  }

  export type ExamenSumAggregateInputType = {
    id?: true
    carreraId?: true
    aulaId?: true
    cantidadInscriptos?: true
  }

  export type ExamenMinAggregateInputType = {
    id?: true
    carreraId?: true
    aulaId?: true
    nombreMateria?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    monitoreo?: true
    materialPermitido?: true
    observaciones?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    asignacionAuto?: true
    criterioAsignacion?: true
    modalidadExamen?: true
    requierePc?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
  }

  export type ExamenMaxAggregateInputType = {
    id?: true
    carreraId?: true
    aulaId?: true
    nombreMateria?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    monitoreo?: true
    materialPermitido?: true
    observaciones?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    asignacionAuto?: true
    criterioAsignacion?: true
    modalidadExamen?: true
    requierePc?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
  }

  export type ExamenCountAggregateInputType = {
    id?: true
    carreraId?: true
    aulaId?: true
    nombreMateria?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    monitoreo?: true
    materialPermitido?: true
    observaciones?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    asignacionAuto?: true
    criterioAsignacion?: true
    modalidadExamen?: true
    requierePc?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
    _all?: true
  }

  export type ExamenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examen to aggregate.
     */
    where?: ExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examen to fetch.
     */
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examen
    **/
    _count?: true | ExamenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamenMaxAggregateInputType
  }

  export type GetExamenAggregateType<T extends ExamenAggregateArgs> = {
        [P in keyof T & keyof AggregateExamen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamen[P]>
      : GetScalarType<T[P], AggregateExamen[P]>
  }




  export type ExamenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamenWhereInput
    orderBy?: ExamenOrderByWithAggregationInput | ExamenOrderByWithAggregationInput[]
    by: ExamenScalarFieldEnum[] | ExamenScalarFieldEnum
    having?: ExamenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamenCountAggregateInputType | true
    _avg?: ExamenAvgAggregateInputType
    _sum?: ExamenSumAggregateInputType
    _min?: ExamenMinAggregateInputType
    _max?: ExamenMaxAggregateInputType
  }

  export type ExamenGroupByOutputType = {
    id: number
    carreraId: number
    aulaId: number | null
    nombreMateria: string
    fecha: Date
    hora: Date | null
    tipoExamen: string | null
    monitoreo: string | null
    materialPermitido: string | null
    observaciones: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    asignacionAuto: boolean
    criterioAsignacion: string | null
    modalidadExamen: string | null
    requierePc: boolean
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
    _count: ExamenCountAggregateOutputType | null
    _avg: ExamenAvgAggregateOutputType | null
    _sum: ExamenSumAggregateOutputType | null
    _min: ExamenMinAggregateOutputType | null
    _max: ExamenMaxAggregateOutputType | null
  }

  type GetExamenGroupByPayload<T extends ExamenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamenGroupByOutputType[P]>
            : GetScalarType<T[P], ExamenGroupByOutputType[P]>
        }
      >
    >


  export type ExamenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    aulaId?: boolean
    nombreMateria?: boolean
    fecha?: boolean
    hora?: boolean
    tipoExamen?: boolean
    monitoreo?: boolean
    materialPermitido?: boolean
    observaciones?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignacionAuto?: boolean
    criterioAsignacion?: boolean
    modalidadExamen?: boolean
    requierePc?: boolean
    cantidadInscriptos?: boolean
    fechaUltConsulta?: boolean
    actasExamen?: boolean | Examen$actasExamenArgs<ExtArgs>
    aula?: boolean | Examen$aulaArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    examenTotem?: boolean | Examen$examenTotemArgs<ExtArgs>
    _count?: boolean | ExamenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examen"]>



  export type ExamenSelectScalar = {
    id?: boolean
    carreraId?: boolean
    aulaId?: boolean
    nombreMateria?: boolean
    fecha?: boolean
    hora?: boolean
    tipoExamen?: boolean
    monitoreo?: boolean
    materialPermitido?: boolean
    observaciones?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignacionAuto?: boolean
    criterioAsignacion?: boolean
    modalidadExamen?: boolean
    requierePc?: boolean
    cantidadInscriptos?: boolean
    fechaUltConsulta?: boolean
  }

  export type ExamenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carreraId" | "aulaId" | "nombreMateria" | "fecha" | "hora" | "tipoExamen" | "monitoreo" | "materialPermitido" | "observaciones" | "activo" | "createdAt" | "updatedAt" | "asignacionAuto" | "criterioAsignacion" | "modalidadExamen" | "requierePc" | "cantidadInscriptos" | "fechaUltConsulta", ExtArgs["result"]["examen"]>
  export type ExamenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actasExamen?: boolean | Examen$actasExamenArgs<ExtArgs>
    aula?: boolean | Examen$aulaArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    examenTotem?: boolean | Examen$examenTotemArgs<ExtArgs>
    _count?: boolean | ExamenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExamenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examen"
    objects: {
      actasExamen: Prisma.$ActaExamenPayload<ExtArgs>[]
      aula: Prisma.$AulaPayload<ExtArgs> | null
      carrera: Prisma.$CarreraPayload<ExtArgs>
      examenTotem: Prisma.$ExamenTotemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carreraId: number
      aulaId: number | null
      nombreMateria: string
      fecha: Date
      hora: Date | null
      tipoExamen: string | null
      monitoreo: string | null
      materialPermitido: string | null
      observaciones: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
      asignacionAuto: boolean
      criterioAsignacion: string | null
      modalidadExamen: string | null
      requierePc: boolean
      cantidadInscriptos: number | null
      fechaUltConsulta: Date | null
    }, ExtArgs["result"]["examen"]>
    composites: {}
  }

  type ExamenGetPayload<S extends boolean | null | undefined | ExamenDefaultArgs> = $Result.GetResult<Prisma.$ExamenPayload, S>

  type ExamenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamenCountAggregateInputType | true
    }

  export interface ExamenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Examen'], meta: { name: 'Examen' } }
    /**
     * Find zero or one Examen that matches the filter.
     * @param {ExamenFindUniqueArgs} args - Arguments to find a Examen
     * @example
     * // Get one Examen
     * const examen = await prisma.examen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamenFindUniqueArgs>(args: SelectSubset<T, ExamenFindUniqueArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamenFindUniqueOrThrowArgs} args - Arguments to find a Examen
     * @example
     * // Get one Examen
     * const examen = await prisma.examen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamenFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenFindFirstArgs} args - Arguments to find a Examen
     * @example
     * // Get one Examen
     * const examen = await prisma.examen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamenFindFirstArgs>(args?: SelectSubset<T, ExamenFindFirstArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenFindFirstOrThrowArgs} args - Arguments to find a Examen
     * @example
     * // Get one Examen
     * const examen = await prisma.examen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamenFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examen
     * const examen = await prisma.examen.findMany()
     * 
     * // Get first 10 Examen
     * const examen = await prisma.examen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examenWithIdOnly = await prisma.examen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamenFindManyArgs>(args?: SelectSubset<T, ExamenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examen.
     * @param {ExamenCreateArgs} args - Arguments to create a Examen.
     * @example
     * // Create one Examen
     * const Examen = await prisma.examen.create({
     *   data: {
     *     // ... data to create a Examen
     *   }
     * })
     * 
     */
    create<T extends ExamenCreateArgs>(args: SelectSubset<T, ExamenCreateArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examen.
     * @param {ExamenCreateManyArgs} args - Arguments to create many Examen.
     * @example
     * // Create many Examen
     * const examen = await prisma.examen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamenCreateManyArgs>(args?: SelectSubset<T, ExamenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Examen.
     * @param {ExamenDeleteArgs} args - Arguments to delete one Examen.
     * @example
     * // Delete one Examen
     * const Examen = await prisma.examen.delete({
     *   where: {
     *     // ... filter to delete one Examen
     *   }
     * })
     * 
     */
    delete<T extends ExamenDeleteArgs>(args: SelectSubset<T, ExamenDeleteArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examen.
     * @param {ExamenUpdateArgs} args - Arguments to update one Examen.
     * @example
     * // Update one Examen
     * const examen = await prisma.examen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamenUpdateArgs>(args: SelectSubset<T, ExamenUpdateArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examen.
     * @param {ExamenDeleteManyArgs} args - Arguments to filter Examen to delete.
     * @example
     * // Delete a few Examen
     * const { count } = await prisma.examen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamenDeleteManyArgs>(args?: SelectSubset<T, ExamenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examen
     * const examen = await prisma.examen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamenUpdateManyArgs>(args: SelectSubset<T, ExamenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Examen.
     * @param {ExamenUpsertArgs} args - Arguments to update or create a Examen.
     * @example
     * // Update or create a Examen
     * const examen = await prisma.examen.upsert({
     *   create: {
     *     // ... data to create a Examen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examen we want to update
     *   }
     * })
     */
    upsert<T extends ExamenUpsertArgs>(args: SelectSubset<T, ExamenUpsertArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenCountArgs} args - Arguments to filter Examen to count.
     * @example
     * // Count the number of Examen
     * const count = await prisma.examen.count({
     *   where: {
     *     // ... the filter for the Examen we want to count
     *   }
     * })
    **/
    count<T extends ExamenCountArgs>(
      args?: Subset<T, ExamenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamenAggregateArgs>(args: Subset<T, ExamenAggregateArgs>): Prisma.PrismaPromise<GetExamenAggregateType<T>>

    /**
     * Group by Examen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenGroupByArgs} args - Group by arguments.
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
      T extends ExamenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamenGroupByArgs['orderBy'] }
        : { orderBy?: ExamenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Examen model
   */
  readonly fields: ExamenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Examen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actasExamen<T extends Examen$actasExamenArgs<ExtArgs> = {}>(args?: Subset<T, Examen$actasExamenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aula<T extends Examen$aulaArgs<ExtArgs> = {}>(args?: Subset<T, Examen$aulaArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examenTotem<T extends Examen$examenTotemArgs<ExtArgs> = {}>(args?: Subset<T, Examen$examenTotemArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Examen model
   */
  interface ExamenFieldRefs {
    readonly id: FieldRef<"Examen", 'Int'>
    readonly carreraId: FieldRef<"Examen", 'Int'>
    readonly aulaId: FieldRef<"Examen", 'Int'>
    readonly nombreMateria: FieldRef<"Examen", 'String'>
    readonly fecha: FieldRef<"Examen", 'DateTime'>
    readonly hora: FieldRef<"Examen", 'DateTime'>
    readonly tipoExamen: FieldRef<"Examen", 'String'>
    readonly monitoreo: FieldRef<"Examen", 'String'>
    readonly materialPermitido: FieldRef<"Examen", 'String'>
    readonly observaciones: FieldRef<"Examen", 'String'>
    readonly activo: FieldRef<"Examen", 'Boolean'>
    readonly createdAt: FieldRef<"Examen", 'DateTime'>
    readonly updatedAt: FieldRef<"Examen", 'DateTime'>
    readonly asignacionAuto: FieldRef<"Examen", 'Boolean'>
    readonly criterioAsignacion: FieldRef<"Examen", 'String'>
    readonly modalidadExamen: FieldRef<"Examen", 'String'>
    readonly requierePc: FieldRef<"Examen", 'Boolean'>
    readonly cantidadInscriptos: FieldRef<"Examen", 'Int'>
    readonly fechaUltConsulta: FieldRef<"Examen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Examen findUnique
   */
  export type ExamenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter, which Examen to fetch.
     */
    where: ExamenWhereUniqueInput
  }

  /**
   * Examen findUniqueOrThrow
   */
  export type ExamenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter, which Examen to fetch.
     */
    where: ExamenWhereUniqueInput
  }

  /**
   * Examen findFirst
   */
  export type ExamenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter, which Examen to fetch.
     */
    where?: ExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examen to fetch.
     */
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examen.
     */
    cursor?: ExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examen.
     */
    distinct?: ExamenScalarFieldEnum | ExamenScalarFieldEnum[]
  }

  /**
   * Examen findFirstOrThrow
   */
  export type ExamenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter, which Examen to fetch.
     */
    where?: ExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examen to fetch.
     */
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examen.
     */
    cursor?: ExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examen.
     */
    distinct?: ExamenScalarFieldEnum | ExamenScalarFieldEnum[]
  }

  /**
   * Examen findMany
   */
  export type ExamenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter, which Examen to fetch.
     */
    where?: ExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examen to fetch.
     */
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examen.
     */
    cursor?: ExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examen.
     */
    skip?: number
    distinct?: ExamenScalarFieldEnum | ExamenScalarFieldEnum[]
  }

  /**
   * Examen create
   */
  export type ExamenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * The data needed to create a Examen.
     */
    data: XOR<ExamenCreateInput, ExamenUncheckedCreateInput>
  }

  /**
   * Examen createMany
   */
  export type ExamenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examen.
     */
    data: ExamenCreateManyInput | ExamenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Examen update
   */
  export type ExamenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * The data needed to update a Examen.
     */
    data: XOR<ExamenUpdateInput, ExamenUncheckedUpdateInput>
    /**
     * Choose, which Examen to update.
     */
    where: ExamenWhereUniqueInput
  }

  /**
   * Examen updateMany
   */
  export type ExamenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examen.
     */
    data: XOR<ExamenUpdateManyMutationInput, ExamenUncheckedUpdateManyInput>
    /**
     * Filter which Examen to update
     */
    where?: ExamenWhereInput
    /**
     * Limit how many Examen to update.
     */
    limit?: number
  }

  /**
   * Examen upsert
   */
  export type ExamenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * The filter to search for the Examen to update in case it exists.
     */
    where: ExamenWhereUniqueInput
    /**
     * In case the Examen found by the `where` argument doesn't exist, create a new Examen with this data.
     */
    create: XOR<ExamenCreateInput, ExamenUncheckedCreateInput>
    /**
     * In case the Examen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamenUpdateInput, ExamenUncheckedUpdateInput>
  }

  /**
   * Examen delete
   */
  export type ExamenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    /**
     * Filter which Examen to delete.
     */
    where: ExamenWhereUniqueInput
  }

  /**
   * Examen deleteMany
   */
  export type ExamenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examen to delete
     */
    where?: ExamenWhereInput
    /**
     * Limit how many Examen to delete.
     */
    limit?: number
  }

  /**
   * Examen.actasExamen
   */
  export type Examen$actasExamenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    where?: ActaExamenWhereInput
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    cursor?: ActaExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActaExamenScalarFieldEnum | ActaExamenScalarFieldEnum[]
  }

  /**
   * Examen.aula
   */
  export type Examen$aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    where?: AulaWhereInput
  }

  /**
   * Examen.examenTotem
   */
  export type Examen$examenTotemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    where?: ExamenTotemWhereInput
  }

  /**
   * Examen without action
   */
  export type ExamenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogAvgAggregateOutputType = {
    id: number | null
    facultadId: number | null
    registrosProcesados: number | null
  }

  export type SyncLogSumAggregateOutputType = {
    id: number | null
    facultadId: number | null
    registrosProcesados: number | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: number | null
    facultadId: number | null
    tipoOperacion: string | null
    resultado: string | null
    mensaje: string | null
    registrosProcesados: number | null
    createdAt: Date | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: number | null
    facultadId: number | null
    tipoOperacion: string | null
    resultado: string | null
    mensaje: string | null
    registrosProcesados: number | null
    createdAt: Date | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    facultadId: number
    tipoOperacion: number
    resultado: number
    mensaje: number
    registrosProcesados: number
    createdAt: number
    _all: number
  }


  export type SyncLogAvgAggregateInputType = {
    id?: true
    facultadId?: true
    registrosProcesados?: true
  }

  export type SyncLogSumAggregateInputType = {
    id?: true
    facultadId?: true
    registrosProcesados?: true
  }

  export type SyncLogMinAggregateInputType = {
    id?: true
    facultadId?: true
    tipoOperacion?: true
    resultado?: true
    mensaje?: true
    registrosProcesados?: true
    createdAt?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    facultadId?: true
    tipoOperacion?: true
    resultado?: true
    mensaje?: true
    registrosProcesados?: true
    createdAt?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    facultadId?: true
    tipoOperacion?: true
    resultado?: true
    mensaje?: true
    registrosProcesados?: true
    createdAt?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _avg?: SyncLogAvgAggregateInputType
    _sum?: SyncLogSumAggregateInputType
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: number
    facultadId: number
    tipoOperacion: string
    resultado: string
    mensaje: string | null
    registrosProcesados: number
    createdAt: Date
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultadId?: boolean
    tipoOperacion?: boolean
    resultado?: boolean
    mensaje?: boolean
    registrosProcesados?: boolean
    createdAt?: boolean
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncLog"]>



  export type SyncLogSelectScalar = {
    id?: boolean
    facultadId?: boolean
    tipoOperacion?: boolean
    resultado?: boolean
    mensaje?: boolean
    registrosProcesados?: boolean
    createdAt?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facultadId" | "tipoOperacion" | "resultado" | "mensaje" | "registrosProcesados" | "createdAt", ExtArgs["result"]["syncLog"]>
  export type SyncLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {
      facultad: Prisma.$FacultadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facultadId: number
      tipoOperacion: string
      resultado: string
      mensaje: string | null
      registrosProcesados: number
      createdAt: Date
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
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
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultad<T extends FacultadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultadDefaultArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'Int'>
    readonly facultadId: FieldRef<"SyncLog", 'Int'>
    readonly tipoOperacion: FieldRef<"SyncLog", 'String'>
    readonly resultado: FieldRef<"SyncLog", 'String'>
    readonly mensaje: FieldRef<"SyncLog", 'String'>
    readonly registrosProcesados: FieldRef<"SyncLog", 'Int'>
    readonly createdAt: FieldRef<"SyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    dni: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    dni: string
    nombre: string
    apellido: string
    email: string | null
    telefono: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    actasExamen?: boolean | Estudiante$actasExamenArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>



  export type EstudianteSelectScalar = {
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dni" | "nombre" | "apellido" | "email" | "telefono" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actasExamen?: boolean | Estudiante$actasExamenArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      actasExamen: Prisma.$ActaExamenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dni: string
      nombre: string
      apellido: string
      email: string | null
      telefono: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
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
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actasExamen<T extends Estudiante$actasExamenArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$actasExamenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly dni: FieldRef<"Estudiante", 'String'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
    readonly apellido: FieldRef<"Estudiante", 'String'>
    readonly email: FieldRef<"Estudiante", 'String'>
    readonly telefono: FieldRef<"Estudiante", 'String'>
    readonly activo: FieldRef<"Estudiante", 'Boolean'>
    readonly createdAt: FieldRef<"Estudiante", 'DateTime'>
    readonly updatedAt: FieldRef<"Estudiante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.actasExamen
   */
  export type Estudiante$actasExamenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    where?: ActaExamenWhereInput
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    cursor?: ActaExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActaExamenScalarFieldEnum | ActaExamenScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Aula
   */

  export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  export type AulaAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
    alumnosAsignados: number | null
  }

  export type AulaSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
    alumnosAsignados: number | null
  }

  export type AulaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    capacidad: number | null
    ubicacion: string | null
    disponible: boolean | null
    alumnosAsignados: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    capacidad: number | null
    ubicacion: string | null
    disponible: boolean | null
    alumnosAsignados: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaCountAggregateOutputType = {
    id: number
    nombre: number
    capacidad: number
    ubicacion: number
    disponible: number
    alumnosAsignados: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    id?: true
    capacidad?: true
    alumnosAsignados?: true
  }

  export type AulaSumAggregateInputType = {
    id?: true
    capacidad?: true
    alumnosAsignados?: true
  }

  export type AulaMinAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    ubicacion?: true
    disponible?: true
    alumnosAsignados?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaMaxAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    ubicacion?: true
    disponible?: true
    alumnosAsignados?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaCountAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    ubicacion?: true
    disponible?: true
    alumnosAsignados?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aula to aggregate.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aulas
    **/
    _count?: true | AulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType
  }

  export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAula[P]>
      : GetScalarType<T[P], AggregateAula[P]>
  }




  export type AulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithAggregationInput | AulaOrderByWithAggregationInput[]
    by: AulaScalarFieldEnum[] | AulaScalarFieldEnum
    having?: AulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaCountAggregateInputType | true
    _avg?: AulaAvgAggregateInputType
    _sum?: AulaSumAggregateInputType
    _min?: AulaMinAggregateInputType
    _max?: AulaMaxAggregateInputType
  }

  export type AulaGroupByOutputType = {
    id: number
    nombre: string
    capacidad: number | null
    ubicacion: string | null
    disponible: boolean
    alumnosAsignados: number
    createdAt: Date
    updatedAt: Date
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  type GetAulaGroupByPayload<T extends AulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaGroupByOutputType[P]>
            : GetScalarType<T[P], AulaGroupByOutputType[P]>
        }
      >
    >


  export type AulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    disponible?: boolean
    alumnosAsignados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examenes?: boolean | Aula$examenesArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>



  export type AulaSelectScalar = {
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    disponible?: boolean
    alumnosAsignados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "capacidad" | "ubicacion" | "disponible" | "alumnosAsignados" | "createdAt" | "updatedAt", ExtArgs["result"]["aula"]>
  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | Aula$examenesArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      examenes: Prisma.$ExamenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      capacidad: number | null
      ubicacion: string | null
      disponible: boolean
      alumnosAsignados: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aula"]>
    composites: {}
  }

  type AulaGetPayload<S extends boolean | null | undefined | AulaDefaultArgs> = $Result.GetResult<Prisma.$AulaPayload, S>

  type AulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulaCountAggregateInputType | true
    }

  export interface AulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aula'], meta: { name: 'Aula' } }
    /**
     * Find zero or one Aula that matches the filter.
     * @param {AulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaFindUniqueArgs>(args: SelectSubset<T, AulaFindUniqueArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaFindFirstArgs>(args?: SelectSubset<T, AulaFindFirstArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulaWithIdOnly = await prisma.aula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AulaFindManyArgs>(args?: SelectSubset<T, AulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aula.
     * @param {AulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     * 
     */
    create<T extends AulaCreateArgs>(args: SelectSubset<T, AulaCreateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aulas.
     * @param {AulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaCreateManyArgs>(args?: SelectSubset<T, AulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aula.
     * @param {AulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     * 
     */
    delete<T extends AulaDeleteArgs>(args: SelectSubset<T, AulaDeleteArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aula.
     * @param {AulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaUpdateArgs>(args: SelectSubset<T, AulaUpdateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aulas.
     * @param {AulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaDeleteManyArgs>(args?: SelectSubset<T, AulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaUpdateManyArgs>(args: SelectSubset<T, AulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aula.
     * @param {AulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends AulaUpsertArgs>(args: SelectSubset<T, AulaUpsertArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends AulaCountArgs>(
      args?: Subset<T, AulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>

    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaGroupByArgs} args - Group by arguments.
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
      T extends AulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaGroupByArgs['orderBy'] }
        : { orderBy?: AulaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aula model
   */
  readonly fields: AulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examenes<T extends Aula$examenesArgs<ExtArgs> = {}>(args?: Subset<T, Aula$examenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aula model
   */
  interface AulaFieldRefs {
    readonly id: FieldRef<"Aula", 'Int'>
    readonly nombre: FieldRef<"Aula", 'String'>
    readonly capacidad: FieldRef<"Aula", 'Int'>
    readonly ubicacion: FieldRef<"Aula", 'String'>
    readonly disponible: FieldRef<"Aula", 'Boolean'>
    readonly alumnosAsignados: FieldRef<"Aula", 'Int'>
    readonly createdAt: FieldRef<"Aula", 'DateTime'>
    readonly updatedAt: FieldRef<"Aula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aula findUnique
   */
  export type AulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findUniqueOrThrow
   */
  export type AulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findFirst
   */
  export type AulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findFirstOrThrow
   */
  export type AulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findMany
   */
  export type AulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aulas to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula create
   */
  export type AulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aula.
     */
    data: XOR<AulaCreateInput, AulaUncheckedCreateInput>
  }

  /**
   * Aula createMany
   */
  export type AulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula update
   */
  export type AulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aula.
     */
    data: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
    /**
     * Choose, which Aula to update.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula updateMany
   */
  export type AulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula upsert
   */
  export type AulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aula to update in case it exists.
     */
    where: AulaWhereUniqueInput
    /**
     * In case the Aula found by the `where` argument doesn't exist, create a new Aula with this data.
     */
    create: XOR<AulaCreateInput, AulaUncheckedCreateInput>
    /**
     * In case the Aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
  }

  /**
   * Aula delete
   */
  export type AulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter which Aula to delete.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula deleteMany
   */
  export type AulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aulas to delete
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to delete.
     */
    limit?: number
  }

  /**
   * Aula.examenes
   */
  export type Aula$examenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examen
     */
    select?: ExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examen
     */
    omit?: ExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenInclude<ExtArgs> | null
    where?: ExamenWhereInput
    orderBy?: ExamenOrderByWithRelationInput | ExamenOrderByWithRelationInput[]
    cursor?: ExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamenScalarFieldEnum | ExamenScalarFieldEnum[]
  }

  /**
   * Aula without action
   */
  export type AulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
  }


  /**
   * Model TotemData
   */

  export type AggregateTotemData = {
    _count: TotemDataCountAggregateOutputType | null
    _avg: TotemDataAvgAggregateOutputType | null
    _sum: TotemDataSumAggregateOutputType | null
    _min: TotemDataMinAggregateOutputType | null
    _max: TotemDataMaxAggregateOutputType | null
  }

  export type TotemDataAvgAggregateOutputType = {
    id: number | null
  }

  export type TotemDataSumAggregateOutputType = {
    id: number | null
  }

  export type TotemDataMinAggregateOutputType = {
    id: number | null
    sheetName: string | null
    timestamp: Date | null
    processed: boolean | null
  }

  export type TotemDataMaxAggregateOutputType = {
    id: number | null
    sheetName: string | null
    timestamp: Date | null
    processed: boolean | null
  }

  export type TotemDataCountAggregateOutputType = {
    id: number
    sheetName: number
    data: number
    timestamp: number
    processed: number
    _all: number
  }


  export type TotemDataAvgAggregateInputType = {
    id?: true
  }

  export type TotemDataSumAggregateInputType = {
    id?: true
  }

  export type TotemDataMinAggregateInputType = {
    id?: true
    sheetName?: true
    timestamp?: true
    processed?: true
  }

  export type TotemDataMaxAggregateInputType = {
    id?: true
    sheetName?: true
    timestamp?: true
    processed?: true
  }

  export type TotemDataCountAggregateInputType = {
    id?: true
    sheetName?: true
    data?: true
    timestamp?: true
    processed?: true
    _all?: true
  }

  export type TotemDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TotemData to aggregate.
     */
    where?: TotemDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotemData to fetch.
     */
    orderBy?: TotemDataOrderByWithRelationInput | TotemDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TotemDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotemData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotemData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TotemData
    **/
    _count?: true | TotemDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TotemDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TotemDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TotemDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TotemDataMaxAggregateInputType
  }

  export type GetTotemDataAggregateType<T extends TotemDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTotemData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTotemData[P]>
      : GetScalarType<T[P], AggregateTotemData[P]>
  }




  export type TotemDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TotemDataWhereInput
    orderBy?: TotemDataOrderByWithAggregationInput | TotemDataOrderByWithAggregationInput[]
    by: TotemDataScalarFieldEnum[] | TotemDataScalarFieldEnum
    having?: TotemDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TotemDataCountAggregateInputType | true
    _avg?: TotemDataAvgAggregateInputType
    _sum?: TotemDataSumAggregateInputType
    _min?: TotemDataMinAggregateInputType
    _max?: TotemDataMaxAggregateInputType
  }

  export type TotemDataGroupByOutputType = {
    id: number
    sheetName: string
    data: JsonValue
    timestamp: Date
    processed: boolean
    _count: TotemDataCountAggregateOutputType | null
    _avg: TotemDataAvgAggregateOutputType | null
    _sum: TotemDataSumAggregateOutputType | null
    _min: TotemDataMinAggregateOutputType | null
    _max: TotemDataMaxAggregateOutputType | null
  }

  type GetTotemDataGroupByPayload<T extends TotemDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TotemDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TotemDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TotemDataGroupByOutputType[P]>
            : GetScalarType<T[P], TotemDataGroupByOutputType[P]>
        }
      >
    >


  export type TotemDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetName?: boolean
    data?: boolean
    timestamp?: boolean
    processed?: boolean
  }, ExtArgs["result"]["totemData"]>



  export type TotemDataSelectScalar = {
    id?: boolean
    sheetName?: boolean
    data?: boolean
    timestamp?: boolean
    processed?: boolean
  }

  export type TotemDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sheetName" | "data" | "timestamp" | "processed", ExtArgs["result"]["totemData"]>

  export type $TotemDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TotemData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sheetName: string
      data: Prisma.JsonValue
      timestamp: Date
      processed: boolean
    }, ExtArgs["result"]["totemData"]>
    composites: {}
  }

  type TotemDataGetPayload<S extends boolean | null | undefined | TotemDataDefaultArgs> = $Result.GetResult<Prisma.$TotemDataPayload, S>

  type TotemDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TotemDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TotemDataCountAggregateInputType | true
    }

  export interface TotemDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TotemData'], meta: { name: 'TotemData' } }
    /**
     * Find zero or one TotemData that matches the filter.
     * @param {TotemDataFindUniqueArgs} args - Arguments to find a TotemData
     * @example
     * // Get one TotemData
     * const totemData = await prisma.totemData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TotemDataFindUniqueArgs>(args: SelectSubset<T, TotemDataFindUniqueArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TotemData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TotemDataFindUniqueOrThrowArgs} args - Arguments to find a TotemData
     * @example
     * // Get one TotemData
     * const totemData = await prisma.totemData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TotemDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TotemDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TotemData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataFindFirstArgs} args - Arguments to find a TotemData
     * @example
     * // Get one TotemData
     * const totemData = await prisma.totemData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TotemDataFindFirstArgs>(args?: SelectSubset<T, TotemDataFindFirstArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TotemData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataFindFirstOrThrowArgs} args - Arguments to find a TotemData
     * @example
     * // Get one TotemData
     * const totemData = await prisma.totemData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TotemDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TotemDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TotemData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TotemData
     * const totemData = await prisma.totemData.findMany()
     * 
     * // Get first 10 TotemData
     * const totemData = await prisma.totemData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const totemDataWithIdOnly = await prisma.totemData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TotemDataFindManyArgs>(args?: SelectSubset<T, TotemDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TotemData.
     * @param {TotemDataCreateArgs} args - Arguments to create a TotemData.
     * @example
     * // Create one TotemData
     * const TotemData = await prisma.totemData.create({
     *   data: {
     *     // ... data to create a TotemData
     *   }
     * })
     * 
     */
    create<T extends TotemDataCreateArgs>(args: SelectSubset<T, TotemDataCreateArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TotemData.
     * @param {TotemDataCreateManyArgs} args - Arguments to create many TotemData.
     * @example
     * // Create many TotemData
     * const totemData = await prisma.totemData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TotemDataCreateManyArgs>(args?: SelectSubset<T, TotemDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TotemData.
     * @param {TotemDataDeleteArgs} args - Arguments to delete one TotemData.
     * @example
     * // Delete one TotemData
     * const TotemData = await prisma.totemData.delete({
     *   where: {
     *     // ... filter to delete one TotemData
     *   }
     * })
     * 
     */
    delete<T extends TotemDataDeleteArgs>(args: SelectSubset<T, TotemDataDeleteArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TotemData.
     * @param {TotemDataUpdateArgs} args - Arguments to update one TotemData.
     * @example
     * // Update one TotemData
     * const totemData = await prisma.totemData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TotemDataUpdateArgs>(args: SelectSubset<T, TotemDataUpdateArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TotemData.
     * @param {TotemDataDeleteManyArgs} args - Arguments to filter TotemData to delete.
     * @example
     * // Delete a few TotemData
     * const { count } = await prisma.totemData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TotemDataDeleteManyArgs>(args?: SelectSubset<T, TotemDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TotemData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TotemData
     * const totemData = await prisma.totemData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TotemDataUpdateManyArgs>(args: SelectSubset<T, TotemDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TotemData.
     * @param {TotemDataUpsertArgs} args - Arguments to update or create a TotemData.
     * @example
     * // Update or create a TotemData
     * const totemData = await prisma.totemData.upsert({
     *   create: {
     *     // ... data to create a TotemData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TotemData we want to update
     *   }
     * })
     */
    upsert<T extends TotemDataUpsertArgs>(args: SelectSubset<T, TotemDataUpsertArgs<ExtArgs>>): Prisma__TotemDataClient<$Result.GetResult<Prisma.$TotemDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TotemData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataCountArgs} args - Arguments to filter TotemData to count.
     * @example
     * // Count the number of TotemData
     * const count = await prisma.totemData.count({
     *   where: {
     *     // ... the filter for the TotemData we want to count
     *   }
     * })
    **/
    count<T extends TotemDataCountArgs>(
      args?: Subset<T, TotemDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TotemDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TotemData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TotemDataAggregateArgs>(args: Subset<T, TotemDataAggregateArgs>): Prisma.PrismaPromise<GetTotemDataAggregateType<T>>

    /**
     * Group by TotemData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotemDataGroupByArgs} args - Group by arguments.
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
      T extends TotemDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TotemDataGroupByArgs['orderBy'] }
        : { orderBy?: TotemDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TotemDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTotemDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TotemData model
   */
  readonly fields: TotemDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TotemData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TotemDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TotemData model
   */
  interface TotemDataFieldRefs {
    readonly id: FieldRef<"TotemData", 'Int'>
    readonly sheetName: FieldRef<"TotemData", 'String'>
    readonly data: FieldRef<"TotemData", 'Json'>
    readonly timestamp: FieldRef<"TotemData", 'DateTime'>
    readonly processed: FieldRef<"TotemData", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TotemData findUnique
   */
  export type TotemDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter, which TotemData to fetch.
     */
    where: TotemDataWhereUniqueInput
  }

  /**
   * TotemData findUniqueOrThrow
   */
  export type TotemDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter, which TotemData to fetch.
     */
    where: TotemDataWhereUniqueInput
  }

  /**
   * TotemData findFirst
   */
  export type TotemDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter, which TotemData to fetch.
     */
    where?: TotemDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotemData to fetch.
     */
    orderBy?: TotemDataOrderByWithRelationInput | TotemDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TotemData.
     */
    cursor?: TotemDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotemData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotemData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TotemData.
     */
    distinct?: TotemDataScalarFieldEnum | TotemDataScalarFieldEnum[]
  }

  /**
   * TotemData findFirstOrThrow
   */
  export type TotemDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter, which TotemData to fetch.
     */
    where?: TotemDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotemData to fetch.
     */
    orderBy?: TotemDataOrderByWithRelationInput | TotemDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TotemData.
     */
    cursor?: TotemDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotemData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotemData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TotemData.
     */
    distinct?: TotemDataScalarFieldEnum | TotemDataScalarFieldEnum[]
  }

  /**
   * TotemData findMany
   */
  export type TotemDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter, which TotemData to fetch.
     */
    where?: TotemDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotemData to fetch.
     */
    orderBy?: TotemDataOrderByWithRelationInput | TotemDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TotemData.
     */
    cursor?: TotemDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotemData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotemData.
     */
    skip?: number
    distinct?: TotemDataScalarFieldEnum | TotemDataScalarFieldEnum[]
  }

  /**
   * TotemData create
   */
  export type TotemDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * The data needed to create a TotemData.
     */
    data: XOR<TotemDataCreateInput, TotemDataUncheckedCreateInput>
  }

  /**
   * TotemData createMany
   */
  export type TotemDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TotemData.
     */
    data: TotemDataCreateManyInput | TotemDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TotemData update
   */
  export type TotemDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * The data needed to update a TotemData.
     */
    data: XOR<TotemDataUpdateInput, TotemDataUncheckedUpdateInput>
    /**
     * Choose, which TotemData to update.
     */
    where: TotemDataWhereUniqueInput
  }

  /**
   * TotemData updateMany
   */
  export type TotemDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TotemData.
     */
    data: XOR<TotemDataUpdateManyMutationInput, TotemDataUncheckedUpdateManyInput>
    /**
     * Filter which TotemData to update
     */
    where?: TotemDataWhereInput
    /**
     * Limit how many TotemData to update.
     */
    limit?: number
  }

  /**
   * TotemData upsert
   */
  export type TotemDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * The filter to search for the TotemData to update in case it exists.
     */
    where: TotemDataWhereUniqueInput
    /**
     * In case the TotemData found by the `where` argument doesn't exist, create a new TotemData with this data.
     */
    create: XOR<TotemDataCreateInput, TotemDataUncheckedCreateInput>
    /**
     * In case the TotemData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TotemDataUpdateInput, TotemDataUncheckedUpdateInput>
  }

  /**
   * TotemData delete
   */
  export type TotemDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
    /**
     * Filter which TotemData to delete.
     */
    where: TotemDataWhereUniqueInput
  }

  /**
   * TotemData deleteMany
   */
  export type TotemDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TotemData to delete
     */
    where?: TotemDataWhereInput
    /**
     * Limit how many TotemData to delete.
     */
    limit?: number
  }

  /**
   * TotemData without action
   */
  export type TotemDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotemData
     */
    select?: TotemDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotemData
     */
    omit?: TotemDataOmit<ExtArgs> | null
  }


  /**
   * Model ActaExamen
   */

  export type AggregateActaExamen = {
    _count: ActaExamenCountAggregateOutputType | null
    _avg: ActaExamenAvgAggregateOutputType | null
    _sum: ActaExamenSumAggregateOutputType | null
    _min: ActaExamenMinAggregateOutputType | null
    _max: ActaExamenMaxAggregateOutputType | null
  }

  export type ActaExamenAvgAggregateOutputType = {
    id: number | null
    examenId: number | null
    estudianteId: number | null
    nota: Decimal | null
  }

  export type ActaExamenSumAggregateOutputType = {
    id: number | null
    examenId: number | null
    estudianteId: number | null
    nota: Decimal | null
  }

  export type ActaExamenMinAggregateOutputType = {
    id: number | null
    examenId: number | null
    estudianteId: number | null
    presente: boolean | null
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActaExamenMaxAggregateOutputType = {
    id: number | null
    examenId: number | null
    estudianteId: number | null
    presente: boolean | null
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActaExamenCountAggregateOutputType = {
    id: number
    examenId: number
    estudianteId: number
    presente: number
    nota: number
    observaciones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActaExamenAvgAggregateInputType = {
    id?: true
    examenId?: true
    estudianteId?: true
    nota?: true
  }

  export type ActaExamenSumAggregateInputType = {
    id?: true
    examenId?: true
    estudianteId?: true
    nota?: true
  }

  export type ActaExamenMinAggregateInputType = {
    id?: true
    examenId?: true
    estudianteId?: true
    presente?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActaExamenMaxAggregateInputType = {
    id?: true
    examenId?: true
    estudianteId?: true
    presente?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActaExamenCountAggregateInputType = {
    id?: true
    examenId?: true
    estudianteId?: true
    presente?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActaExamenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActaExamen to aggregate.
     */
    where?: ActaExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaExamen to fetch.
     */
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActaExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActaExamen
    **/
    _count?: true | ActaExamenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActaExamenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActaExamenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActaExamenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActaExamenMaxAggregateInputType
  }

  export type GetActaExamenAggregateType<T extends ActaExamenAggregateArgs> = {
        [P in keyof T & keyof AggregateActaExamen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActaExamen[P]>
      : GetScalarType<T[P], AggregateActaExamen[P]>
  }




  export type ActaExamenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActaExamenWhereInput
    orderBy?: ActaExamenOrderByWithAggregationInput | ActaExamenOrderByWithAggregationInput[]
    by: ActaExamenScalarFieldEnum[] | ActaExamenScalarFieldEnum
    having?: ActaExamenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActaExamenCountAggregateInputType | true
    _avg?: ActaExamenAvgAggregateInputType
    _sum?: ActaExamenSumAggregateInputType
    _min?: ActaExamenMinAggregateInputType
    _max?: ActaExamenMaxAggregateInputType
  }

  export type ActaExamenGroupByOutputType = {
    id: number
    examenId: number
    estudianteId: number
    presente: boolean | null
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    _count: ActaExamenCountAggregateOutputType | null
    _avg: ActaExamenAvgAggregateOutputType | null
    _sum: ActaExamenSumAggregateOutputType | null
    _min: ActaExamenMinAggregateOutputType | null
    _max: ActaExamenMaxAggregateOutputType | null
  }

  type GetActaExamenGroupByPayload<T extends ActaExamenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActaExamenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActaExamenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActaExamenGroupByOutputType[P]>
            : GetScalarType<T[P], ActaExamenGroupByOutputType[P]>
        }
      >
    >


  export type ActaExamenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examenId?: boolean
    estudianteId?: boolean
    presente?: boolean
    nota?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actaExamen"]>



  export type ActaExamenSelectScalar = {
    id?: boolean
    examenId?: boolean
    estudianteId?: boolean
    presente?: boolean
    nota?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActaExamenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examenId" | "estudianteId" | "presente" | "nota" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["actaExamen"]>
  export type ActaExamenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
  }

  export type $ActaExamenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActaExamen"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      examen: Prisma.$ExamenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      examenId: number
      estudianteId: number
      presente: boolean | null
      nota: Prisma.Decimal | null
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["actaExamen"]>
    composites: {}
  }

  type ActaExamenGetPayload<S extends boolean | null | undefined | ActaExamenDefaultArgs> = $Result.GetResult<Prisma.$ActaExamenPayload, S>

  type ActaExamenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActaExamenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActaExamenCountAggregateInputType | true
    }

  export interface ActaExamenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActaExamen'], meta: { name: 'ActaExamen' } }
    /**
     * Find zero or one ActaExamen that matches the filter.
     * @param {ActaExamenFindUniqueArgs} args - Arguments to find a ActaExamen
     * @example
     * // Get one ActaExamen
     * const actaExamen = await prisma.actaExamen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActaExamenFindUniqueArgs>(args: SelectSubset<T, ActaExamenFindUniqueArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActaExamen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActaExamenFindUniqueOrThrowArgs} args - Arguments to find a ActaExamen
     * @example
     * // Get one ActaExamen
     * const actaExamen = await prisma.actaExamen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActaExamenFindUniqueOrThrowArgs>(args: SelectSubset<T, ActaExamenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActaExamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenFindFirstArgs} args - Arguments to find a ActaExamen
     * @example
     * // Get one ActaExamen
     * const actaExamen = await prisma.actaExamen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActaExamenFindFirstArgs>(args?: SelectSubset<T, ActaExamenFindFirstArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActaExamen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenFindFirstOrThrowArgs} args - Arguments to find a ActaExamen
     * @example
     * // Get one ActaExamen
     * const actaExamen = await prisma.actaExamen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActaExamenFindFirstOrThrowArgs>(args?: SelectSubset<T, ActaExamenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActaExamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActaExamen
     * const actaExamen = await prisma.actaExamen.findMany()
     * 
     * // Get first 10 ActaExamen
     * const actaExamen = await prisma.actaExamen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actaExamenWithIdOnly = await prisma.actaExamen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActaExamenFindManyArgs>(args?: SelectSubset<T, ActaExamenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActaExamen.
     * @param {ActaExamenCreateArgs} args - Arguments to create a ActaExamen.
     * @example
     * // Create one ActaExamen
     * const ActaExamen = await prisma.actaExamen.create({
     *   data: {
     *     // ... data to create a ActaExamen
     *   }
     * })
     * 
     */
    create<T extends ActaExamenCreateArgs>(args: SelectSubset<T, ActaExamenCreateArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActaExamen.
     * @param {ActaExamenCreateManyArgs} args - Arguments to create many ActaExamen.
     * @example
     * // Create many ActaExamen
     * const actaExamen = await prisma.actaExamen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActaExamenCreateManyArgs>(args?: SelectSubset<T, ActaExamenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActaExamen.
     * @param {ActaExamenDeleteArgs} args - Arguments to delete one ActaExamen.
     * @example
     * // Delete one ActaExamen
     * const ActaExamen = await prisma.actaExamen.delete({
     *   where: {
     *     // ... filter to delete one ActaExamen
     *   }
     * })
     * 
     */
    delete<T extends ActaExamenDeleteArgs>(args: SelectSubset<T, ActaExamenDeleteArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActaExamen.
     * @param {ActaExamenUpdateArgs} args - Arguments to update one ActaExamen.
     * @example
     * // Update one ActaExamen
     * const actaExamen = await prisma.actaExamen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActaExamenUpdateArgs>(args: SelectSubset<T, ActaExamenUpdateArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActaExamen.
     * @param {ActaExamenDeleteManyArgs} args - Arguments to filter ActaExamen to delete.
     * @example
     * // Delete a few ActaExamen
     * const { count } = await prisma.actaExamen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActaExamenDeleteManyArgs>(args?: SelectSubset<T, ActaExamenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActaExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActaExamen
     * const actaExamen = await prisma.actaExamen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActaExamenUpdateManyArgs>(args: SelectSubset<T, ActaExamenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActaExamen.
     * @param {ActaExamenUpsertArgs} args - Arguments to update or create a ActaExamen.
     * @example
     * // Update or create a ActaExamen
     * const actaExamen = await prisma.actaExamen.upsert({
     *   create: {
     *     // ... data to create a ActaExamen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActaExamen we want to update
     *   }
     * })
     */
    upsert<T extends ActaExamenUpsertArgs>(args: SelectSubset<T, ActaExamenUpsertArgs<ExtArgs>>): Prisma__ActaExamenClient<$Result.GetResult<Prisma.$ActaExamenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActaExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenCountArgs} args - Arguments to filter ActaExamen to count.
     * @example
     * // Count the number of ActaExamen
     * const count = await prisma.actaExamen.count({
     *   where: {
     *     // ... the filter for the ActaExamen we want to count
     *   }
     * })
    **/
    count<T extends ActaExamenCountArgs>(
      args?: Subset<T, ActaExamenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActaExamenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActaExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActaExamenAggregateArgs>(args: Subset<T, ActaExamenAggregateArgs>): Prisma.PrismaPromise<GetActaExamenAggregateType<T>>

    /**
     * Group by ActaExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaExamenGroupByArgs} args - Group by arguments.
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
      T extends ActaExamenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActaExamenGroupByArgs['orderBy'] }
        : { orderBy?: ActaExamenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ActaExamenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActaExamenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActaExamen model
   */
  readonly fields: ActaExamenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActaExamen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActaExamenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examen<T extends ExamenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamenDefaultArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActaExamen model
   */
  interface ActaExamenFieldRefs {
    readonly id: FieldRef<"ActaExamen", 'Int'>
    readonly examenId: FieldRef<"ActaExamen", 'Int'>
    readonly estudianteId: FieldRef<"ActaExamen", 'Int'>
    readonly presente: FieldRef<"ActaExamen", 'Boolean'>
    readonly nota: FieldRef<"ActaExamen", 'Decimal'>
    readonly observaciones: FieldRef<"ActaExamen", 'String'>
    readonly createdAt: FieldRef<"ActaExamen", 'DateTime'>
    readonly updatedAt: FieldRef<"ActaExamen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActaExamen findUnique
   */
  export type ActaExamenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter, which ActaExamen to fetch.
     */
    where: ActaExamenWhereUniqueInput
  }

  /**
   * ActaExamen findUniqueOrThrow
   */
  export type ActaExamenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter, which ActaExamen to fetch.
     */
    where: ActaExamenWhereUniqueInput
  }

  /**
   * ActaExamen findFirst
   */
  export type ActaExamenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter, which ActaExamen to fetch.
     */
    where?: ActaExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaExamen to fetch.
     */
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActaExamen.
     */
    cursor?: ActaExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActaExamen.
     */
    distinct?: ActaExamenScalarFieldEnum | ActaExamenScalarFieldEnum[]
  }

  /**
   * ActaExamen findFirstOrThrow
   */
  export type ActaExamenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter, which ActaExamen to fetch.
     */
    where?: ActaExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaExamen to fetch.
     */
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActaExamen.
     */
    cursor?: ActaExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActaExamen.
     */
    distinct?: ActaExamenScalarFieldEnum | ActaExamenScalarFieldEnum[]
  }

  /**
   * ActaExamen findMany
   */
  export type ActaExamenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter, which ActaExamen to fetch.
     */
    where?: ActaExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaExamen to fetch.
     */
    orderBy?: ActaExamenOrderByWithRelationInput | ActaExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActaExamen.
     */
    cursor?: ActaExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaExamen.
     */
    skip?: number
    distinct?: ActaExamenScalarFieldEnum | ActaExamenScalarFieldEnum[]
  }

  /**
   * ActaExamen create
   */
  export type ActaExamenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * The data needed to create a ActaExamen.
     */
    data: XOR<ActaExamenCreateInput, ActaExamenUncheckedCreateInput>
  }

  /**
   * ActaExamen createMany
   */
  export type ActaExamenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActaExamen.
     */
    data: ActaExamenCreateManyInput | ActaExamenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActaExamen update
   */
  export type ActaExamenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * The data needed to update a ActaExamen.
     */
    data: XOR<ActaExamenUpdateInput, ActaExamenUncheckedUpdateInput>
    /**
     * Choose, which ActaExamen to update.
     */
    where: ActaExamenWhereUniqueInput
  }

  /**
   * ActaExamen updateMany
   */
  export type ActaExamenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActaExamen.
     */
    data: XOR<ActaExamenUpdateManyMutationInput, ActaExamenUncheckedUpdateManyInput>
    /**
     * Filter which ActaExamen to update
     */
    where?: ActaExamenWhereInput
    /**
     * Limit how many ActaExamen to update.
     */
    limit?: number
  }

  /**
   * ActaExamen upsert
   */
  export type ActaExamenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * The filter to search for the ActaExamen to update in case it exists.
     */
    where: ActaExamenWhereUniqueInput
    /**
     * In case the ActaExamen found by the `where` argument doesn't exist, create a new ActaExamen with this data.
     */
    create: XOR<ActaExamenCreateInput, ActaExamenUncheckedCreateInput>
    /**
     * In case the ActaExamen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActaExamenUpdateInput, ActaExamenUncheckedUpdateInput>
  }

  /**
   * ActaExamen delete
   */
  export type ActaExamenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
    /**
     * Filter which ActaExamen to delete.
     */
    where: ActaExamenWhereUniqueInput
  }

  /**
   * ActaExamen deleteMany
   */
  export type ActaExamenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActaExamen to delete
     */
    where?: ActaExamenWhereInput
    /**
     * Limit how many ActaExamen to delete.
     */
    limit?: number
  }

  /**
   * ActaExamen without action
   */
  export type ActaExamenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaExamen
     */
    select?: ActaExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaExamen
     */
    omit?: ActaExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaExamenInclude<ExtArgs> | null
  }


  /**
   * Model SectorFacultad
   */

  export type AggregateSectorFacultad = {
    _count: SectorFacultadCountAggregateOutputType | null
    _avg: SectorFacultadAvgAggregateOutputType | null
    _sum: SectorFacultadSumAggregateOutputType | null
    _min: SectorFacultadMinAggregateOutputType | null
    _max: SectorFacultadMaxAggregateOutputType | null
  }

  export type SectorFacultadAvgAggregateOutputType = {
    id: number | null
    facultadId: number | null
  }

  export type SectorFacultadSumAggregateOutputType = {
    id: number | null
    facultadId: number | null
  }

  export type SectorFacultadMinAggregateOutputType = {
    id: number | null
    sector: string | null
    facultadId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorFacultadMaxAggregateOutputType = {
    id: number | null
    sector: string | null
    facultadId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorFacultadCountAggregateOutputType = {
    id: number
    sector: number
    facultadId: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectorFacultadAvgAggregateInputType = {
    id?: true
    facultadId?: true
  }

  export type SectorFacultadSumAggregateInputType = {
    id?: true
    facultadId?: true
  }

  export type SectorFacultadMinAggregateInputType = {
    id?: true
    sector?: true
    facultadId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorFacultadMaxAggregateInputType = {
    id?: true
    sector?: true
    facultadId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorFacultadCountAggregateInputType = {
    id?: true
    sector?: true
    facultadId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectorFacultadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectorFacultad to aggregate.
     */
    where?: SectorFacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorFacultads to fetch.
     */
    orderBy?: SectorFacultadOrderByWithRelationInput | SectorFacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorFacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorFacultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorFacultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectorFacultads
    **/
    _count?: true | SectorFacultadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorFacultadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorFacultadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorFacultadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorFacultadMaxAggregateInputType
  }

  export type GetSectorFacultadAggregateType<T extends SectorFacultadAggregateArgs> = {
        [P in keyof T & keyof AggregateSectorFacultad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectorFacultad[P]>
      : GetScalarType<T[P], AggregateSectorFacultad[P]>
  }




  export type SectorFacultadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorFacultadWhereInput
    orderBy?: SectorFacultadOrderByWithAggregationInput | SectorFacultadOrderByWithAggregationInput[]
    by: SectorFacultadScalarFieldEnum[] | SectorFacultadScalarFieldEnum
    having?: SectorFacultadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorFacultadCountAggregateInputType | true
    _avg?: SectorFacultadAvgAggregateInputType
    _sum?: SectorFacultadSumAggregateInputType
    _min?: SectorFacultadMinAggregateInputType
    _max?: SectorFacultadMaxAggregateInputType
  }

  export type SectorFacultadGroupByOutputType = {
    id: number
    sector: string
    facultadId: number
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: SectorFacultadCountAggregateOutputType | null
    _avg: SectorFacultadAvgAggregateOutputType | null
    _sum: SectorFacultadSumAggregateOutputType | null
    _min: SectorFacultadMinAggregateOutputType | null
    _max: SectorFacultadMaxAggregateOutputType | null
  }

  type GetSectorFacultadGroupByPayload<T extends SectorFacultadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorFacultadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorFacultadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorFacultadGroupByOutputType[P]>
            : GetScalarType<T[P], SectorFacultadGroupByOutputType[P]>
        }
      >
    >


  export type SectorFacultadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sector?: boolean
    facultadId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectorFacultad"]>



  export type SectorFacultadSelectScalar = {
    id?: boolean
    sector?: boolean
    facultadId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectorFacultadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sector" | "facultadId" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["sectorFacultad"]>
  export type SectorFacultadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }

  export type $SectorFacultadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectorFacultad"
    objects: {
      facultad: Prisma.$FacultadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sector: string
      facultadId: number
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sectorFacultad"]>
    composites: {}
  }

  type SectorFacultadGetPayload<S extends boolean | null | undefined | SectorFacultadDefaultArgs> = $Result.GetResult<Prisma.$SectorFacultadPayload, S>

  type SectorFacultadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFacultadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorFacultadCountAggregateInputType | true
    }

  export interface SectorFacultadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectorFacultad'], meta: { name: 'SectorFacultad' } }
    /**
     * Find zero or one SectorFacultad that matches the filter.
     * @param {SectorFacultadFindUniqueArgs} args - Arguments to find a SectorFacultad
     * @example
     * // Get one SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFacultadFindUniqueArgs>(args: SelectSubset<T, SectorFacultadFindUniqueArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectorFacultad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFacultadFindUniqueOrThrowArgs} args - Arguments to find a SectorFacultad
     * @example
     * // Get one SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFacultadFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFacultadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectorFacultad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadFindFirstArgs} args - Arguments to find a SectorFacultad
     * @example
     * // Get one SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFacultadFindFirstArgs>(args?: SelectSubset<T, SectorFacultadFindFirstArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectorFacultad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadFindFirstOrThrowArgs} args - Arguments to find a SectorFacultad
     * @example
     * // Get one SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFacultadFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFacultadFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectorFacultads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectorFacultads
     * const sectorFacultads = await prisma.sectorFacultad.findMany()
     * 
     * // Get first 10 SectorFacultads
     * const sectorFacultads = await prisma.sectorFacultad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorFacultadWithIdOnly = await prisma.sectorFacultad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFacultadFindManyArgs>(args?: SelectSubset<T, SectorFacultadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectorFacultad.
     * @param {SectorFacultadCreateArgs} args - Arguments to create a SectorFacultad.
     * @example
     * // Create one SectorFacultad
     * const SectorFacultad = await prisma.sectorFacultad.create({
     *   data: {
     *     // ... data to create a SectorFacultad
     *   }
     * })
     * 
     */
    create<T extends SectorFacultadCreateArgs>(args: SelectSubset<T, SectorFacultadCreateArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectorFacultads.
     * @param {SectorFacultadCreateManyArgs} args - Arguments to create many SectorFacultads.
     * @example
     * // Create many SectorFacultads
     * const sectorFacultad = await prisma.sectorFacultad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorFacultadCreateManyArgs>(args?: SelectSubset<T, SectorFacultadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SectorFacultad.
     * @param {SectorFacultadDeleteArgs} args - Arguments to delete one SectorFacultad.
     * @example
     * // Delete one SectorFacultad
     * const SectorFacultad = await prisma.sectorFacultad.delete({
     *   where: {
     *     // ... filter to delete one SectorFacultad
     *   }
     * })
     * 
     */
    delete<T extends SectorFacultadDeleteArgs>(args: SelectSubset<T, SectorFacultadDeleteArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectorFacultad.
     * @param {SectorFacultadUpdateArgs} args - Arguments to update one SectorFacultad.
     * @example
     * // Update one SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorFacultadUpdateArgs>(args: SelectSubset<T, SectorFacultadUpdateArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectorFacultads.
     * @param {SectorFacultadDeleteManyArgs} args - Arguments to filter SectorFacultads to delete.
     * @example
     * // Delete a few SectorFacultads
     * const { count } = await prisma.sectorFacultad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorFacultadDeleteManyArgs>(args?: SelectSubset<T, SectorFacultadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectorFacultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectorFacultads
     * const sectorFacultad = await prisma.sectorFacultad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorFacultadUpdateManyArgs>(args: SelectSubset<T, SectorFacultadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SectorFacultad.
     * @param {SectorFacultadUpsertArgs} args - Arguments to update or create a SectorFacultad.
     * @example
     * // Update or create a SectorFacultad
     * const sectorFacultad = await prisma.sectorFacultad.upsert({
     *   create: {
     *     // ... data to create a SectorFacultad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectorFacultad we want to update
     *   }
     * })
     */
    upsert<T extends SectorFacultadUpsertArgs>(args: SelectSubset<T, SectorFacultadUpsertArgs<ExtArgs>>): Prisma__SectorFacultadClient<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectorFacultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadCountArgs} args - Arguments to filter SectorFacultads to count.
     * @example
     * // Count the number of SectorFacultads
     * const count = await prisma.sectorFacultad.count({
     *   where: {
     *     // ... the filter for the SectorFacultads we want to count
     *   }
     * })
    **/
    count<T extends SectorFacultadCountArgs>(
      args?: Subset<T, SectorFacultadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorFacultadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectorFacultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectorFacultadAggregateArgs>(args: Subset<T, SectorFacultadAggregateArgs>): Prisma.PrismaPromise<GetSectorFacultadAggregateType<T>>

    /**
     * Group by SectorFacultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFacultadGroupByArgs} args - Group by arguments.
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
      T extends SectorFacultadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorFacultadGroupByArgs['orderBy'] }
        : { orderBy?: SectorFacultadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SectorFacultadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorFacultadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectorFacultad model
   */
  readonly fields: SectorFacultadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectorFacultad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorFacultadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultad<T extends FacultadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultadDefaultArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectorFacultad model
   */
  interface SectorFacultadFieldRefs {
    readonly id: FieldRef<"SectorFacultad", 'Int'>
    readonly sector: FieldRef<"SectorFacultad", 'String'>
    readonly facultadId: FieldRef<"SectorFacultad", 'Int'>
    readonly activo: FieldRef<"SectorFacultad", 'Boolean'>
    readonly createdAt: FieldRef<"SectorFacultad", 'DateTime'>
    readonly updatedAt: FieldRef<"SectorFacultad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SectorFacultad findUnique
   */
  export type SectorFacultadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter, which SectorFacultad to fetch.
     */
    where: SectorFacultadWhereUniqueInput
  }

  /**
   * SectorFacultad findUniqueOrThrow
   */
  export type SectorFacultadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter, which SectorFacultad to fetch.
     */
    where: SectorFacultadWhereUniqueInput
  }

  /**
   * SectorFacultad findFirst
   */
  export type SectorFacultadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter, which SectorFacultad to fetch.
     */
    where?: SectorFacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorFacultads to fetch.
     */
    orderBy?: SectorFacultadOrderByWithRelationInput | SectorFacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectorFacultads.
     */
    cursor?: SectorFacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorFacultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorFacultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectorFacultads.
     */
    distinct?: SectorFacultadScalarFieldEnum | SectorFacultadScalarFieldEnum[]
  }

  /**
   * SectorFacultad findFirstOrThrow
   */
  export type SectorFacultadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter, which SectorFacultad to fetch.
     */
    where?: SectorFacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorFacultads to fetch.
     */
    orderBy?: SectorFacultadOrderByWithRelationInput | SectorFacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectorFacultads.
     */
    cursor?: SectorFacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorFacultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorFacultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectorFacultads.
     */
    distinct?: SectorFacultadScalarFieldEnum | SectorFacultadScalarFieldEnum[]
  }

  /**
   * SectorFacultad findMany
   */
  export type SectorFacultadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter, which SectorFacultads to fetch.
     */
    where?: SectorFacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorFacultads to fetch.
     */
    orderBy?: SectorFacultadOrderByWithRelationInput | SectorFacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectorFacultads.
     */
    cursor?: SectorFacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorFacultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorFacultads.
     */
    skip?: number
    distinct?: SectorFacultadScalarFieldEnum | SectorFacultadScalarFieldEnum[]
  }

  /**
   * SectorFacultad create
   */
  export type SectorFacultadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * The data needed to create a SectorFacultad.
     */
    data: XOR<SectorFacultadCreateInput, SectorFacultadUncheckedCreateInput>
  }

  /**
   * SectorFacultad createMany
   */
  export type SectorFacultadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectorFacultads.
     */
    data: SectorFacultadCreateManyInput | SectorFacultadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectorFacultad update
   */
  export type SectorFacultadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * The data needed to update a SectorFacultad.
     */
    data: XOR<SectorFacultadUpdateInput, SectorFacultadUncheckedUpdateInput>
    /**
     * Choose, which SectorFacultad to update.
     */
    where: SectorFacultadWhereUniqueInput
  }

  /**
   * SectorFacultad updateMany
   */
  export type SectorFacultadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectorFacultads.
     */
    data: XOR<SectorFacultadUpdateManyMutationInput, SectorFacultadUncheckedUpdateManyInput>
    /**
     * Filter which SectorFacultads to update
     */
    where?: SectorFacultadWhereInput
    /**
     * Limit how many SectorFacultads to update.
     */
    limit?: number
  }

  /**
   * SectorFacultad upsert
   */
  export type SectorFacultadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * The filter to search for the SectorFacultad to update in case it exists.
     */
    where: SectorFacultadWhereUniqueInput
    /**
     * In case the SectorFacultad found by the `where` argument doesn't exist, create a new SectorFacultad with this data.
     */
    create: XOR<SectorFacultadCreateInput, SectorFacultadUncheckedCreateInput>
    /**
     * In case the SectorFacultad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorFacultadUpdateInput, SectorFacultadUncheckedUpdateInput>
  }

  /**
   * SectorFacultad delete
   */
  export type SectorFacultadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
    /**
     * Filter which SectorFacultad to delete.
     */
    where: SectorFacultadWhereUniqueInput
  }

  /**
   * SectorFacultad deleteMany
   */
  export type SectorFacultadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectorFacultads to delete
     */
    where?: SectorFacultadWhereInput
    /**
     * Limit how many SectorFacultads to delete.
     */
    limit?: number
  }

  /**
   * SectorFacultad without action
   */
  export type SectorFacultadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorFacultad
     */
    select?: SectorFacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorFacultad
     */
    omit?: SectorFacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorFacultadInclude<ExtArgs> | null
  }


  /**
   * Model CarreraTotem
   */

  export type AggregateCarreraTotem = {
    _count: CarreraTotemCountAggregateOutputType | null
    _avg: CarreraTotemAvgAggregateOutputType | null
    _sum: CarreraTotemSumAggregateOutputType | null
    _min: CarreraTotemMinAggregateOutputType | null
    _max: CarreraTotemMaxAggregateOutputType | null
  }

  export type CarreraTotemAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type CarreraTotemSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type CarreraTotemMinAggregateOutputType = {
    id: number | null
    codigoTotem: string | null
    carreraId: number | null
    nombreTotem: string | null
    activo: boolean | null
    esMapeada: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarreraTotemMaxAggregateOutputType = {
    id: number | null
    codigoTotem: string | null
    carreraId: number | null
    nombreTotem: string | null
    activo: boolean | null
    esMapeada: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarreraTotemCountAggregateOutputType = {
    id: number
    codigoTotem: number
    carreraId: number
    nombreTotem: number
    activo: number
    esMapeada: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarreraTotemAvgAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type CarreraTotemSumAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type CarreraTotemMinAggregateInputType = {
    id?: true
    codigoTotem?: true
    carreraId?: true
    nombreTotem?: true
    activo?: true
    esMapeada?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarreraTotemMaxAggregateInputType = {
    id?: true
    codigoTotem?: true
    carreraId?: true
    nombreTotem?: true
    activo?: true
    esMapeada?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarreraTotemCountAggregateInputType = {
    id?: true
    codigoTotem?: true
    carreraId?: true
    nombreTotem?: true
    activo?: true
    esMapeada?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarreraTotemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarreraTotem to aggregate.
     */
    where?: CarreraTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarreraTotems to fetch.
     */
    orderBy?: CarreraTotemOrderByWithRelationInput | CarreraTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarreraTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarreraTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarreraTotems
    **/
    _count?: true | CarreraTotemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraTotemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraTotemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraTotemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraTotemMaxAggregateInputType
  }

  export type GetCarreraTotemAggregateType<T extends CarreraTotemAggregateArgs> = {
        [P in keyof T & keyof AggregateCarreraTotem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarreraTotem[P]>
      : GetScalarType<T[P], AggregateCarreraTotem[P]>
  }




  export type CarreraTotemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraTotemWhereInput
    orderBy?: CarreraTotemOrderByWithAggregationInput | CarreraTotemOrderByWithAggregationInput[]
    by: CarreraTotemScalarFieldEnum[] | CarreraTotemScalarFieldEnum
    having?: CarreraTotemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraTotemCountAggregateInputType | true
    _avg?: CarreraTotemAvgAggregateInputType
    _sum?: CarreraTotemSumAggregateInputType
    _min?: CarreraTotemMinAggregateInputType
    _max?: CarreraTotemMaxAggregateInputType
  }

  export type CarreraTotemGroupByOutputType = {
    id: number
    codigoTotem: string
    carreraId: number | null
    nombreTotem: string
    activo: boolean
    esMapeada: boolean
    createdAt: Date
    updatedAt: Date
    _count: CarreraTotemCountAggregateOutputType | null
    _avg: CarreraTotemAvgAggregateOutputType | null
    _sum: CarreraTotemSumAggregateOutputType | null
    _min: CarreraTotemMinAggregateOutputType | null
    _max: CarreraTotemMaxAggregateOutputType | null
  }

  type GetCarreraTotemGroupByPayload<T extends CarreraTotemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraTotemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraTotemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraTotemGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraTotemGroupByOutputType[P]>
        }
      >
    >


  export type CarreraTotemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoTotem?: boolean
    carreraId?: boolean
    nombreTotem?: boolean
    activo?: boolean
    esMapeada?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrera?: boolean | CarreraTotem$carreraArgs<ExtArgs>
  }, ExtArgs["result"]["carreraTotem"]>



  export type CarreraTotemSelectScalar = {
    id?: boolean
    codigoTotem?: boolean
    carreraId?: boolean
    nombreTotem?: boolean
    activo?: boolean
    esMapeada?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarreraTotemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoTotem" | "carreraId" | "nombreTotem" | "activo" | "esMapeada" | "createdAt" | "updatedAt", ExtArgs["result"]["carreraTotem"]>
  export type CarreraTotemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraTotem$carreraArgs<ExtArgs>
  }

  export type $CarreraTotemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarreraTotem"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoTotem: string
      carreraId: number | null
      nombreTotem: string
      activo: boolean
      esMapeada: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carreraTotem"]>
    composites: {}
  }

  type CarreraTotemGetPayload<S extends boolean | null | undefined | CarreraTotemDefaultArgs> = $Result.GetResult<Prisma.$CarreraTotemPayload, S>

  type CarreraTotemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraTotemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraTotemCountAggregateInputType | true
    }

  export interface CarreraTotemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarreraTotem'], meta: { name: 'CarreraTotem' } }
    /**
     * Find zero or one CarreraTotem that matches the filter.
     * @param {CarreraTotemFindUniqueArgs} args - Arguments to find a CarreraTotem
     * @example
     * // Get one CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraTotemFindUniqueArgs>(args: SelectSubset<T, CarreraTotemFindUniqueArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarreraTotem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraTotemFindUniqueOrThrowArgs} args - Arguments to find a CarreraTotem
     * @example
     * // Get one CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraTotemFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraTotemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarreraTotem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemFindFirstArgs} args - Arguments to find a CarreraTotem
     * @example
     * // Get one CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraTotemFindFirstArgs>(args?: SelectSubset<T, CarreraTotemFindFirstArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarreraTotem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemFindFirstOrThrowArgs} args - Arguments to find a CarreraTotem
     * @example
     * // Get one CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraTotemFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraTotemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarreraTotems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarreraTotems
     * const carreraTotems = await prisma.carreraTotem.findMany()
     * 
     * // Get first 10 CarreraTotems
     * const carreraTotems = await prisma.carreraTotem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraTotemWithIdOnly = await prisma.carreraTotem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraTotemFindManyArgs>(args?: SelectSubset<T, CarreraTotemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarreraTotem.
     * @param {CarreraTotemCreateArgs} args - Arguments to create a CarreraTotem.
     * @example
     * // Create one CarreraTotem
     * const CarreraTotem = await prisma.carreraTotem.create({
     *   data: {
     *     // ... data to create a CarreraTotem
     *   }
     * })
     * 
     */
    create<T extends CarreraTotemCreateArgs>(args: SelectSubset<T, CarreraTotemCreateArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarreraTotems.
     * @param {CarreraTotemCreateManyArgs} args - Arguments to create many CarreraTotems.
     * @example
     * // Create many CarreraTotems
     * const carreraTotem = await prisma.carreraTotem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraTotemCreateManyArgs>(args?: SelectSubset<T, CarreraTotemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarreraTotem.
     * @param {CarreraTotemDeleteArgs} args - Arguments to delete one CarreraTotem.
     * @example
     * // Delete one CarreraTotem
     * const CarreraTotem = await prisma.carreraTotem.delete({
     *   where: {
     *     // ... filter to delete one CarreraTotem
     *   }
     * })
     * 
     */
    delete<T extends CarreraTotemDeleteArgs>(args: SelectSubset<T, CarreraTotemDeleteArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarreraTotem.
     * @param {CarreraTotemUpdateArgs} args - Arguments to update one CarreraTotem.
     * @example
     * // Update one CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraTotemUpdateArgs>(args: SelectSubset<T, CarreraTotemUpdateArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarreraTotems.
     * @param {CarreraTotemDeleteManyArgs} args - Arguments to filter CarreraTotems to delete.
     * @example
     * // Delete a few CarreraTotems
     * const { count } = await prisma.carreraTotem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraTotemDeleteManyArgs>(args?: SelectSubset<T, CarreraTotemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarreraTotems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarreraTotems
     * const carreraTotem = await prisma.carreraTotem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraTotemUpdateManyArgs>(args: SelectSubset<T, CarreraTotemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarreraTotem.
     * @param {CarreraTotemUpsertArgs} args - Arguments to update or create a CarreraTotem.
     * @example
     * // Update or create a CarreraTotem
     * const carreraTotem = await prisma.carreraTotem.upsert({
     *   create: {
     *     // ... data to create a CarreraTotem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarreraTotem we want to update
     *   }
     * })
     */
    upsert<T extends CarreraTotemUpsertArgs>(args: SelectSubset<T, CarreraTotemUpsertArgs<ExtArgs>>): Prisma__CarreraTotemClient<$Result.GetResult<Prisma.$CarreraTotemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarreraTotems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemCountArgs} args - Arguments to filter CarreraTotems to count.
     * @example
     * // Count the number of CarreraTotems
     * const count = await prisma.carreraTotem.count({
     *   where: {
     *     // ... the filter for the CarreraTotems we want to count
     *   }
     * })
    **/
    count<T extends CarreraTotemCountArgs>(
      args?: Subset<T, CarreraTotemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraTotemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarreraTotem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraTotemAggregateArgs>(args: Subset<T, CarreraTotemAggregateArgs>): Prisma.PrismaPromise<GetCarreraTotemAggregateType<T>>

    /**
     * Group by CarreraTotem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraTotemGroupByArgs} args - Group by arguments.
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
      T extends CarreraTotemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraTotemGroupByArgs['orderBy'] }
        : { orderBy?: CarreraTotemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CarreraTotemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraTotemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarreraTotem model
   */
  readonly fields: CarreraTotemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarreraTotem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraTotemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraTotem$carreraArgs<ExtArgs> = {}>(args?: Subset<T, CarreraTotem$carreraArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarreraTotem model
   */
  interface CarreraTotemFieldRefs {
    readonly id: FieldRef<"CarreraTotem", 'Int'>
    readonly codigoTotem: FieldRef<"CarreraTotem", 'String'>
    readonly carreraId: FieldRef<"CarreraTotem", 'Int'>
    readonly nombreTotem: FieldRef<"CarreraTotem", 'String'>
    readonly activo: FieldRef<"CarreraTotem", 'Boolean'>
    readonly esMapeada: FieldRef<"CarreraTotem", 'Boolean'>
    readonly createdAt: FieldRef<"CarreraTotem", 'DateTime'>
    readonly updatedAt: FieldRef<"CarreraTotem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarreraTotem findUnique
   */
  export type CarreraTotemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter, which CarreraTotem to fetch.
     */
    where: CarreraTotemWhereUniqueInput
  }

  /**
   * CarreraTotem findUniqueOrThrow
   */
  export type CarreraTotemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter, which CarreraTotem to fetch.
     */
    where: CarreraTotemWhereUniqueInput
  }

  /**
   * CarreraTotem findFirst
   */
  export type CarreraTotemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter, which CarreraTotem to fetch.
     */
    where?: CarreraTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarreraTotems to fetch.
     */
    orderBy?: CarreraTotemOrderByWithRelationInput | CarreraTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarreraTotems.
     */
    cursor?: CarreraTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarreraTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarreraTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarreraTotems.
     */
    distinct?: CarreraTotemScalarFieldEnum | CarreraTotemScalarFieldEnum[]
  }

  /**
   * CarreraTotem findFirstOrThrow
   */
  export type CarreraTotemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter, which CarreraTotem to fetch.
     */
    where?: CarreraTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarreraTotems to fetch.
     */
    orderBy?: CarreraTotemOrderByWithRelationInput | CarreraTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarreraTotems.
     */
    cursor?: CarreraTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarreraTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarreraTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarreraTotems.
     */
    distinct?: CarreraTotemScalarFieldEnum | CarreraTotemScalarFieldEnum[]
  }

  /**
   * CarreraTotem findMany
   */
  export type CarreraTotemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter, which CarreraTotems to fetch.
     */
    where?: CarreraTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarreraTotems to fetch.
     */
    orderBy?: CarreraTotemOrderByWithRelationInput | CarreraTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarreraTotems.
     */
    cursor?: CarreraTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarreraTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarreraTotems.
     */
    skip?: number
    distinct?: CarreraTotemScalarFieldEnum | CarreraTotemScalarFieldEnum[]
  }

  /**
   * CarreraTotem create
   */
  export type CarreraTotemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * The data needed to create a CarreraTotem.
     */
    data: XOR<CarreraTotemCreateInput, CarreraTotemUncheckedCreateInput>
  }

  /**
   * CarreraTotem createMany
   */
  export type CarreraTotemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarreraTotems.
     */
    data: CarreraTotemCreateManyInput | CarreraTotemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarreraTotem update
   */
  export type CarreraTotemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * The data needed to update a CarreraTotem.
     */
    data: XOR<CarreraTotemUpdateInput, CarreraTotemUncheckedUpdateInput>
    /**
     * Choose, which CarreraTotem to update.
     */
    where: CarreraTotemWhereUniqueInput
  }

  /**
   * CarreraTotem updateMany
   */
  export type CarreraTotemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarreraTotems.
     */
    data: XOR<CarreraTotemUpdateManyMutationInput, CarreraTotemUncheckedUpdateManyInput>
    /**
     * Filter which CarreraTotems to update
     */
    where?: CarreraTotemWhereInput
    /**
     * Limit how many CarreraTotems to update.
     */
    limit?: number
  }

  /**
   * CarreraTotem upsert
   */
  export type CarreraTotemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * The filter to search for the CarreraTotem to update in case it exists.
     */
    where: CarreraTotemWhereUniqueInput
    /**
     * In case the CarreraTotem found by the `where` argument doesn't exist, create a new CarreraTotem with this data.
     */
    create: XOR<CarreraTotemCreateInput, CarreraTotemUncheckedCreateInput>
    /**
     * In case the CarreraTotem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraTotemUpdateInput, CarreraTotemUncheckedUpdateInput>
  }

  /**
   * CarreraTotem delete
   */
  export type CarreraTotemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
    /**
     * Filter which CarreraTotem to delete.
     */
    where: CarreraTotemWhereUniqueInput
  }

  /**
   * CarreraTotem deleteMany
   */
  export type CarreraTotemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarreraTotems to delete
     */
    where?: CarreraTotemWhereInput
    /**
     * Limit how many CarreraTotems to delete.
     */
    limit?: number
  }

  /**
   * CarreraTotem.carrera
   */
  export type CarreraTotem$carreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    where?: CarreraWhereInput
  }

  /**
   * CarreraTotem without action
   */
  export type CarreraTotemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraTotem
     */
    select?: CarreraTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarreraTotem
     */
    omit?: CarreraTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraTotemInclude<ExtArgs> | null
  }


  /**
   * Model ExamenTotem
   */

  export type AggregateExamenTotem = {
    _count: ExamenTotemCountAggregateOutputType | null
    _avg: ExamenTotemAvgAggregateOutputType | null
    _sum: ExamenTotemSumAggregateOutputType | null
    _min: ExamenTotemMinAggregateOutputType | null
    _max: ExamenTotemMaxAggregateOutputType | null
  }

  export type ExamenTotemAvgAggregateOutputType = {
    id: number | null
    examenId: number | null
  }

  export type ExamenTotemSumAggregateOutputType = {
    id: number | null
    examenId: number | null
  }

  export type ExamenTotemMinAggregateOutputType = {
    id: number | null
    examenId: number | null
    sectorTotem: string | null
    carreraTotem: string | null
    materiaTotem: string | null
    areaTemaTotem: string | null
    modoTotem: string | null
    urlTotem: string | null
    catedraTotem: string | null
    docenteTotem: string | null
    monitoreoTotem: string | null
    controlTotem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamenTotemMaxAggregateOutputType = {
    id: number | null
    examenId: number | null
    sectorTotem: string | null
    carreraTotem: string | null
    materiaTotem: string | null
    areaTemaTotem: string | null
    modoTotem: string | null
    urlTotem: string | null
    catedraTotem: string | null
    docenteTotem: string | null
    monitoreoTotem: string | null
    controlTotem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamenTotemCountAggregateOutputType = {
    id: number
    examenId: number
    sectorTotem: number
    carreraTotem: number
    materiaTotem: number
    areaTemaTotem: number
    modoTotem: number
    urlTotem: number
    catedraTotem: number
    docenteTotem: number
    monitoreoTotem: number
    controlTotem: number
    dataOriginal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamenTotemAvgAggregateInputType = {
    id?: true
    examenId?: true
  }

  export type ExamenTotemSumAggregateInputType = {
    id?: true
    examenId?: true
  }

  export type ExamenTotemMinAggregateInputType = {
    id?: true
    examenId?: true
    sectorTotem?: true
    carreraTotem?: true
    materiaTotem?: true
    areaTemaTotem?: true
    modoTotem?: true
    urlTotem?: true
    catedraTotem?: true
    docenteTotem?: true
    monitoreoTotem?: true
    controlTotem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamenTotemMaxAggregateInputType = {
    id?: true
    examenId?: true
    sectorTotem?: true
    carreraTotem?: true
    materiaTotem?: true
    areaTemaTotem?: true
    modoTotem?: true
    urlTotem?: true
    catedraTotem?: true
    docenteTotem?: true
    monitoreoTotem?: true
    controlTotem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamenTotemCountAggregateInputType = {
    id?: true
    examenId?: true
    sectorTotem?: true
    carreraTotem?: true
    materiaTotem?: true
    areaTemaTotem?: true
    modoTotem?: true
    urlTotem?: true
    catedraTotem?: true
    docenteTotem?: true
    monitoreoTotem?: true
    controlTotem?: true
    dataOriginal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamenTotemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamenTotem to aggregate.
     */
    where?: ExamenTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamenTotems to fetch.
     */
    orderBy?: ExamenTotemOrderByWithRelationInput | ExamenTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamenTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamenTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamenTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamenTotems
    **/
    _count?: true | ExamenTotemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamenTotemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamenTotemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamenTotemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamenTotemMaxAggregateInputType
  }

  export type GetExamenTotemAggregateType<T extends ExamenTotemAggregateArgs> = {
        [P in keyof T & keyof AggregateExamenTotem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamenTotem[P]>
      : GetScalarType<T[P], AggregateExamenTotem[P]>
  }




  export type ExamenTotemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamenTotemWhereInput
    orderBy?: ExamenTotemOrderByWithAggregationInput | ExamenTotemOrderByWithAggregationInput[]
    by: ExamenTotemScalarFieldEnum[] | ExamenTotemScalarFieldEnum
    having?: ExamenTotemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamenTotemCountAggregateInputType | true
    _avg?: ExamenTotemAvgAggregateInputType
    _sum?: ExamenTotemSumAggregateInputType
    _min?: ExamenTotemMinAggregateInputType
    _max?: ExamenTotemMaxAggregateInputType
  }

  export type ExamenTotemGroupByOutputType = {
    id: number
    examenId: number
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem: string | null
    modoTotem: string | null
    urlTotem: string | null
    catedraTotem: string | null
    docenteTotem: string | null
    monitoreoTotem: string | null
    controlTotem: string | null
    dataOriginal: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ExamenTotemCountAggregateOutputType | null
    _avg: ExamenTotemAvgAggregateOutputType | null
    _sum: ExamenTotemSumAggregateOutputType | null
    _min: ExamenTotemMinAggregateOutputType | null
    _max: ExamenTotemMaxAggregateOutputType | null
  }

  type GetExamenTotemGroupByPayload<T extends ExamenTotemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamenTotemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamenTotemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamenTotemGroupByOutputType[P]>
            : GetScalarType<T[P], ExamenTotemGroupByOutputType[P]>
        }
      >
    >


  export type ExamenTotemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examenId?: boolean
    sectorTotem?: boolean
    carreraTotem?: boolean
    materiaTotem?: boolean
    areaTemaTotem?: boolean
    modoTotem?: boolean
    urlTotem?: boolean
    catedraTotem?: boolean
    docenteTotem?: boolean
    monitoreoTotem?: boolean
    controlTotem?: boolean
    dataOriginal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examenTotem"]>



  export type ExamenTotemSelectScalar = {
    id?: boolean
    examenId?: boolean
    sectorTotem?: boolean
    carreraTotem?: boolean
    materiaTotem?: boolean
    areaTemaTotem?: boolean
    modoTotem?: boolean
    urlTotem?: boolean
    catedraTotem?: boolean
    docenteTotem?: boolean
    monitoreoTotem?: boolean
    controlTotem?: boolean
    dataOriginal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamenTotemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examenId" | "sectorTotem" | "carreraTotem" | "materiaTotem" | "areaTemaTotem" | "modoTotem" | "urlTotem" | "catedraTotem" | "docenteTotem" | "monitoreoTotem" | "controlTotem" | "dataOriginal" | "createdAt" | "updatedAt", ExtArgs["result"]["examenTotem"]>
  export type ExamenTotemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
  }

  export type $ExamenTotemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamenTotem"
    objects: {
      examen: Prisma.$ExamenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      examenId: number
      sectorTotem: string
      carreraTotem: string
      materiaTotem: string
      areaTemaTotem: string | null
      modoTotem: string | null
      urlTotem: string | null
      catedraTotem: string | null
      docenteTotem: string | null
      monitoreoTotem: string | null
      controlTotem: string | null
      dataOriginal: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["examenTotem"]>
    composites: {}
  }

  type ExamenTotemGetPayload<S extends boolean | null | undefined | ExamenTotemDefaultArgs> = $Result.GetResult<Prisma.$ExamenTotemPayload, S>

  type ExamenTotemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamenTotemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamenTotemCountAggregateInputType | true
    }

  export interface ExamenTotemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamenTotem'], meta: { name: 'ExamenTotem' } }
    /**
     * Find zero or one ExamenTotem that matches the filter.
     * @param {ExamenTotemFindUniqueArgs} args - Arguments to find a ExamenTotem
     * @example
     * // Get one ExamenTotem
     * const examenTotem = await prisma.examenTotem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamenTotemFindUniqueArgs>(args: SelectSubset<T, ExamenTotemFindUniqueArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamenTotem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamenTotemFindUniqueOrThrowArgs} args - Arguments to find a ExamenTotem
     * @example
     * // Get one ExamenTotem
     * const examenTotem = await prisma.examenTotem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamenTotemFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamenTotemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamenTotem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemFindFirstArgs} args - Arguments to find a ExamenTotem
     * @example
     * // Get one ExamenTotem
     * const examenTotem = await prisma.examenTotem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamenTotemFindFirstArgs>(args?: SelectSubset<T, ExamenTotemFindFirstArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamenTotem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemFindFirstOrThrowArgs} args - Arguments to find a ExamenTotem
     * @example
     * // Get one ExamenTotem
     * const examenTotem = await prisma.examenTotem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamenTotemFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamenTotemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamenTotems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamenTotems
     * const examenTotems = await prisma.examenTotem.findMany()
     * 
     * // Get first 10 ExamenTotems
     * const examenTotems = await prisma.examenTotem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examenTotemWithIdOnly = await prisma.examenTotem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamenTotemFindManyArgs>(args?: SelectSubset<T, ExamenTotemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamenTotem.
     * @param {ExamenTotemCreateArgs} args - Arguments to create a ExamenTotem.
     * @example
     * // Create one ExamenTotem
     * const ExamenTotem = await prisma.examenTotem.create({
     *   data: {
     *     // ... data to create a ExamenTotem
     *   }
     * })
     * 
     */
    create<T extends ExamenTotemCreateArgs>(args: SelectSubset<T, ExamenTotemCreateArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamenTotems.
     * @param {ExamenTotemCreateManyArgs} args - Arguments to create many ExamenTotems.
     * @example
     * // Create many ExamenTotems
     * const examenTotem = await prisma.examenTotem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamenTotemCreateManyArgs>(args?: SelectSubset<T, ExamenTotemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExamenTotem.
     * @param {ExamenTotemDeleteArgs} args - Arguments to delete one ExamenTotem.
     * @example
     * // Delete one ExamenTotem
     * const ExamenTotem = await prisma.examenTotem.delete({
     *   where: {
     *     // ... filter to delete one ExamenTotem
     *   }
     * })
     * 
     */
    delete<T extends ExamenTotemDeleteArgs>(args: SelectSubset<T, ExamenTotemDeleteArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamenTotem.
     * @param {ExamenTotemUpdateArgs} args - Arguments to update one ExamenTotem.
     * @example
     * // Update one ExamenTotem
     * const examenTotem = await prisma.examenTotem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamenTotemUpdateArgs>(args: SelectSubset<T, ExamenTotemUpdateArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamenTotems.
     * @param {ExamenTotemDeleteManyArgs} args - Arguments to filter ExamenTotems to delete.
     * @example
     * // Delete a few ExamenTotems
     * const { count } = await prisma.examenTotem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamenTotemDeleteManyArgs>(args?: SelectSubset<T, ExamenTotemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamenTotems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamenTotems
     * const examenTotem = await prisma.examenTotem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamenTotemUpdateManyArgs>(args: SelectSubset<T, ExamenTotemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamenTotem.
     * @param {ExamenTotemUpsertArgs} args - Arguments to update or create a ExamenTotem.
     * @example
     * // Update or create a ExamenTotem
     * const examenTotem = await prisma.examenTotem.upsert({
     *   create: {
     *     // ... data to create a ExamenTotem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamenTotem we want to update
     *   }
     * })
     */
    upsert<T extends ExamenTotemUpsertArgs>(args: SelectSubset<T, ExamenTotemUpsertArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamenTotems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemCountArgs} args - Arguments to filter ExamenTotems to count.
     * @example
     * // Count the number of ExamenTotems
     * const count = await prisma.examenTotem.count({
     *   where: {
     *     // ... the filter for the ExamenTotems we want to count
     *   }
     * })
    **/
    count<T extends ExamenTotemCountArgs>(
      args?: Subset<T, ExamenTotemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamenTotemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamenTotem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamenTotemAggregateArgs>(args: Subset<T, ExamenTotemAggregateArgs>): Prisma.PrismaPromise<GetExamenTotemAggregateType<T>>

    /**
     * Group by ExamenTotem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamenTotemGroupByArgs} args - Group by arguments.
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
      T extends ExamenTotemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamenTotemGroupByArgs['orderBy'] }
        : { orderBy?: ExamenTotemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamenTotemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamenTotemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamenTotem model
   */
  readonly fields: ExamenTotemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamenTotem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamenTotemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examen<T extends ExamenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamenDefaultArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamenTotem model
   */
  interface ExamenTotemFieldRefs {
    readonly id: FieldRef<"ExamenTotem", 'Int'>
    readonly examenId: FieldRef<"ExamenTotem", 'Int'>
    readonly sectorTotem: FieldRef<"ExamenTotem", 'String'>
    readonly carreraTotem: FieldRef<"ExamenTotem", 'String'>
    readonly materiaTotem: FieldRef<"ExamenTotem", 'String'>
    readonly areaTemaTotem: FieldRef<"ExamenTotem", 'String'>
    readonly modoTotem: FieldRef<"ExamenTotem", 'String'>
    readonly urlTotem: FieldRef<"ExamenTotem", 'String'>
    readonly catedraTotem: FieldRef<"ExamenTotem", 'String'>
    readonly docenteTotem: FieldRef<"ExamenTotem", 'String'>
    readonly monitoreoTotem: FieldRef<"ExamenTotem", 'String'>
    readonly controlTotem: FieldRef<"ExamenTotem", 'String'>
    readonly dataOriginal: FieldRef<"ExamenTotem", 'Json'>
    readonly createdAt: FieldRef<"ExamenTotem", 'DateTime'>
    readonly updatedAt: FieldRef<"ExamenTotem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamenTotem findUnique
   */
  export type ExamenTotemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter, which ExamenTotem to fetch.
     */
    where: ExamenTotemWhereUniqueInput
  }

  /**
   * ExamenTotem findUniqueOrThrow
   */
  export type ExamenTotemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter, which ExamenTotem to fetch.
     */
    where: ExamenTotemWhereUniqueInput
  }

  /**
   * ExamenTotem findFirst
   */
  export type ExamenTotemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter, which ExamenTotem to fetch.
     */
    where?: ExamenTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamenTotems to fetch.
     */
    orderBy?: ExamenTotemOrderByWithRelationInput | ExamenTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamenTotems.
     */
    cursor?: ExamenTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamenTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamenTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamenTotems.
     */
    distinct?: ExamenTotemScalarFieldEnum | ExamenTotemScalarFieldEnum[]
  }

  /**
   * ExamenTotem findFirstOrThrow
   */
  export type ExamenTotemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter, which ExamenTotem to fetch.
     */
    where?: ExamenTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamenTotems to fetch.
     */
    orderBy?: ExamenTotemOrderByWithRelationInput | ExamenTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamenTotems.
     */
    cursor?: ExamenTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamenTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamenTotems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamenTotems.
     */
    distinct?: ExamenTotemScalarFieldEnum | ExamenTotemScalarFieldEnum[]
  }

  /**
   * ExamenTotem findMany
   */
  export type ExamenTotemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter, which ExamenTotems to fetch.
     */
    where?: ExamenTotemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamenTotems to fetch.
     */
    orderBy?: ExamenTotemOrderByWithRelationInput | ExamenTotemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamenTotems.
     */
    cursor?: ExamenTotemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamenTotems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamenTotems.
     */
    skip?: number
    distinct?: ExamenTotemScalarFieldEnum | ExamenTotemScalarFieldEnum[]
  }

  /**
   * ExamenTotem create
   */
  export type ExamenTotemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamenTotem.
     */
    data: XOR<ExamenTotemCreateInput, ExamenTotemUncheckedCreateInput>
  }

  /**
   * ExamenTotem createMany
   */
  export type ExamenTotemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamenTotems.
     */
    data: ExamenTotemCreateManyInput | ExamenTotemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamenTotem update
   */
  export type ExamenTotemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamenTotem.
     */
    data: XOR<ExamenTotemUpdateInput, ExamenTotemUncheckedUpdateInput>
    /**
     * Choose, which ExamenTotem to update.
     */
    where: ExamenTotemWhereUniqueInput
  }

  /**
   * ExamenTotem updateMany
   */
  export type ExamenTotemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamenTotems.
     */
    data: XOR<ExamenTotemUpdateManyMutationInput, ExamenTotemUncheckedUpdateManyInput>
    /**
     * Filter which ExamenTotems to update
     */
    where?: ExamenTotemWhereInput
    /**
     * Limit how many ExamenTotems to update.
     */
    limit?: number
  }

  /**
   * ExamenTotem upsert
   */
  export type ExamenTotemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamenTotem to update in case it exists.
     */
    where: ExamenTotemWhereUniqueInput
    /**
     * In case the ExamenTotem found by the `where` argument doesn't exist, create a new ExamenTotem with this data.
     */
    create: XOR<ExamenTotemCreateInput, ExamenTotemUncheckedCreateInput>
    /**
     * In case the ExamenTotem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamenTotemUpdateInput, ExamenTotemUncheckedUpdateInput>
  }

  /**
   * ExamenTotem delete
   */
  export type ExamenTotemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
    /**
     * Filter which ExamenTotem to delete.
     */
    where: ExamenTotemWhereUniqueInput
  }

  /**
   * ExamenTotem deleteMany
   */
  export type ExamenTotemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamenTotems to delete
     */
    where?: ExamenTotemWhereInput
    /**
     * Limit how many ExamenTotems to delete.
     */
    limit?: number
  }

  /**
   * ExamenTotem without action
   */
  export type ExamenTotemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamenTotem
     */
    select?: ExamenTotemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamenTotem
     */
    omit?: ExamenTotemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamenTotemInclude<ExtArgs> | null
  }


  /**
   * Model AulaConfiguracion
   */

  export type AggregateAulaConfiguracion = {
    _count: AulaConfiguracionCountAggregateOutputType | null
    _avg: AulaConfiguracionAvgAggregateOutputType | null
    _sum: AulaConfiguracionSumAggregateOutputType | null
    _min: AulaConfiguracionMinAggregateOutputType | null
    _max: AulaConfiguracionMaxAggregateOutputType | null
  }

  export type AulaConfiguracionAvgAggregateOutputType = {
    id: number | null
    capacidadMaxima: number | null
    cantidadRecurso: number | null
    prioridadAsignacion: number | null
  }

  export type AulaConfiguracionSumAggregateOutputType = {
    id: number | null
    capacidadMaxima: number | null
    cantidadRecurso: number | null
    prioridadAsignacion: number | null
  }

  export type AulaConfiguracionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    capacidadMaxima: number | null
    recursoEspecial: string | null
    cantidadRecurso: number | null
    esParaInformatica: boolean | null
    prioridadAsignacion: number | null
    disponible: boolean | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaConfiguracionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    capacidadMaxima: number | null
    recursoEspecial: string | null
    cantidadRecurso: number | null
    esParaInformatica: boolean | null
    prioridadAsignacion: number | null
    disponible: boolean | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaConfiguracionCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    capacidadMaxima: number
    recursoEspecial: number
    cantidadRecurso: number
    esParaInformatica: number
    prioridadAsignacion: number
    disponible: number
    observaciones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AulaConfiguracionAvgAggregateInputType = {
    id?: true
    capacidadMaxima?: true
    cantidadRecurso?: true
    prioridadAsignacion?: true
  }

  export type AulaConfiguracionSumAggregateInputType = {
    id?: true
    capacidadMaxima?: true
    cantidadRecurso?: true
    prioridadAsignacion?: true
  }

  export type AulaConfiguracionMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    capacidadMaxima?: true
    recursoEspecial?: true
    cantidadRecurso?: true
    esParaInformatica?: true
    prioridadAsignacion?: true
    disponible?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaConfiguracionMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    capacidadMaxima?: true
    recursoEspecial?: true
    cantidadRecurso?: true
    esParaInformatica?: true
    prioridadAsignacion?: true
    disponible?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaConfiguracionCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    capacidadMaxima?: true
    recursoEspecial?: true
    cantidadRecurso?: true
    esParaInformatica?: true
    prioridadAsignacion?: true
    disponible?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AulaConfiguracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AulaConfiguracion to aggregate.
     */
    where?: AulaConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AulaConfiguracions to fetch.
     */
    orderBy?: AulaConfiguracionOrderByWithRelationInput | AulaConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AulaConfiguracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AulaConfiguracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AulaConfiguracions
    **/
    _count?: true | AulaConfiguracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaConfiguracionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaConfiguracionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaConfiguracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaConfiguracionMaxAggregateInputType
  }

  export type GetAulaConfiguracionAggregateType<T extends AulaConfiguracionAggregateArgs> = {
        [P in keyof T & keyof AggregateAulaConfiguracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAulaConfiguracion[P]>
      : GetScalarType<T[P], AggregateAulaConfiguracion[P]>
  }




  export type AulaConfiguracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaConfiguracionWhereInput
    orderBy?: AulaConfiguracionOrderByWithAggregationInput | AulaConfiguracionOrderByWithAggregationInput[]
    by: AulaConfiguracionScalarFieldEnum[] | AulaConfiguracionScalarFieldEnum
    having?: AulaConfiguracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaConfiguracionCountAggregateInputType | true
    _avg?: AulaConfiguracionAvgAggregateInputType
    _sum?: AulaConfiguracionSumAggregateInputType
    _min?: AulaConfiguracionMinAggregateInputType
    _max?: AulaConfiguracionMaxAggregateInputType
  }

  export type AulaConfiguracionGroupByOutputType = {
    id: number
    nombre: string
    tipo: string
    capacidadMaxima: number
    recursoEspecial: string | null
    cantidadRecurso: number | null
    esParaInformatica: boolean
    prioridadAsignacion: number
    disponible: boolean
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    _count: AulaConfiguracionCountAggregateOutputType | null
    _avg: AulaConfiguracionAvgAggregateOutputType | null
    _sum: AulaConfiguracionSumAggregateOutputType | null
    _min: AulaConfiguracionMinAggregateOutputType | null
    _max: AulaConfiguracionMaxAggregateOutputType | null
  }

  type GetAulaConfiguracionGroupByPayload<T extends AulaConfiguracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaConfiguracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaConfiguracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaConfiguracionGroupByOutputType[P]>
            : GetScalarType<T[P], AulaConfiguracionGroupByOutputType[P]>
        }
      >
    >


  export type AulaConfiguracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    capacidadMaxima?: boolean
    recursoEspecial?: boolean
    cantidadRecurso?: boolean
    esParaInformatica?: boolean
    prioridadAsignacion?: boolean
    disponible?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aulaConfiguracion"]>



  export type AulaConfiguracionSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    capacidadMaxima?: boolean
    recursoEspecial?: boolean
    cantidadRecurso?: boolean
    esParaInformatica?: boolean
    prioridadAsignacion?: boolean
    disponible?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AulaConfiguracionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "capacidadMaxima" | "recursoEspecial" | "cantidadRecurso" | "esParaInformatica" | "prioridadAsignacion" | "disponible" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["aulaConfiguracion"]>

  export type $AulaConfiguracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AulaConfiguracion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo: string
      capacidadMaxima: number
      recursoEspecial: string | null
      cantidadRecurso: number | null
      esParaInformatica: boolean
      prioridadAsignacion: number
      disponible: boolean
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aulaConfiguracion"]>
    composites: {}
  }

  type AulaConfiguracionGetPayload<S extends boolean | null | undefined | AulaConfiguracionDefaultArgs> = $Result.GetResult<Prisma.$AulaConfiguracionPayload, S>

  type AulaConfiguracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AulaConfiguracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulaConfiguracionCountAggregateInputType | true
    }

  export interface AulaConfiguracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AulaConfiguracion'], meta: { name: 'AulaConfiguracion' } }
    /**
     * Find zero or one AulaConfiguracion that matches the filter.
     * @param {AulaConfiguracionFindUniqueArgs} args - Arguments to find a AulaConfiguracion
     * @example
     * // Get one AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaConfiguracionFindUniqueArgs>(args: SelectSubset<T, AulaConfiguracionFindUniqueArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AulaConfiguracion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AulaConfiguracionFindUniqueOrThrowArgs} args - Arguments to find a AulaConfiguracion
     * @example
     * // Get one AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaConfiguracionFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaConfiguracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AulaConfiguracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionFindFirstArgs} args - Arguments to find a AulaConfiguracion
     * @example
     * // Get one AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaConfiguracionFindFirstArgs>(args?: SelectSubset<T, AulaConfiguracionFindFirstArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AulaConfiguracion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionFindFirstOrThrowArgs} args - Arguments to find a AulaConfiguracion
     * @example
     * // Get one AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaConfiguracionFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaConfiguracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AulaConfiguracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AulaConfiguracions
     * const aulaConfiguracions = await prisma.aulaConfiguracion.findMany()
     * 
     * // Get first 10 AulaConfiguracions
     * const aulaConfiguracions = await prisma.aulaConfiguracion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulaConfiguracionWithIdOnly = await prisma.aulaConfiguracion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AulaConfiguracionFindManyArgs>(args?: SelectSubset<T, AulaConfiguracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AulaConfiguracion.
     * @param {AulaConfiguracionCreateArgs} args - Arguments to create a AulaConfiguracion.
     * @example
     * // Create one AulaConfiguracion
     * const AulaConfiguracion = await prisma.aulaConfiguracion.create({
     *   data: {
     *     // ... data to create a AulaConfiguracion
     *   }
     * })
     * 
     */
    create<T extends AulaConfiguracionCreateArgs>(args: SelectSubset<T, AulaConfiguracionCreateArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AulaConfiguracions.
     * @param {AulaConfiguracionCreateManyArgs} args - Arguments to create many AulaConfiguracions.
     * @example
     * // Create many AulaConfiguracions
     * const aulaConfiguracion = await prisma.aulaConfiguracion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaConfiguracionCreateManyArgs>(args?: SelectSubset<T, AulaConfiguracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AulaConfiguracion.
     * @param {AulaConfiguracionDeleteArgs} args - Arguments to delete one AulaConfiguracion.
     * @example
     * // Delete one AulaConfiguracion
     * const AulaConfiguracion = await prisma.aulaConfiguracion.delete({
     *   where: {
     *     // ... filter to delete one AulaConfiguracion
     *   }
     * })
     * 
     */
    delete<T extends AulaConfiguracionDeleteArgs>(args: SelectSubset<T, AulaConfiguracionDeleteArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AulaConfiguracion.
     * @param {AulaConfiguracionUpdateArgs} args - Arguments to update one AulaConfiguracion.
     * @example
     * // Update one AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaConfiguracionUpdateArgs>(args: SelectSubset<T, AulaConfiguracionUpdateArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AulaConfiguracions.
     * @param {AulaConfiguracionDeleteManyArgs} args - Arguments to filter AulaConfiguracions to delete.
     * @example
     * // Delete a few AulaConfiguracions
     * const { count } = await prisma.aulaConfiguracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaConfiguracionDeleteManyArgs>(args?: SelectSubset<T, AulaConfiguracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AulaConfiguracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AulaConfiguracions
     * const aulaConfiguracion = await prisma.aulaConfiguracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaConfiguracionUpdateManyArgs>(args: SelectSubset<T, AulaConfiguracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AulaConfiguracion.
     * @param {AulaConfiguracionUpsertArgs} args - Arguments to update or create a AulaConfiguracion.
     * @example
     * // Update or create a AulaConfiguracion
     * const aulaConfiguracion = await prisma.aulaConfiguracion.upsert({
     *   create: {
     *     // ... data to create a AulaConfiguracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AulaConfiguracion we want to update
     *   }
     * })
     */
    upsert<T extends AulaConfiguracionUpsertArgs>(args: SelectSubset<T, AulaConfiguracionUpsertArgs<ExtArgs>>): Prisma__AulaConfiguracionClient<$Result.GetResult<Prisma.$AulaConfiguracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AulaConfiguracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionCountArgs} args - Arguments to filter AulaConfiguracions to count.
     * @example
     * // Count the number of AulaConfiguracions
     * const count = await prisma.aulaConfiguracion.count({
     *   where: {
     *     // ... the filter for the AulaConfiguracions we want to count
     *   }
     * })
    **/
    count<T extends AulaConfiguracionCountArgs>(
      args?: Subset<T, AulaConfiguracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaConfiguracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AulaConfiguracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaConfiguracionAggregateArgs>(args: Subset<T, AulaConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetAulaConfiguracionAggregateType<T>>

    /**
     * Group by AulaConfiguracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaConfiguracionGroupByArgs} args - Group by arguments.
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
      T extends AulaConfiguracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaConfiguracionGroupByArgs['orderBy'] }
        : { orderBy?: AulaConfiguracionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AulaConfiguracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AulaConfiguracion model
   */
  readonly fields: AulaConfiguracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AulaConfiguracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaConfiguracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AulaConfiguracion model
   */
  interface AulaConfiguracionFieldRefs {
    readonly id: FieldRef<"AulaConfiguracion", 'Int'>
    readonly nombre: FieldRef<"AulaConfiguracion", 'String'>
    readonly tipo: FieldRef<"AulaConfiguracion", 'String'>
    readonly capacidadMaxima: FieldRef<"AulaConfiguracion", 'Int'>
    readonly recursoEspecial: FieldRef<"AulaConfiguracion", 'String'>
    readonly cantidadRecurso: FieldRef<"AulaConfiguracion", 'Int'>
    readonly esParaInformatica: FieldRef<"AulaConfiguracion", 'Boolean'>
    readonly prioridadAsignacion: FieldRef<"AulaConfiguracion", 'Int'>
    readonly disponible: FieldRef<"AulaConfiguracion", 'Boolean'>
    readonly observaciones: FieldRef<"AulaConfiguracion", 'String'>
    readonly createdAt: FieldRef<"AulaConfiguracion", 'DateTime'>
    readonly updatedAt: FieldRef<"AulaConfiguracion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AulaConfiguracion findUnique
   */
  export type AulaConfiguracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which AulaConfiguracion to fetch.
     */
    where: AulaConfiguracionWhereUniqueInput
  }

  /**
   * AulaConfiguracion findUniqueOrThrow
   */
  export type AulaConfiguracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which AulaConfiguracion to fetch.
     */
    where: AulaConfiguracionWhereUniqueInput
  }

  /**
   * AulaConfiguracion findFirst
   */
  export type AulaConfiguracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which AulaConfiguracion to fetch.
     */
    where?: AulaConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AulaConfiguracions to fetch.
     */
    orderBy?: AulaConfiguracionOrderByWithRelationInput | AulaConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AulaConfiguracions.
     */
    cursor?: AulaConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AulaConfiguracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AulaConfiguracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AulaConfiguracions.
     */
    distinct?: AulaConfiguracionScalarFieldEnum | AulaConfiguracionScalarFieldEnum[]
  }

  /**
   * AulaConfiguracion findFirstOrThrow
   */
  export type AulaConfiguracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which AulaConfiguracion to fetch.
     */
    where?: AulaConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AulaConfiguracions to fetch.
     */
    orderBy?: AulaConfiguracionOrderByWithRelationInput | AulaConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AulaConfiguracions.
     */
    cursor?: AulaConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AulaConfiguracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AulaConfiguracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AulaConfiguracions.
     */
    distinct?: AulaConfiguracionScalarFieldEnum | AulaConfiguracionScalarFieldEnum[]
  }

  /**
   * AulaConfiguracion findMany
   */
  export type AulaConfiguracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which AulaConfiguracions to fetch.
     */
    where?: AulaConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AulaConfiguracions to fetch.
     */
    orderBy?: AulaConfiguracionOrderByWithRelationInput | AulaConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AulaConfiguracions.
     */
    cursor?: AulaConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AulaConfiguracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AulaConfiguracions.
     */
    skip?: number
    distinct?: AulaConfiguracionScalarFieldEnum | AulaConfiguracionScalarFieldEnum[]
  }

  /**
   * AulaConfiguracion create
   */
  export type AulaConfiguracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * The data needed to create a AulaConfiguracion.
     */
    data: XOR<AulaConfiguracionCreateInput, AulaConfiguracionUncheckedCreateInput>
  }

  /**
   * AulaConfiguracion createMany
   */
  export type AulaConfiguracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AulaConfiguracions.
     */
    data: AulaConfiguracionCreateManyInput | AulaConfiguracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AulaConfiguracion update
   */
  export type AulaConfiguracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * The data needed to update a AulaConfiguracion.
     */
    data: XOR<AulaConfiguracionUpdateInput, AulaConfiguracionUncheckedUpdateInput>
    /**
     * Choose, which AulaConfiguracion to update.
     */
    where: AulaConfiguracionWhereUniqueInput
  }

  /**
   * AulaConfiguracion updateMany
   */
  export type AulaConfiguracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AulaConfiguracions.
     */
    data: XOR<AulaConfiguracionUpdateManyMutationInput, AulaConfiguracionUncheckedUpdateManyInput>
    /**
     * Filter which AulaConfiguracions to update
     */
    where?: AulaConfiguracionWhereInput
    /**
     * Limit how many AulaConfiguracions to update.
     */
    limit?: number
  }

  /**
   * AulaConfiguracion upsert
   */
  export type AulaConfiguracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * The filter to search for the AulaConfiguracion to update in case it exists.
     */
    where: AulaConfiguracionWhereUniqueInput
    /**
     * In case the AulaConfiguracion found by the `where` argument doesn't exist, create a new AulaConfiguracion with this data.
     */
    create: XOR<AulaConfiguracionCreateInput, AulaConfiguracionUncheckedCreateInput>
    /**
     * In case the AulaConfiguracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaConfiguracionUpdateInput, AulaConfiguracionUncheckedUpdateInput>
  }

  /**
   * AulaConfiguracion delete
   */
  export type AulaConfiguracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
    /**
     * Filter which AulaConfiguracion to delete.
     */
    where: AulaConfiguracionWhereUniqueInput
  }

  /**
   * AulaConfiguracion deleteMany
   */
  export type AulaConfiguracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AulaConfiguracions to delete
     */
    where?: AulaConfiguracionWhereInput
    /**
     * Limit how many AulaConfiguracions to delete.
     */
    limit?: number
  }

  /**
   * AulaConfiguracion without action
   */
  export type AulaConfiguracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaConfiguracion
     */
    select?: AulaConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AulaConfiguracion
     */
    omit?: AulaConfiguracionOmit<ExtArgs> | null
  }


  /**
   * Model ConfiguracionVisual
   */

  export type AggregateConfiguracionVisual = {
    _count: ConfiguracionVisualCountAggregateOutputType | null
    _avg: ConfiguracionVisualAvgAggregateOutputType | null
    _sum: ConfiguracionVisualSumAggregateOutputType | null
    _min: ConfiguracionVisualMinAggregateOutputType | null
    _max: ConfiguracionVisualMaxAggregateOutputType | null
  }

  export type ConfiguracionVisualAvgAggregateOutputType = {
    id: number | null
  }

  export type ConfiguracionVisualSumAggregateOutputType = {
    id: number | null
  }

  export type ConfiguracionVisualMinAggregateOutputType = {
    id: number | null
    backgroundImage: string | null
    titulo: string | null
    subtitulo: string | null
    colorPrimario: string | null
    colorSecundario: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionVisualMaxAggregateOutputType = {
    id: number | null
    backgroundImage: string | null
    titulo: string | null
    subtitulo: string | null
    colorPrimario: string | null
    colorSecundario: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionVisualCountAggregateOutputType = {
    id: number
    backgroundImage: number
    titulo: number
    subtitulo: number
    colorPrimario: number
    colorSecundario: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracionVisualAvgAggregateInputType = {
    id?: true
  }

  export type ConfiguracionVisualSumAggregateInputType = {
    id?: true
  }

  export type ConfiguracionVisualMinAggregateInputType = {
    id?: true
    backgroundImage?: true
    titulo?: true
    subtitulo?: true
    colorPrimario?: true
    colorSecundario?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionVisualMaxAggregateInputType = {
    id?: true
    backgroundImage?: true
    titulo?: true
    subtitulo?: true
    colorPrimario?: true
    colorSecundario?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionVisualCountAggregateInputType = {
    id?: true
    backgroundImage?: true
    titulo?: true
    subtitulo?: true
    colorPrimario?: true
    colorSecundario?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracionVisualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracionVisual to aggregate.
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionVisuals to fetch.
     */
    orderBy?: ConfiguracionVisualOrderByWithRelationInput | ConfiguracionVisualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracionVisualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionVisuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionVisuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfiguracionVisuals
    **/
    _count?: true | ConfiguracionVisualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracionVisualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracionVisualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionVisualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionVisualMaxAggregateInputType
  }

  export type GetConfiguracionVisualAggregateType<T extends ConfiguracionVisualAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracionVisual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracionVisual[P]>
      : GetScalarType<T[P], AggregateConfiguracionVisual[P]>
  }




  export type ConfiguracionVisualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracionVisualWhereInput
    orderBy?: ConfiguracionVisualOrderByWithAggregationInput | ConfiguracionVisualOrderByWithAggregationInput[]
    by: ConfiguracionVisualScalarFieldEnum[] | ConfiguracionVisualScalarFieldEnum
    having?: ConfiguracionVisualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionVisualCountAggregateInputType | true
    _avg?: ConfiguracionVisualAvgAggregateInputType
    _sum?: ConfiguracionVisualSumAggregateInputType
    _min?: ConfiguracionVisualMinAggregateInputType
    _max?: ConfiguracionVisualMaxAggregateInputType
  }

  export type ConfiguracionVisualGroupByOutputType = {
    id: number
    backgroundImage: string | null
    titulo: string | null
    subtitulo: string | null
    colorPrimario: string | null
    colorSecundario: string | null
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConfiguracionVisualCountAggregateOutputType | null
    _avg: ConfiguracionVisualAvgAggregateOutputType | null
    _sum: ConfiguracionVisualSumAggregateOutputType | null
    _min: ConfiguracionVisualMinAggregateOutputType | null
    _max: ConfiguracionVisualMaxAggregateOutputType | null
  }

  type GetConfiguracionVisualGroupByPayload<T extends ConfiguracionVisualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionVisualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionVisualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionVisualGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionVisualGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracionVisualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    backgroundImage?: boolean
    titulo?: boolean
    subtitulo?: boolean
    colorPrimario?: boolean
    colorSecundario?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracionVisual"]>



  export type ConfiguracionVisualSelectScalar = {
    id?: boolean
    backgroundImage?: boolean
    titulo?: boolean
    subtitulo?: boolean
    colorPrimario?: boolean
    colorSecundario?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracionVisualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "backgroundImage" | "titulo" | "subtitulo" | "colorPrimario" | "colorSecundario" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["configuracionVisual"]>

  export type $ConfiguracionVisualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfiguracionVisual"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      backgroundImage: string | null
      titulo: string | null
      subtitulo: string | null
      colorPrimario: string | null
      colorSecundario: string | null
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuracionVisual"]>
    composites: {}
  }

  type ConfiguracionVisualGetPayload<S extends boolean | null | undefined | ConfiguracionVisualDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracionVisualPayload, S>

  type ConfiguracionVisualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracionVisualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionVisualCountAggregateInputType | true
    }

  export interface ConfiguracionVisualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfiguracionVisual'], meta: { name: 'ConfiguracionVisual' } }
    /**
     * Find zero or one ConfiguracionVisual that matches the filter.
     * @param {ConfiguracionVisualFindUniqueArgs} args - Arguments to find a ConfiguracionVisual
     * @example
     * // Get one ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracionVisualFindUniqueArgs>(args: SelectSubset<T, ConfiguracionVisualFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfiguracionVisual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracionVisualFindUniqueOrThrowArgs} args - Arguments to find a ConfiguracionVisual
     * @example
     * // Get one ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracionVisualFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracionVisualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracionVisual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualFindFirstArgs} args - Arguments to find a ConfiguracionVisual
     * @example
     * // Get one ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracionVisualFindFirstArgs>(args?: SelectSubset<T, ConfiguracionVisualFindFirstArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracionVisual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualFindFirstOrThrowArgs} args - Arguments to find a ConfiguracionVisual
     * @example
     * // Get one ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracionVisualFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracionVisualFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfiguracionVisuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfiguracionVisuals
     * const configuracionVisuals = await prisma.configuracionVisual.findMany()
     * 
     * // Get first 10 ConfiguracionVisuals
     * const configuracionVisuals = await prisma.configuracionVisual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracionVisualWithIdOnly = await prisma.configuracionVisual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracionVisualFindManyArgs>(args?: SelectSubset<T, ConfiguracionVisualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfiguracionVisual.
     * @param {ConfiguracionVisualCreateArgs} args - Arguments to create a ConfiguracionVisual.
     * @example
     * // Create one ConfiguracionVisual
     * const ConfiguracionVisual = await prisma.configuracionVisual.create({
     *   data: {
     *     // ... data to create a ConfiguracionVisual
     *   }
     * })
     * 
     */
    create<T extends ConfiguracionVisualCreateArgs>(args: SelectSubset<T, ConfiguracionVisualCreateArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfiguracionVisuals.
     * @param {ConfiguracionVisualCreateManyArgs} args - Arguments to create many ConfiguracionVisuals.
     * @example
     * // Create many ConfiguracionVisuals
     * const configuracionVisual = await prisma.configuracionVisual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracionVisualCreateManyArgs>(args?: SelectSubset<T, ConfiguracionVisualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConfiguracionVisual.
     * @param {ConfiguracionVisualDeleteArgs} args - Arguments to delete one ConfiguracionVisual.
     * @example
     * // Delete one ConfiguracionVisual
     * const ConfiguracionVisual = await prisma.configuracionVisual.delete({
     *   where: {
     *     // ... filter to delete one ConfiguracionVisual
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracionVisualDeleteArgs>(args: SelectSubset<T, ConfiguracionVisualDeleteArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfiguracionVisual.
     * @param {ConfiguracionVisualUpdateArgs} args - Arguments to update one ConfiguracionVisual.
     * @example
     * // Update one ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracionVisualUpdateArgs>(args: SelectSubset<T, ConfiguracionVisualUpdateArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfiguracionVisuals.
     * @param {ConfiguracionVisualDeleteManyArgs} args - Arguments to filter ConfiguracionVisuals to delete.
     * @example
     * // Delete a few ConfiguracionVisuals
     * const { count } = await prisma.configuracionVisual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracionVisualDeleteManyArgs>(args?: SelectSubset<T, ConfiguracionVisualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracionVisuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfiguracionVisuals
     * const configuracionVisual = await prisma.configuracionVisual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracionVisualUpdateManyArgs>(args: SelectSubset<T, ConfiguracionVisualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConfiguracionVisual.
     * @param {ConfiguracionVisualUpsertArgs} args - Arguments to update or create a ConfiguracionVisual.
     * @example
     * // Update or create a ConfiguracionVisual
     * const configuracionVisual = await prisma.configuracionVisual.upsert({
     *   create: {
     *     // ... data to create a ConfiguracionVisual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfiguracionVisual we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracionVisualUpsertArgs>(args: SelectSubset<T, ConfiguracionVisualUpsertArgs<ExtArgs>>): Prisma__ConfiguracionVisualClient<$Result.GetResult<Prisma.$ConfiguracionVisualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfiguracionVisuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualCountArgs} args - Arguments to filter ConfiguracionVisuals to count.
     * @example
     * // Count the number of ConfiguracionVisuals
     * const count = await prisma.configuracionVisual.count({
     *   where: {
     *     // ... the filter for the ConfiguracionVisuals we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracionVisualCountArgs>(
      args?: Subset<T, ConfiguracionVisualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionVisualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfiguracionVisual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionVisualAggregateArgs>(args: Subset<T, ConfiguracionVisualAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionVisualAggregateType<T>>

    /**
     * Group by ConfiguracionVisual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionVisualGroupByArgs} args - Group by arguments.
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
      T extends ConfiguracionVisualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracionVisualGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracionVisualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ConfiguracionVisualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionVisualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfiguracionVisual model
   */
  readonly fields: ConfiguracionVisualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfiguracionVisual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracionVisualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfiguracionVisual model
   */
  interface ConfiguracionVisualFieldRefs {
    readonly id: FieldRef<"ConfiguracionVisual", 'Int'>
    readonly backgroundImage: FieldRef<"ConfiguracionVisual", 'String'>
    readonly titulo: FieldRef<"ConfiguracionVisual", 'String'>
    readonly subtitulo: FieldRef<"ConfiguracionVisual", 'String'>
    readonly colorPrimario: FieldRef<"ConfiguracionVisual", 'String'>
    readonly colorSecundario: FieldRef<"ConfiguracionVisual", 'String'>
    readonly activa: FieldRef<"ConfiguracionVisual", 'Boolean'>
    readonly createdAt: FieldRef<"ConfiguracionVisual", 'DateTime'>
    readonly updatedAt: FieldRef<"ConfiguracionVisual", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfiguracionVisual findUnique
   */
  export type ConfiguracionVisualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracionVisual to fetch.
     */
    where: ConfiguracionVisualWhereUniqueInput
  }

  /**
   * ConfiguracionVisual findUniqueOrThrow
   */
  export type ConfiguracionVisualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracionVisual to fetch.
     */
    where: ConfiguracionVisualWhereUniqueInput
  }

  /**
   * ConfiguracionVisual findFirst
   */
  export type ConfiguracionVisualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracionVisual to fetch.
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionVisuals to fetch.
     */
    orderBy?: ConfiguracionVisualOrderByWithRelationInput | ConfiguracionVisualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracionVisuals.
     */
    cursor?: ConfiguracionVisualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionVisuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionVisuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracionVisuals.
     */
    distinct?: ConfiguracionVisualScalarFieldEnum | ConfiguracionVisualScalarFieldEnum[]
  }

  /**
   * ConfiguracionVisual findFirstOrThrow
   */
  export type ConfiguracionVisualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracionVisual to fetch.
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionVisuals to fetch.
     */
    orderBy?: ConfiguracionVisualOrderByWithRelationInput | ConfiguracionVisualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracionVisuals.
     */
    cursor?: ConfiguracionVisualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionVisuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionVisuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracionVisuals.
     */
    distinct?: ConfiguracionVisualScalarFieldEnum | ConfiguracionVisualScalarFieldEnum[]
  }

  /**
   * ConfiguracionVisual findMany
   */
  export type ConfiguracionVisualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracionVisuals to fetch.
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionVisuals to fetch.
     */
    orderBy?: ConfiguracionVisualOrderByWithRelationInput | ConfiguracionVisualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfiguracionVisuals.
     */
    cursor?: ConfiguracionVisualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionVisuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionVisuals.
     */
    skip?: number
    distinct?: ConfiguracionVisualScalarFieldEnum | ConfiguracionVisualScalarFieldEnum[]
  }

  /**
   * ConfiguracionVisual create
   */
  export type ConfiguracionVisualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfiguracionVisual.
     */
    data: XOR<ConfiguracionVisualCreateInput, ConfiguracionVisualUncheckedCreateInput>
  }

  /**
   * ConfiguracionVisual createMany
   */
  export type ConfiguracionVisualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfiguracionVisuals.
     */
    data: ConfiguracionVisualCreateManyInput | ConfiguracionVisualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfiguracionVisual update
   */
  export type ConfiguracionVisualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfiguracionVisual.
     */
    data: XOR<ConfiguracionVisualUpdateInput, ConfiguracionVisualUncheckedUpdateInput>
    /**
     * Choose, which ConfiguracionVisual to update.
     */
    where: ConfiguracionVisualWhereUniqueInput
  }

  /**
   * ConfiguracionVisual updateMany
   */
  export type ConfiguracionVisualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfiguracionVisuals.
     */
    data: XOR<ConfiguracionVisualUpdateManyMutationInput, ConfiguracionVisualUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracionVisuals to update
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * Limit how many ConfiguracionVisuals to update.
     */
    limit?: number
  }

  /**
   * ConfiguracionVisual upsert
   */
  export type ConfiguracionVisualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfiguracionVisual to update in case it exists.
     */
    where: ConfiguracionVisualWhereUniqueInput
    /**
     * In case the ConfiguracionVisual found by the `where` argument doesn't exist, create a new ConfiguracionVisual with this data.
     */
    create: XOR<ConfiguracionVisualCreateInput, ConfiguracionVisualUncheckedCreateInput>
    /**
     * In case the ConfiguracionVisual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracionVisualUpdateInput, ConfiguracionVisualUncheckedUpdateInput>
  }

  /**
   * ConfiguracionVisual delete
   */
  export type ConfiguracionVisualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
    /**
     * Filter which ConfiguracionVisual to delete.
     */
    where: ConfiguracionVisualWhereUniqueInput
  }

  /**
   * ConfiguracionVisual deleteMany
   */
  export type ConfiguracionVisualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracionVisuals to delete
     */
    where?: ConfiguracionVisualWhereInput
    /**
     * Limit how many ConfiguracionVisuals to delete.
     */
    limit?: number
  }

  /**
   * ConfiguracionVisual without action
   */
  export type ConfiguracionVisualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionVisual
     */
    select?: ConfiguracionVisualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionVisual
     */
    omit?: ConfiguracionVisualOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FacultadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    sector: 'sector',
    sheetId: 'sheetId',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacultadScalarFieldEnum = (typeof FacultadScalarFieldEnum)[keyof typeof FacultadScalarFieldEnum]


  export const CarreraScalarFieldEnum: {
    id: 'id',
    facultadId: 'facultadId',
    nombre: 'nombre',
    codigo: 'codigo',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const ExamenScalarFieldEnum: {
    id: 'id',
    carreraId: 'carreraId',
    aulaId: 'aulaId',
    nombreMateria: 'nombreMateria',
    fecha: 'fecha',
    hora: 'hora',
    tipoExamen: 'tipoExamen',
    monitoreo: 'monitoreo',
    materialPermitido: 'materialPermitido',
    observaciones: 'observaciones',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    asignacionAuto: 'asignacionAuto',
    criterioAsignacion: 'criterioAsignacion',
    modalidadExamen: 'modalidadExamen',
    requierePc: 'requierePc',
    cantidadInscriptos: 'cantidadInscriptos',
    fechaUltConsulta: 'fechaUltConsulta'
  };

  export type ExamenScalarFieldEnum = (typeof ExamenScalarFieldEnum)[keyof typeof ExamenScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    facultadId: 'facultadId',
    tipoOperacion: 'tipoOperacion',
    resultado: 'resultado',
    mensaje: 'mensaje',
    registrosProcesados: 'registrosProcesados',
    createdAt: 'createdAt'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    dni: 'dni',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    telefono: 'telefono',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const AulaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    capacidad: 'capacidad',
    ubicacion: 'ubicacion',
    disponible: 'disponible',
    alumnosAsignados: 'alumnosAsignados',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const TotemDataScalarFieldEnum: {
    id: 'id',
    sheetName: 'sheetName',
    data: 'data',
    timestamp: 'timestamp',
    processed: 'processed'
  };

  export type TotemDataScalarFieldEnum = (typeof TotemDataScalarFieldEnum)[keyof typeof TotemDataScalarFieldEnum]


  export const ActaExamenScalarFieldEnum: {
    id: 'id',
    examenId: 'examenId',
    estudianteId: 'estudianteId',
    presente: 'presente',
    nota: 'nota',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActaExamenScalarFieldEnum = (typeof ActaExamenScalarFieldEnum)[keyof typeof ActaExamenScalarFieldEnum]


  export const SectorFacultadScalarFieldEnum: {
    id: 'id',
    sector: 'sector',
    facultadId: 'facultadId',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectorFacultadScalarFieldEnum = (typeof SectorFacultadScalarFieldEnum)[keyof typeof SectorFacultadScalarFieldEnum]


  export const CarreraTotemScalarFieldEnum: {
    id: 'id',
    codigoTotem: 'codigoTotem',
    carreraId: 'carreraId',
    nombreTotem: 'nombreTotem',
    activo: 'activo',
    esMapeada: 'esMapeada',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarreraTotemScalarFieldEnum = (typeof CarreraTotemScalarFieldEnum)[keyof typeof CarreraTotemScalarFieldEnum]


  export const ExamenTotemScalarFieldEnum: {
    id: 'id',
    examenId: 'examenId',
    sectorTotem: 'sectorTotem',
    carreraTotem: 'carreraTotem',
    materiaTotem: 'materiaTotem',
    areaTemaTotem: 'areaTemaTotem',
    modoTotem: 'modoTotem',
    urlTotem: 'urlTotem',
    catedraTotem: 'catedraTotem',
    docenteTotem: 'docenteTotem',
    monitoreoTotem: 'monitoreoTotem',
    controlTotem: 'controlTotem',
    dataOriginal: 'dataOriginal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamenTotemScalarFieldEnum = (typeof ExamenTotemScalarFieldEnum)[keyof typeof ExamenTotemScalarFieldEnum]


  export const AulaConfiguracionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    capacidadMaxima: 'capacidadMaxima',
    recursoEspecial: 'recursoEspecial',
    cantidadRecurso: 'cantidadRecurso',
    esParaInformatica: 'esParaInformatica',
    prioridadAsignacion: 'prioridadAsignacion',
    disponible: 'disponible',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AulaConfiguracionScalarFieldEnum = (typeof AulaConfiguracionScalarFieldEnum)[keyof typeof AulaConfiguracionScalarFieldEnum]


  export const ConfiguracionVisualScalarFieldEnum: {
    id: 'id',
    backgroundImage: 'backgroundImage',
    titulo: 'titulo',
    subtitulo: 'subtitulo',
    colorPrimario: 'colorPrimario',
    colorSecundario: 'colorSecundario',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracionVisualScalarFieldEnum = (typeof ConfiguracionVisualScalarFieldEnum)[keyof typeof ConfiguracionVisualScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FacultadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    codigo: 'codigo',
    sheetId: 'sheetId'
  };

  export type FacultadOrderByRelevanceFieldEnum = (typeof FacultadOrderByRelevanceFieldEnum)[keyof typeof FacultadOrderByRelevanceFieldEnum]


  export const CarreraOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    codigo: 'codigo'
  };

  export type CarreraOrderByRelevanceFieldEnum = (typeof CarreraOrderByRelevanceFieldEnum)[keyof typeof CarreraOrderByRelevanceFieldEnum]


  export const ExamenOrderByRelevanceFieldEnum: {
    nombreMateria: 'nombreMateria',
    tipoExamen: 'tipoExamen',
    monitoreo: 'monitoreo',
    materialPermitido: 'materialPermitido',
    observaciones: 'observaciones',
    criterioAsignacion: 'criterioAsignacion',
    modalidadExamen: 'modalidadExamen'
  };

  export type ExamenOrderByRelevanceFieldEnum = (typeof ExamenOrderByRelevanceFieldEnum)[keyof typeof ExamenOrderByRelevanceFieldEnum]


  export const SyncLogOrderByRelevanceFieldEnum: {
    tipoOperacion: 'tipoOperacion',
    resultado: 'resultado',
    mensaje: 'mensaje'
  };

  export type SyncLogOrderByRelevanceFieldEnum = (typeof SyncLogOrderByRelevanceFieldEnum)[keyof typeof SyncLogOrderByRelevanceFieldEnum]


  export const EstudianteOrderByRelevanceFieldEnum: {
    dni: 'dni',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    telefono: 'telefono'
  };

  export type EstudianteOrderByRelevanceFieldEnum = (typeof EstudianteOrderByRelevanceFieldEnum)[keyof typeof EstudianteOrderByRelevanceFieldEnum]


  export const AulaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    ubicacion: 'ubicacion'
  };

  export type AulaOrderByRelevanceFieldEnum = (typeof AulaOrderByRelevanceFieldEnum)[keyof typeof AulaOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const TotemDataOrderByRelevanceFieldEnum: {
    sheetName: 'sheetName'
  };

  export type TotemDataOrderByRelevanceFieldEnum = (typeof TotemDataOrderByRelevanceFieldEnum)[keyof typeof TotemDataOrderByRelevanceFieldEnum]


  export const ActaExamenOrderByRelevanceFieldEnum: {
    observaciones: 'observaciones'
  };

  export type ActaExamenOrderByRelevanceFieldEnum = (typeof ActaExamenOrderByRelevanceFieldEnum)[keyof typeof ActaExamenOrderByRelevanceFieldEnum]


  export const SectorFacultadOrderByRelevanceFieldEnum: {
    sector: 'sector'
  };

  export type SectorFacultadOrderByRelevanceFieldEnum = (typeof SectorFacultadOrderByRelevanceFieldEnum)[keyof typeof SectorFacultadOrderByRelevanceFieldEnum]


  export const CarreraTotemOrderByRelevanceFieldEnum: {
    codigoTotem: 'codigoTotem',
    nombreTotem: 'nombreTotem'
  };

  export type CarreraTotemOrderByRelevanceFieldEnum = (typeof CarreraTotemOrderByRelevanceFieldEnum)[keyof typeof CarreraTotemOrderByRelevanceFieldEnum]


  export const ExamenTotemOrderByRelevanceFieldEnum: {
    sectorTotem: 'sectorTotem',
    carreraTotem: 'carreraTotem',
    materiaTotem: 'materiaTotem',
    areaTemaTotem: 'areaTemaTotem',
    modoTotem: 'modoTotem',
    urlTotem: 'urlTotem',
    catedraTotem: 'catedraTotem',
    docenteTotem: 'docenteTotem',
    monitoreoTotem: 'monitoreoTotem',
    controlTotem: 'controlTotem'
  };

  export type ExamenTotemOrderByRelevanceFieldEnum = (typeof ExamenTotemOrderByRelevanceFieldEnum)[keyof typeof ExamenTotemOrderByRelevanceFieldEnum]


  export const AulaConfiguracionOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    tipo: 'tipo',
    recursoEspecial: 'recursoEspecial',
    observaciones: 'observaciones'
  };

  export type AulaConfiguracionOrderByRelevanceFieldEnum = (typeof AulaConfiguracionOrderByRelevanceFieldEnum)[keyof typeof AulaConfiguracionOrderByRelevanceFieldEnum]


  export const ConfiguracionVisualOrderByRelevanceFieldEnum: {
    backgroundImage: 'backgroundImage',
    titulo: 'titulo',
    subtitulo: 'subtitulo',
    colorPrimario: 'colorPrimario',
    colorSecundario: 'colorSecundario'
  };

  export type ConfiguracionVisualOrderByRelevanceFieldEnum = (typeof ConfiguracionVisualOrderByRelevanceFieldEnum)[keyof typeof ConfiguracionVisualOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FacultadWhereInput = {
    AND?: FacultadWhereInput | FacultadWhereInput[]
    OR?: FacultadWhereInput[]
    NOT?: FacultadWhereInput | FacultadWhereInput[]
    id?: IntFilter<"Facultad"> | number
    nombre?: StringFilter<"Facultad"> | string
    codigo?: StringNullableFilter<"Facultad"> | string | null
    sector?: IntNullableFilter<"Facultad"> | number | null
    sheetId?: StringNullableFilter<"Facultad"> | string | null
    activa?: BoolFilter<"Facultad"> | boolean
    createdAt?: DateTimeFilter<"Facultad"> | Date | string
    updatedAt?: DateTimeFilter<"Facultad"> | Date | string
    carreras?: CarreraListRelationFilter
    sectores?: SectorFacultadListRelationFilter
    syncLogs?: SyncLogListRelationFilter
  }

  export type FacultadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    sheetId?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carreras?: CarreraOrderByRelationAggregateInput
    sectores?: SectorFacultadOrderByRelationAggregateInput
    syncLogs?: SyncLogOrderByRelationAggregateInput
    _relevance?: FacultadOrderByRelevanceInput
  }

  export type FacultadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: FacultadWhereInput | FacultadWhereInput[]
    OR?: FacultadWhereInput[]
    NOT?: FacultadWhereInput | FacultadWhereInput[]
    codigo?: StringNullableFilter<"Facultad"> | string | null
    sector?: IntNullableFilter<"Facultad"> | number | null
    sheetId?: StringNullableFilter<"Facultad"> | string | null
    activa?: BoolFilter<"Facultad"> | boolean
    createdAt?: DateTimeFilter<"Facultad"> | Date | string
    updatedAt?: DateTimeFilter<"Facultad"> | Date | string
    carreras?: CarreraListRelationFilter
    sectores?: SectorFacultadListRelationFilter
    syncLogs?: SyncLogListRelationFilter
  }, "id" | "nombre">

  export type FacultadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    sheetId?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacultadCountOrderByAggregateInput
    _avg?: FacultadAvgOrderByAggregateInput
    _max?: FacultadMaxOrderByAggregateInput
    _min?: FacultadMinOrderByAggregateInput
    _sum?: FacultadSumOrderByAggregateInput
  }

  export type FacultadScalarWhereWithAggregatesInput = {
    AND?: FacultadScalarWhereWithAggregatesInput | FacultadScalarWhereWithAggregatesInput[]
    OR?: FacultadScalarWhereWithAggregatesInput[]
    NOT?: FacultadScalarWhereWithAggregatesInput | FacultadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facultad"> | number
    nombre?: StringWithAggregatesFilter<"Facultad"> | string
    codigo?: StringNullableWithAggregatesFilter<"Facultad"> | string | null
    sector?: IntNullableWithAggregatesFilter<"Facultad"> | number | null
    sheetId?: StringNullableWithAggregatesFilter<"Facultad"> | string | null
    activa?: BoolWithAggregatesFilter<"Facultad"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Facultad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Facultad"> | Date | string
  }

  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    facultadId?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    codigo?: StringFilter<"Carrera"> | string
    activa?: BoolFilter<"Carrera"> | boolean
    createdAt?: DateTimeFilter<"Carrera"> | Date | string
    updatedAt?: DateTimeFilter<"Carrera"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
    carrerasTotem?: CarreraTotemListRelationFilter
    examenes?: ExamenListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    facultadId?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facultad?: FacultadOrderByWithRelationInput
    carrerasTotem?: CarreraTotemOrderByRelationAggregateInput
    examenes?: ExamenOrderByRelationAggregateInput
    _relevance?: CarreraOrderByRelevanceInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    facultadId_codigo?: CarreraFacultadIdCodigoCompoundUniqueInput
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    facultadId?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    codigo?: StringFilter<"Carrera"> | string
    activa?: BoolFilter<"Carrera"> | boolean
    createdAt?: DateTimeFilter<"Carrera"> | Date | string
    updatedAt?: DateTimeFilter<"Carrera"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
    carrerasTotem?: CarreraTotemListRelationFilter
    examenes?: ExamenListRelationFilter
  }, "id" | "facultadId_codigo">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    facultadId?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    facultadId?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
    codigo?: StringWithAggregatesFilter<"Carrera"> | string
    activa?: BoolWithAggregatesFilter<"Carrera"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Carrera"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Carrera"> | Date | string
  }

  export type ExamenWhereInput = {
    AND?: ExamenWhereInput | ExamenWhereInput[]
    OR?: ExamenWhereInput[]
    NOT?: ExamenWhereInput | ExamenWhereInput[]
    id?: IntFilter<"Examen"> | number
    carreraId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    nombreMateria?: StringFilter<"Examen"> | string
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
    asignacionAuto?: BoolFilter<"Examen"> | boolean
    criterioAsignacion?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
    actasExamen?: ActaExamenListRelationFilter
    aula?: XOR<AulaNullableScalarRelationFilter, AulaWhereInput> | null
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    examenTotem?: XOR<ExamenTotemNullableScalarRelationFilter, ExamenTotemWhereInput> | null
  }

  export type ExamenOrderByWithRelationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrderInput | SortOrder
    nombreMateria?: SortOrder
    fecha?: SortOrder
    hora?: SortOrderInput | SortOrder
    tipoExamen?: SortOrderInput | SortOrder
    monitoreo?: SortOrderInput | SortOrder
    materialPermitido?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacionAuto?: SortOrder
    criterioAsignacion?: SortOrderInput | SortOrder
    modalidadExamen?: SortOrderInput | SortOrder
    requierePc?: SortOrder
    cantidadInscriptos?: SortOrderInput | SortOrder
    fechaUltConsulta?: SortOrderInput | SortOrder
    actasExamen?: ActaExamenOrderByRelationAggregateInput
    aula?: AulaOrderByWithRelationInput
    carrera?: CarreraOrderByWithRelationInput
    examenTotem?: ExamenTotemOrderByWithRelationInput
    _relevance?: ExamenOrderByRelevanceInput
  }

  export type ExamenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamenWhereInput | ExamenWhereInput[]
    OR?: ExamenWhereInput[]
    NOT?: ExamenWhereInput | ExamenWhereInput[]
    carreraId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    nombreMateria?: StringFilter<"Examen"> | string
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
    asignacionAuto?: BoolFilter<"Examen"> | boolean
    criterioAsignacion?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
    actasExamen?: ActaExamenListRelationFilter
    aula?: XOR<AulaNullableScalarRelationFilter, AulaWhereInput> | null
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    examenTotem?: XOR<ExamenTotemNullableScalarRelationFilter, ExamenTotemWhereInput> | null
  }, "id">

  export type ExamenOrderByWithAggregationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrderInput | SortOrder
    nombreMateria?: SortOrder
    fecha?: SortOrder
    hora?: SortOrderInput | SortOrder
    tipoExamen?: SortOrderInput | SortOrder
    monitoreo?: SortOrderInput | SortOrder
    materialPermitido?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacionAuto?: SortOrder
    criterioAsignacion?: SortOrderInput | SortOrder
    modalidadExamen?: SortOrderInput | SortOrder
    requierePc?: SortOrder
    cantidadInscriptos?: SortOrderInput | SortOrder
    fechaUltConsulta?: SortOrderInput | SortOrder
    _count?: ExamenCountOrderByAggregateInput
    _avg?: ExamenAvgOrderByAggregateInput
    _max?: ExamenMaxOrderByAggregateInput
    _min?: ExamenMinOrderByAggregateInput
    _sum?: ExamenSumOrderByAggregateInput
  }

  export type ExamenScalarWhereWithAggregatesInput = {
    AND?: ExamenScalarWhereWithAggregatesInput | ExamenScalarWhereWithAggregatesInput[]
    OR?: ExamenScalarWhereWithAggregatesInput[]
    NOT?: ExamenScalarWhereWithAggregatesInput | ExamenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Examen"> | number
    carreraId?: IntWithAggregatesFilter<"Examen"> | number
    aulaId?: IntNullableWithAggregatesFilter<"Examen"> | number | null
    nombreMateria?: StringWithAggregatesFilter<"Examen"> | string
    fecha?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
    hora?: DateTimeNullableWithAggregatesFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    monitoreo?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    materialPermitido?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    activo?: BoolWithAggregatesFilter<"Examen"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
    asignacionAuto?: BoolWithAggregatesFilter<"Examen"> | boolean
    criterioAsignacion?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    requierePc?: BoolWithAggregatesFilter<"Examen"> | boolean
    cantidadInscriptos?: IntNullableWithAggregatesFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableWithAggregatesFilter<"Examen"> | Date | string | null
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: IntFilter<"SyncLog"> | number
    facultadId?: IntFilter<"SyncLog"> | number
    tipoOperacion?: StringFilter<"SyncLog"> | string
    resultado?: StringFilter<"SyncLog"> | string
    mensaje?: StringNullableFilter<"SyncLog"> | string | null
    registrosProcesados?: IntFilter<"SyncLog"> | number
    createdAt?: DateTimeFilter<"SyncLog"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    facultadId?: SortOrder
    tipoOperacion?: SortOrder
    resultado?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    registrosProcesados?: SortOrder
    createdAt?: SortOrder
    facultad?: FacultadOrderByWithRelationInput
    _relevance?: SyncLogOrderByRelevanceInput
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    facultadId?: IntFilter<"SyncLog"> | number
    tipoOperacion?: StringFilter<"SyncLog"> | string
    resultado?: StringFilter<"SyncLog"> | string
    mensaje?: StringNullableFilter<"SyncLog"> | string | null
    registrosProcesados?: IntFilter<"SyncLog"> | number
    createdAt?: DateTimeFilter<"SyncLog"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    facultadId?: SortOrder
    tipoOperacion?: SortOrder
    resultado?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    registrosProcesados?: SortOrder
    createdAt?: SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _avg?: SyncLogAvgOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
    _sum?: SyncLogSumOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SyncLog"> | number
    facultadId?: IntWithAggregatesFilter<"SyncLog"> | number
    tipoOperacion?: StringWithAggregatesFilter<"SyncLog"> | string
    resultado?: StringWithAggregatesFilter<"SyncLog"> | string
    mensaje?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    registrosProcesados?: IntWithAggregatesFilter<"SyncLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    dni?: StringFilter<"Estudiante"> | string
    nombre?: StringFilter<"Estudiante"> | string
    apellido?: StringFilter<"Estudiante"> | string
    email?: StringNullableFilter<"Estudiante"> | string | null
    telefono?: StringNullableFilter<"Estudiante"> | string | null
    activo?: BoolFilter<"Estudiante"> | boolean
    createdAt?: DateTimeFilter<"Estudiante"> | Date | string
    updatedAt?: DateTimeFilter<"Estudiante"> | Date | string
    actasExamen?: ActaExamenListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    actasExamen?: ActaExamenOrderByRelationAggregateInput
    _relevance?: EstudianteOrderByRelevanceInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    apellido?: StringFilter<"Estudiante"> | string
    email?: StringNullableFilter<"Estudiante"> | string | null
    telefono?: StringNullableFilter<"Estudiante"> | string | null
    activo?: BoolFilter<"Estudiante"> | boolean
    createdAt?: DateTimeFilter<"Estudiante"> | Date | string
    updatedAt?: DateTimeFilter<"Estudiante"> | Date | string
    actasExamen?: ActaExamenListRelationFilter
  }, "id" | "dni">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    dni?: StringWithAggregatesFilter<"Estudiante"> | string
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
    apellido?: StringWithAggregatesFilter<"Estudiante"> | string
    email?: StringNullableWithAggregatesFilter<"Estudiante"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Estudiante"> | string | null
    activo?: BoolWithAggregatesFilter<"Estudiante"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Estudiante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Estudiante"> | Date | string
  }

  export type AulaWhereInput = {
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    id?: IntFilter<"Aula"> | number
    nombre?: StringFilter<"Aula"> | string
    capacidad?: IntNullableFilter<"Aula"> | number | null
    ubicacion?: StringNullableFilter<"Aula"> | string | null
    disponible?: BoolFilter<"Aula"> | boolean
    alumnosAsignados?: IntFilter<"Aula"> | number
    createdAt?: DateTimeFilter<"Aula"> | Date | string
    updatedAt?: DateTimeFilter<"Aula"> | Date | string
    examenes?: ExamenListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    disponible?: SortOrder
    alumnosAsignados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examenes?: ExamenOrderByRelationAggregateInput
    _relevance?: AulaOrderByRelevanceInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    capacidad?: IntNullableFilter<"Aula"> | number | null
    ubicacion?: StringNullableFilter<"Aula"> | string | null
    disponible?: BoolFilter<"Aula"> | boolean
    alumnosAsignados?: IntFilter<"Aula"> | number
    createdAt?: DateTimeFilter<"Aula"> | Date | string
    updatedAt?: DateTimeFilter<"Aula"> | Date | string
    examenes?: ExamenListRelationFilter
  }, "id" | "nombre">

  export type AulaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    disponible?: SortOrder
    alumnosAsignados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AulaCountOrderByAggregateInput
    _avg?: AulaAvgOrderByAggregateInput
    _max?: AulaMaxOrderByAggregateInput
    _min?: AulaMinOrderByAggregateInput
    _sum?: AulaSumOrderByAggregateInput
  }

  export type AulaScalarWhereWithAggregatesInput = {
    AND?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    OR?: AulaScalarWhereWithAggregatesInput[]
    NOT?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aula"> | number
    nombre?: StringWithAggregatesFilter<"Aula"> | string
    capacidad?: IntNullableWithAggregatesFilter<"Aula"> | number | null
    ubicacion?: StringNullableWithAggregatesFilter<"Aula"> | string | null
    disponible?: BoolWithAggregatesFilter<"Aula"> | boolean
    alumnosAsignados?: IntWithAggregatesFilter<"Aula"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
  }

  export type TotemDataWhereInput = {
    AND?: TotemDataWhereInput | TotemDataWhereInput[]
    OR?: TotemDataWhereInput[]
    NOT?: TotemDataWhereInput | TotemDataWhereInput[]
    id?: IntFilter<"TotemData"> | number
    sheetName?: StringFilter<"TotemData"> | string
    data?: JsonFilter<"TotemData">
    timestamp?: DateTimeFilter<"TotemData"> | Date | string
    processed?: BoolFilter<"TotemData"> | boolean
  }

  export type TotemDataOrderByWithRelationInput = {
    id?: SortOrder
    sheetName?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
    _relevance?: TotemDataOrderByRelevanceInput
  }

  export type TotemDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TotemDataWhereInput | TotemDataWhereInput[]
    OR?: TotemDataWhereInput[]
    NOT?: TotemDataWhereInput | TotemDataWhereInput[]
    sheetName?: StringFilter<"TotemData"> | string
    data?: JsonFilter<"TotemData">
    timestamp?: DateTimeFilter<"TotemData"> | Date | string
    processed?: BoolFilter<"TotemData"> | boolean
  }, "id">

  export type TotemDataOrderByWithAggregationInput = {
    id?: SortOrder
    sheetName?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
    _count?: TotemDataCountOrderByAggregateInput
    _avg?: TotemDataAvgOrderByAggregateInput
    _max?: TotemDataMaxOrderByAggregateInput
    _min?: TotemDataMinOrderByAggregateInput
    _sum?: TotemDataSumOrderByAggregateInput
  }

  export type TotemDataScalarWhereWithAggregatesInput = {
    AND?: TotemDataScalarWhereWithAggregatesInput | TotemDataScalarWhereWithAggregatesInput[]
    OR?: TotemDataScalarWhereWithAggregatesInput[]
    NOT?: TotemDataScalarWhereWithAggregatesInput | TotemDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TotemData"> | number
    sheetName?: StringWithAggregatesFilter<"TotemData"> | string
    data?: JsonWithAggregatesFilter<"TotemData">
    timestamp?: DateTimeWithAggregatesFilter<"TotemData"> | Date | string
    processed?: BoolWithAggregatesFilter<"TotemData"> | boolean
  }

  export type ActaExamenWhereInput = {
    AND?: ActaExamenWhereInput | ActaExamenWhereInput[]
    OR?: ActaExamenWhereInput[]
    NOT?: ActaExamenWhereInput | ActaExamenWhereInput[]
    id?: IntFilter<"ActaExamen"> | number
    examenId?: IntFilter<"ActaExamen"> | number
    estudianteId?: IntFilter<"ActaExamen"> | number
    presente?: BoolNullableFilter<"ActaExamen"> | boolean | null
    nota?: DecimalNullableFilter<"ActaExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"ActaExamen"> | string | null
    createdAt?: DateTimeFilter<"ActaExamen"> | Date | string
    updatedAt?: DateTimeFilter<"ActaExamen"> | Date | string
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
  }

  export type ActaExamenOrderByWithRelationInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    presente?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    examen?: ExamenOrderByWithRelationInput
    _relevance?: ActaExamenOrderByRelevanceInput
  }

  export type ActaExamenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    examenId_estudianteId?: ActaExamenExamenIdEstudianteIdCompoundUniqueInput
    AND?: ActaExamenWhereInput | ActaExamenWhereInput[]
    OR?: ActaExamenWhereInput[]
    NOT?: ActaExamenWhereInput | ActaExamenWhereInput[]
    examenId?: IntFilter<"ActaExamen"> | number
    estudianteId?: IntFilter<"ActaExamen"> | number
    presente?: BoolNullableFilter<"ActaExamen"> | boolean | null
    nota?: DecimalNullableFilter<"ActaExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"ActaExamen"> | string | null
    createdAt?: DateTimeFilter<"ActaExamen"> | Date | string
    updatedAt?: DateTimeFilter<"ActaExamen"> | Date | string
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
  }, "id" | "examenId_estudianteId">

  export type ActaExamenOrderByWithAggregationInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    presente?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActaExamenCountOrderByAggregateInput
    _avg?: ActaExamenAvgOrderByAggregateInput
    _max?: ActaExamenMaxOrderByAggregateInput
    _min?: ActaExamenMinOrderByAggregateInput
    _sum?: ActaExamenSumOrderByAggregateInput
  }

  export type ActaExamenScalarWhereWithAggregatesInput = {
    AND?: ActaExamenScalarWhereWithAggregatesInput | ActaExamenScalarWhereWithAggregatesInput[]
    OR?: ActaExamenScalarWhereWithAggregatesInput[]
    NOT?: ActaExamenScalarWhereWithAggregatesInput | ActaExamenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActaExamen"> | number
    examenId?: IntWithAggregatesFilter<"ActaExamen"> | number
    estudianteId?: IntWithAggregatesFilter<"ActaExamen"> | number
    presente?: BoolNullableWithAggregatesFilter<"ActaExamen"> | boolean | null
    nota?: DecimalNullableWithAggregatesFilter<"ActaExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableWithAggregatesFilter<"ActaExamen"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActaExamen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActaExamen"> | Date | string
  }

  export type SectorFacultadWhereInput = {
    AND?: SectorFacultadWhereInput | SectorFacultadWhereInput[]
    OR?: SectorFacultadWhereInput[]
    NOT?: SectorFacultadWhereInput | SectorFacultadWhereInput[]
    id?: IntFilter<"SectorFacultad"> | number
    sector?: StringFilter<"SectorFacultad"> | string
    facultadId?: IntFilter<"SectorFacultad"> | number
    activo?: BoolFilter<"SectorFacultad"> | boolean
    createdAt?: DateTimeFilter<"SectorFacultad"> | Date | string
    updatedAt?: DateTimeFilter<"SectorFacultad"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }

  export type SectorFacultadOrderByWithRelationInput = {
    id?: SortOrder
    sector?: SortOrder
    facultadId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facultad?: FacultadOrderByWithRelationInput
    _relevance?: SectorFacultadOrderByRelevanceInput
  }

  export type SectorFacultadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sector?: string
    AND?: SectorFacultadWhereInput | SectorFacultadWhereInput[]
    OR?: SectorFacultadWhereInput[]
    NOT?: SectorFacultadWhereInput | SectorFacultadWhereInput[]
    facultadId?: IntFilter<"SectorFacultad"> | number
    activo?: BoolFilter<"SectorFacultad"> | boolean
    createdAt?: DateTimeFilter<"SectorFacultad"> | Date | string
    updatedAt?: DateTimeFilter<"SectorFacultad"> | Date | string
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }, "id" | "sector">

  export type SectorFacultadOrderByWithAggregationInput = {
    id?: SortOrder
    sector?: SortOrder
    facultadId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectorFacultadCountOrderByAggregateInput
    _avg?: SectorFacultadAvgOrderByAggregateInput
    _max?: SectorFacultadMaxOrderByAggregateInput
    _min?: SectorFacultadMinOrderByAggregateInput
    _sum?: SectorFacultadSumOrderByAggregateInput
  }

  export type SectorFacultadScalarWhereWithAggregatesInput = {
    AND?: SectorFacultadScalarWhereWithAggregatesInput | SectorFacultadScalarWhereWithAggregatesInput[]
    OR?: SectorFacultadScalarWhereWithAggregatesInput[]
    NOT?: SectorFacultadScalarWhereWithAggregatesInput | SectorFacultadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SectorFacultad"> | number
    sector?: StringWithAggregatesFilter<"SectorFacultad"> | string
    facultadId?: IntWithAggregatesFilter<"SectorFacultad"> | number
    activo?: BoolWithAggregatesFilter<"SectorFacultad"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SectorFacultad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SectorFacultad"> | Date | string
  }

  export type CarreraTotemWhereInput = {
    AND?: CarreraTotemWhereInput | CarreraTotemWhereInput[]
    OR?: CarreraTotemWhereInput[]
    NOT?: CarreraTotemWhereInput | CarreraTotemWhereInput[]
    id?: IntFilter<"CarreraTotem"> | number
    codigoTotem?: StringFilter<"CarreraTotem"> | string
    carreraId?: IntNullableFilter<"CarreraTotem"> | number | null
    nombreTotem?: StringFilter<"CarreraTotem"> | string
    activo?: BoolFilter<"CarreraTotem"> | boolean
    esMapeada?: BoolFilter<"CarreraTotem"> | boolean
    createdAt?: DateTimeFilter<"CarreraTotem"> | Date | string
    updatedAt?: DateTimeFilter<"CarreraTotem"> | Date | string
    carrera?: XOR<CarreraNullableScalarRelationFilter, CarreraWhereInput> | null
  }

  export type CarreraTotemOrderByWithRelationInput = {
    id?: SortOrder
    codigoTotem?: SortOrder
    carreraId?: SortOrderInput | SortOrder
    nombreTotem?: SortOrder
    activo?: SortOrder
    esMapeada?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    _relevance?: CarreraTotemOrderByRelevanceInput
  }

  export type CarreraTotemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoTotem?: string
    AND?: CarreraTotemWhereInput | CarreraTotemWhereInput[]
    OR?: CarreraTotemWhereInput[]
    NOT?: CarreraTotemWhereInput | CarreraTotemWhereInput[]
    carreraId?: IntNullableFilter<"CarreraTotem"> | number | null
    nombreTotem?: StringFilter<"CarreraTotem"> | string
    activo?: BoolFilter<"CarreraTotem"> | boolean
    esMapeada?: BoolFilter<"CarreraTotem"> | boolean
    createdAt?: DateTimeFilter<"CarreraTotem"> | Date | string
    updatedAt?: DateTimeFilter<"CarreraTotem"> | Date | string
    carrera?: XOR<CarreraNullableScalarRelationFilter, CarreraWhereInput> | null
  }, "id" | "codigoTotem">

  export type CarreraTotemOrderByWithAggregationInput = {
    id?: SortOrder
    codigoTotem?: SortOrder
    carreraId?: SortOrderInput | SortOrder
    nombreTotem?: SortOrder
    activo?: SortOrder
    esMapeada?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarreraTotemCountOrderByAggregateInput
    _avg?: CarreraTotemAvgOrderByAggregateInput
    _max?: CarreraTotemMaxOrderByAggregateInput
    _min?: CarreraTotemMinOrderByAggregateInput
    _sum?: CarreraTotemSumOrderByAggregateInput
  }

  export type CarreraTotemScalarWhereWithAggregatesInput = {
    AND?: CarreraTotemScalarWhereWithAggregatesInput | CarreraTotemScalarWhereWithAggregatesInput[]
    OR?: CarreraTotemScalarWhereWithAggregatesInput[]
    NOT?: CarreraTotemScalarWhereWithAggregatesInput | CarreraTotemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarreraTotem"> | number
    codigoTotem?: StringWithAggregatesFilter<"CarreraTotem"> | string
    carreraId?: IntNullableWithAggregatesFilter<"CarreraTotem"> | number | null
    nombreTotem?: StringWithAggregatesFilter<"CarreraTotem"> | string
    activo?: BoolWithAggregatesFilter<"CarreraTotem"> | boolean
    esMapeada?: BoolWithAggregatesFilter<"CarreraTotem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CarreraTotem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarreraTotem"> | Date | string
  }

  export type ExamenTotemWhereInput = {
    AND?: ExamenTotemWhereInput | ExamenTotemWhereInput[]
    OR?: ExamenTotemWhereInput[]
    NOT?: ExamenTotemWhereInput | ExamenTotemWhereInput[]
    id?: IntFilter<"ExamenTotem"> | number
    examenId?: IntFilter<"ExamenTotem"> | number
    sectorTotem?: StringFilter<"ExamenTotem"> | string
    carreraTotem?: StringFilter<"ExamenTotem"> | string
    materiaTotem?: StringFilter<"ExamenTotem"> | string
    areaTemaTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    modoTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    urlTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    catedraTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    docenteTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    monitoreoTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    controlTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    dataOriginal?: JsonFilter<"ExamenTotem">
    createdAt?: DateTimeFilter<"ExamenTotem"> | Date | string
    updatedAt?: DateTimeFilter<"ExamenTotem"> | Date | string
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
  }

  export type ExamenTotemOrderByWithRelationInput = {
    id?: SortOrder
    examenId?: SortOrder
    sectorTotem?: SortOrder
    carreraTotem?: SortOrder
    materiaTotem?: SortOrder
    areaTemaTotem?: SortOrderInput | SortOrder
    modoTotem?: SortOrderInput | SortOrder
    urlTotem?: SortOrderInput | SortOrder
    catedraTotem?: SortOrderInput | SortOrder
    docenteTotem?: SortOrderInput | SortOrder
    monitoreoTotem?: SortOrderInput | SortOrder
    controlTotem?: SortOrderInput | SortOrder
    dataOriginal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examen?: ExamenOrderByWithRelationInput
    _relevance?: ExamenTotemOrderByRelevanceInput
  }

  export type ExamenTotemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    examenId?: number
    AND?: ExamenTotemWhereInput | ExamenTotemWhereInput[]
    OR?: ExamenTotemWhereInput[]
    NOT?: ExamenTotemWhereInput | ExamenTotemWhereInput[]
    sectorTotem?: StringFilter<"ExamenTotem"> | string
    carreraTotem?: StringFilter<"ExamenTotem"> | string
    materiaTotem?: StringFilter<"ExamenTotem"> | string
    areaTemaTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    modoTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    urlTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    catedraTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    docenteTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    monitoreoTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    controlTotem?: StringNullableFilter<"ExamenTotem"> | string | null
    dataOriginal?: JsonFilter<"ExamenTotem">
    createdAt?: DateTimeFilter<"ExamenTotem"> | Date | string
    updatedAt?: DateTimeFilter<"ExamenTotem"> | Date | string
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
  }, "id" | "examenId">

  export type ExamenTotemOrderByWithAggregationInput = {
    id?: SortOrder
    examenId?: SortOrder
    sectorTotem?: SortOrder
    carreraTotem?: SortOrder
    materiaTotem?: SortOrder
    areaTemaTotem?: SortOrderInput | SortOrder
    modoTotem?: SortOrderInput | SortOrder
    urlTotem?: SortOrderInput | SortOrder
    catedraTotem?: SortOrderInput | SortOrder
    docenteTotem?: SortOrderInput | SortOrder
    monitoreoTotem?: SortOrderInput | SortOrder
    controlTotem?: SortOrderInput | SortOrder
    dataOriginal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamenTotemCountOrderByAggregateInput
    _avg?: ExamenTotemAvgOrderByAggregateInput
    _max?: ExamenTotemMaxOrderByAggregateInput
    _min?: ExamenTotemMinOrderByAggregateInput
    _sum?: ExamenTotemSumOrderByAggregateInput
  }

  export type ExamenTotemScalarWhereWithAggregatesInput = {
    AND?: ExamenTotemScalarWhereWithAggregatesInput | ExamenTotemScalarWhereWithAggregatesInput[]
    OR?: ExamenTotemScalarWhereWithAggregatesInput[]
    NOT?: ExamenTotemScalarWhereWithAggregatesInput | ExamenTotemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamenTotem"> | number
    examenId?: IntWithAggregatesFilter<"ExamenTotem"> | number
    sectorTotem?: StringWithAggregatesFilter<"ExamenTotem"> | string
    carreraTotem?: StringWithAggregatesFilter<"ExamenTotem"> | string
    materiaTotem?: StringWithAggregatesFilter<"ExamenTotem"> | string
    areaTemaTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    modoTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    urlTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    catedraTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    docenteTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    monitoreoTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    controlTotem?: StringNullableWithAggregatesFilter<"ExamenTotem"> | string | null
    dataOriginal?: JsonWithAggregatesFilter<"ExamenTotem">
    createdAt?: DateTimeWithAggregatesFilter<"ExamenTotem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExamenTotem"> | Date | string
  }

  export type AulaConfiguracionWhereInput = {
    AND?: AulaConfiguracionWhereInput | AulaConfiguracionWhereInput[]
    OR?: AulaConfiguracionWhereInput[]
    NOT?: AulaConfiguracionWhereInput | AulaConfiguracionWhereInput[]
    id?: IntFilter<"AulaConfiguracion"> | number
    nombre?: StringFilter<"AulaConfiguracion"> | string
    tipo?: StringFilter<"AulaConfiguracion"> | string
    capacidadMaxima?: IntFilter<"AulaConfiguracion"> | number
    recursoEspecial?: StringNullableFilter<"AulaConfiguracion"> | string | null
    cantidadRecurso?: IntNullableFilter<"AulaConfiguracion"> | number | null
    esParaInformatica?: BoolFilter<"AulaConfiguracion"> | boolean
    prioridadAsignacion?: IntFilter<"AulaConfiguracion"> | number
    disponible?: BoolFilter<"AulaConfiguracion"> | boolean
    observaciones?: StringNullableFilter<"AulaConfiguracion"> | string | null
    createdAt?: DateTimeFilter<"AulaConfiguracion"> | Date | string
    updatedAt?: DateTimeFilter<"AulaConfiguracion"> | Date | string
  }

  export type AulaConfiguracionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    capacidadMaxima?: SortOrder
    recursoEspecial?: SortOrderInput | SortOrder
    cantidadRecurso?: SortOrderInput | SortOrder
    esParaInformatica?: SortOrder
    prioridadAsignacion?: SortOrder
    disponible?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AulaConfiguracionOrderByRelevanceInput
  }

  export type AulaConfiguracionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: AulaConfiguracionWhereInput | AulaConfiguracionWhereInput[]
    OR?: AulaConfiguracionWhereInput[]
    NOT?: AulaConfiguracionWhereInput | AulaConfiguracionWhereInput[]
    tipo?: StringFilter<"AulaConfiguracion"> | string
    capacidadMaxima?: IntFilter<"AulaConfiguracion"> | number
    recursoEspecial?: StringNullableFilter<"AulaConfiguracion"> | string | null
    cantidadRecurso?: IntNullableFilter<"AulaConfiguracion"> | number | null
    esParaInformatica?: BoolFilter<"AulaConfiguracion"> | boolean
    prioridadAsignacion?: IntFilter<"AulaConfiguracion"> | number
    disponible?: BoolFilter<"AulaConfiguracion"> | boolean
    observaciones?: StringNullableFilter<"AulaConfiguracion"> | string | null
    createdAt?: DateTimeFilter<"AulaConfiguracion"> | Date | string
    updatedAt?: DateTimeFilter<"AulaConfiguracion"> | Date | string
  }, "id" | "nombre">

  export type AulaConfiguracionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    capacidadMaxima?: SortOrder
    recursoEspecial?: SortOrderInput | SortOrder
    cantidadRecurso?: SortOrderInput | SortOrder
    esParaInformatica?: SortOrder
    prioridadAsignacion?: SortOrder
    disponible?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AulaConfiguracionCountOrderByAggregateInput
    _avg?: AulaConfiguracionAvgOrderByAggregateInput
    _max?: AulaConfiguracionMaxOrderByAggregateInput
    _min?: AulaConfiguracionMinOrderByAggregateInput
    _sum?: AulaConfiguracionSumOrderByAggregateInput
  }

  export type AulaConfiguracionScalarWhereWithAggregatesInput = {
    AND?: AulaConfiguracionScalarWhereWithAggregatesInput | AulaConfiguracionScalarWhereWithAggregatesInput[]
    OR?: AulaConfiguracionScalarWhereWithAggregatesInput[]
    NOT?: AulaConfiguracionScalarWhereWithAggregatesInput | AulaConfiguracionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AulaConfiguracion"> | number
    nombre?: StringWithAggregatesFilter<"AulaConfiguracion"> | string
    tipo?: StringWithAggregatesFilter<"AulaConfiguracion"> | string
    capacidadMaxima?: IntWithAggregatesFilter<"AulaConfiguracion"> | number
    recursoEspecial?: StringNullableWithAggregatesFilter<"AulaConfiguracion"> | string | null
    cantidadRecurso?: IntNullableWithAggregatesFilter<"AulaConfiguracion"> | number | null
    esParaInformatica?: BoolWithAggregatesFilter<"AulaConfiguracion"> | boolean
    prioridadAsignacion?: IntWithAggregatesFilter<"AulaConfiguracion"> | number
    disponible?: BoolWithAggregatesFilter<"AulaConfiguracion"> | boolean
    observaciones?: StringNullableWithAggregatesFilter<"AulaConfiguracion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AulaConfiguracion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AulaConfiguracion"> | Date | string
  }

  export type ConfiguracionVisualWhereInput = {
    AND?: ConfiguracionVisualWhereInput | ConfiguracionVisualWhereInput[]
    OR?: ConfiguracionVisualWhereInput[]
    NOT?: ConfiguracionVisualWhereInput | ConfiguracionVisualWhereInput[]
    id?: IntFilter<"ConfiguracionVisual"> | number
    backgroundImage?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    titulo?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    subtitulo?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    colorPrimario?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    colorSecundario?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    activa?: BoolFilter<"ConfiguracionVisual"> | boolean
    createdAt?: DateTimeFilter<"ConfiguracionVisual"> | Date | string
    updatedAt?: DateTimeFilter<"ConfiguracionVisual"> | Date | string
  }

  export type ConfiguracionVisualOrderByWithRelationInput = {
    id?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    colorPrimario?: SortOrderInput | SortOrder
    colorSecundario?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ConfiguracionVisualOrderByRelevanceInput
  }

  export type ConfiguracionVisualWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfiguracionVisualWhereInput | ConfiguracionVisualWhereInput[]
    OR?: ConfiguracionVisualWhereInput[]
    NOT?: ConfiguracionVisualWhereInput | ConfiguracionVisualWhereInput[]
    backgroundImage?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    titulo?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    subtitulo?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    colorPrimario?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    colorSecundario?: StringNullableFilter<"ConfiguracionVisual"> | string | null
    activa?: BoolFilter<"ConfiguracionVisual"> | boolean
    createdAt?: DateTimeFilter<"ConfiguracionVisual"> | Date | string
    updatedAt?: DateTimeFilter<"ConfiguracionVisual"> | Date | string
  }, "id">

  export type ConfiguracionVisualOrderByWithAggregationInput = {
    id?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    colorPrimario?: SortOrderInput | SortOrder
    colorSecundario?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracionVisualCountOrderByAggregateInput
    _avg?: ConfiguracionVisualAvgOrderByAggregateInput
    _max?: ConfiguracionVisualMaxOrderByAggregateInput
    _min?: ConfiguracionVisualMinOrderByAggregateInput
    _sum?: ConfiguracionVisualSumOrderByAggregateInput
  }

  export type ConfiguracionVisualScalarWhereWithAggregatesInput = {
    AND?: ConfiguracionVisualScalarWhereWithAggregatesInput | ConfiguracionVisualScalarWhereWithAggregatesInput[]
    OR?: ConfiguracionVisualScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracionVisualScalarWhereWithAggregatesInput | ConfiguracionVisualScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConfiguracionVisual"> | number
    backgroundImage?: StringNullableWithAggregatesFilter<"ConfiguracionVisual"> | string | null
    titulo?: StringNullableWithAggregatesFilter<"ConfiguracionVisual"> | string | null
    subtitulo?: StringNullableWithAggregatesFilter<"ConfiguracionVisual"> | string | null
    colorPrimario?: StringNullableWithAggregatesFilter<"ConfiguracionVisual"> | string | null
    colorSecundario?: StringNullableWithAggregatesFilter<"ConfiguracionVisual"> | string | null
    activa?: BoolWithAggregatesFilter<"ConfiguracionVisual"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ConfiguracionVisual"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConfiguracionVisual"> | Date | string
  }

  export type FacultadCreateInput = {
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadCreateManyInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraCreateInput = {
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutCarrerasInput
    carrerasTotem?: CarreraTotemCreateNestedManyWithoutCarreraInput
    examenes?: ExamenCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    facultadId: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrerasTotem?: CarreraTotemUncheckedCreateNestedManyWithoutCarreraInput
    examenes?: ExamenUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutCarrerasNestedInput
    carrerasTotem?: CarreraTotemUpdateManyWithoutCarreraNestedInput
    examenes?: ExamenUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrerasTotem?: CarreraTotemUncheckedUpdateManyWithoutCarreraNestedInput
    examenes?: ExamenUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    facultadId: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenCreateInput = {
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenCreateNestedManyWithoutExamenInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
  }

  export type ExamenUncheckedCreateInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenUncheckedCreateNestedManyWithoutExamenInput
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
  }

  export type ExamenUpdateInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUpdateManyWithoutExamenNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUncheckedUpdateManyWithoutExamenNestedInput
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
  }

  export type ExamenCreateManyInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
  }

  export type ExamenUpdateManyMutationInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncLogCreateInput = {
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutSyncLogsInput
  }

  export type SyncLogUncheckedCreateInput = {
    id?: number
    facultadId: number
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
  }

  export type SyncLogUpdateInput = {
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutSyncLogsNestedInput
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateManyInput = {
    id?: number
    facultadId: number
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
  }

  export type SyncLogUpdateManyMutationInput = {
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteCreateInput = {
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    actasExamen?: ActaExamenCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    actasExamen?: ActaExamenUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actasExamen?: ActaExamenUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actasExamen?: ActaExamenUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaCreateInput = {
    nombre: string
    capacidad?: number | null
    ubicacion?: string | null
    disponible?: boolean
    alumnosAsignados?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id?: number
    nombre: string
    capacidad?: number | null
    ubicacion?: string | null
    disponible?: boolean
    alumnosAsignados?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id?: number
    nombre: string
    capacidad?: number | null
    ubicacion?: string | null
    disponible?: boolean
    alumnosAsignados?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TotemDataCreateInput = {
    sheetName: string
    data: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type TotemDataUncheckedCreateInput = {
    id?: number
    sheetName: string
    data: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type TotemDataUpdateInput = {
    sheetName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TotemDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TotemDataCreateManyInput = {
    id?: number
    sheetName: string
    data: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type TotemDataUpdateManyMutationInput = {
    sheetName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TotemDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActaExamenCreateInput = {
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estudiante: EstudianteCreateNestedOneWithoutActasExamenInput
    examen: ExamenCreateNestedOneWithoutActasExamenInput
  }

  export type ActaExamenUncheckedCreateInput = {
    id?: number
    examenId: number
    estudianteId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenUpdateInput = {
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutActasExamenNestedInput
    examen?: ExamenUpdateOneRequiredWithoutActasExamenNestedInput
  }

  export type ActaExamenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActaExamenCreateManyInput = {
    id?: number
    examenId: number
    estudianteId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenUpdateManyMutationInput = {
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActaExamenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadCreateInput = {
    sector: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutSectoresInput
  }

  export type SectorFacultadUncheckedCreateInput = {
    id?: number
    sector: string
    facultadId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorFacultadUpdateInput = {
    sector?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutSectoresNestedInput
  }

  export type SectorFacultadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    facultadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadCreateManyInput = {
    id?: number
    sector: string
    facultadId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorFacultadUpdateManyMutationInput = {
    sector?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    facultadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemCreateInput = {
    codigoTotem: string
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera?: CarreraCreateNestedOneWithoutCarrerasTotemInput
  }

  export type CarreraTotemUncheckedCreateInput = {
    id?: number
    codigoTotem: string
    carreraId?: number | null
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarreraTotemUpdateInput = {
    codigoTotem?: StringFieldUpdateOperationsInput | string
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneWithoutCarrerasTotemNestedInput
  }

  export type CarreraTotemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoTotem?: StringFieldUpdateOperationsInput | string
    carreraId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemCreateManyInput = {
    id?: number
    codigoTotem: string
    carreraId?: number | null
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarreraTotemUpdateManyMutationInput = {
    codigoTotem?: StringFieldUpdateOperationsInput | string
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoTotem?: StringFieldUpdateOperationsInput | string
    carreraId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenTotemCreateInput = {
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem?: string | null
    modoTotem?: string | null
    urlTotem?: string | null
    catedraTotem?: string | null
    docenteTotem?: string | null
    monitoreoTotem?: string | null
    controlTotem?: string | null
    dataOriginal: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    examen: ExamenCreateNestedOneWithoutExamenTotemInput
  }

  export type ExamenTotemUncheckedCreateInput = {
    id?: number
    examenId: number
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem?: string | null
    modoTotem?: string | null
    urlTotem?: string | null
    catedraTotem?: string | null
    docenteTotem?: string | null
    monitoreoTotem?: string | null
    controlTotem?: string | null
    dataOriginal: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenTotemUpdateInput = {
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examen?: ExamenUpdateOneRequiredWithoutExamenTotemNestedInput
  }

  export type ExamenTotemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenTotemCreateManyInput = {
    id?: number
    examenId: number
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem?: string | null
    modoTotem?: string | null
    urlTotem?: string | null
    catedraTotem?: string | null
    docenteTotem?: string | null
    monitoreoTotem?: string | null
    controlTotem?: string | null
    dataOriginal: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenTotemUpdateManyMutationInput = {
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenTotemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaConfiguracionCreateInput = {
    nombre: string
    tipo: string
    capacidadMaxima: number
    recursoEspecial?: string | null
    cantidadRecurso?: number | null
    esParaInformatica?: boolean
    prioridadAsignacion?: number
    disponible?: boolean
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaConfiguracionUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo: string
    capacidadMaxima: number
    recursoEspecial?: string | null
    cantidadRecurso?: number | null
    esParaInformatica?: boolean
    prioridadAsignacion?: number
    disponible?: boolean
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaConfiguracionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidadMaxima?: IntFieldUpdateOperationsInput | number
    recursoEspecial?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadRecurso?: NullableIntFieldUpdateOperationsInput | number | null
    esParaInformatica?: BoolFieldUpdateOperationsInput | boolean
    prioridadAsignacion?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaConfiguracionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidadMaxima?: IntFieldUpdateOperationsInput | number
    recursoEspecial?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadRecurso?: NullableIntFieldUpdateOperationsInput | number | null
    esParaInformatica?: BoolFieldUpdateOperationsInput | boolean
    prioridadAsignacion?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaConfiguracionCreateManyInput = {
    id?: number
    nombre: string
    tipo: string
    capacidadMaxima: number
    recursoEspecial?: string | null
    cantidadRecurso?: number | null
    esParaInformatica?: boolean
    prioridadAsignacion?: number
    disponible?: boolean
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaConfiguracionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidadMaxima?: IntFieldUpdateOperationsInput | number
    recursoEspecial?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadRecurso?: NullableIntFieldUpdateOperationsInput | number | null
    esParaInformatica?: BoolFieldUpdateOperationsInput | boolean
    prioridadAsignacion?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaConfiguracionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    capacidadMaxima?: IntFieldUpdateOperationsInput | number
    recursoEspecial?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadRecurso?: NullableIntFieldUpdateOperationsInput | number | null
    esParaInformatica?: BoolFieldUpdateOperationsInput | boolean
    prioridadAsignacion?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionVisualCreateInput = {
    backgroundImage?: string | null
    titulo?: string | null
    subtitulo?: string | null
    colorPrimario?: string | null
    colorSecundario?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionVisualUncheckedCreateInput = {
    id?: number
    backgroundImage?: string | null
    titulo?: string | null
    subtitulo?: string | null
    colorPrimario?: string | null
    colorSecundario?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionVisualUpdateInput = {
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    colorPrimario?: NullableStringFieldUpdateOperationsInput | string | null
    colorSecundario?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionVisualUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    colorPrimario?: NullableStringFieldUpdateOperationsInput | string | null
    colorSecundario?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionVisualCreateManyInput = {
    id?: number
    backgroundImage?: string | null
    titulo?: string | null
    subtitulo?: string | null
    colorPrimario?: string | null
    colorSecundario?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionVisualUpdateManyMutationInput = {
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    colorPrimario?: NullableStringFieldUpdateOperationsInput | string | null
    colorSecundario?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionVisualUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    colorPrimario?: NullableStringFieldUpdateOperationsInput | string | null
    colorSecundario?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CarreraListRelationFilter = {
    every?: CarreraWhereInput
    some?: CarreraWhereInput
    none?: CarreraWhereInput
  }

  export type SectorFacultadListRelationFilter = {
    every?: SectorFacultadWhereInput
    some?: SectorFacultadWhereInput
    none?: SectorFacultadWhereInput
  }

  export type SyncLogListRelationFilter = {
    every?: SyncLogWhereInput
    some?: SyncLogWhereInput
    none?: SyncLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarreraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectorFacultadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyncLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultadOrderByRelevanceInput = {
    fields: FacultadOrderByRelevanceFieldEnum | FacultadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FacultadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    sector?: SortOrder
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadAvgOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
  }

  export type FacultadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    sector?: SortOrder
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    sector?: SortOrder
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadSumOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FacultadScalarRelationFilter = {
    is?: FacultadWhereInput
    isNot?: FacultadWhereInput
  }

  export type CarreraTotemListRelationFilter = {
    every?: CarreraTotemWhereInput
    some?: CarreraTotemWhereInput
    none?: CarreraTotemWhereInput
  }

  export type ExamenListRelationFilter = {
    every?: ExamenWhereInput
    some?: ExamenWhereInput
    none?: ExamenWhereInput
  }

  export type CarreraTotemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraOrderByRelevanceInput = {
    fields: CarreraOrderByRelevanceFieldEnum | CarreraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarreraFacultadIdCodigoCompoundUniqueInput = {
    facultadId: number
    codigo: string
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ActaExamenListRelationFilter = {
    every?: ActaExamenWhereInput
    some?: ActaExamenWhereInput
    none?: ActaExamenWhereInput
  }

  export type AulaNullableScalarRelationFilter = {
    is?: AulaWhereInput | null
    isNot?: AulaWhereInput | null
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type ExamenTotemNullableScalarRelationFilter = {
    is?: ExamenTotemWhereInput | null
    isNot?: ExamenTotemWhereInput | null
  }

  export type ActaExamenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamenOrderByRelevanceInput = {
    fields: ExamenOrderByRelevanceFieldEnum | ExamenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExamenCountOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrder
    nombreMateria?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    monitoreo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacionAuto?: SortOrder
    criterioAsignacion?: SortOrder
    modalidadExamen?: SortOrder
    requierePc?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
  }

  export type ExamenAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrder
    cantidadInscriptos?: SortOrder
  }

  export type ExamenMaxOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrder
    nombreMateria?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    monitoreo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacionAuto?: SortOrder
    criterioAsignacion?: SortOrder
    modalidadExamen?: SortOrder
    requierePc?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
  }

  export type ExamenMinOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrder
    nombreMateria?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    monitoreo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacionAuto?: SortOrder
    criterioAsignacion?: SortOrder
    modalidadExamen?: SortOrder
    requierePc?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
  }

  export type ExamenSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    aulaId?: SortOrder
    cantidadInscriptos?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SyncLogOrderByRelevanceInput = {
    fields: SyncLogOrderByRelevanceFieldEnum | SyncLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    tipoOperacion?: SortOrder
    resultado?: SortOrder
    mensaje?: SortOrder
    registrosProcesados?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogAvgOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    registrosProcesados?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    tipoOperacion?: SortOrder
    resultado?: SortOrder
    mensaje?: SortOrder
    registrosProcesados?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    tipoOperacion?: SortOrder
    resultado?: SortOrder
    mensaje?: SortOrder
    registrosProcesados?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogSumOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
    registrosProcesados?: SortOrder
  }

  export type EstudianteOrderByRelevanceInput = {
    fields: EstudianteOrderByRelevanceFieldEnum | EstudianteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AulaOrderByRelevanceInput = {
    fields: AulaOrderByRelevanceFieldEnum | AulaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AulaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    disponible?: SortOrder
    alumnosAsignados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    alumnosAsignados?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    disponible?: SortOrder
    alumnosAsignados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    disponible?: SortOrder
    alumnosAsignados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    alumnosAsignados?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TotemDataOrderByRelevanceInput = {
    fields: TotemDataOrderByRelevanceFieldEnum | TotemDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TotemDataCountOrderByAggregateInput = {
    id?: SortOrder
    sheetName?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type TotemDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TotemDataMaxOrderByAggregateInput = {
    id?: SortOrder
    sheetName?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type TotemDataMinOrderByAggregateInput = {
    id?: SortOrder
    sheetName?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type TotemDataSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type ExamenScalarRelationFilter = {
    is?: ExamenWhereInput
    isNot?: ExamenWhereInput
  }

  export type ActaExamenOrderByRelevanceInput = {
    fields: ActaExamenOrderByRelevanceFieldEnum | ActaExamenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActaExamenExamenIdEstudianteIdCompoundUniqueInput = {
    examenId: number
    estudianteId: number
  }

  export type ActaExamenCountOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    presente?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActaExamenAvgOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    nota?: SortOrder
  }

  export type ActaExamenMaxOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    presente?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActaExamenMinOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    presente?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActaExamenSumOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    estudianteId?: SortOrder
    nota?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SectorFacultadOrderByRelevanceInput = {
    fields: SectorFacultadOrderByRelevanceFieldEnum | SectorFacultadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SectorFacultadCountOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    facultadId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorFacultadAvgOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
  }

  export type SectorFacultadMaxOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    facultadId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorFacultadMinOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    facultadId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorFacultadSumOrderByAggregateInput = {
    id?: SortOrder
    facultadId?: SortOrder
  }

  export type CarreraNullableScalarRelationFilter = {
    is?: CarreraWhereInput | null
    isNot?: CarreraWhereInput | null
  }

  export type CarreraTotemOrderByRelevanceInput = {
    fields: CarreraTotemOrderByRelevanceFieldEnum | CarreraTotemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarreraTotemCountOrderByAggregateInput = {
    id?: SortOrder
    codigoTotem?: SortOrder
    carreraId?: SortOrder
    nombreTotem?: SortOrder
    activo?: SortOrder
    esMapeada?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraTotemAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type CarreraTotemMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoTotem?: SortOrder
    carreraId?: SortOrder
    nombreTotem?: SortOrder
    activo?: SortOrder
    esMapeada?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraTotemMinOrderByAggregateInput = {
    id?: SortOrder
    codigoTotem?: SortOrder
    carreraId?: SortOrder
    nombreTotem?: SortOrder
    activo?: SortOrder
    esMapeada?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarreraTotemSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type ExamenTotemOrderByRelevanceInput = {
    fields: ExamenTotemOrderByRelevanceFieldEnum | ExamenTotemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExamenTotemCountOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    sectorTotem?: SortOrder
    carreraTotem?: SortOrder
    materiaTotem?: SortOrder
    areaTemaTotem?: SortOrder
    modoTotem?: SortOrder
    urlTotem?: SortOrder
    catedraTotem?: SortOrder
    docenteTotem?: SortOrder
    monitoreoTotem?: SortOrder
    controlTotem?: SortOrder
    dataOriginal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenTotemAvgOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
  }

  export type ExamenTotemMaxOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    sectorTotem?: SortOrder
    carreraTotem?: SortOrder
    materiaTotem?: SortOrder
    areaTemaTotem?: SortOrder
    modoTotem?: SortOrder
    urlTotem?: SortOrder
    catedraTotem?: SortOrder
    docenteTotem?: SortOrder
    monitoreoTotem?: SortOrder
    controlTotem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenTotemMinOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
    sectorTotem?: SortOrder
    carreraTotem?: SortOrder
    materiaTotem?: SortOrder
    areaTemaTotem?: SortOrder
    modoTotem?: SortOrder
    urlTotem?: SortOrder
    catedraTotem?: SortOrder
    docenteTotem?: SortOrder
    monitoreoTotem?: SortOrder
    controlTotem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenTotemSumOrderByAggregateInput = {
    id?: SortOrder
    examenId?: SortOrder
  }

  export type AulaConfiguracionOrderByRelevanceInput = {
    fields: AulaConfiguracionOrderByRelevanceFieldEnum | AulaConfiguracionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AulaConfiguracionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    capacidadMaxima?: SortOrder
    recursoEspecial?: SortOrder
    cantidadRecurso?: SortOrder
    esParaInformatica?: SortOrder
    prioridadAsignacion?: SortOrder
    disponible?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaConfiguracionAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidadMaxima?: SortOrder
    cantidadRecurso?: SortOrder
    prioridadAsignacion?: SortOrder
  }

  export type AulaConfiguracionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    capacidadMaxima?: SortOrder
    recursoEspecial?: SortOrder
    cantidadRecurso?: SortOrder
    esParaInformatica?: SortOrder
    prioridadAsignacion?: SortOrder
    disponible?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaConfiguracionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    capacidadMaxima?: SortOrder
    recursoEspecial?: SortOrder
    cantidadRecurso?: SortOrder
    esParaInformatica?: SortOrder
    prioridadAsignacion?: SortOrder
    disponible?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaConfiguracionSumOrderByAggregateInput = {
    id?: SortOrder
    capacidadMaxima?: SortOrder
    cantidadRecurso?: SortOrder
    prioridadAsignacion?: SortOrder
  }

  export type ConfiguracionVisualOrderByRelevanceInput = {
    fields: ConfiguracionVisualOrderByRelevanceFieldEnum | ConfiguracionVisualOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConfiguracionVisualCountOrderByAggregateInput = {
    id?: SortOrder
    backgroundImage?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    colorPrimario?: SortOrder
    colorSecundario?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionVisualAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConfiguracionVisualMaxOrderByAggregateInput = {
    id?: SortOrder
    backgroundImage?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    colorPrimario?: SortOrder
    colorSecundario?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionVisualMinOrderByAggregateInput = {
    id?: SortOrder
    backgroundImage?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    colorPrimario?: SortOrder
    colorSecundario?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionVisualSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type SectorFacultadCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
  }

  export type SyncLogCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput> | SyncLogCreateWithoutFacultadInput[] | SyncLogUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutFacultadInput | SyncLogCreateOrConnectWithoutFacultadInput[]
    createMany?: SyncLogCreateManyFacultadInputEnvelope
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
  }

  export type CarreraUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
  }

  export type SyncLogUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput> | SyncLogCreateWithoutFacultadInput[] | SyncLogUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutFacultadInput | SyncLogCreateOrConnectWithoutFacultadInput[]
    createMany?: SyncLogCreateManyFacultadInputEnvelope
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarreraUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutFacultadInput | CarreraUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutFacultadInput | CarreraUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutFacultadInput | CarreraUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type SectorFacultadUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    upsert?: SectorFacultadUpsertWithWhereUniqueWithoutFacultadInput | SectorFacultadUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    set?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    disconnect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    delete?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    update?: SectorFacultadUpdateWithWhereUniqueWithoutFacultadInput | SectorFacultadUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: SectorFacultadUpdateManyWithWhereWithoutFacultadInput | SectorFacultadUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: SectorFacultadScalarWhereInput | SectorFacultadScalarWhereInput[]
  }

  export type SyncLogUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput> | SyncLogCreateWithoutFacultadInput[] | SyncLogUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutFacultadInput | SyncLogCreateOrConnectWithoutFacultadInput[]
    upsert?: SyncLogUpsertWithWhereUniqueWithoutFacultadInput | SyncLogUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: SyncLogCreateManyFacultadInputEnvelope
    set?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    disconnect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    delete?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    update?: SyncLogUpdateWithWhereUniqueWithoutFacultadInput | SyncLogUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: SyncLogUpdateManyWithWhereWithoutFacultadInput | SyncLogUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarreraUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutFacultadInput | CarreraUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutFacultadInput | CarreraUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutFacultadInput | CarreraUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    upsert?: SectorFacultadUpsertWithWhereUniqueWithoutFacultadInput | SectorFacultadUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    set?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    disconnect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    delete?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
    update?: SectorFacultadUpdateWithWhereUniqueWithoutFacultadInput | SectorFacultadUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: SectorFacultadUpdateManyWithWhereWithoutFacultadInput | SectorFacultadUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: SectorFacultadScalarWhereInput | SectorFacultadScalarWhereInput[]
  }

  export type SyncLogUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput> | SyncLogCreateWithoutFacultadInput[] | SyncLogUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutFacultadInput | SyncLogCreateOrConnectWithoutFacultadInput[]
    upsert?: SyncLogUpsertWithWhereUniqueWithoutFacultadInput | SyncLogUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: SyncLogCreateManyFacultadInputEnvelope
    set?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    disconnect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    delete?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    update?: SyncLogUpdateWithWhereUniqueWithoutFacultadInput | SyncLogUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: SyncLogUpdateManyWithWhereWithoutFacultadInput | SyncLogUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
  }

  export type FacultadCreateNestedOneWithoutCarrerasInput = {
    create?: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutCarrerasInput
    connect?: FacultadWhereUniqueInput
  }

  export type CarreraTotemCreateNestedManyWithoutCarreraInput = {
    create?: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput> | CarreraTotemCreateWithoutCarreraInput[] | CarreraTotemUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CarreraTotemCreateOrConnectWithoutCarreraInput | CarreraTotemCreateOrConnectWithoutCarreraInput[]
    createMany?: CarreraTotemCreateManyCarreraInputEnvelope
    connect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
  }

  export type ExamenCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput> | ExamenCreateWithoutCarreraInput[] | ExamenUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutCarreraInput | ExamenCreateOrConnectWithoutCarreraInput[]
    createMany?: ExamenCreateManyCarreraInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type CarreraTotemUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput> | CarreraTotemCreateWithoutCarreraInput[] | CarreraTotemUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CarreraTotemCreateOrConnectWithoutCarreraInput | CarreraTotemCreateOrConnectWithoutCarreraInput[]
    createMany?: CarreraTotemCreateManyCarreraInputEnvelope
    connect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
  }

  export type ExamenUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput> | ExamenCreateWithoutCarreraInput[] | ExamenUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutCarreraInput | ExamenCreateOrConnectWithoutCarreraInput[]
    createMany?: ExamenCreateManyCarreraInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type FacultadUpdateOneRequiredWithoutCarrerasNestedInput = {
    create?: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutCarrerasInput
    upsert?: FacultadUpsertWithoutCarrerasInput
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutCarrerasInput, FacultadUpdateWithoutCarrerasInput>, FacultadUncheckedUpdateWithoutCarrerasInput>
  }

  export type CarreraTotemUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput> | CarreraTotemCreateWithoutCarreraInput[] | CarreraTotemUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CarreraTotemCreateOrConnectWithoutCarreraInput | CarreraTotemCreateOrConnectWithoutCarreraInput[]
    upsert?: CarreraTotemUpsertWithWhereUniqueWithoutCarreraInput | CarreraTotemUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: CarreraTotemCreateManyCarreraInputEnvelope
    set?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    disconnect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    delete?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    connect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    update?: CarreraTotemUpdateWithWhereUniqueWithoutCarreraInput | CarreraTotemUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: CarreraTotemUpdateManyWithWhereWithoutCarreraInput | CarreraTotemUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: CarreraTotemScalarWhereInput | CarreraTotemScalarWhereInput[]
  }

  export type ExamenUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput> | ExamenCreateWithoutCarreraInput[] | ExamenUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutCarreraInput | ExamenCreateOrConnectWithoutCarreraInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutCarreraInput | ExamenUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ExamenCreateManyCarreraInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutCarreraInput | ExamenUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutCarreraInput | ExamenUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
  }

  export type CarreraTotemUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput> | CarreraTotemCreateWithoutCarreraInput[] | CarreraTotemUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CarreraTotemCreateOrConnectWithoutCarreraInput | CarreraTotemCreateOrConnectWithoutCarreraInput[]
    upsert?: CarreraTotemUpsertWithWhereUniqueWithoutCarreraInput | CarreraTotemUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: CarreraTotemCreateManyCarreraInputEnvelope
    set?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    disconnect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    delete?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    connect?: CarreraTotemWhereUniqueInput | CarreraTotemWhereUniqueInput[]
    update?: CarreraTotemUpdateWithWhereUniqueWithoutCarreraInput | CarreraTotemUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: CarreraTotemUpdateManyWithWhereWithoutCarreraInput | CarreraTotemUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: CarreraTotemScalarWhereInput | CarreraTotemScalarWhereInput[]
  }

  export type ExamenUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput> | ExamenCreateWithoutCarreraInput[] | ExamenUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutCarreraInput | ExamenCreateOrConnectWithoutCarreraInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutCarreraInput | ExamenUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ExamenCreateManyCarreraInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutCarreraInput | ExamenUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutCarreraInput | ExamenUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
  }

  export type ActaExamenCreateNestedManyWithoutExamenInput = {
    create?: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput> | ActaExamenCreateWithoutExamenInput[] | ActaExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutExamenInput | ActaExamenCreateOrConnectWithoutExamenInput[]
    createMany?: ActaExamenCreateManyExamenInputEnvelope
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
  }

  export type AulaCreateNestedOneWithoutExamenesInput = {
    create?: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: AulaCreateOrConnectWithoutExamenesInput
    connect?: AulaWhereUniqueInput
  }

  export type CarreraCreateNestedOneWithoutExamenesInput = {
    create?: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutExamenesInput
    connect?: CarreraWhereUniqueInput
  }

  export type ExamenTotemCreateNestedOneWithoutExamenInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    connect?: ExamenTotemWhereUniqueInput
  }

  export type ActaExamenUncheckedCreateNestedManyWithoutExamenInput = {
    create?: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput> | ActaExamenCreateWithoutExamenInput[] | ActaExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutExamenInput | ActaExamenCreateOrConnectWithoutExamenInput[]
    createMany?: ActaExamenCreateManyExamenInputEnvelope
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
  }

  export type ExamenTotemUncheckedCreateNestedOneWithoutExamenInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    connect?: ExamenTotemWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ActaExamenUpdateManyWithoutExamenNestedInput = {
    create?: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput> | ActaExamenCreateWithoutExamenInput[] | ActaExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutExamenInput | ActaExamenCreateOrConnectWithoutExamenInput[]
    upsert?: ActaExamenUpsertWithWhereUniqueWithoutExamenInput | ActaExamenUpsertWithWhereUniqueWithoutExamenInput[]
    createMany?: ActaExamenCreateManyExamenInputEnvelope
    set?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    disconnect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    delete?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    update?: ActaExamenUpdateWithWhereUniqueWithoutExamenInput | ActaExamenUpdateWithWhereUniqueWithoutExamenInput[]
    updateMany?: ActaExamenUpdateManyWithWhereWithoutExamenInput | ActaExamenUpdateManyWithWhereWithoutExamenInput[]
    deleteMany?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
  }

  export type AulaUpdateOneWithoutExamenesNestedInput = {
    create?: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: AulaCreateOrConnectWithoutExamenesInput
    upsert?: AulaUpsertWithoutExamenesInput
    disconnect?: AulaWhereInput | boolean
    delete?: AulaWhereInput | boolean
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutExamenesInput, AulaUpdateWithoutExamenesInput>, AulaUncheckedUpdateWithoutExamenesInput>
  }

  export type CarreraUpdateOneRequiredWithoutExamenesNestedInput = {
    create?: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutExamenesInput
    upsert?: CarreraUpsertWithoutExamenesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutExamenesInput, CarreraUpdateWithoutExamenesInput>, CarreraUncheckedUpdateWithoutExamenesInput>
  }

  export type ExamenTotemUpdateOneWithoutExamenNestedInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    upsert?: ExamenTotemUpsertWithoutExamenInput
    disconnect?: ExamenTotemWhereInput | boolean
    delete?: ExamenTotemWhereInput | boolean
    connect?: ExamenTotemWhereUniqueInput
    update?: XOR<XOR<ExamenTotemUpdateToOneWithWhereWithoutExamenInput, ExamenTotemUpdateWithoutExamenInput>, ExamenTotemUncheckedUpdateWithoutExamenInput>
  }

  export type ActaExamenUncheckedUpdateManyWithoutExamenNestedInput = {
    create?: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput> | ActaExamenCreateWithoutExamenInput[] | ActaExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutExamenInput | ActaExamenCreateOrConnectWithoutExamenInput[]
    upsert?: ActaExamenUpsertWithWhereUniqueWithoutExamenInput | ActaExamenUpsertWithWhereUniqueWithoutExamenInput[]
    createMany?: ActaExamenCreateManyExamenInputEnvelope
    set?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    disconnect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    delete?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    update?: ActaExamenUpdateWithWhereUniqueWithoutExamenInput | ActaExamenUpdateWithWhereUniqueWithoutExamenInput[]
    updateMany?: ActaExamenUpdateManyWithWhereWithoutExamenInput | ActaExamenUpdateManyWithWhereWithoutExamenInput[]
    deleteMany?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
  }

  export type ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    upsert?: ExamenTotemUpsertWithoutExamenInput
    disconnect?: ExamenTotemWhereInput | boolean
    delete?: ExamenTotemWhereInput | boolean
    connect?: ExamenTotemWhereUniqueInput
    update?: XOR<XOR<ExamenTotemUpdateToOneWithWhereWithoutExamenInput, ExamenTotemUpdateWithoutExamenInput>, ExamenTotemUncheckedUpdateWithoutExamenInput>
  }

  export type FacultadCreateNestedOneWithoutSyncLogsInput = {
    create?: XOR<FacultadCreateWithoutSyncLogsInput, FacultadUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutSyncLogsInput
    connect?: FacultadWhereUniqueInput
  }

  export type FacultadUpdateOneRequiredWithoutSyncLogsNestedInput = {
    create?: XOR<FacultadCreateWithoutSyncLogsInput, FacultadUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutSyncLogsInput
    upsert?: FacultadUpsertWithoutSyncLogsInput
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutSyncLogsInput, FacultadUpdateWithoutSyncLogsInput>, FacultadUncheckedUpdateWithoutSyncLogsInput>
  }

  export type ActaExamenCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput> | ActaExamenCreateWithoutEstudianteInput[] | ActaExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutEstudianteInput | ActaExamenCreateOrConnectWithoutEstudianteInput[]
    createMany?: ActaExamenCreateManyEstudianteInputEnvelope
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
  }

  export type ActaExamenUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput> | ActaExamenCreateWithoutEstudianteInput[] | ActaExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutEstudianteInput | ActaExamenCreateOrConnectWithoutEstudianteInput[]
    createMany?: ActaExamenCreateManyEstudianteInputEnvelope
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
  }

  export type ActaExamenUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput> | ActaExamenCreateWithoutEstudianteInput[] | ActaExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutEstudianteInput | ActaExamenCreateOrConnectWithoutEstudianteInput[]
    upsert?: ActaExamenUpsertWithWhereUniqueWithoutEstudianteInput | ActaExamenUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ActaExamenCreateManyEstudianteInputEnvelope
    set?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    disconnect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    delete?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    update?: ActaExamenUpdateWithWhereUniqueWithoutEstudianteInput | ActaExamenUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ActaExamenUpdateManyWithWhereWithoutEstudianteInput | ActaExamenUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
  }

  export type ActaExamenUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput> | ActaExamenCreateWithoutEstudianteInput[] | ActaExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ActaExamenCreateOrConnectWithoutEstudianteInput | ActaExamenCreateOrConnectWithoutEstudianteInput[]
    upsert?: ActaExamenUpsertWithWhereUniqueWithoutEstudianteInput | ActaExamenUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ActaExamenCreateManyEstudianteInputEnvelope
    set?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    disconnect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    delete?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    connect?: ActaExamenWhereUniqueInput | ActaExamenWhereUniqueInput[]
    update?: ActaExamenUpdateWithWhereUniqueWithoutEstudianteInput | ActaExamenUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ActaExamenUpdateManyWithWhereWithoutEstudianteInput | ActaExamenUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
  }

  export type ExamenCreateNestedManyWithoutAulaInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type ExamenUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type ExamenUpdateManyWithoutAulaNestedInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutAulaInput | ExamenUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutAulaInput | ExamenUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutAulaInput | ExamenUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
  }

  export type ExamenUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutAulaInput | ExamenUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutAulaInput | ExamenUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutAulaInput | ExamenUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
  }

  export type EstudianteCreateNestedOneWithoutActasExamenInput = {
    create?: XOR<EstudianteCreateWithoutActasExamenInput, EstudianteUncheckedCreateWithoutActasExamenInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutActasExamenInput
    connect?: EstudianteWhereUniqueInput
  }

  export type ExamenCreateNestedOneWithoutActasExamenInput = {
    create?: XOR<ExamenCreateWithoutActasExamenInput, ExamenUncheckedCreateWithoutActasExamenInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutActasExamenInput
    connect?: ExamenWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EstudianteUpdateOneRequiredWithoutActasExamenNestedInput = {
    create?: XOR<EstudianteCreateWithoutActasExamenInput, EstudianteUncheckedCreateWithoutActasExamenInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutActasExamenInput
    upsert?: EstudianteUpsertWithoutActasExamenInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutActasExamenInput, EstudianteUpdateWithoutActasExamenInput>, EstudianteUncheckedUpdateWithoutActasExamenInput>
  }

  export type ExamenUpdateOneRequiredWithoutActasExamenNestedInput = {
    create?: XOR<ExamenCreateWithoutActasExamenInput, ExamenUncheckedCreateWithoutActasExamenInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutActasExamenInput
    upsert?: ExamenUpsertWithoutActasExamenInput
    connect?: ExamenWhereUniqueInput
    update?: XOR<XOR<ExamenUpdateToOneWithWhereWithoutActasExamenInput, ExamenUpdateWithoutActasExamenInput>, ExamenUncheckedUpdateWithoutActasExamenInput>
  }

  export type FacultadCreateNestedOneWithoutSectoresInput = {
    create?: XOR<FacultadCreateWithoutSectoresInput, FacultadUncheckedCreateWithoutSectoresInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutSectoresInput
    connect?: FacultadWhereUniqueInput
  }

  export type FacultadUpdateOneRequiredWithoutSectoresNestedInput = {
    create?: XOR<FacultadCreateWithoutSectoresInput, FacultadUncheckedCreateWithoutSectoresInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutSectoresInput
    upsert?: FacultadUpsertWithoutSectoresInput
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutSectoresInput, FacultadUpdateWithoutSectoresInput>, FacultadUncheckedUpdateWithoutSectoresInput>
  }

  export type CarreraCreateNestedOneWithoutCarrerasTotemInput = {
    create?: XOR<CarreraCreateWithoutCarrerasTotemInput, CarreraUncheckedCreateWithoutCarrerasTotemInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutCarrerasTotemInput
    connect?: CarreraWhereUniqueInput
  }

  export type CarreraUpdateOneWithoutCarrerasTotemNestedInput = {
    create?: XOR<CarreraCreateWithoutCarrerasTotemInput, CarreraUncheckedCreateWithoutCarrerasTotemInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutCarrerasTotemInput
    upsert?: CarreraUpsertWithoutCarrerasTotemInput
    disconnect?: CarreraWhereInput | boolean
    delete?: CarreraWhereInput | boolean
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutCarrerasTotemInput, CarreraUpdateWithoutCarrerasTotemInput>, CarreraUncheckedUpdateWithoutCarrerasTotemInput>
  }

  export type ExamenCreateNestedOneWithoutExamenTotemInput = {
    create?: XOR<ExamenCreateWithoutExamenTotemInput, ExamenUncheckedCreateWithoutExamenTotemInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutExamenTotemInput
    connect?: ExamenWhereUniqueInput
  }

  export type ExamenUpdateOneRequiredWithoutExamenTotemNestedInput = {
    create?: XOR<ExamenCreateWithoutExamenTotemInput, ExamenUncheckedCreateWithoutExamenTotemInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutExamenTotemInput
    upsert?: ExamenUpsertWithoutExamenTotemInput
    connect?: ExamenWhereUniqueInput
    update?: XOR<XOR<ExamenUpdateToOneWithWhereWithoutExamenTotemInput, ExamenUpdateWithoutExamenTotemInput>, ExamenUncheckedUpdateWithoutExamenTotemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CarreraCreateWithoutFacultadInput = {
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrerasTotem?: CarreraTotemCreateNestedManyWithoutCarreraInput
    examenes?: ExamenCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutFacultadInput = {
    id?: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrerasTotem?: CarreraTotemUncheckedCreateNestedManyWithoutCarreraInput
    examenes?: ExamenUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput>
  }

  export type CarreraCreateManyFacultadInputEnvelope = {
    data: CarreraCreateManyFacultadInput | CarreraCreateManyFacultadInput[]
    skipDuplicates?: boolean
  }

  export type SectorFacultadCreateWithoutFacultadInput = {
    sector: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorFacultadUncheckedCreateWithoutFacultadInput = {
    id?: number
    sector: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorFacultadCreateOrConnectWithoutFacultadInput = {
    where: SectorFacultadWhereUniqueInput
    create: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput>
  }

  export type SectorFacultadCreateManyFacultadInputEnvelope = {
    data: SectorFacultadCreateManyFacultadInput | SectorFacultadCreateManyFacultadInput[]
    skipDuplicates?: boolean
  }

  export type SyncLogCreateWithoutFacultadInput = {
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
  }

  export type SyncLogUncheckedCreateWithoutFacultadInput = {
    id?: number
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
  }

  export type SyncLogCreateOrConnectWithoutFacultadInput = {
    where: SyncLogWhereUniqueInput
    create: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput>
  }

  export type SyncLogCreateManyFacultadInputEnvelope = {
    data: SyncLogCreateManyFacultadInput | SyncLogCreateManyFacultadInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithWhereUniqueWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    update: XOR<CarreraUpdateWithoutFacultadInput, CarreraUncheckedUpdateWithoutFacultadInput>
    create: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput>
  }

  export type CarreraUpdateWithWhereUniqueWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    data: XOR<CarreraUpdateWithoutFacultadInput, CarreraUncheckedUpdateWithoutFacultadInput>
  }

  export type CarreraUpdateManyWithWhereWithoutFacultadInput = {
    where: CarreraScalarWhereInput
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyWithoutFacultadInput>
  }

  export type CarreraScalarWhereInput = {
    AND?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    OR?: CarreraScalarWhereInput[]
    NOT?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    id?: IntFilter<"Carrera"> | number
    facultadId?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    codigo?: StringFilter<"Carrera"> | string
    activa?: BoolFilter<"Carrera"> | boolean
    createdAt?: DateTimeFilter<"Carrera"> | Date | string
    updatedAt?: DateTimeFilter<"Carrera"> | Date | string
  }

  export type SectorFacultadUpsertWithWhereUniqueWithoutFacultadInput = {
    where: SectorFacultadWhereUniqueInput
    update: XOR<SectorFacultadUpdateWithoutFacultadInput, SectorFacultadUncheckedUpdateWithoutFacultadInput>
    create: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput>
  }

  export type SectorFacultadUpdateWithWhereUniqueWithoutFacultadInput = {
    where: SectorFacultadWhereUniqueInput
    data: XOR<SectorFacultadUpdateWithoutFacultadInput, SectorFacultadUncheckedUpdateWithoutFacultadInput>
  }

  export type SectorFacultadUpdateManyWithWhereWithoutFacultadInput = {
    where: SectorFacultadScalarWhereInput
    data: XOR<SectorFacultadUpdateManyMutationInput, SectorFacultadUncheckedUpdateManyWithoutFacultadInput>
  }

  export type SectorFacultadScalarWhereInput = {
    AND?: SectorFacultadScalarWhereInput | SectorFacultadScalarWhereInput[]
    OR?: SectorFacultadScalarWhereInput[]
    NOT?: SectorFacultadScalarWhereInput | SectorFacultadScalarWhereInput[]
    id?: IntFilter<"SectorFacultad"> | number
    sector?: StringFilter<"SectorFacultad"> | string
    facultadId?: IntFilter<"SectorFacultad"> | number
    activo?: BoolFilter<"SectorFacultad"> | boolean
    createdAt?: DateTimeFilter<"SectorFacultad"> | Date | string
    updatedAt?: DateTimeFilter<"SectorFacultad"> | Date | string
  }

  export type SyncLogUpsertWithWhereUniqueWithoutFacultadInput = {
    where: SyncLogWhereUniqueInput
    update: XOR<SyncLogUpdateWithoutFacultadInput, SyncLogUncheckedUpdateWithoutFacultadInput>
    create: XOR<SyncLogCreateWithoutFacultadInput, SyncLogUncheckedCreateWithoutFacultadInput>
  }

  export type SyncLogUpdateWithWhereUniqueWithoutFacultadInput = {
    where: SyncLogWhereUniqueInput
    data: XOR<SyncLogUpdateWithoutFacultadInput, SyncLogUncheckedUpdateWithoutFacultadInput>
  }

  export type SyncLogUpdateManyWithWhereWithoutFacultadInput = {
    where: SyncLogScalarWhereInput
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyWithoutFacultadInput>
  }

  export type SyncLogScalarWhereInput = {
    AND?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
    OR?: SyncLogScalarWhereInput[]
    NOT?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
    id?: IntFilter<"SyncLog"> | number
    facultadId?: IntFilter<"SyncLog"> | number
    tipoOperacion?: StringFilter<"SyncLog"> | string
    resultado?: StringFilter<"SyncLog"> | string
    mensaje?: StringNullableFilter<"SyncLog"> | string | null
    registrosProcesados?: IntFilter<"SyncLog"> | number
    createdAt?: DateTimeFilter<"SyncLog"> | Date | string
  }

  export type FacultadCreateWithoutCarrerasInput = {
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutCarrerasInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutCarrerasInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
  }

  export type CarreraTotemCreateWithoutCarreraInput = {
    codigoTotem: string
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarreraTotemUncheckedCreateWithoutCarreraInput = {
    id?: number
    codigoTotem: string
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarreraTotemCreateOrConnectWithoutCarreraInput = {
    where: CarreraTotemWhereUniqueInput
    create: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput>
  }

  export type CarreraTotemCreateManyCarreraInputEnvelope = {
    data: CarreraTotemCreateManyCarreraInput | CarreraTotemCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type ExamenCreateWithoutCarreraInput = {
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenCreateNestedManyWithoutExamenInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutCarreraInput = {
    id?: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenUncheckedCreateNestedManyWithoutExamenInput
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutCarreraInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput>
  }

  export type ExamenCreateManyCarreraInputEnvelope = {
    data: ExamenCreateManyCarreraInput | ExamenCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type FacultadUpsertWithoutCarrerasInput = {
    update: XOR<FacultadUpdateWithoutCarrerasInput, FacultadUncheckedUpdateWithoutCarrerasInput>
    create: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutCarrerasInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutCarrerasInput, FacultadUncheckedUpdateWithoutCarrerasInput>
  }

  export type FacultadUpdateWithoutCarrerasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutCarrerasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type CarreraTotemUpsertWithWhereUniqueWithoutCarreraInput = {
    where: CarreraTotemWhereUniqueInput
    update: XOR<CarreraTotemUpdateWithoutCarreraInput, CarreraTotemUncheckedUpdateWithoutCarreraInput>
    create: XOR<CarreraTotemCreateWithoutCarreraInput, CarreraTotemUncheckedCreateWithoutCarreraInput>
  }

  export type CarreraTotemUpdateWithWhereUniqueWithoutCarreraInput = {
    where: CarreraTotemWhereUniqueInput
    data: XOR<CarreraTotemUpdateWithoutCarreraInput, CarreraTotemUncheckedUpdateWithoutCarreraInput>
  }

  export type CarreraTotemUpdateManyWithWhereWithoutCarreraInput = {
    where: CarreraTotemScalarWhereInput
    data: XOR<CarreraTotemUpdateManyMutationInput, CarreraTotemUncheckedUpdateManyWithoutCarreraInput>
  }

  export type CarreraTotemScalarWhereInput = {
    AND?: CarreraTotemScalarWhereInput | CarreraTotemScalarWhereInput[]
    OR?: CarreraTotemScalarWhereInput[]
    NOT?: CarreraTotemScalarWhereInput | CarreraTotemScalarWhereInput[]
    id?: IntFilter<"CarreraTotem"> | number
    codigoTotem?: StringFilter<"CarreraTotem"> | string
    carreraId?: IntNullableFilter<"CarreraTotem"> | number | null
    nombreTotem?: StringFilter<"CarreraTotem"> | string
    activo?: BoolFilter<"CarreraTotem"> | boolean
    esMapeada?: BoolFilter<"CarreraTotem"> | boolean
    createdAt?: DateTimeFilter<"CarreraTotem"> | Date | string
    updatedAt?: DateTimeFilter<"CarreraTotem"> | Date | string
  }

  export type ExamenUpsertWithWhereUniqueWithoutCarreraInput = {
    where: ExamenWhereUniqueInput
    update: XOR<ExamenUpdateWithoutCarreraInput, ExamenUncheckedUpdateWithoutCarreraInput>
    create: XOR<ExamenCreateWithoutCarreraInput, ExamenUncheckedCreateWithoutCarreraInput>
  }

  export type ExamenUpdateWithWhereUniqueWithoutCarreraInput = {
    where: ExamenWhereUniqueInput
    data: XOR<ExamenUpdateWithoutCarreraInput, ExamenUncheckedUpdateWithoutCarreraInput>
  }

  export type ExamenUpdateManyWithWhereWithoutCarreraInput = {
    where: ExamenScalarWhereInput
    data: XOR<ExamenUpdateManyMutationInput, ExamenUncheckedUpdateManyWithoutCarreraInput>
  }

  export type ExamenScalarWhereInput = {
    AND?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
    OR?: ExamenScalarWhereInput[]
    NOT?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
    id?: IntFilter<"Examen"> | number
    carreraId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    nombreMateria?: StringFilter<"Examen"> | string
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
    asignacionAuto?: BoolFilter<"Examen"> | boolean
    criterioAsignacion?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
  }

  export type ActaExamenCreateWithoutExamenInput = {
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estudiante: EstudianteCreateNestedOneWithoutActasExamenInput
  }

  export type ActaExamenUncheckedCreateWithoutExamenInput = {
    id?: number
    estudianteId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenCreateOrConnectWithoutExamenInput = {
    where: ActaExamenWhereUniqueInput
    create: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput>
  }

  export type ActaExamenCreateManyExamenInputEnvelope = {
    data: ActaExamenCreateManyExamenInput | ActaExamenCreateManyExamenInput[]
    skipDuplicates?: boolean
  }

  export type AulaCreateWithoutExamenesInput = {
    nombre: string
    capacidad?: number | null
    ubicacion?: string | null
    disponible?: boolean
    alumnosAsignados?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaUncheckedCreateWithoutExamenesInput = {
    id?: number
    nombre: string
    capacidad?: number | null
    ubicacion?: string | null
    disponible?: boolean
    alumnosAsignados?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaCreateOrConnectWithoutExamenesInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
  }

  export type CarreraCreateWithoutExamenesInput = {
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutCarrerasInput
    carrerasTotem?: CarreraTotemCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutExamenesInput = {
    id?: number
    facultadId: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrerasTotem?: CarreraTotemUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutExamenesInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
  }

  export type ExamenTotemCreateWithoutExamenInput = {
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem?: string | null
    modoTotem?: string | null
    urlTotem?: string | null
    catedraTotem?: string | null
    docenteTotem?: string | null
    monitoreoTotem?: string | null
    controlTotem?: string | null
    dataOriginal: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenTotemUncheckedCreateWithoutExamenInput = {
    id?: number
    sectorTotem: string
    carreraTotem: string
    materiaTotem: string
    areaTemaTotem?: string | null
    modoTotem?: string | null
    urlTotem?: string | null
    catedraTotem?: string | null
    docenteTotem?: string | null
    monitoreoTotem?: string | null
    controlTotem?: string | null
    dataOriginal: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenTotemCreateOrConnectWithoutExamenInput = {
    where: ExamenTotemWhereUniqueInput
    create: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
  }

  export type ActaExamenUpsertWithWhereUniqueWithoutExamenInput = {
    where: ActaExamenWhereUniqueInput
    update: XOR<ActaExamenUpdateWithoutExamenInput, ActaExamenUncheckedUpdateWithoutExamenInput>
    create: XOR<ActaExamenCreateWithoutExamenInput, ActaExamenUncheckedCreateWithoutExamenInput>
  }

  export type ActaExamenUpdateWithWhereUniqueWithoutExamenInput = {
    where: ActaExamenWhereUniqueInput
    data: XOR<ActaExamenUpdateWithoutExamenInput, ActaExamenUncheckedUpdateWithoutExamenInput>
  }

  export type ActaExamenUpdateManyWithWhereWithoutExamenInput = {
    where: ActaExamenScalarWhereInput
    data: XOR<ActaExamenUpdateManyMutationInput, ActaExamenUncheckedUpdateManyWithoutExamenInput>
  }

  export type ActaExamenScalarWhereInput = {
    AND?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
    OR?: ActaExamenScalarWhereInput[]
    NOT?: ActaExamenScalarWhereInput | ActaExamenScalarWhereInput[]
    id?: IntFilter<"ActaExamen"> | number
    examenId?: IntFilter<"ActaExamen"> | number
    estudianteId?: IntFilter<"ActaExamen"> | number
    presente?: BoolNullableFilter<"ActaExamen"> | boolean | null
    nota?: DecimalNullableFilter<"ActaExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"ActaExamen"> | string | null
    createdAt?: DateTimeFilter<"ActaExamen"> | Date | string
    updatedAt?: DateTimeFilter<"ActaExamen"> | Date | string
  }

  export type AulaUpsertWithoutExamenesInput = {
    update: XOR<AulaUpdateWithoutExamenesInput, AulaUncheckedUpdateWithoutExamenesInput>
    create: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutExamenesInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutExamenesInput, AulaUncheckedUpdateWithoutExamenesInput>
  }

  export type AulaUpdateWithoutExamenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaUncheckedUpdateWithoutExamenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    alumnosAsignados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraUpsertWithoutExamenesInput = {
    update: XOR<CarreraUpdateWithoutExamenesInput, CarreraUncheckedUpdateWithoutExamenesInput>
    create: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutExamenesInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutExamenesInput, CarreraUncheckedUpdateWithoutExamenesInput>
  }

  export type CarreraUpdateWithoutExamenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutCarrerasNestedInput
    carrerasTotem?: CarreraTotemUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutExamenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrerasTotem?: CarreraTotemUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type ExamenTotemUpsertWithoutExamenInput = {
    update: XOR<ExamenTotemUpdateWithoutExamenInput, ExamenTotemUncheckedUpdateWithoutExamenInput>
    create: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    where?: ExamenTotemWhereInput
  }

  export type ExamenTotemUpdateToOneWithWhereWithoutExamenInput = {
    where?: ExamenTotemWhereInput
    data: XOR<ExamenTotemUpdateWithoutExamenInput, ExamenTotemUncheckedUpdateWithoutExamenInput>
  }

  export type ExamenTotemUpdateWithoutExamenInput = {
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenTotemUncheckedUpdateWithoutExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectorTotem?: StringFieldUpdateOperationsInput | string
    carreraTotem?: StringFieldUpdateOperationsInput | string
    materiaTotem?: StringFieldUpdateOperationsInput | string
    areaTemaTotem?: NullableStringFieldUpdateOperationsInput | string | null
    modoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    urlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    catedraTotem?: NullableStringFieldUpdateOperationsInput | string | null
    docenteTotem?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreoTotem?: NullableStringFieldUpdateOperationsInput | string | null
    controlTotem?: NullableStringFieldUpdateOperationsInput | string | null
    dataOriginal?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultadCreateWithoutSyncLogsInput = {
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutSyncLogsInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutSyncLogsInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutSyncLogsInput, FacultadUncheckedCreateWithoutSyncLogsInput>
  }

  export type FacultadUpsertWithoutSyncLogsInput = {
    update: XOR<FacultadUpdateWithoutSyncLogsInput, FacultadUncheckedUpdateWithoutSyncLogsInput>
    create: XOR<FacultadCreateWithoutSyncLogsInput, FacultadUncheckedCreateWithoutSyncLogsInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutSyncLogsInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutSyncLogsInput, FacultadUncheckedUpdateWithoutSyncLogsInput>
  }

  export type FacultadUpdateWithoutSyncLogsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutSyncLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type ActaExamenCreateWithoutEstudianteInput = {
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    examen: ExamenCreateNestedOneWithoutActasExamenInput
  }

  export type ActaExamenUncheckedCreateWithoutEstudianteInput = {
    id?: number
    examenId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenCreateOrConnectWithoutEstudianteInput = {
    where: ActaExamenWhereUniqueInput
    create: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput>
  }

  export type ActaExamenCreateManyEstudianteInputEnvelope = {
    data: ActaExamenCreateManyEstudianteInput | ActaExamenCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type ActaExamenUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: ActaExamenWhereUniqueInput
    update: XOR<ActaExamenUpdateWithoutEstudianteInput, ActaExamenUncheckedUpdateWithoutEstudianteInput>
    create: XOR<ActaExamenCreateWithoutEstudianteInput, ActaExamenUncheckedCreateWithoutEstudianteInput>
  }

  export type ActaExamenUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: ActaExamenWhereUniqueInput
    data: XOR<ActaExamenUpdateWithoutEstudianteInput, ActaExamenUncheckedUpdateWithoutEstudianteInput>
  }

  export type ActaExamenUpdateManyWithWhereWithoutEstudianteInput = {
    where: ActaExamenScalarWhereInput
    data: XOR<ActaExamenUpdateManyMutationInput, ActaExamenUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type ExamenCreateWithoutAulaInput = {
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenCreateNestedManyWithoutExamenInput
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutAulaInput = {
    id?: number
    carreraId: number
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenUncheckedCreateNestedManyWithoutExamenInput
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutAulaInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput>
  }

  export type ExamenCreateManyAulaInputEnvelope = {
    data: ExamenCreateManyAulaInput | ExamenCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type ExamenUpsertWithWhereUniqueWithoutAulaInput = {
    where: ExamenWhereUniqueInput
    update: XOR<ExamenUpdateWithoutAulaInput, ExamenUncheckedUpdateWithoutAulaInput>
    create: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput>
  }

  export type ExamenUpdateWithWhereUniqueWithoutAulaInput = {
    where: ExamenWhereUniqueInput
    data: XOR<ExamenUpdateWithoutAulaInput, ExamenUncheckedUpdateWithoutAulaInput>
  }

  export type ExamenUpdateManyWithWhereWithoutAulaInput = {
    where: ExamenScalarWhereInput
    data: XOR<ExamenUpdateManyMutationInput, ExamenUncheckedUpdateManyWithoutAulaInput>
  }

  export type EstudianteCreateWithoutActasExamenInput = {
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteUncheckedCreateWithoutActasExamenInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteCreateOrConnectWithoutActasExamenInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutActasExamenInput, EstudianteUncheckedCreateWithoutActasExamenInput>
  }

  export type ExamenCreateWithoutActasExamenInput = {
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    aula?: AulaCreateNestedOneWithoutExamenesInput
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutActasExamenInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutActasExamenInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutActasExamenInput, ExamenUncheckedCreateWithoutActasExamenInput>
  }

  export type EstudianteUpsertWithoutActasExamenInput = {
    update: XOR<EstudianteUpdateWithoutActasExamenInput, EstudianteUncheckedUpdateWithoutActasExamenInput>
    create: XOR<EstudianteCreateWithoutActasExamenInput, EstudianteUncheckedCreateWithoutActasExamenInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutActasExamenInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutActasExamenInput, EstudianteUncheckedUpdateWithoutActasExamenInput>
  }

  export type EstudianteUpdateWithoutActasExamenInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteUncheckedUpdateWithoutActasExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenUpsertWithoutActasExamenInput = {
    update: XOR<ExamenUpdateWithoutActasExamenInput, ExamenUncheckedUpdateWithoutActasExamenInput>
    create: XOR<ExamenCreateWithoutActasExamenInput, ExamenUncheckedCreateWithoutActasExamenInput>
    where?: ExamenWhereInput
  }

  export type ExamenUpdateToOneWithWhereWithoutActasExamenInput = {
    where?: ExamenWhereInput
    data: XOR<ExamenUpdateWithoutActasExamenInput, ExamenUncheckedUpdateWithoutActasExamenInput>
  }

  export type ExamenUpdateWithoutActasExamenInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutActasExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
  }

  export type FacultadCreateWithoutSectoresInput = {
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutSectoresInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sector?: number | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutSectoresInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutSectoresInput, FacultadUncheckedCreateWithoutSectoresInput>
  }

  export type FacultadUpsertWithoutSectoresInput = {
    update: XOR<FacultadUpdateWithoutSectoresInput, FacultadUncheckedUpdateWithoutSectoresInput>
    create: XOR<FacultadCreateWithoutSectoresInput, FacultadUncheckedCreateWithoutSectoresInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutSectoresInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutSectoresInput, FacultadUncheckedUpdateWithoutSectoresInput>
  }

  export type FacultadUpdateWithoutSectoresInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutSectoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableIntFieldUpdateOperationsInput | number | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type CarreraCreateWithoutCarrerasTotemInput = {
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutCarrerasInput
    examenes?: ExamenCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutCarrerasTotemInput = {
    id?: number
    facultadId: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutCarrerasTotemInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutCarrerasTotemInput, CarreraUncheckedCreateWithoutCarrerasTotemInput>
  }

  export type CarreraUpsertWithoutCarrerasTotemInput = {
    update: XOR<CarreraUpdateWithoutCarrerasTotemInput, CarreraUncheckedUpdateWithoutCarrerasTotemInput>
    create: XOR<CarreraCreateWithoutCarrerasTotemInput, CarreraUncheckedCreateWithoutCarrerasTotemInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutCarrerasTotemInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutCarrerasTotemInput, CarreraUncheckedUpdateWithoutCarrerasTotemInput>
  }

  export type CarreraUpdateWithoutCarrerasTotemInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutCarrerasNestedInput
    examenes?: ExamenUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutCarrerasTotemInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type ExamenCreateWithoutExamenTotemInput = {
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenCreateNestedManyWithoutExamenInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    carrera: CarreraCreateNestedOneWithoutExamenesInput
  }

  export type ExamenUncheckedCreateWithoutExamenTotemInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    actasExamen?: ActaExamenUncheckedCreateNestedManyWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutExamenTotemInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutExamenTotemInput, ExamenUncheckedCreateWithoutExamenTotemInput>
  }

  export type ExamenUpsertWithoutExamenTotemInput = {
    update: XOR<ExamenUpdateWithoutExamenTotemInput, ExamenUncheckedUpdateWithoutExamenTotemInput>
    create: XOR<ExamenCreateWithoutExamenTotemInput, ExamenUncheckedCreateWithoutExamenTotemInput>
    where?: ExamenWhereInput
  }

  export type ExamenUpdateToOneWithWhereWithoutExamenTotemInput = {
    where?: ExamenWhereInput
    data: XOR<ExamenUpdateWithoutExamenTotemInput, ExamenUncheckedUpdateWithoutExamenTotemInput>
  }

  export type ExamenUpdateWithoutExamenTotemInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUpdateManyWithoutExamenNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
  }

  export type ExamenUncheckedUpdateWithoutExamenTotemInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type CarreraCreateManyFacultadInput = {
    id?: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorFacultadCreateManyFacultadInput = {
    id?: number
    sector: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncLogCreateManyFacultadInput = {
    id?: number
    tipoOperacion: string
    resultado: string
    mensaje?: string | null
    registrosProcesados?: number
    createdAt?: Date | string
  }

  export type CarreraUpdateWithoutFacultadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrerasTotem?: CarreraTotemUpdateManyWithoutCarreraNestedInput
    examenes?: ExamenUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrerasTotem?: CarreraTotemUncheckedUpdateManyWithoutCarreraNestedInput
    examenes?: ExamenUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadUpdateWithoutFacultadInput = {
    sector?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorFacultadUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUpdateWithoutFacultadInput = {
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    registrosProcesados?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemCreateManyCarreraInput = {
    id?: number
    codigoTotem: string
    nombreTotem: string
    activo?: boolean
    esMapeada?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenCreateManyCarreraInput = {
    id?: number
    aulaId?: number | null
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
  }

  export type CarreraTotemUpdateWithoutCarreraInput = {
    codigoTotem?: StringFieldUpdateOperationsInput | string
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoTotem?: StringFieldUpdateOperationsInput | string
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraTotemUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoTotem?: StringFieldUpdateOperationsInput | string
    nombreTotem?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    esMapeada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenUpdateWithoutCarreraInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUpdateManyWithoutExamenNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUncheckedUpdateManyWithoutExamenNestedInput
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActaExamenCreateManyExamenInput = {
    id?: number
    estudianteId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenUpdateWithoutExamenInput = {
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutActasExamenNestedInput
  }

  export type ActaExamenUncheckedUpdateWithoutExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActaExamenUncheckedUpdateManyWithoutExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActaExamenCreateManyEstudianteInput = {
    id?: number
    examenId: number
    presente?: boolean | null
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActaExamenUpdateWithoutEstudianteInput = {
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examen?: ExamenUpdateOneRequiredWithoutActasExamenNestedInput
  }

  export type ActaExamenUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActaExamenUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    examenId?: IntFieldUpdateOperationsInput | number
    presente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenCreateManyAulaInput = {
    id?: number
    carreraId: number
    nombreMateria: string
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    monitoreo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacionAuto?: boolean
    criterioAsignacion?: string | null
    modalidadExamen?: string | null
    requierePc?: boolean
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
  }

  export type ExamenUpdateWithoutAulaInput = {
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUpdateManyWithoutExamenNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actasExamen?: ActaExamenUncheckedUpdateManyWithoutExamenNestedInput
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateManyWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    nombreMateria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacionAuto?: BoolFieldUpdateOperationsInput | boolean
    criterioAsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}