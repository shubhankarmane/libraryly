
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.29.1
 * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
 */
Prisma.prismaVersion = {
  client: "2.29.1",
  engine: "1be4cd60b89afa04b192acb1ef47758a39810f3a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AuthorsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BooksScalarFieldEnum = makeEnum({
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
});

exports.Prisma.CustomersScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  lastPaymentDate: 'lastPaymentDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GenresScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RentalsScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  customerId: 'customerId',
  statusId: 'statusId',
  dateRented: 'dateRented',
  dateReturned: 'dateReturned',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.StatusesScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  userName: 'userName',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  authors: 'authors',
  books: 'books',
  customers: 'customers',
  genres: 'genres',
  rentals: 'rentals',
  statuses: 'statuses',
  users: 'users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
