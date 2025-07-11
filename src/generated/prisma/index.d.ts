
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
 * Model OcupacionAula
 * 
 */
export type OcupacionAula = $Result.DefaultSelection<Prisma.$OcupacionAulaPayload>
/**
 * Model TotemData
 * 
 */
export type TotemData = $Result.DefaultSelection<Prisma.$TotemDataPayload>
/**
 * Model EstudianteExamen
 * 
 */
export type EstudianteExamen = $Result.DefaultSelection<Prisma.$EstudianteExamenPayload>
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
   * `prisma.ocupacionAula`: Exposes CRUD operations for the **OcupacionAula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OcupacionAulas
    * const ocupacionAulas = await prisma.ocupacionAula.findMany()
    * ```
    */
  get ocupacionAula(): Prisma.OcupacionAulaDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.estudianteExamen`: Exposes CRUD operations for the **EstudianteExamen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstudianteExamen
    * const estudianteExamen = await prisma.estudianteExamen.findMany()
    * ```
    */
  get estudianteExamen(): Prisma.EstudianteExamenDelegate<ExtArgs, ClientOptions>;

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
    Estudiante: 'Estudiante',
    Aula: 'Aula',
    OcupacionAula: 'OcupacionAula',
    TotemData: 'TotemData',
    EstudianteExamen: 'EstudianteExamen',
    SectorFacultad: 'SectorFacultad',
    CarreraTotem: 'CarreraTotem',
    ExamenTotem: 'ExamenTotem'
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
      modelProps: "facultad" | "carrera" | "examen" | "estudiante" | "aula" | "ocupacionAula" | "totemData" | "estudianteExamen" | "sectorFacultad" | "carreraTotem" | "examenTotem"
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
      OcupacionAula: {
        payload: Prisma.$OcupacionAulaPayload<ExtArgs>
        fields: Prisma.OcupacionAulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OcupacionAulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OcupacionAulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          findFirst: {
            args: Prisma.OcupacionAulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OcupacionAulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          findMany: {
            args: Prisma.OcupacionAulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>[]
          }
          create: {
            args: Prisma.OcupacionAulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          createMany: {
            args: Prisma.OcupacionAulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OcupacionAulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          update: {
            args: Prisma.OcupacionAulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          deleteMany: {
            args: Prisma.OcupacionAulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OcupacionAulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OcupacionAulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OcupacionAulaPayload>
          }
          aggregate: {
            args: Prisma.OcupacionAulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOcupacionAula>
          }
          groupBy: {
            args: Prisma.OcupacionAulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OcupacionAulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OcupacionAulaCountArgs<ExtArgs>
            result: $Utils.Optional<OcupacionAulaCountAggregateOutputType> | number
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
      EstudianteExamen: {
        payload: Prisma.$EstudianteExamenPayload<ExtArgs>
        fields: Prisma.EstudianteExamenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteExamenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteExamenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          findFirst: {
            args: Prisma.EstudianteExamenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteExamenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          findMany: {
            args: Prisma.EstudianteExamenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>[]
          }
          create: {
            args: Prisma.EstudianteExamenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          createMany: {
            args: Prisma.EstudianteExamenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstudianteExamenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          update: {
            args: Prisma.EstudianteExamenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          deleteMany: {
            args: Prisma.EstudianteExamenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteExamenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudianteExamenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteExamenPayload>
          }
          aggregate: {
            args: Prisma.EstudianteExamenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudianteExamen>
          }
          groupBy: {
            args: Prisma.EstudianteExamenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteExamenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteExamenCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteExamenCountAggregateOutputType> | number
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
    estudiante?: EstudianteOmit
    aula?: AulaOmit
    ocupacionAula?: OcupacionAulaOmit
    totemData?: TotemDataOmit
    estudianteExamen?: EstudianteExamenOmit
    sectorFacultad?: SectorFacultadOmit
    carreraTotem?: CarreraTotemOmit
    examenTotem?: ExamenTotemOmit
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
    examenes: number
    sectores: number
  }

  export type FacultadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carreras?: boolean | FacultadCountOutputTypeCountCarrerasArgs
    examenes?: boolean | FacultadCountOutputTypeCountExamenesArgs
    sectores?: boolean | FacultadCountOutputTypeCountSectoresArgs
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
  export type FacultadCountOutputTypeCountExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamenWhereInput
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountSectoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorFacultadWhereInput
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
    estudianteExamenes: number
  }

  export type ExamenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudianteExamenes?: boolean | ExamenCountOutputTypeCountEstudianteExamenesArgs
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
  export type ExamenCountOutputTypeCountEstudianteExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteExamenWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    examenes: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | EstudianteCountOutputTypeCountExamenesArgs
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
  export type EstudianteCountOutputTypeCountExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteExamenWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    examenes: number
    ocupaciones: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | AulaCountOutputTypeCountExamenesArgs
    ocupaciones?: boolean | AulaCountOutputTypeCountOcupacionesArgs
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
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountOcupacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OcupacionAulaWhereInput
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
  }

  export type FacultadSumAggregateOutputType = {
    id: number | null
  }

  export type FacultadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    sheetId: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    sheetId: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultadCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    sheetId: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacultadAvgAggregateInputType = {
    id?: true
  }

  export type FacultadSumAggregateInputType = {
    id?: true
  }

  export type FacultadMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    sheetId?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultadMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    sheetId?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultadCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
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
    sheetId?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    examenes?: boolean | Facultad$examenesArgs<ExtArgs>
    sectores?: boolean | Facultad$sectoresArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultad"]>



  export type FacultadSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    sheetId?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacultadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "sheetId" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["facultad"]>
  export type FacultadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    examenes?: boolean | Facultad$examenesArgs<ExtArgs>
    sectores?: boolean | Facultad$sectoresArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FacultadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facultad"
    objects: {
      carreras: Prisma.$CarreraPayload<ExtArgs>[]
      examenes: Prisma.$ExamenPayload<ExtArgs>[]
      sectores: Prisma.$SectorFacultadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string | null
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
    examenes<T extends Facultad$examenesArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$examenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectores<T extends Facultad$sectoresArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$sectoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorFacultadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Facultad.examenes
   */
  export type Facultad$examenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    facultadId: number | null
    aulaId: number | null
    cantidadInscriptos: number | null
  }

  export type ExamenSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    facultadId: number | null
    aulaId: number | null
    cantidadInscriptos: number | null
  }

  export type ExamenMinAggregateOutputType = {
    id: number | null
    carreraId: number | null
    facultadId: number | null
    aulaId: number | null
    materia_codigo: string | null
    nombreMateria: string | null
    areatema: string | null
    fecha: Date | null
    hora: Date | null
    tipoExamen: string | null
    modalidadExamen: string | null
    catedra: string | null
    docente: string | null
    monitoreo: string | null
    control_cargo: string | null
    materialPermitido: string | null
    observaciones: string | null
    observaciones_adicionales: string | null
    url: string | null
    acta_numero: string | null
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
    requierePc: boolean | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamenMaxAggregateOutputType = {
    id: number | null
    carreraId: number | null
    facultadId: number | null
    aulaId: number | null
    materia_codigo: string | null
    nombreMateria: string | null
    areatema: string | null
    fecha: Date | null
    hora: Date | null
    tipoExamen: string | null
    modalidadExamen: string | null
    catedra: string | null
    docente: string | null
    monitoreo: string | null
    control_cargo: string | null
    materialPermitido: string | null
    observaciones: string | null
    observaciones_adicionales: string | null
    url: string | null
    acta_numero: string | null
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
    requierePc: boolean | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamenCountAggregateOutputType = {
    id: number
    carreraId: number
    facultadId: number
    aulaId: number
    materia_codigo: number
    nombreMateria: number
    areatema: number
    fecha: number
    hora: number
    tipoExamen: number
    modalidadExamen: number
    catedra: number
    docente: number
    monitoreo: number
    control_cargo: number
    materialPermitido: number
    observaciones: number
    observaciones_adicionales: number
    url: number
    acta_numero: number
    cantidadInscriptos: number
    fechaUltConsulta: number
    requierePc: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamenAvgAggregateInputType = {
    id?: true
    carreraId?: true
    facultadId?: true
    aulaId?: true
    cantidadInscriptos?: true
  }

  export type ExamenSumAggregateInputType = {
    id?: true
    carreraId?: true
    facultadId?: true
    aulaId?: true
    cantidadInscriptos?: true
  }

  export type ExamenMinAggregateInputType = {
    id?: true
    carreraId?: true
    facultadId?: true
    aulaId?: true
    materia_codigo?: true
    nombreMateria?: true
    areatema?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    modalidadExamen?: true
    catedra?: true
    docente?: true
    monitoreo?: true
    control_cargo?: true
    materialPermitido?: true
    observaciones?: true
    observaciones_adicionales?: true
    url?: true
    acta_numero?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
    requierePc?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamenMaxAggregateInputType = {
    id?: true
    carreraId?: true
    facultadId?: true
    aulaId?: true
    materia_codigo?: true
    nombreMateria?: true
    areatema?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    modalidadExamen?: true
    catedra?: true
    docente?: true
    monitoreo?: true
    control_cargo?: true
    materialPermitido?: true
    observaciones?: true
    observaciones_adicionales?: true
    url?: true
    acta_numero?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
    requierePc?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamenCountAggregateInputType = {
    id?: true
    carreraId?: true
    facultadId?: true
    aulaId?: true
    materia_codigo?: true
    nombreMateria?: true
    areatema?: true
    fecha?: true
    hora?: true
    tipoExamen?: true
    modalidadExamen?: true
    catedra?: true
    docente?: true
    monitoreo?: true
    control_cargo?: true
    materialPermitido?: true
    observaciones?: true
    observaciones_adicionales?: true
    url?: true
    acta_numero?: true
    cantidadInscriptos?: true
    fechaUltConsulta?: true
    requierePc?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
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
    facultadId: number
    aulaId: number | null
    materia_codigo: string
    nombreMateria: string
    areatema: string | null
    fecha: Date
    hora: Date | null
    tipoExamen: string | null
    modalidadExamen: string | null
    catedra: string | null
    docente: string | null
    monitoreo: string | null
    control_cargo: string | null
    materialPermitido: string | null
    observaciones: string | null
    observaciones_adicionales: string | null
    url: string | null
    acta_numero: string | null
    cantidadInscriptos: number | null
    fechaUltConsulta: Date | null
    requierePc: boolean
    activo: boolean
    createdAt: Date
    updatedAt: Date
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
    facultadId?: boolean
    aulaId?: boolean
    materia_codigo?: boolean
    nombreMateria?: boolean
    areatema?: boolean
    fecha?: boolean
    hora?: boolean
    tipoExamen?: boolean
    modalidadExamen?: boolean
    catedra?: boolean
    docente?: boolean
    monitoreo?: boolean
    control_cargo?: boolean
    materialPermitido?: boolean
    observaciones?: boolean
    observaciones_adicionales?: boolean
    url?: boolean
    acta_numero?: boolean
    cantidadInscriptos?: boolean
    fechaUltConsulta?: boolean
    requierePc?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    aula?: boolean | Examen$aulaArgs<ExtArgs>
    examenTotem?: boolean | Examen$examenTotemArgs<ExtArgs>
    estudianteExamenes?: boolean | Examen$estudianteExamenesArgs<ExtArgs>
    _count?: boolean | ExamenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examen"]>



  export type ExamenSelectScalar = {
    id?: boolean
    carreraId?: boolean
    facultadId?: boolean
    aulaId?: boolean
    materia_codigo?: boolean
    nombreMateria?: boolean
    areatema?: boolean
    fecha?: boolean
    hora?: boolean
    tipoExamen?: boolean
    modalidadExamen?: boolean
    catedra?: boolean
    docente?: boolean
    monitoreo?: boolean
    control_cargo?: boolean
    materialPermitido?: boolean
    observaciones?: boolean
    observaciones_adicionales?: boolean
    url?: boolean
    acta_numero?: boolean
    cantidadInscriptos?: boolean
    fechaUltConsulta?: boolean
    requierePc?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carreraId" | "facultadId" | "aulaId" | "materia_codigo" | "nombreMateria" | "areatema" | "fecha" | "hora" | "tipoExamen" | "modalidadExamen" | "catedra" | "docente" | "monitoreo" | "control_cargo" | "materialPermitido" | "observaciones" | "observaciones_adicionales" | "url" | "acta_numero" | "cantidadInscriptos" | "fechaUltConsulta" | "requierePc" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["examen"]>
  export type ExamenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    aula?: boolean | Examen$aulaArgs<ExtArgs>
    examenTotem?: boolean | Examen$examenTotemArgs<ExtArgs>
    estudianteExamenes?: boolean | Examen$estudianteExamenesArgs<ExtArgs>
    _count?: boolean | ExamenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExamenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examen"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      facultad: Prisma.$FacultadPayload<ExtArgs>
      aula: Prisma.$AulaPayload<ExtArgs> | null
      examenTotem: Prisma.$ExamenTotemPayload<ExtArgs> | null
      estudianteExamenes: Prisma.$EstudianteExamenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carreraId: number
      facultadId: number
      aulaId: number | null
      materia_codigo: string
      nombreMateria: string
      areatema: string | null
      fecha: Date
      hora: Date | null
      tipoExamen: string | null
      modalidadExamen: string | null
      catedra: string | null
      docente: string | null
      monitoreo: string | null
      control_cargo: string | null
      materialPermitido: string | null
      observaciones: string | null
      observaciones_adicionales: string | null
      url: string | null
      acta_numero: string | null
      cantidadInscriptos: number | null
      fechaUltConsulta: Date | null
      requierePc: boolean
      activo: boolean
      createdAt: Date
      updatedAt: Date
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
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facultad<T extends FacultadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultadDefaultArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aula<T extends Examen$aulaArgs<ExtArgs> = {}>(args?: Subset<T, Examen$aulaArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    examenTotem<T extends Examen$examenTotemArgs<ExtArgs> = {}>(args?: Subset<T, Examen$examenTotemArgs<ExtArgs>>): Prisma__ExamenTotemClient<$Result.GetResult<Prisma.$ExamenTotemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estudianteExamenes<T extends Examen$estudianteExamenesArgs<ExtArgs> = {}>(args?: Subset<T, Examen$estudianteExamenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly facultadId: FieldRef<"Examen", 'Int'>
    readonly aulaId: FieldRef<"Examen", 'Int'>
    readonly materia_codigo: FieldRef<"Examen", 'String'>
    readonly nombreMateria: FieldRef<"Examen", 'String'>
    readonly areatema: FieldRef<"Examen", 'String'>
    readonly fecha: FieldRef<"Examen", 'DateTime'>
    readonly hora: FieldRef<"Examen", 'DateTime'>
    readonly tipoExamen: FieldRef<"Examen", 'String'>
    readonly modalidadExamen: FieldRef<"Examen", 'String'>
    readonly catedra: FieldRef<"Examen", 'String'>
    readonly docente: FieldRef<"Examen", 'String'>
    readonly monitoreo: FieldRef<"Examen", 'String'>
    readonly control_cargo: FieldRef<"Examen", 'String'>
    readonly materialPermitido: FieldRef<"Examen", 'String'>
    readonly observaciones: FieldRef<"Examen", 'String'>
    readonly observaciones_adicionales: FieldRef<"Examen", 'String'>
    readonly url: FieldRef<"Examen", 'String'>
    readonly acta_numero: FieldRef<"Examen", 'String'>
    readonly cantidadInscriptos: FieldRef<"Examen", 'Int'>
    readonly fechaUltConsulta: FieldRef<"Examen", 'DateTime'>
    readonly requierePc: FieldRef<"Examen", 'Boolean'>
    readonly activo: FieldRef<"Examen", 'Boolean'>
    readonly createdAt: FieldRef<"Examen", 'DateTime'>
    readonly updatedAt: FieldRef<"Examen", 'DateTime'>
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
   * Examen.estudianteExamenes
   */
  export type Examen$estudianteExamenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    where?: EstudianteExamenWhereInput
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    cursor?: EstudianteExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteExamenScalarFieldEnum | EstudianteExamenScalarFieldEnum[]
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
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteMinAggregateOutputType = {
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


  export type EstudianteMinAggregateInputType = {
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
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    dni: string
    nombre: string
    apellido: string
    email: string | null
    telefono: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: EstudianteCountAggregateOutputType | null
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
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examenes?: boolean | Estudiante$examenesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>



  export type EstudianteSelectScalar = {
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dni" | "nombre" | "apellido" | "email" | "telefono" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | Estudiante$examenesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      examenes: Prisma.$EstudianteExamenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
     * // Only select the `dni`
     * const estudianteWithDniOnly = await prisma.estudiante.findMany({ select: { dni: true } })
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
    examenes<T extends Estudiante$examenesArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$examenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Estudiante.examenes
   */
  export type Estudiante$examenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    where?: EstudianteExamenWhereInput
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    cursor?: EstudianteExamenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteExamenScalarFieldEnum | EstudianteExamenScalarFieldEnum[]
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
  }

  export type AulaSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
  }

  export type AulaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    sede: string | null
    capacidad: number | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    sede: string | null
    capacidad: number | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulaCountAggregateOutputType = {
    id: number
    nombre: number
    sede: number
    capacidad: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    id?: true
    capacidad?: true
  }

  export type AulaSumAggregateInputType = {
    id?: true
    capacidad?: true
  }

  export type AulaMinAggregateInputType = {
    id?: true
    nombre?: true
    sede?: true
    capacidad?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaMaxAggregateInputType = {
    id?: true
    nombre?: true
    sede?: true
    capacidad?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulaCountAggregateInputType = {
    id?: true
    nombre?: true
    sede?: true
    capacidad?: true
    activa?: true
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
    sede: string
    capacidad: number
    activa: boolean
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
    sede?: boolean
    capacidad?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examenes?: boolean | Aula$examenesArgs<ExtArgs>
    ocupaciones?: boolean | Aula$ocupacionesArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>



  export type AulaSelectScalar = {
    id?: boolean
    nombre?: boolean
    sede?: boolean
    capacidad?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "sede" | "capacidad" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["aula"]>
  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examenes?: boolean | Aula$examenesArgs<ExtArgs>
    ocupaciones?: boolean | Aula$ocupacionesArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      examenes: Prisma.$ExamenPayload<ExtArgs>[]
      ocupaciones: Prisma.$OcupacionAulaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      sede: string
      capacidad: number
      activa: boolean
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
    ocupaciones<T extends Aula$ocupacionesArgs<ExtArgs> = {}>(args?: Subset<T, Aula$ocupacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly sede: FieldRef<"Aula", 'String'>
    readonly capacidad: FieldRef<"Aula", 'Int'>
    readonly activa: FieldRef<"Aula", 'Boolean'>
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
   * Aula.ocupaciones
   */
  export type Aula$ocupacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    where?: OcupacionAulaWhereInput
    orderBy?: OcupacionAulaOrderByWithRelationInput | OcupacionAulaOrderByWithRelationInput[]
    cursor?: OcupacionAulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OcupacionAulaScalarFieldEnum | OcupacionAulaScalarFieldEnum[]
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
   * Model OcupacionAula
   */

  export type AggregateOcupacionAula = {
    _count: OcupacionAulaCountAggregateOutputType | null
    _avg: OcupacionAulaAvgAggregateOutputType | null
    _sum: OcupacionAulaSumAggregateOutputType | null
    _min: OcupacionAulaMinAggregateOutputType | null
    _max: OcupacionAulaMaxAggregateOutputType | null
  }

  export type OcupacionAulaAvgAggregateOutputType = {
    id: number | null
    aula_id: number | null
    utilizados: number | null
    capacidad_teorica: number | null
  }

  export type OcupacionAulaSumAggregateOutputType = {
    id: number | null
    aula_id: number | null
    utilizados: number | null
    capacidad_teorica: number | null
  }

  export type OcupacionAulaMinAggregateOutputType = {
    id: number | null
    aula_id: number | null
    fecha: Date | null
    hora: string | null
    utilizados: number | null
    capacidad_teorica: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OcupacionAulaMaxAggregateOutputType = {
    id: number | null
    aula_id: number | null
    fecha: Date | null
    hora: string | null
    utilizados: number | null
    capacidad_teorica: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OcupacionAulaCountAggregateOutputType = {
    id: number
    aula_id: number
    fecha: number
    hora: number
    utilizados: number
    capacidad_teorica: number
    observaciones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OcupacionAulaAvgAggregateInputType = {
    id?: true
    aula_id?: true
    utilizados?: true
    capacidad_teorica?: true
  }

  export type OcupacionAulaSumAggregateInputType = {
    id?: true
    aula_id?: true
    utilizados?: true
    capacidad_teorica?: true
  }

  export type OcupacionAulaMinAggregateInputType = {
    id?: true
    aula_id?: true
    fecha?: true
    hora?: true
    utilizados?: true
    capacidad_teorica?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OcupacionAulaMaxAggregateInputType = {
    id?: true
    aula_id?: true
    fecha?: true
    hora?: true
    utilizados?: true
    capacidad_teorica?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OcupacionAulaCountAggregateInputType = {
    id?: true
    aula_id?: true
    fecha?: true
    hora?: true
    utilizados?: true
    capacidad_teorica?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OcupacionAulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OcupacionAula to aggregate.
     */
    where?: OcupacionAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OcupacionAulas to fetch.
     */
    orderBy?: OcupacionAulaOrderByWithRelationInput | OcupacionAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OcupacionAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OcupacionAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OcupacionAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OcupacionAulas
    **/
    _count?: true | OcupacionAulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OcupacionAulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OcupacionAulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OcupacionAulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OcupacionAulaMaxAggregateInputType
  }

  export type GetOcupacionAulaAggregateType<T extends OcupacionAulaAggregateArgs> = {
        [P in keyof T & keyof AggregateOcupacionAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOcupacionAula[P]>
      : GetScalarType<T[P], AggregateOcupacionAula[P]>
  }




  export type OcupacionAulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OcupacionAulaWhereInput
    orderBy?: OcupacionAulaOrderByWithAggregationInput | OcupacionAulaOrderByWithAggregationInput[]
    by: OcupacionAulaScalarFieldEnum[] | OcupacionAulaScalarFieldEnum
    having?: OcupacionAulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OcupacionAulaCountAggregateInputType | true
    _avg?: OcupacionAulaAvgAggregateInputType
    _sum?: OcupacionAulaSumAggregateInputType
    _min?: OcupacionAulaMinAggregateInputType
    _max?: OcupacionAulaMaxAggregateInputType
  }

  export type OcupacionAulaGroupByOutputType = {
    id: number
    aula_id: number
    fecha: Date
    hora: string
    utilizados: number
    capacidad_teorica: number
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    _count: OcupacionAulaCountAggregateOutputType | null
    _avg: OcupacionAulaAvgAggregateOutputType | null
    _sum: OcupacionAulaSumAggregateOutputType | null
    _min: OcupacionAulaMinAggregateOutputType | null
    _max: OcupacionAulaMaxAggregateOutputType | null
  }

  type GetOcupacionAulaGroupByPayload<T extends OcupacionAulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OcupacionAulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OcupacionAulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OcupacionAulaGroupByOutputType[P]>
            : GetScalarType<T[P], OcupacionAulaGroupByOutputType[P]>
        }
      >
    >


  export type OcupacionAulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aula_id?: boolean
    fecha?: boolean
    hora?: boolean
    utilizados?: boolean
    capacidad_teorica?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ocupacionAula"]>



  export type OcupacionAulaSelectScalar = {
    id?: boolean
    aula_id?: boolean
    fecha?: boolean
    hora?: boolean
    utilizados?: boolean
    capacidad_teorica?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OcupacionAulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aula_id" | "fecha" | "hora" | "utilizados" | "capacidad_teorica" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["ocupacionAula"]>
  export type OcupacionAulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }

  export type $OcupacionAulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OcupacionAula"
    objects: {
      aula: Prisma.$AulaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aula_id: number
      fecha: Date
      hora: string
      utilizados: number
      capacidad_teorica: number
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ocupacionAula"]>
    composites: {}
  }

  type OcupacionAulaGetPayload<S extends boolean | null | undefined | OcupacionAulaDefaultArgs> = $Result.GetResult<Prisma.$OcupacionAulaPayload, S>

  type OcupacionAulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OcupacionAulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OcupacionAulaCountAggregateInputType | true
    }

  export interface OcupacionAulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OcupacionAula'], meta: { name: 'OcupacionAula' } }
    /**
     * Find zero or one OcupacionAula that matches the filter.
     * @param {OcupacionAulaFindUniqueArgs} args - Arguments to find a OcupacionAula
     * @example
     * // Get one OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OcupacionAulaFindUniqueArgs>(args: SelectSubset<T, OcupacionAulaFindUniqueArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OcupacionAula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OcupacionAulaFindUniqueOrThrowArgs} args - Arguments to find a OcupacionAula
     * @example
     * // Get one OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OcupacionAulaFindUniqueOrThrowArgs>(args: SelectSubset<T, OcupacionAulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OcupacionAula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaFindFirstArgs} args - Arguments to find a OcupacionAula
     * @example
     * // Get one OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OcupacionAulaFindFirstArgs>(args?: SelectSubset<T, OcupacionAulaFindFirstArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OcupacionAula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaFindFirstOrThrowArgs} args - Arguments to find a OcupacionAula
     * @example
     * // Get one OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OcupacionAulaFindFirstOrThrowArgs>(args?: SelectSubset<T, OcupacionAulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OcupacionAulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OcupacionAulas
     * const ocupacionAulas = await prisma.ocupacionAula.findMany()
     * 
     * // Get first 10 OcupacionAulas
     * const ocupacionAulas = await prisma.ocupacionAula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ocupacionAulaWithIdOnly = await prisma.ocupacionAula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OcupacionAulaFindManyArgs>(args?: SelectSubset<T, OcupacionAulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OcupacionAula.
     * @param {OcupacionAulaCreateArgs} args - Arguments to create a OcupacionAula.
     * @example
     * // Create one OcupacionAula
     * const OcupacionAula = await prisma.ocupacionAula.create({
     *   data: {
     *     // ... data to create a OcupacionAula
     *   }
     * })
     * 
     */
    create<T extends OcupacionAulaCreateArgs>(args: SelectSubset<T, OcupacionAulaCreateArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OcupacionAulas.
     * @param {OcupacionAulaCreateManyArgs} args - Arguments to create many OcupacionAulas.
     * @example
     * // Create many OcupacionAulas
     * const ocupacionAula = await prisma.ocupacionAula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OcupacionAulaCreateManyArgs>(args?: SelectSubset<T, OcupacionAulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OcupacionAula.
     * @param {OcupacionAulaDeleteArgs} args - Arguments to delete one OcupacionAula.
     * @example
     * // Delete one OcupacionAula
     * const OcupacionAula = await prisma.ocupacionAula.delete({
     *   where: {
     *     // ... filter to delete one OcupacionAula
     *   }
     * })
     * 
     */
    delete<T extends OcupacionAulaDeleteArgs>(args: SelectSubset<T, OcupacionAulaDeleteArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OcupacionAula.
     * @param {OcupacionAulaUpdateArgs} args - Arguments to update one OcupacionAula.
     * @example
     * // Update one OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OcupacionAulaUpdateArgs>(args: SelectSubset<T, OcupacionAulaUpdateArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OcupacionAulas.
     * @param {OcupacionAulaDeleteManyArgs} args - Arguments to filter OcupacionAulas to delete.
     * @example
     * // Delete a few OcupacionAulas
     * const { count } = await prisma.ocupacionAula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OcupacionAulaDeleteManyArgs>(args?: SelectSubset<T, OcupacionAulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OcupacionAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OcupacionAulas
     * const ocupacionAula = await prisma.ocupacionAula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OcupacionAulaUpdateManyArgs>(args: SelectSubset<T, OcupacionAulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OcupacionAula.
     * @param {OcupacionAulaUpsertArgs} args - Arguments to update or create a OcupacionAula.
     * @example
     * // Update or create a OcupacionAula
     * const ocupacionAula = await prisma.ocupacionAula.upsert({
     *   create: {
     *     // ... data to create a OcupacionAula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OcupacionAula we want to update
     *   }
     * })
     */
    upsert<T extends OcupacionAulaUpsertArgs>(args: SelectSubset<T, OcupacionAulaUpsertArgs<ExtArgs>>): Prisma__OcupacionAulaClient<$Result.GetResult<Prisma.$OcupacionAulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OcupacionAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaCountArgs} args - Arguments to filter OcupacionAulas to count.
     * @example
     * // Count the number of OcupacionAulas
     * const count = await prisma.ocupacionAula.count({
     *   where: {
     *     // ... the filter for the OcupacionAulas we want to count
     *   }
     * })
    **/
    count<T extends OcupacionAulaCountArgs>(
      args?: Subset<T, OcupacionAulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OcupacionAulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OcupacionAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OcupacionAulaAggregateArgs>(args: Subset<T, OcupacionAulaAggregateArgs>): Prisma.PrismaPromise<GetOcupacionAulaAggregateType<T>>

    /**
     * Group by OcupacionAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcupacionAulaGroupByArgs} args - Group by arguments.
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
      T extends OcupacionAulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OcupacionAulaGroupByArgs['orderBy'] }
        : { orderBy?: OcupacionAulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OcupacionAulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOcupacionAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OcupacionAula model
   */
  readonly fields: OcupacionAulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OcupacionAula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OcupacionAulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OcupacionAula model
   */
  interface OcupacionAulaFieldRefs {
    readonly id: FieldRef<"OcupacionAula", 'Int'>
    readonly aula_id: FieldRef<"OcupacionAula", 'Int'>
    readonly fecha: FieldRef<"OcupacionAula", 'DateTime'>
    readonly hora: FieldRef<"OcupacionAula", 'String'>
    readonly utilizados: FieldRef<"OcupacionAula", 'Int'>
    readonly capacidad_teorica: FieldRef<"OcupacionAula", 'Int'>
    readonly observaciones: FieldRef<"OcupacionAula", 'String'>
    readonly createdAt: FieldRef<"OcupacionAula", 'DateTime'>
    readonly updatedAt: FieldRef<"OcupacionAula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OcupacionAula findUnique
   */
  export type OcupacionAulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter, which OcupacionAula to fetch.
     */
    where: OcupacionAulaWhereUniqueInput
  }

  /**
   * OcupacionAula findUniqueOrThrow
   */
  export type OcupacionAulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter, which OcupacionAula to fetch.
     */
    where: OcupacionAulaWhereUniqueInput
  }

  /**
   * OcupacionAula findFirst
   */
  export type OcupacionAulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter, which OcupacionAula to fetch.
     */
    where?: OcupacionAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OcupacionAulas to fetch.
     */
    orderBy?: OcupacionAulaOrderByWithRelationInput | OcupacionAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OcupacionAulas.
     */
    cursor?: OcupacionAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OcupacionAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OcupacionAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OcupacionAulas.
     */
    distinct?: OcupacionAulaScalarFieldEnum | OcupacionAulaScalarFieldEnum[]
  }

  /**
   * OcupacionAula findFirstOrThrow
   */
  export type OcupacionAulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter, which OcupacionAula to fetch.
     */
    where?: OcupacionAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OcupacionAulas to fetch.
     */
    orderBy?: OcupacionAulaOrderByWithRelationInput | OcupacionAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OcupacionAulas.
     */
    cursor?: OcupacionAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OcupacionAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OcupacionAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OcupacionAulas.
     */
    distinct?: OcupacionAulaScalarFieldEnum | OcupacionAulaScalarFieldEnum[]
  }

  /**
   * OcupacionAula findMany
   */
  export type OcupacionAulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter, which OcupacionAulas to fetch.
     */
    where?: OcupacionAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OcupacionAulas to fetch.
     */
    orderBy?: OcupacionAulaOrderByWithRelationInput | OcupacionAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OcupacionAulas.
     */
    cursor?: OcupacionAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OcupacionAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OcupacionAulas.
     */
    skip?: number
    distinct?: OcupacionAulaScalarFieldEnum | OcupacionAulaScalarFieldEnum[]
  }

  /**
   * OcupacionAula create
   */
  export type OcupacionAulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * The data needed to create a OcupacionAula.
     */
    data: XOR<OcupacionAulaCreateInput, OcupacionAulaUncheckedCreateInput>
  }

  /**
   * OcupacionAula createMany
   */
  export type OcupacionAulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OcupacionAulas.
     */
    data: OcupacionAulaCreateManyInput | OcupacionAulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OcupacionAula update
   */
  export type OcupacionAulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * The data needed to update a OcupacionAula.
     */
    data: XOR<OcupacionAulaUpdateInput, OcupacionAulaUncheckedUpdateInput>
    /**
     * Choose, which OcupacionAula to update.
     */
    where: OcupacionAulaWhereUniqueInput
  }

  /**
   * OcupacionAula updateMany
   */
  export type OcupacionAulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OcupacionAulas.
     */
    data: XOR<OcupacionAulaUpdateManyMutationInput, OcupacionAulaUncheckedUpdateManyInput>
    /**
     * Filter which OcupacionAulas to update
     */
    where?: OcupacionAulaWhereInput
    /**
     * Limit how many OcupacionAulas to update.
     */
    limit?: number
  }

  /**
   * OcupacionAula upsert
   */
  export type OcupacionAulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * The filter to search for the OcupacionAula to update in case it exists.
     */
    where: OcupacionAulaWhereUniqueInput
    /**
     * In case the OcupacionAula found by the `where` argument doesn't exist, create a new OcupacionAula with this data.
     */
    create: XOR<OcupacionAulaCreateInput, OcupacionAulaUncheckedCreateInput>
    /**
     * In case the OcupacionAula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OcupacionAulaUpdateInput, OcupacionAulaUncheckedUpdateInput>
  }

  /**
   * OcupacionAula delete
   */
  export type OcupacionAulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
    /**
     * Filter which OcupacionAula to delete.
     */
    where: OcupacionAulaWhereUniqueInput
  }

  /**
   * OcupacionAula deleteMany
   */
  export type OcupacionAulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OcupacionAulas to delete
     */
    where?: OcupacionAulaWhereInput
    /**
     * Limit how many OcupacionAulas to delete.
     */
    limit?: number
  }

  /**
   * OcupacionAula without action
   */
  export type OcupacionAulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OcupacionAula
     */
    select?: OcupacionAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OcupacionAula
     */
    omit?: OcupacionAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcupacionAulaInclude<ExtArgs> | null
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
   * Model EstudianteExamen
   */

  export type AggregateEstudianteExamen = {
    _count: EstudianteExamenCountAggregateOutputType | null
    _avg: EstudianteExamenAvgAggregateOutputType | null
    _sum: EstudianteExamenSumAggregateOutputType | null
    _min: EstudianteExamenMinAggregateOutputType | null
    _max: EstudianteExamenMaxAggregateOutputType | null
  }

  export type EstudianteExamenAvgAggregateOutputType = {
    id: number | null
    examen_id: number | null
    nota: Decimal | null
  }

  export type EstudianteExamenSumAggregateOutputType = {
    id: number | null
    examen_id: number | null
    nota: Decimal | null
  }

  export type EstudianteExamenMinAggregateOutputType = {
    id: number | null
    examen_id: number | null
    dni: string | null
    asistencia: boolean | null
    aprobado: boolean | null
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstudianteExamenMaxAggregateOutputType = {
    id: number | null
    examen_id: number | null
    dni: string | null
    asistencia: boolean | null
    aprobado: boolean | null
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstudianteExamenCountAggregateOutputType = {
    id: number
    examen_id: number
    dni: number
    asistencia: number
    aprobado: number
    nota: number
    observaciones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstudianteExamenAvgAggregateInputType = {
    id?: true
    examen_id?: true
    nota?: true
  }

  export type EstudianteExamenSumAggregateInputType = {
    id?: true
    examen_id?: true
    nota?: true
  }

  export type EstudianteExamenMinAggregateInputType = {
    id?: true
    examen_id?: true
    dni?: true
    asistencia?: true
    aprobado?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstudianteExamenMaxAggregateInputType = {
    id?: true
    examen_id?: true
    dni?: true
    asistencia?: true
    aprobado?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstudianteExamenCountAggregateInputType = {
    id?: true
    examen_id?: true
    dni?: true
    asistencia?: true
    aprobado?: true
    nota?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstudianteExamenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudianteExamen to aggregate.
     */
    where?: EstudianteExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteExamen to fetch.
     */
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstudianteExamen
    **/
    _count?: true | EstudianteExamenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteExamenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteExamenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteExamenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteExamenMaxAggregateInputType
  }

  export type GetEstudianteExamenAggregateType<T extends EstudianteExamenAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudianteExamen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudianteExamen[P]>
      : GetScalarType<T[P], AggregateEstudianteExamen[P]>
  }




  export type EstudianteExamenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteExamenWhereInput
    orderBy?: EstudianteExamenOrderByWithAggregationInput | EstudianteExamenOrderByWithAggregationInput[]
    by: EstudianteExamenScalarFieldEnum[] | EstudianteExamenScalarFieldEnum
    having?: EstudianteExamenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteExamenCountAggregateInputType | true
    _avg?: EstudianteExamenAvgAggregateInputType
    _sum?: EstudianteExamenSumAggregateInputType
    _min?: EstudianteExamenMinAggregateInputType
    _max?: EstudianteExamenMaxAggregateInputType
  }

  export type EstudianteExamenGroupByOutputType = {
    id: number
    examen_id: number
    dni: string
    asistencia: boolean
    aprobado: boolean
    nota: Decimal | null
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    _count: EstudianteExamenCountAggregateOutputType | null
    _avg: EstudianteExamenAvgAggregateOutputType | null
    _sum: EstudianteExamenSumAggregateOutputType | null
    _min: EstudianteExamenMinAggregateOutputType | null
    _max: EstudianteExamenMaxAggregateOutputType | null
  }

  type GetEstudianteExamenGroupByPayload<T extends EstudianteExamenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteExamenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteExamenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteExamenGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteExamenGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteExamenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examen_id?: boolean
    dni?: boolean
    asistencia?: boolean
    aprobado?: boolean
    nota?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudianteExamen"]>



  export type EstudianteExamenSelectScalar = {
    id?: boolean
    examen_id?: boolean
    dni?: boolean
    asistencia?: boolean
    aprobado?: boolean
    nota?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstudianteExamenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examen_id" | "dni" | "asistencia" | "aprobado" | "nota" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["estudianteExamen"]>
  export type EstudianteExamenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examen?: boolean | ExamenDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }

  export type $EstudianteExamenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstudianteExamen"
    objects: {
      examen: Prisma.$ExamenPayload<ExtArgs>
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      examen_id: number
      dni: string
      asistencia: boolean
      aprobado: boolean
      nota: Prisma.Decimal | null
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["estudianteExamen"]>
    composites: {}
  }

  type EstudianteExamenGetPayload<S extends boolean | null | undefined | EstudianteExamenDefaultArgs> = $Result.GetResult<Prisma.$EstudianteExamenPayload, S>

  type EstudianteExamenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteExamenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteExamenCountAggregateInputType | true
    }

  export interface EstudianteExamenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstudianteExamen'], meta: { name: 'EstudianteExamen' } }
    /**
     * Find zero or one EstudianteExamen that matches the filter.
     * @param {EstudianteExamenFindUniqueArgs} args - Arguments to find a EstudianteExamen
     * @example
     * // Get one EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteExamenFindUniqueArgs>(args: SelectSubset<T, EstudianteExamenFindUniqueArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstudianteExamen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteExamenFindUniqueOrThrowArgs} args - Arguments to find a EstudianteExamen
     * @example
     * // Get one EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteExamenFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteExamenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudianteExamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenFindFirstArgs} args - Arguments to find a EstudianteExamen
     * @example
     * // Get one EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteExamenFindFirstArgs>(args?: SelectSubset<T, EstudianteExamenFindFirstArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudianteExamen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenFindFirstOrThrowArgs} args - Arguments to find a EstudianteExamen
     * @example
     * // Get one EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteExamenFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteExamenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstudianteExamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findMany()
     * 
     * // Get first 10 EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteExamenWithIdOnly = await prisma.estudianteExamen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteExamenFindManyArgs>(args?: SelectSubset<T, EstudianteExamenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstudianteExamen.
     * @param {EstudianteExamenCreateArgs} args - Arguments to create a EstudianteExamen.
     * @example
     * // Create one EstudianteExamen
     * const EstudianteExamen = await prisma.estudianteExamen.create({
     *   data: {
     *     // ... data to create a EstudianteExamen
     *   }
     * })
     * 
     */
    create<T extends EstudianteExamenCreateArgs>(args: SelectSubset<T, EstudianteExamenCreateArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstudianteExamen.
     * @param {EstudianteExamenCreateManyArgs} args - Arguments to create many EstudianteExamen.
     * @example
     * // Create many EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteExamenCreateManyArgs>(args?: SelectSubset<T, EstudianteExamenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstudianteExamen.
     * @param {EstudianteExamenDeleteArgs} args - Arguments to delete one EstudianteExamen.
     * @example
     * // Delete one EstudianteExamen
     * const EstudianteExamen = await prisma.estudianteExamen.delete({
     *   where: {
     *     // ... filter to delete one EstudianteExamen
     *   }
     * })
     * 
     */
    delete<T extends EstudianteExamenDeleteArgs>(args: SelectSubset<T, EstudianteExamenDeleteArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstudianteExamen.
     * @param {EstudianteExamenUpdateArgs} args - Arguments to update one EstudianteExamen.
     * @example
     * // Update one EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteExamenUpdateArgs>(args: SelectSubset<T, EstudianteExamenUpdateArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstudianteExamen.
     * @param {EstudianteExamenDeleteManyArgs} args - Arguments to filter EstudianteExamen to delete.
     * @example
     * // Delete a few EstudianteExamen
     * const { count } = await prisma.estudianteExamen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteExamenDeleteManyArgs>(args?: SelectSubset<T, EstudianteExamenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstudianteExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteExamenUpdateManyArgs>(args: SelectSubset<T, EstudianteExamenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstudianteExamen.
     * @param {EstudianteExamenUpsertArgs} args - Arguments to update or create a EstudianteExamen.
     * @example
     * // Update or create a EstudianteExamen
     * const estudianteExamen = await prisma.estudianteExamen.upsert({
     *   create: {
     *     // ... data to create a EstudianteExamen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstudianteExamen we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteExamenUpsertArgs>(args: SelectSubset<T, EstudianteExamenUpsertArgs<ExtArgs>>): Prisma__EstudianteExamenClient<$Result.GetResult<Prisma.$EstudianteExamenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstudianteExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenCountArgs} args - Arguments to filter EstudianteExamen to count.
     * @example
     * // Count the number of EstudianteExamen
     * const count = await prisma.estudianteExamen.count({
     *   where: {
     *     // ... the filter for the EstudianteExamen we want to count
     *   }
     * })
    **/
    count<T extends EstudianteExamenCountArgs>(
      args?: Subset<T, EstudianteExamenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteExamenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstudianteExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudianteExamenAggregateArgs>(args: Subset<T, EstudianteExamenAggregateArgs>): Prisma.PrismaPromise<GetEstudianteExamenAggregateType<T>>

    /**
     * Group by EstudianteExamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteExamenGroupByArgs} args - Group by arguments.
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
      T extends EstudianteExamenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteExamenGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteExamenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudianteExamenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteExamenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstudianteExamen model
   */
  readonly fields: EstudianteExamenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstudianteExamen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteExamenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examen<T extends ExamenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamenDefaultArgs<ExtArgs>>): Prisma__ExamenClient<$Result.GetResult<Prisma.$ExamenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EstudianteExamen model
   */
  interface EstudianteExamenFieldRefs {
    readonly id: FieldRef<"EstudianteExamen", 'Int'>
    readonly examen_id: FieldRef<"EstudianteExamen", 'Int'>
    readonly dni: FieldRef<"EstudianteExamen", 'String'>
    readonly asistencia: FieldRef<"EstudianteExamen", 'Boolean'>
    readonly aprobado: FieldRef<"EstudianteExamen", 'Boolean'>
    readonly nota: FieldRef<"EstudianteExamen", 'Decimal'>
    readonly observaciones: FieldRef<"EstudianteExamen", 'String'>
    readonly createdAt: FieldRef<"EstudianteExamen", 'DateTime'>
    readonly updatedAt: FieldRef<"EstudianteExamen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EstudianteExamen findUnique
   */
  export type EstudianteExamenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteExamen to fetch.
     */
    where: EstudianteExamenWhereUniqueInput
  }

  /**
   * EstudianteExamen findUniqueOrThrow
   */
  export type EstudianteExamenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteExamen to fetch.
     */
    where: EstudianteExamenWhereUniqueInput
  }

  /**
   * EstudianteExamen findFirst
   */
  export type EstudianteExamenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteExamen to fetch.
     */
    where?: EstudianteExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteExamen to fetch.
     */
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudianteExamen.
     */
    cursor?: EstudianteExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudianteExamen.
     */
    distinct?: EstudianteExamenScalarFieldEnum | EstudianteExamenScalarFieldEnum[]
  }

  /**
   * EstudianteExamen findFirstOrThrow
   */
  export type EstudianteExamenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteExamen to fetch.
     */
    where?: EstudianteExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteExamen to fetch.
     */
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudianteExamen.
     */
    cursor?: EstudianteExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteExamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudianteExamen.
     */
    distinct?: EstudianteExamenScalarFieldEnum | EstudianteExamenScalarFieldEnum[]
  }

  /**
   * EstudianteExamen findMany
   */
  export type EstudianteExamenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteExamen to fetch.
     */
    where?: EstudianteExamenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteExamen to fetch.
     */
    orderBy?: EstudianteExamenOrderByWithRelationInput | EstudianteExamenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstudianteExamen.
     */
    cursor?: EstudianteExamenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteExamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteExamen.
     */
    skip?: number
    distinct?: EstudianteExamenScalarFieldEnum | EstudianteExamenScalarFieldEnum[]
  }

  /**
   * EstudianteExamen create
   */
  export type EstudianteExamenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * The data needed to create a EstudianteExamen.
     */
    data: XOR<EstudianteExamenCreateInput, EstudianteExamenUncheckedCreateInput>
  }

  /**
   * EstudianteExamen createMany
   */
  export type EstudianteExamenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstudianteExamen.
     */
    data: EstudianteExamenCreateManyInput | EstudianteExamenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstudianteExamen update
   */
  export type EstudianteExamenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * The data needed to update a EstudianteExamen.
     */
    data: XOR<EstudianteExamenUpdateInput, EstudianteExamenUncheckedUpdateInput>
    /**
     * Choose, which EstudianteExamen to update.
     */
    where: EstudianteExamenWhereUniqueInput
  }

  /**
   * EstudianteExamen updateMany
   */
  export type EstudianteExamenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstudianteExamen.
     */
    data: XOR<EstudianteExamenUpdateManyMutationInput, EstudianteExamenUncheckedUpdateManyInput>
    /**
     * Filter which EstudianteExamen to update
     */
    where?: EstudianteExamenWhereInput
    /**
     * Limit how many EstudianteExamen to update.
     */
    limit?: number
  }

  /**
   * EstudianteExamen upsert
   */
  export type EstudianteExamenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * The filter to search for the EstudianteExamen to update in case it exists.
     */
    where: EstudianteExamenWhereUniqueInput
    /**
     * In case the EstudianteExamen found by the `where` argument doesn't exist, create a new EstudianteExamen with this data.
     */
    create: XOR<EstudianteExamenCreateInput, EstudianteExamenUncheckedCreateInput>
    /**
     * In case the EstudianteExamen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteExamenUpdateInput, EstudianteExamenUncheckedUpdateInput>
  }

  /**
   * EstudianteExamen delete
   */
  export type EstudianteExamenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
    /**
     * Filter which EstudianteExamen to delete.
     */
    where: EstudianteExamenWhereUniqueInput
  }

  /**
   * EstudianteExamen deleteMany
   */
  export type EstudianteExamenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudianteExamen to delete
     */
    where?: EstudianteExamenWhereInput
    /**
     * Limit how many EstudianteExamen to delete.
     */
    limit?: number
  }

  /**
   * EstudianteExamen without action
   */
  export type EstudianteExamenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteExamen
     */
    select?: EstudianteExamenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteExamen
     */
    omit?: EstudianteExamenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteExamenInclude<ExtArgs> | null
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
    facultadId: 'facultadId',
    aulaId: 'aulaId',
    materia_codigo: 'materia_codigo',
    nombreMateria: 'nombreMateria',
    areatema: 'areatema',
    fecha: 'fecha',
    hora: 'hora',
    tipoExamen: 'tipoExamen',
    modalidadExamen: 'modalidadExamen',
    catedra: 'catedra',
    docente: 'docente',
    monitoreo: 'monitoreo',
    control_cargo: 'control_cargo',
    materialPermitido: 'materialPermitido',
    observaciones: 'observaciones',
    observaciones_adicionales: 'observaciones_adicionales',
    url: 'url',
    acta_numero: 'acta_numero',
    cantidadInscriptos: 'cantidadInscriptos',
    fechaUltConsulta: 'fechaUltConsulta',
    requierePc: 'requierePc',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamenScalarFieldEnum = (typeof ExamenScalarFieldEnum)[keyof typeof ExamenScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
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
    sede: 'sede',
    capacidad: 'capacidad',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const OcupacionAulaScalarFieldEnum: {
    id: 'id',
    aula_id: 'aula_id',
    fecha: 'fecha',
    hora: 'hora',
    utilizados: 'utilizados',
    capacidad_teorica: 'capacidad_teorica',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OcupacionAulaScalarFieldEnum = (typeof OcupacionAulaScalarFieldEnum)[keyof typeof OcupacionAulaScalarFieldEnum]


  export const TotemDataScalarFieldEnum: {
    id: 'id',
    sheetName: 'sheetName',
    data: 'data',
    timestamp: 'timestamp',
    processed: 'processed'
  };

  export type TotemDataScalarFieldEnum = (typeof TotemDataScalarFieldEnum)[keyof typeof TotemDataScalarFieldEnum]


  export const EstudianteExamenScalarFieldEnum: {
    id: 'id',
    examen_id: 'examen_id',
    dni: 'dni',
    asistencia: 'asistencia',
    aprobado: 'aprobado',
    nota: 'nota',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstudianteExamenScalarFieldEnum = (typeof EstudianteExamenScalarFieldEnum)[keyof typeof EstudianteExamenScalarFieldEnum]


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
    materia_codigo: 'materia_codigo',
    nombreMateria: 'nombreMateria',
    areatema: 'areatema',
    tipoExamen: 'tipoExamen',
    modalidadExamen: 'modalidadExamen',
    catedra: 'catedra',
    docente: 'docente',
    monitoreo: 'monitoreo',
    control_cargo: 'control_cargo',
    materialPermitido: 'materialPermitido',
    observaciones: 'observaciones',
    observaciones_adicionales: 'observaciones_adicionales',
    url: 'url',
    acta_numero: 'acta_numero'
  };

  export type ExamenOrderByRelevanceFieldEnum = (typeof ExamenOrderByRelevanceFieldEnum)[keyof typeof ExamenOrderByRelevanceFieldEnum]


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
    sede: 'sede'
  };

  export type AulaOrderByRelevanceFieldEnum = (typeof AulaOrderByRelevanceFieldEnum)[keyof typeof AulaOrderByRelevanceFieldEnum]


  export const OcupacionAulaOrderByRelevanceFieldEnum: {
    hora: 'hora',
    observaciones: 'observaciones'
  };

  export type OcupacionAulaOrderByRelevanceFieldEnum = (typeof OcupacionAulaOrderByRelevanceFieldEnum)[keyof typeof OcupacionAulaOrderByRelevanceFieldEnum]


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


  export const EstudianteExamenOrderByRelevanceFieldEnum: {
    dni: 'dni',
    observaciones: 'observaciones'
  };

  export type EstudianteExamenOrderByRelevanceFieldEnum = (typeof EstudianteExamenOrderByRelevanceFieldEnum)[keyof typeof EstudianteExamenOrderByRelevanceFieldEnum]


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
    sheetId?: StringNullableFilter<"Facultad"> | string | null
    activa?: BoolFilter<"Facultad"> | boolean
    createdAt?: DateTimeFilter<"Facultad"> | Date | string
    updatedAt?: DateTimeFilter<"Facultad"> | Date | string
    carreras?: CarreraListRelationFilter
    examenes?: ExamenListRelationFilter
    sectores?: SectorFacultadListRelationFilter
  }

  export type FacultadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
    sheetId?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carreras?: CarreraOrderByRelationAggregateInput
    examenes?: ExamenOrderByRelationAggregateInput
    sectores?: SectorFacultadOrderByRelationAggregateInput
    _relevance?: FacultadOrderByRelevanceInput
  }

  export type FacultadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: FacultadWhereInput | FacultadWhereInput[]
    OR?: FacultadWhereInput[]
    NOT?: FacultadWhereInput | FacultadWhereInput[]
    codigo?: StringNullableFilter<"Facultad"> | string | null
    sheetId?: StringNullableFilter<"Facultad"> | string | null
    activa?: BoolFilter<"Facultad"> | boolean
    createdAt?: DateTimeFilter<"Facultad"> | Date | string
    updatedAt?: DateTimeFilter<"Facultad"> | Date | string
    carreras?: CarreraListRelationFilter
    examenes?: ExamenListRelationFilter
    sectores?: SectorFacultadListRelationFilter
  }, "id" | "nombre">

  export type FacultadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
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
    facultadId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    materia_codigo?: StringFilter<"Examen"> | string
    nombreMateria?: StringFilter<"Examen"> | string
    areatema?: StringNullableFilter<"Examen"> | string | null
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    catedra?: StringNullableFilter<"Examen"> | string | null
    docente?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    control_cargo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    observaciones_adicionales?: StringNullableFilter<"Examen"> | string | null
    url?: StringNullableFilter<"Examen"> | string | null
    acta_numero?: StringNullableFilter<"Examen"> | string | null
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
    aula?: XOR<AulaNullableScalarRelationFilter, AulaWhereInput> | null
    examenTotem?: XOR<ExamenTotemNullableScalarRelationFilter, ExamenTotemWhereInput> | null
    estudianteExamenes?: EstudianteExamenListRelationFilter
  }

  export type ExamenOrderByWithRelationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrderInput | SortOrder
    materia_codigo?: SortOrder
    nombreMateria?: SortOrder
    areatema?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrderInput | SortOrder
    tipoExamen?: SortOrderInput | SortOrder
    modalidadExamen?: SortOrderInput | SortOrder
    catedra?: SortOrderInput | SortOrder
    docente?: SortOrderInput | SortOrder
    monitoreo?: SortOrderInput | SortOrder
    control_cargo?: SortOrderInput | SortOrder
    materialPermitido?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    observaciones_adicionales?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    acta_numero?: SortOrderInput | SortOrder
    cantidadInscriptos?: SortOrderInput | SortOrder
    fechaUltConsulta?: SortOrderInput | SortOrder
    requierePc?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    facultad?: FacultadOrderByWithRelationInput
    aula?: AulaOrderByWithRelationInput
    examenTotem?: ExamenTotemOrderByWithRelationInput
    estudianteExamenes?: EstudianteExamenOrderByRelationAggregateInput
    _relevance?: ExamenOrderByRelevanceInput
  }

  export type ExamenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamenWhereInput | ExamenWhereInput[]
    OR?: ExamenWhereInput[]
    NOT?: ExamenWhereInput | ExamenWhereInput[]
    carreraId?: IntFilter<"Examen"> | number
    facultadId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    materia_codigo?: StringFilter<"Examen"> | string
    nombreMateria?: StringFilter<"Examen"> | string
    areatema?: StringNullableFilter<"Examen"> | string | null
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    catedra?: StringNullableFilter<"Examen"> | string | null
    docente?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    control_cargo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    observaciones_adicionales?: StringNullableFilter<"Examen"> | string | null
    url?: StringNullableFilter<"Examen"> | string | null
    acta_numero?: StringNullableFilter<"Examen"> | string | null
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
    aula?: XOR<AulaNullableScalarRelationFilter, AulaWhereInput> | null
    examenTotem?: XOR<ExamenTotemNullableScalarRelationFilter, ExamenTotemWhereInput> | null
    estudianteExamenes?: EstudianteExamenListRelationFilter
  }, "id">

  export type ExamenOrderByWithAggregationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrderInput | SortOrder
    materia_codigo?: SortOrder
    nombreMateria?: SortOrder
    areatema?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrderInput | SortOrder
    tipoExamen?: SortOrderInput | SortOrder
    modalidadExamen?: SortOrderInput | SortOrder
    catedra?: SortOrderInput | SortOrder
    docente?: SortOrderInput | SortOrder
    monitoreo?: SortOrderInput | SortOrder
    control_cargo?: SortOrderInput | SortOrder
    materialPermitido?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    observaciones_adicionales?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    acta_numero?: SortOrderInput | SortOrder
    cantidadInscriptos?: SortOrderInput | SortOrder
    fechaUltConsulta?: SortOrderInput | SortOrder
    requierePc?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    facultadId?: IntWithAggregatesFilter<"Examen"> | number
    aulaId?: IntNullableWithAggregatesFilter<"Examen"> | number | null
    materia_codigo?: StringWithAggregatesFilter<"Examen"> | string
    nombreMateria?: StringWithAggregatesFilter<"Examen"> | string
    areatema?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
    hora?: DateTimeNullableWithAggregatesFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    catedra?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    docente?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    monitoreo?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    control_cargo?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    materialPermitido?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    observaciones_adicionales?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    url?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    acta_numero?: StringNullableWithAggregatesFilter<"Examen"> | string | null
    cantidadInscriptos?: IntNullableWithAggregatesFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableWithAggregatesFilter<"Examen"> | Date | string | null
    requierePc?: BoolWithAggregatesFilter<"Examen"> | boolean
    activo?: BoolWithAggregatesFilter<"Examen"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Examen"> | Date | string
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    dni?: StringFilter<"Estudiante"> | string
    nombre?: StringFilter<"Estudiante"> | string
    apellido?: StringFilter<"Estudiante"> | string
    email?: StringNullableFilter<"Estudiante"> | string | null
    telefono?: StringNullableFilter<"Estudiante"> | string | null
    activo?: BoolFilter<"Estudiante"> | boolean
    createdAt?: DateTimeFilter<"Estudiante"> | Date | string
    updatedAt?: DateTimeFilter<"Estudiante"> | Date | string
    examenes?: EstudianteExamenListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examenes?: EstudianteExamenOrderByRelationAggregateInput
    _relevance?: EstudianteOrderByRelevanceInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
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
    examenes?: EstudianteExamenListRelationFilter
  }, "dni">

  export type EstudianteOrderByWithAggregationInput = {
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
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
    sede?: StringFilter<"Aula"> | string
    capacidad?: IntFilter<"Aula"> | number
    activa?: BoolFilter<"Aula"> | boolean
    createdAt?: DateTimeFilter<"Aula"> | Date | string
    updatedAt?: DateTimeFilter<"Aula"> | Date | string
    examenes?: ExamenListRelationFilter
    ocupaciones?: OcupacionAulaListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    sede?: SortOrder
    capacidad?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examenes?: ExamenOrderByRelationAggregateInput
    ocupaciones?: OcupacionAulaOrderByRelationAggregateInput
    _relevance?: AulaOrderByRelevanceInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    sede?: StringFilter<"Aula"> | string
    capacidad?: IntFilter<"Aula"> | number
    activa?: BoolFilter<"Aula"> | boolean
    createdAt?: DateTimeFilter<"Aula"> | Date | string
    updatedAt?: DateTimeFilter<"Aula"> | Date | string
    examenes?: ExamenListRelationFilter
    ocupaciones?: OcupacionAulaListRelationFilter
  }, "id" | "nombre">

  export type AulaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    sede?: SortOrder
    capacidad?: SortOrder
    activa?: SortOrder
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
    sede?: StringWithAggregatesFilter<"Aula"> | string
    capacidad?: IntWithAggregatesFilter<"Aula"> | number
    activa?: BoolWithAggregatesFilter<"Aula"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
  }

  export type OcupacionAulaWhereInput = {
    AND?: OcupacionAulaWhereInput | OcupacionAulaWhereInput[]
    OR?: OcupacionAulaWhereInput[]
    NOT?: OcupacionAulaWhereInput | OcupacionAulaWhereInput[]
    id?: IntFilter<"OcupacionAula"> | number
    aula_id?: IntFilter<"OcupacionAula"> | number
    fecha?: DateTimeFilter<"OcupacionAula"> | Date | string
    hora?: StringFilter<"OcupacionAula"> | string
    utilizados?: IntFilter<"OcupacionAula"> | number
    capacidad_teorica?: IntFilter<"OcupacionAula"> | number
    observaciones?: StringNullableFilter<"OcupacionAula"> | string | null
    createdAt?: DateTimeFilter<"OcupacionAula"> | Date | string
    updatedAt?: DateTimeFilter<"OcupacionAula"> | Date | string
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }

  export type OcupacionAulaOrderByWithRelationInput = {
    id?: SortOrder
    aula_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aula?: AulaOrderByWithRelationInput
    _relevance?: OcupacionAulaOrderByRelevanceInput
  }

  export type OcupacionAulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aula_id_fecha_hora?: OcupacionAulaAula_idFechaHoraCompoundUniqueInput
    AND?: OcupacionAulaWhereInput | OcupacionAulaWhereInput[]
    OR?: OcupacionAulaWhereInput[]
    NOT?: OcupacionAulaWhereInput | OcupacionAulaWhereInput[]
    aula_id?: IntFilter<"OcupacionAula"> | number
    fecha?: DateTimeFilter<"OcupacionAula"> | Date | string
    hora?: StringFilter<"OcupacionAula"> | string
    utilizados?: IntFilter<"OcupacionAula"> | number
    capacidad_teorica?: IntFilter<"OcupacionAula"> | number
    observaciones?: StringNullableFilter<"OcupacionAula"> | string | null
    createdAt?: DateTimeFilter<"OcupacionAula"> | Date | string
    updatedAt?: DateTimeFilter<"OcupacionAula"> | Date | string
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }, "id" | "aula_id_fecha_hora">

  export type OcupacionAulaOrderByWithAggregationInput = {
    id?: SortOrder
    aula_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OcupacionAulaCountOrderByAggregateInput
    _avg?: OcupacionAulaAvgOrderByAggregateInput
    _max?: OcupacionAulaMaxOrderByAggregateInput
    _min?: OcupacionAulaMinOrderByAggregateInput
    _sum?: OcupacionAulaSumOrderByAggregateInput
  }

  export type OcupacionAulaScalarWhereWithAggregatesInput = {
    AND?: OcupacionAulaScalarWhereWithAggregatesInput | OcupacionAulaScalarWhereWithAggregatesInput[]
    OR?: OcupacionAulaScalarWhereWithAggregatesInput[]
    NOT?: OcupacionAulaScalarWhereWithAggregatesInput | OcupacionAulaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OcupacionAula"> | number
    aula_id?: IntWithAggregatesFilter<"OcupacionAula"> | number
    fecha?: DateTimeWithAggregatesFilter<"OcupacionAula"> | Date | string
    hora?: StringWithAggregatesFilter<"OcupacionAula"> | string
    utilizados?: IntWithAggregatesFilter<"OcupacionAula"> | number
    capacidad_teorica?: IntWithAggregatesFilter<"OcupacionAula"> | number
    observaciones?: StringNullableWithAggregatesFilter<"OcupacionAula"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OcupacionAula"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OcupacionAula"> | Date | string
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

  export type EstudianteExamenWhereInput = {
    AND?: EstudianteExamenWhereInput | EstudianteExamenWhereInput[]
    OR?: EstudianteExamenWhereInput[]
    NOT?: EstudianteExamenWhereInput | EstudianteExamenWhereInput[]
    id?: IntFilter<"EstudianteExamen"> | number
    examen_id?: IntFilter<"EstudianteExamen"> | number
    dni?: StringFilter<"EstudianteExamen"> | string
    asistencia?: BoolFilter<"EstudianteExamen"> | boolean
    aprobado?: BoolFilter<"EstudianteExamen"> | boolean
    nota?: DecimalNullableFilter<"EstudianteExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"EstudianteExamen"> | string | null
    createdAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
    updatedAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
  }

  export type EstudianteExamenOrderByWithRelationInput = {
    id?: SortOrder
    examen_id?: SortOrder
    dni?: SortOrder
    asistencia?: SortOrder
    aprobado?: SortOrder
    nota?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examen?: ExamenOrderByWithRelationInput
    estudiante?: EstudianteOrderByWithRelationInput
    _relevance?: EstudianteExamenOrderByRelevanceInput
  }

  export type EstudianteExamenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    examen_id_dni?: EstudianteExamenExamen_idDniCompoundUniqueInput
    AND?: EstudianteExamenWhereInput | EstudianteExamenWhereInput[]
    OR?: EstudianteExamenWhereInput[]
    NOT?: EstudianteExamenWhereInput | EstudianteExamenWhereInput[]
    examen_id?: IntFilter<"EstudianteExamen"> | number
    dni?: StringFilter<"EstudianteExamen"> | string
    asistencia?: BoolFilter<"EstudianteExamen"> | boolean
    aprobado?: BoolFilter<"EstudianteExamen"> | boolean
    nota?: DecimalNullableFilter<"EstudianteExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"EstudianteExamen"> | string | null
    createdAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
    updatedAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
    examen?: XOR<ExamenScalarRelationFilter, ExamenWhereInput>
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
  }, "id" | "examen_id_dni">

  export type EstudianteExamenOrderByWithAggregationInput = {
    id?: SortOrder
    examen_id?: SortOrder
    dni?: SortOrder
    asistencia?: SortOrder
    aprobado?: SortOrder
    nota?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstudianteExamenCountOrderByAggregateInput
    _avg?: EstudianteExamenAvgOrderByAggregateInput
    _max?: EstudianteExamenMaxOrderByAggregateInput
    _min?: EstudianteExamenMinOrderByAggregateInput
    _sum?: EstudianteExamenSumOrderByAggregateInput
  }

  export type EstudianteExamenScalarWhereWithAggregatesInput = {
    AND?: EstudianteExamenScalarWhereWithAggregatesInput | EstudianteExamenScalarWhereWithAggregatesInput[]
    OR?: EstudianteExamenScalarWhereWithAggregatesInput[]
    NOT?: EstudianteExamenScalarWhereWithAggregatesInput | EstudianteExamenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstudianteExamen"> | number
    examen_id?: IntWithAggregatesFilter<"EstudianteExamen"> | number
    dni?: StringWithAggregatesFilter<"EstudianteExamen"> | string
    asistencia?: BoolWithAggregatesFilter<"EstudianteExamen"> | boolean
    aprobado?: BoolWithAggregatesFilter<"EstudianteExamen"> | boolean
    nota?: DecimalNullableWithAggregatesFilter<"EstudianteExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableWithAggregatesFilter<"EstudianteExamen"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EstudianteExamen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EstudianteExamen"> | Date | string
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

  export type FacultadCreateInput = {
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    examenes?: ExamenCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    examenes?: ExamenUncheckedCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    examenes?: ExamenUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    examenes?: ExamenUncheckedUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadCreateManyInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
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
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    facultad: FacultadCreateNestedOneWithoutExamenesInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenCreateNestedManyWithoutExamenInput
  }

  export type ExamenUncheckedCreateInput = {
    id?: number
    carreraId: number
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput
  }

  export type ExamenUpdateInput = {
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    facultad?: FacultadUpdateOneRequiredWithoutExamenesNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type ExamenCreateManyInput = {
    id?: number
    carreraId: number
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenUpdateManyMutationInput = {
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    examenes?: EstudianteExamenCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: EstudianteExamenUncheckedCreateNestedManyWithoutEstudianteInput
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
    examenes?: EstudianteExamenUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: EstudianteExamenUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
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
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenCreateNestedManyWithoutAulaInput
    ocupaciones?: OcupacionAulaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id?: number
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenUncheckedCreateNestedManyWithoutAulaInput
    ocupaciones?: OcupacionAulaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUpdateManyWithoutAulaNestedInput
    ocupaciones?: OcupacionAulaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUncheckedUpdateManyWithoutAulaNestedInput
    ocupaciones?: OcupacionAulaUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id?: number
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AulaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaCreateInput = {
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aula: AulaCreateNestedOneWithoutOcupacionesInput
  }

  export type OcupacionAulaUncheckedCreateInput = {
    id?: number
    aula_id: number
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OcupacionAulaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aula?: AulaUpdateOneRequiredWithoutOcupacionesNestedInput
  }

  export type OcupacionAulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aula_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaCreateManyInput = {
    id?: number
    aula_id: number
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OcupacionAulaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aula_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EstudianteExamenCreateInput = {
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    examen: ExamenCreateNestedOneWithoutEstudianteExamenesInput
    estudiante: EstudianteCreateNestedOneWithoutExamenesInput
  }

  export type EstudianteExamenUncheckedCreateInput = {
    id?: number
    examen_id: number
    dni: string
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenUpdateInput = {
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examen?: ExamenUpdateOneRequiredWithoutEstudianteExamenesNestedInput
    estudiante?: EstudianteUpdateOneRequiredWithoutExamenesNestedInput
  }

  export type EstudianteExamenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    examen_id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenCreateManyInput = {
    id?: number
    examen_id: number
    dni: string
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenUpdateManyMutationInput = {
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    examen_id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
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

  export type ExamenListRelationFilter = {
    every?: ExamenWhereInput
    some?: ExamenWhereInput
    none?: ExamenWhereInput
  }

  export type SectorFacultadListRelationFilter = {
    every?: SectorFacultadWhereInput
    some?: SectorFacultadWhereInput
    none?: SectorFacultadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarreraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectorFacultadOrderByRelationAggregateInput = {
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
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacultadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    sheetId?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultadSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CarreraTotemOrderByRelationAggregateInput = {
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

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type AulaNullableScalarRelationFilter = {
    is?: AulaWhereInput | null
    isNot?: AulaWhereInput | null
  }

  export type ExamenTotemNullableScalarRelationFilter = {
    is?: ExamenTotemWhereInput | null
    isNot?: ExamenTotemWhereInput | null
  }

  export type EstudianteExamenListRelationFilter = {
    every?: EstudianteExamenWhereInput
    some?: EstudianteExamenWhereInput
    none?: EstudianteExamenWhereInput
  }

  export type EstudianteExamenOrderByRelationAggregateInput = {
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
    facultadId?: SortOrder
    aulaId?: SortOrder
    materia_codigo?: SortOrder
    nombreMateria?: SortOrder
    areatema?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    modalidadExamen?: SortOrder
    catedra?: SortOrder
    docente?: SortOrder
    monitoreo?: SortOrder
    control_cargo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    observaciones_adicionales?: SortOrder
    url?: SortOrder
    acta_numero?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
    requierePc?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrder
    cantidadInscriptos?: SortOrder
  }

  export type ExamenMaxOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrder
    materia_codigo?: SortOrder
    nombreMateria?: SortOrder
    areatema?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    modalidadExamen?: SortOrder
    catedra?: SortOrder
    docente?: SortOrder
    monitoreo?: SortOrder
    control_cargo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    observaciones_adicionales?: SortOrder
    url?: SortOrder
    acta_numero?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
    requierePc?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenMinOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrder
    materia_codigo?: SortOrder
    nombreMateria?: SortOrder
    areatema?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    tipoExamen?: SortOrder
    modalidadExamen?: SortOrder
    catedra?: SortOrder
    docente?: SortOrder
    monitoreo?: SortOrder
    control_cargo?: SortOrder
    materialPermitido?: SortOrder
    observaciones?: SortOrder
    observaciones_adicionales?: SortOrder
    url?: SortOrder
    acta_numero?: SortOrder
    cantidadInscriptos?: SortOrder
    fechaUltConsulta?: SortOrder
    requierePc?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamenSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    facultadId?: SortOrder
    aulaId?: SortOrder
    cantidadInscriptos?: SortOrder
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

  export type EstudianteOrderByRelevanceInput = {
    fields: EstudianteOrderByRelevanceFieldEnum | EstudianteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstudianteCountOrderByAggregateInput = {
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
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
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OcupacionAulaListRelationFilter = {
    every?: OcupacionAulaWhereInput
    some?: OcupacionAulaWhereInput
    none?: OcupacionAulaWhereInput
  }

  export type OcupacionAulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AulaOrderByRelevanceInput = {
    fields: AulaOrderByRelevanceFieldEnum | AulaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AulaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sede?: SortOrder
    capacidad?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sede?: SortOrder
    capacidad?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    sede?: SortOrder
    capacidad?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
  }

  export type AulaScalarRelationFilter = {
    is?: AulaWhereInput
    isNot?: AulaWhereInput
  }

  export type OcupacionAulaOrderByRelevanceInput = {
    fields: OcupacionAulaOrderByRelevanceFieldEnum | OcupacionAulaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OcupacionAulaAula_idFechaHoraCompoundUniqueInput = {
    aula_id: number
    fecha: Date | string
    hora: string
  }

  export type OcupacionAulaCountOrderByAggregateInput = {
    id?: SortOrder
    aula_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OcupacionAulaAvgOrderByAggregateInput = {
    id?: SortOrder
    aula_id?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
  }

  export type OcupacionAulaMaxOrderByAggregateInput = {
    id?: SortOrder
    aula_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OcupacionAulaMinOrderByAggregateInput = {
    id?: SortOrder
    aula_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OcupacionAulaSumOrderByAggregateInput = {
    id?: SortOrder
    aula_id?: SortOrder
    utilizados?: SortOrder
    capacidad_teorica?: SortOrder
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

  export type ExamenScalarRelationFilter = {
    is?: ExamenWhereInput
    isNot?: ExamenWhereInput
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type EstudianteExamenOrderByRelevanceInput = {
    fields: EstudianteExamenOrderByRelevanceFieldEnum | EstudianteExamenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstudianteExamenExamen_idDniCompoundUniqueInput = {
    examen_id: number
    dni: string
  }

  export type EstudianteExamenCountOrderByAggregateInput = {
    id?: SortOrder
    examen_id?: SortOrder
    dni?: SortOrder
    asistencia?: SortOrder
    aprobado?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteExamenAvgOrderByAggregateInput = {
    id?: SortOrder
    examen_id?: SortOrder
    nota?: SortOrder
  }

  export type EstudianteExamenMaxOrderByAggregateInput = {
    id?: SortOrder
    examen_id?: SortOrder
    dni?: SortOrder
    asistencia?: SortOrder
    aprobado?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteExamenMinOrderByAggregateInput = {
    id?: SortOrder
    examen_id?: SortOrder
    dni?: SortOrder
    asistencia?: SortOrder
    aprobado?: SortOrder
    nota?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstudianteExamenSumOrderByAggregateInput = {
    id?: SortOrder
    examen_id?: SortOrder
    nota?: SortOrder
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

  export type CarreraCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type ExamenCreateNestedManyWithoutFacultadInput = {
    create?: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput> | ExamenCreateWithoutFacultadInput[] | ExamenUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutFacultadInput | ExamenCreateOrConnectWithoutFacultadInput[]
    createMany?: ExamenCreateManyFacultadInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type SectorFacultadCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
  }

  export type CarreraUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type ExamenUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput> | ExamenCreateWithoutFacultadInput[] | ExamenUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutFacultadInput | ExamenCreateOrConnectWithoutFacultadInput[]
    createMany?: ExamenCreateManyFacultadInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<SectorFacultadCreateWithoutFacultadInput, SectorFacultadUncheckedCreateWithoutFacultadInput> | SectorFacultadCreateWithoutFacultadInput[] | SectorFacultadUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: SectorFacultadCreateOrConnectWithoutFacultadInput | SectorFacultadCreateOrConnectWithoutFacultadInput[]
    createMany?: SectorFacultadCreateManyFacultadInputEnvelope
    connect?: SectorFacultadWhereUniqueInput | SectorFacultadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type ExamenUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput> | ExamenCreateWithoutFacultadInput[] | ExamenUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutFacultadInput | ExamenCreateOrConnectWithoutFacultadInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutFacultadInput | ExamenUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: ExamenCreateManyFacultadInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutFacultadInput | ExamenUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutFacultadInput | ExamenUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
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

  export type ExamenUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput> | ExamenCreateWithoutFacultadInput[] | ExamenUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutFacultadInput | ExamenCreateOrConnectWithoutFacultadInput[]
    upsert?: ExamenUpsertWithWhereUniqueWithoutFacultadInput | ExamenUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: ExamenCreateManyFacultadInputEnvelope
    set?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    disconnect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    delete?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
    update?: ExamenUpdateWithWhereUniqueWithoutFacultadInput | ExamenUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: ExamenUpdateManyWithWhereWithoutFacultadInput | ExamenUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
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

  export type CarreraCreateNestedOneWithoutExamenesInput = {
    create?: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutExamenesInput
    connect?: CarreraWhereUniqueInput
  }

  export type FacultadCreateNestedOneWithoutExamenesInput = {
    create?: XOR<FacultadCreateWithoutExamenesInput, FacultadUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutExamenesInput
    connect?: FacultadWhereUniqueInput
  }

  export type AulaCreateNestedOneWithoutExamenesInput = {
    create?: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: AulaCreateOrConnectWithoutExamenesInput
    connect?: AulaWhereUniqueInput
  }

  export type ExamenTotemCreateNestedOneWithoutExamenInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    connect?: ExamenTotemWhereUniqueInput
  }

  export type EstudianteExamenCreateNestedManyWithoutExamenInput = {
    create?: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput> | EstudianteExamenCreateWithoutExamenInput[] | EstudianteExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutExamenInput | EstudianteExamenCreateOrConnectWithoutExamenInput[]
    createMany?: EstudianteExamenCreateManyExamenInputEnvelope
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
  }

  export type ExamenTotemUncheckedCreateNestedOneWithoutExamenInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    connect?: ExamenTotemWhereUniqueInput
  }

  export type EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput = {
    create?: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput> | EstudianteExamenCreateWithoutExamenInput[] | EstudianteExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutExamenInput | EstudianteExamenCreateOrConnectWithoutExamenInput[]
    createMany?: EstudianteExamenCreateManyExamenInputEnvelope
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarreraUpdateOneRequiredWithoutExamenesNestedInput = {
    create?: XOR<CarreraCreateWithoutExamenesInput, CarreraUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutExamenesInput
    upsert?: CarreraUpsertWithoutExamenesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutExamenesInput, CarreraUpdateWithoutExamenesInput>, CarreraUncheckedUpdateWithoutExamenesInput>
  }

  export type FacultadUpdateOneRequiredWithoutExamenesNestedInput = {
    create?: XOR<FacultadCreateWithoutExamenesInput, FacultadUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutExamenesInput
    upsert?: FacultadUpsertWithoutExamenesInput
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutExamenesInput, FacultadUpdateWithoutExamenesInput>, FacultadUncheckedUpdateWithoutExamenesInput>
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

  export type ExamenTotemUpdateOneWithoutExamenNestedInput = {
    create?: XOR<ExamenTotemCreateWithoutExamenInput, ExamenTotemUncheckedCreateWithoutExamenInput>
    connectOrCreate?: ExamenTotemCreateOrConnectWithoutExamenInput
    upsert?: ExamenTotemUpsertWithoutExamenInput
    disconnect?: ExamenTotemWhereInput | boolean
    delete?: ExamenTotemWhereInput | boolean
    connect?: ExamenTotemWhereUniqueInput
    update?: XOR<XOR<ExamenTotemUpdateToOneWithWhereWithoutExamenInput, ExamenTotemUpdateWithoutExamenInput>, ExamenTotemUncheckedUpdateWithoutExamenInput>
  }

  export type EstudianteExamenUpdateManyWithoutExamenNestedInput = {
    create?: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput> | EstudianteExamenCreateWithoutExamenInput[] | EstudianteExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutExamenInput | EstudianteExamenCreateOrConnectWithoutExamenInput[]
    upsert?: EstudianteExamenUpsertWithWhereUniqueWithoutExamenInput | EstudianteExamenUpsertWithWhereUniqueWithoutExamenInput[]
    createMany?: EstudianteExamenCreateManyExamenInputEnvelope
    set?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    disconnect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    delete?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    update?: EstudianteExamenUpdateWithWhereUniqueWithoutExamenInput | EstudianteExamenUpdateWithWhereUniqueWithoutExamenInput[]
    updateMany?: EstudianteExamenUpdateManyWithWhereWithoutExamenInput | EstudianteExamenUpdateManyWithWhereWithoutExamenInput[]
    deleteMany?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
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

  export type EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput = {
    create?: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput> | EstudianteExamenCreateWithoutExamenInput[] | EstudianteExamenUncheckedCreateWithoutExamenInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutExamenInput | EstudianteExamenCreateOrConnectWithoutExamenInput[]
    upsert?: EstudianteExamenUpsertWithWhereUniqueWithoutExamenInput | EstudianteExamenUpsertWithWhereUniqueWithoutExamenInput[]
    createMany?: EstudianteExamenCreateManyExamenInputEnvelope
    set?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    disconnect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    delete?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    update?: EstudianteExamenUpdateWithWhereUniqueWithoutExamenInput | EstudianteExamenUpdateWithWhereUniqueWithoutExamenInput[]
    updateMany?: EstudianteExamenUpdateManyWithWhereWithoutExamenInput | EstudianteExamenUpdateManyWithWhereWithoutExamenInput[]
    deleteMany?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
  }

  export type EstudianteExamenCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput> | EstudianteExamenCreateWithoutEstudianteInput[] | EstudianteExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutEstudianteInput | EstudianteExamenCreateOrConnectWithoutEstudianteInput[]
    createMany?: EstudianteExamenCreateManyEstudianteInputEnvelope
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
  }

  export type EstudianteExamenUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput> | EstudianteExamenCreateWithoutEstudianteInput[] | EstudianteExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutEstudianteInput | EstudianteExamenCreateOrConnectWithoutEstudianteInput[]
    createMany?: EstudianteExamenCreateManyEstudianteInputEnvelope
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
  }

  export type EstudianteExamenUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput> | EstudianteExamenCreateWithoutEstudianteInput[] | EstudianteExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutEstudianteInput | EstudianteExamenCreateOrConnectWithoutEstudianteInput[]
    upsert?: EstudianteExamenUpsertWithWhereUniqueWithoutEstudianteInput | EstudianteExamenUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: EstudianteExamenCreateManyEstudianteInputEnvelope
    set?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    disconnect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    delete?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    update?: EstudianteExamenUpdateWithWhereUniqueWithoutEstudianteInput | EstudianteExamenUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: EstudianteExamenUpdateManyWithWhereWithoutEstudianteInput | EstudianteExamenUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
  }

  export type EstudianteExamenUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput> | EstudianteExamenCreateWithoutEstudianteInput[] | EstudianteExamenUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteExamenCreateOrConnectWithoutEstudianteInput | EstudianteExamenCreateOrConnectWithoutEstudianteInput[]
    upsert?: EstudianteExamenUpsertWithWhereUniqueWithoutEstudianteInput | EstudianteExamenUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: EstudianteExamenCreateManyEstudianteInputEnvelope
    set?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    disconnect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    delete?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    connect?: EstudianteExamenWhereUniqueInput | EstudianteExamenWhereUniqueInput[]
    update?: EstudianteExamenUpdateWithWhereUniqueWithoutEstudianteInput | EstudianteExamenUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: EstudianteExamenUpdateManyWithWhereWithoutEstudianteInput | EstudianteExamenUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
  }

  export type ExamenCreateNestedManyWithoutAulaInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type OcupacionAulaCreateNestedManyWithoutAulaInput = {
    create?: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput> | OcupacionAulaCreateWithoutAulaInput[] | OcupacionAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: OcupacionAulaCreateOrConnectWithoutAulaInput | OcupacionAulaCreateOrConnectWithoutAulaInput[]
    createMany?: OcupacionAulaCreateManyAulaInputEnvelope
    connect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
  }

  export type ExamenUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput> | ExamenCreateWithoutAulaInput[] | ExamenUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ExamenCreateOrConnectWithoutAulaInput | ExamenCreateOrConnectWithoutAulaInput[]
    createMany?: ExamenCreateManyAulaInputEnvelope
    connect?: ExamenWhereUniqueInput | ExamenWhereUniqueInput[]
  }

  export type OcupacionAulaUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput> | OcupacionAulaCreateWithoutAulaInput[] | OcupacionAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: OcupacionAulaCreateOrConnectWithoutAulaInput | OcupacionAulaCreateOrConnectWithoutAulaInput[]
    createMany?: OcupacionAulaCreateManyAulaInputEnvelope
    connect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
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

  export type OcupacionAulaUpdateManyWithoutAulaNestedInput = {
    create?: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput> | OcupacionAulaCreateWithoutAulaInput[] | OcupacionAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: OcupacionAulaCreateOrConnectWithoutAulaInput | OcupacionAulaCreateOrConnectWithoutAulaInput[]
    upsert?: OcupacionAulaUpsertWithWhereUniqueWithoutAulaInput | OcupacionAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: OcupacionAulaCreateManyAulaInputEnvelope
    set?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    disconnect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    delete?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    connect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    update?: OcupacionAulaUpdateWithWhereUniqueWithoutAulaInput | OcupacionAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: OcupacionAulaUpdateManyWithWhereWithoutAulaInput | OcupacionAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: OcupacionAulaScalarWhereInput | OcupacionAulaScalarWhereInput[]
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

  export type OcupacionAulaUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput> | OcupacionAulaCreateWithoutAulaInput[] | OcupacionAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: OcupacionAulaCreateOrConnectWithoutAulaInput | OcupacionAulaCreateOrConnectWithoutAulaInput[]
    upsert?: OcupacionAulaUpsertWithWhereUniqueWithoutAulaInput | OcupacionAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: OcupacionAulaCreateManyAulaInputEnvelope
    set?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    disconnect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    delete?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    connect?: OcupacionAulaWhereUniqueInput | OcupacionAulaWhereUniqueInput[]
    update?: OcupacionAulaUpdateWithWhereUniqueWithoutAulaInput | OcupacionAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: OcupacionAulaUpdateManyWithWhereWithoutAulaInput | OcupacionAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: OcupacionAulaScalarWhereInput | OcupacionAulaScalarWhereInput[]
  }

  export type AulaCreateNestedOneWithoutOcupacionesInput = {
    create?: XOR<AulaCreateWithoutOcupacionesInput, AulaUncheckedCreateWithoutOcupacionesInput>
    connectOrCreate?: AulaCreateOrConnectWithoutOcupacionesInput
    connect?: AulaWhereUniqueInput
  }

  export type AulaUpdateOneRequiredWithoutOcupacionesNestedInput = {
    create?: XOR<AulaCreateWithoutOcupacionesInput, AulaUncheckedCreateWithoutOcupacionesInput>
    connectOrCreate?: AulaCreateOrConnectWithoutOcupacionesInput
    upsert?: AulaUpsertWithoutOcupacionesInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutOcupacionesInput, AulaUpdateWithoutOcupacionesInput>, AulaUncheckedUpdateWithoutOcupacionesInput>
  }

  export type ExamenCreateNestedOneWithoutEstudianteExamenesInput = {
    create?: XOR<ExamenCreateWithoutEstudianteExamenesInput, ExamenUncheckedCreateWithoutEstudianteExamenesInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutEstudianteExamenesInput
    connect?: ExamenWhereUniqueInput
  }

  export type EstudianteCreateNestedOneWithoutExamenesInput = {
    create?: XOR<EstudianteCreateWithoutExamenesInput, EstudianteUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutExamenesInput
    connect?: EstudianteWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ExamenUpdateOneRequiredWithoutEstudianteExamenesNestedInput = {
    create?: XOR<ExamenCreateWithoutEstudianteExamenesInput, ExamenUncheckedCreateWithoutEstudianteExamenesInput>
    connectOrCreate?: ExamenCreateOrConnectWithoutEstudianteExamenesInput
    upsert?: ExamenUpsertWithoutEstudianteExamenesInput
    connect?: ExamenWhereUniqueInput
    update?: XOR<XOR<ExamenUpdateToOneWithWhereWithoutEstudianteExamenesInput, ExamenUpdateWithoutEstudianteExamenesInput>, ExamenUncheckedUpdateWithoutEstudianteExamenesInput>
  }

  export type EstudianteUpdateOneRequiredWithoutExamenesNestedInput = {
    create?: XOR<EstudianteCreateWithoutExamenesInput, EstudianteUncheckedCreateWithoutExamenesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutExamenesInput
    upsert?: EstudianteUpsertWithoutExamenesInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutExamenesInput, EstudianteUpdateWithoutExamenesInput>, EstudianteUncheckedUpdateWithoutExamenesInput>
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

  export type ExamenCreateWithoutFacultadInput = {
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenCreateNestedManyWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutFacultadInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutFacultadInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput>
  }

  export type ExamenCreateManyFacultadInputEnvelope = {
    data: ExamenCreateManyFacultadInput | ExamenCreateManyFacultadInput[]
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

  export type ExamenUpsertWithWhereUniqueWithoutFacultadInput = {
    where: ExamenWhereUniqueInput
    update: XOR<ExamenUpdateWithoutFacultadInput, ExamenUncheckedUpdateWithoutFacultadInput>
    create: XOR<ExamenCreateWithoutFacultadInput, ExamenUncheckedCreateWithoutFacultadInput>
  }

  export type ExamenUpdateWithWhereUniqueWithoutFacultadInput = {
    where: ExamenWhereUniqueInput
    data: XOR<ExamenUpdateWithoutFacultadInput, ExamenUncheckedUpdateWithoutFacultadInput>
  }

  export type ExamenUpdateManyWithWhereWithoutFacultadInput = {
    where: ExamenScalarWhereInput
    data: XOR<ExamenUpdateManyMutationInput, ExamenUncheckedUpdateManyWithoutFacultadInput>
  }

  export type ExamenScalarWhereInput = {
    AND?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
    OR?: ExamenScalarWhereInput[]
    NOT?: ExamenScalarWhereInput | ExamenScalarWhereInput[]
    id?: IntFilter<"Examen"> | number
    carreraId?: IntFilter<"Examen"> | number
    facultadId?: IntFilter<"Examen"> | number
    aulaId?: IntNullableFilter<"Examen"> | number | null
    materia_codigo?: StringFilter<"Examen"> | string
    nombreMateria?: StringFilter<"Examen"> | string
    areatema?: StringNullableFilter<"Examen"> | string | null
    fecha?: DateTimeFilter<"Examen"> | Date | string
    hora?: DateTimeNullableFilter<"Examen"> | Date | string | null
    tipoExamen?: StringNullableFilter<"Examen"> | string | null
    modalidadExamen?: StringNullableFilter<"Examen"> | string | null
    catedra?: StringNullableFilter<"Examen"> | string | null
    docente?: StringNullableFilter<"Examen"> | string | null
    monitoreo?: StringNullableFilter<"Examen"> | string | null
    control_cargo?: StringNullableFilter<"Examen"> | string | null
    materialPermitido?: StringNullableFilter<"Examen"> | string | null
    observaciones?: StringNullableFilter<"Examen"> | string | null
    observaciones_adicionales?: StringNullableFilter<"Examen"> | string | null
    url?: StringNullableFilter<"Examen"> | string | null
    acta_numero?: StringNullableFilter<"Examen"> | string | null
    cantidadInscriptos?: IntNullableFilter<"Examen"> | number | null
    fechaUltConsulta?: DateTimeNullableFilter<"Examen"> | Date | string | null
    requierePc?: BoolFilter<"Examen"> | boolean
    activo?: BoolFilter<"Examen"> | boolean
    createdAt?: DateTimeFilter<"Examen"> | Date | string
    updatedAt?: DateTimeFilter<"Examen"> | Date | string
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

  export type FacultadCreateWithoutCarrerasInput = {
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutCarrerasInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenUncheckedCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
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
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultad: FacultadCreateNestedOneWithoutExamenesInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenCreateNestedManyWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutCarreraInput = {
    id?: number
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput
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
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutCarrerasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUncheckedUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
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

  export type FacultadCreateWithoutExamenesInput = {
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutExamenesInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    sectores?: SectorFacultadUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutExamenesInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutExamenesInput, FacultadUncheckedCreateWithoutExamenesInput>
  }

  export type AulaCreateWithoutExamenesInput = {
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupaciones?: OcupacionAulaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutExamenesInput = {
    id?: number
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupaciones?: OcupacionAulaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutExamenesInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutExamenesInput, AulaUncheckedCreateWithoutExamenesInput>
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

  export type EstudianteExamenCreateWithoutExamenInput = {
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estudiante: EstudianteCreateNestedOneWithoutExamenesInput
  }

  export type EstudianteExamenUncheckedCreateWithoutExamenInput = {
    id?: number
    dni: string
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenCreateOrConnectWithoutExamenInput = {
    where: EstudianteExamenWhereUniqueInput
    create: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput>
  }

  export type EstudianteExamenCreateManyExamenInputEnvelope = {
    data: EstudianteExamenCreateManyExamenInput | EstudianteExamenCreateManyExamenInput[]
    skipDuplicates?: boolean
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

  export type FacultadUpsertWithoutExamenesInput = {
    update: XOR<FacultadUpdateWithoutExamenesInput, FacultadUncheckedUpdateWithoutExamenesInput>
    create: XOR<FacultadCreateWithoutExamenesInput, FacultadUncheckedCreateWithoutExamenesInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutExamenesInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutExamenesInput, FacultadUncheckedUpdateWithoutExamenesInput>
  }

  export type FacultadUpdateWithoutExamenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutExamenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    sectores?: SectorFacultadUncheckedUpdateManyWithoutFacultadNestedInput
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
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupaciones?: OcupacionAulaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutExamenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupaciones?: OcupacionAulaUncheckedUpdateManyWithoutAulaNestedInput
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

  export type EstudianteExamenUpsertWithWhereUniqueWithoutExamenInput = {
    where: EstudianteExamenWhereUniqueInput
    update: XOR<EstudianteExamenUpdateWithoutExamenInput, EstudianteExamenUncheckedUpdateWithoutExamenInput>
    create: XOR<EstudianteExamenCreateWithoutExamenInput, EstudianteExamenUncheckedCreateWithoutExamenInput>
  }

  export type EstudianteExamenUpdateWithWhereUniqueWithoutExamenInput = {
    where: EstudianteExamenWhereUniqueInput
    data: XOR<EstudianteExamenUpdateWithoutExamenInput, EstudianteExamenUncheckedUpdateWithoutExamenInput>
  }

  export type EstudianteExamenUpdateManyWithWhereWithoutExamenInput = {
    where: EstudianteExamenScalarWhereInput
    data: XOR<EstudianteExamenUpdateManyMutationInput, EstudianteExamenUncheckedUpdateManyWithoutExamenInput>
  }

  export type EstudianteExamenScalarWhereInput = {
    AND?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
    OR?: EstudianteExamenScalarWhereInput[]
    NOT?: EstudianteExamenScalarWhereInput | EstudianteExamenScalarWhereInput[]
    id?: IntFilter<"EstudianteExamen"> | number
    examen_id?: IntFilter<"EstudianteExamen"> | number
    dni?: StringFilter<"EstudianteExamen"> | string
    asistencia?: BoolFilter<"EstudianteExamen"> | boolean
    aprobado?: BoolFilter<"EstudianteExamen"> | boolean
    nota?: DecimalNullableFilter<"EstudianteExamen"> | Decimal | DecimalJsLike | number | string | null
    observaciones?: StringNullableFilter<"EstudianteExamen"> | string | null
    createdAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
    updatedAt?: DateTimeFilter<"EstudianteExamen"> | Date | string
  }

  export type EstudianteExamenCreateWithoutEstudianteInput = {
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    examen: ExamenCreateNestedOneWithoutEstudianteExamenesInput
  }

  export type EstudianteExamenUncheckedCreateWithoutEstudianteInput = {
    id?: number
    examen_id: number
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenCreateOrConnectWithoutEstudianteInput = {
    where: EstudianteExamenWhereUniqueInput
    create: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput>
  }

  export type EstudianteExamenCreateManyEstudianteInputEnvelope = {
    data: EstudianteExamenCreateManyEstudianteInput | EstudianteExamenCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteExamenUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: EstudianteExamenWhereUniqueInput
    update: XOR<EstudianteExamenUpdateWithoutEstudianteInput, EstudianteExamenUncheckedUpdateWithoutEstudianteInput>
    create: XOR<EstudianteExamenCreateWithoutEstudianteInput, EstudianteExamenUncheckedCreateWithoutEstudianteInput>
  }

  export type EstudianteExamenUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: EstudianteExamenWhereUniqueInput
    data: XOR<EstudianteExamenUpdateWithoutEstudianteInput, EstudianteExamenUncheckedUpdateWithoutEstudianteInput>
  }

  export type EstudianteExamenUpdateManyWithWhereWithoutEstudianteInput = {
    where: EstudianteExamenScalarWhereInput
    data: XOR<EstudianteExamenUpdateManyMutationInput, EstudianteExamenUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type ExamenCreateWithoutAulaInput = {
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    facultad: FacultadCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenCreateNestedManyWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutAulaInput = {
    id?: number
    carreraId: number
    facultadId: number
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
    estudianteExamenes?: EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutAulaInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutAulaInput, ExamenUncheckedCreateWithoutAulaInput>
  }

  export type ExamenCreateManyAulaInputEnvelope = {
    data: ExamenCreateManyAulaInput | ExamenCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type OcupacionAulaCreateWithoutAulaInput = {
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OcupacionAulaUncheckedCreateWithoutAulaInput = {
    id?: number
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OcupacionAulaCreateOrConnectWithoutAulaInput = {
    where: OcupacionAulaWhereUniqueInput
    create: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput>
  }

  export type OcupacionAulaCreateManyAulaInputEnvelope = {
    data: OcupacionAulaCreateManyAulaInput | OcupacionAulaCreateManyAulaInput[]
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

  export type OcupacionAulaUpsertWithWhereUniqueWithoutAulaInput = {
    where: OcupacionAulaWhereUniqueInput
    update: XOR<OcupacionAulaUpdateWithoutAulaInput, OcupacionAulaUncheckedUpdateWithoutAulaInput>
    create: XOR<OcupacionAulaCreateWithoutAulaInput, OcupacionAulaUncheckedCreateWithoutAulaInput>
  }

  export type OcupacionAulaUpdateWithWhereUniqueWithoutAulaInput = {
    where: OcupacionAulaWhereUniqueInput
    data: XOR<OcupacionAulaUpdateWithoutAulaInput, OcupacionAulaUncheckedUpdateWithoutAulaInput>
  }

  export type OcupacionAulaUpdateManyWithWhereWithoutAulaInput = {
    where: OcupacionAulaScalarWhereInput
    data: XOR<OcupacionAulaUpdateManyMutationInput, OcupacionAulaUncheckedUpdateManyWithoutAulaInput>
  }

  export type OcupacionAulaScalarWhereInput = {
    AND?: OcupacionAulaScalarWhereInput | OcupacionAulaScalarWhereInput[]
    OR?: OcupacionAulaScalarWhereInput[]
    NOT?: OcupacionAulaScalarWhereInput | OcupacionAulaScalarWhereInput[]
    id?: IntFilter<"OcupacionAula"> | number
    aula_id?: IntFilter<"OcupacionAula"> | number
    fecha?: DateTimeFilter<"OcupacionAula"> | Date | string
    hora?: StringFilter<"OcupacionAula"> | string
    utilizados?: IntFilter<"OcupacionAula"> | number
    capacidad_teorica?: IntFilter<"OcupacionAula"> | number
    observaciones?: StringNullableFilter<"OcupacionAula"> | string | null
    createdAt?: DateTimeFilter<"OcupacionAula"> | Date | string
    updatedAt?: DateTimeFilter<"OcupacionAula"> | Date | string
  }

  export type AulaCreateWithoutOcupacionesInput = {
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutOcupacionesInput = {
    id?: number
    nombre: string
    sede: string
    capacidad: number
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenes?: ExamenUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutOcupacionesInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutOcupacionesInput, AulaUncheckedCreateWithoutOcupacionesInput>
  }

  export type AulaUpsertWithoutOcupacionesInput = {
    update: XOR<AulaUpdateWithoutOcupacionesInput, AulaUncheckedUpdateWithoutOcupacionesInput>
    create: XOR<AulaCreateWithoutOcupacionesInput, AulaUncheckedCreateWithoutOcupacionesInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutOcupacionesInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutOcupacionesInput, AulaUncheckedUpdateWithoutOcupacionesInput>
  }

  export type AulaUpdateWithoutOcupacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutOcupacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    sede?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenes?: ExamenUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type ExamenCreateWithoutEstudianteExamenesInput = {
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    facultad: FacultadCreateNestedOneWithoutExamenesInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    examenTotem?: ExamenTotemCreateNestedOneWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutEstudianteExamenesInput = {
    id?: number
    carreraId: number
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examenTotem?: ExamenTotemUncheckedCreateNestedOneWithoutExamenInput
  }

  export type ExamenCreateOrConnectWithoutEstudianteExamenesInput = {
    where: ExamenWhereUniqueInput
    create: XOR<ExamenCreateWithoutEstudianteExamenesInput, ExamenUncheckedCreateWithoutEstudianteExamenesInput>
  }

  export type EstudianteCreateWithoutExamenesInput = {
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteUncheckedCreateWithoutExamenesInput = {
    dni: string
    nombre: string
    apellido: string
    email?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteCreateOrConnectWithoutExamenesInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutExamenesInput, EstudianteUncheckedCreateWithoutExamenesInput>
  }

  export type ExamenUpsertWithoutEstudianteExamenesInput = {
    update: XOR<ExamenUpdateWithoutEstudianteExamenesInput, ExamenUncheckedUpdateWithoutEstudianteExamenesInput>
    create: XOR<ExamenCreateWithoutEstudianteExamenesInput, ExamenUncheckedCreateWithoutEstudianteExamenesInput>
    where?: ExamenWhereInput
  }

  export type ExamenUpdateToOneWithWhereWithoutEstudianteExamenesInput = {
    where?: ExamenWhereInput
    data: XOR<ExamenUpdateWithoutEstudianteExamenesInput, ExamenUncheckedUpdateWithoutEstudianteExamenesInput>
  }

  export type ExamenUpdateWithoutEstudianteExamenesInput = {
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    facultad?: FacultadUpdateOneRequiredWithoutExamenesNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutEstudianteExamenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
  }

  export type EstudianteUpsertWithoutExamenesInput = {
    update: XOR<EstudianteUpdateWithoutExamenesInput, EstudianteUncheckedUpdateWithoutExamenesInput>
    create: XOR<EstudianteCreateWithoutExamenesInput, EstudianteUncheckedCreateWithoutExamenesInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutExamenesInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutExamenesInput, EstudianteUncheckedUpdateWithoutExamenesInput>
  }

  export type EstudianteUpdateWithoutExamenesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteUncheckedUpdateWithoutExamenesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultadCreateWithoutSectoresInput = {
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
    examenes?: ExamenCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutSectoresInput = {
    id?: number
    nombre: string
    codigo?: string | null
    sheetId?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
    examenes?: ExamenUncheckedCreateNestedManyWithoutFacultadInput
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
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
    examenes?: ExamenUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutSectoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
    examenes?: ExamenUncheckedUpdateManyWithoutFacultadNestedInput
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
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    carrera: CarreraCreateNestedOneWithoutExamenesInput
    facultad: FacultadCreateNestedOneWithoutExamenesInput
    aula?: AulaCreateNestedOneWithoutExamenesInput
    estudianteExamenes?: EstudianteExamenCreateNestedManyWithoutExamenInput
  }

  export type ExamenUncheckedCreateWithoutExamenTotemInput = {
    id?: number
    carreraId: number
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    estudianteExamenes?: EstudianteExamenUncheckedCreateNestedManyWithoutExamenInput
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
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    facultad?: FacultadUpdateOneRequiredWithoutExamenesNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    estudianteExamenes?: EstudianteExamenUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutExamenTotemInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteExamenes?: EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type CarreraCreateManyFacultadInput = {
    id?: number
    nombre: string
    codigo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenCreateManyFacultadInput = {
    id?: number
    carreraId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
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

  export type ExamenUpdateWithoutFacultadInput = {
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
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
    facultadId: number
    aulaId?: number | null
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultad?: FacultadUpdateOneRequiredWithoutExamenesNestedInput
    aula?: AulaUpdateOneWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    aulaId?: NullableIntFieldUpdateOperationsInput | number | null
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenCreateManyExamenInput = {
    id?: number
    dni: string
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenUpdateWithoutExamenInput = {
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutExamenesNestedInput
  }

  export type EstudianteExamenUncheckedUpdateWithoutExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenUncheckedUpdateManyWithoutExamenInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenCreateManyEstudianteInput = {
    id?: number
    examen_id: number
    asistencia?: boolean
    aprobado?: boolean
    nota?: Decimal | DecimalJsLike | number | string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstudianteExamenUpdateWithoutEstudianteInput = {
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examen?: ExamenUpdateOneRequiredWithoutEstudianteExamenesNestedInput
  }

  export type EstudianteExamenUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    examen_id?: IntFieldUpdateOperationsInput | number
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteExamenUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    examen_id?: IntFieldUpdateOperationsInput | number
    asistencia?: BoolFieldUpdateOperationsInput | boolean
    aprobado?: BoolFieldUpdateOperationsInput | boolean
    nota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamenCreateManyAulaInput = {
    id?: number
    carreraId: number
    facultadId: number
    materia_codigo: string
    nombreMateria: string
    areatema?: string | null
    fecha: Date | string
    hora?: Date | string | null
    tipoExamen?: string | null
    modalidadExamen?: string | null
    catedra?: string | null
    docente?: string | null
    monitoreo?: string | null
    control_cargo?: string | null
    materialPermitido?: string | null
    observaciones?: string | null
    observaciones_adicionales?: string | null
    url?: string | null
    acta_numero?: string | null
    cantidadInscriptos?: number | null
    fechaUltConsulta?: Date | string | null
    requierePc?: boolean
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OcupacionAulaCreateManyAulaInput = {
    id?: number
    fecha: Date | string
    hora: string
    utilizados?: number
    capacidad_teorica: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamenUpdateWithoutAulaInput = {
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera?: CarreraUpdateOneRequiredWithoutExamenesNestedInput
    facultad?: FacultadUpdateOneRequiredWithoutExamenesNestedInput
    examenTotem?: ExamenTotemUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examenTotem?: ExamenTotemUncheckedUpdateOneWithoutExamenNestedInput
    estudianteExamenes?: EstudianteExamenUncheckedUpdateManyWithoutExamenNestedInput
  }

  export type ExamenUncheckedUpdateManyWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    facultadId?: IntFieldUpdateOperationsInput | number
    materia_codigo?: StringFieldUpdateOperationsInput | string
    nombreMateria?: StringFieldUpdateOperationsInput | string
    areatema?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoExamen?: NullableStringFieldUpdateOperationsInput | string | null
    modalidadExamen?: NullableStringFieldUpdateOperationsInput | string | null
    catedra?: NullableStringFieldUpdateOperationsInput | string | null
    docente?: NullableStringFieldUpdateOperationsInput | string | null
    monitoreo?: NullableStringFieldUpdateOperationsInput | string | null
    control_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    materialPermitido?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones_adicionales?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    acta_numero?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadInscriptos?: NullableIntFieldUpdateOperationsInput | number | null
    fechaUltConsulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requierePc?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaUpdateWithoutAulaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaUncheckedUpdateWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OcupacionAulaUncheckedUpdateManyWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    utilizados?: IntFieldUpdateOperationsInput | number
    capacidad_teorica?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
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
  export const dmmf: runtime.BaseDMMF
}